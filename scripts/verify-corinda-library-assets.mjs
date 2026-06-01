import { createHash } from "node:crypto";
import { existsSync, readFileSync, readdirSync, statSync } from "node:fs";
import { join } from "node:path";

const repoRoot = new URL("..", import.meta.url).pathname.replace(/\/$/, "");
const attachedDir = join(repoRoot, "attached_assets");
const publicPdfDir = join(repoRoot, "artifacts/corinda/public/pdfs");
const dataFile = join(repoRoot, "artifacts/corinda/src/lib/data.ts");

const requestedUploads = [
  "3 | Spy The Lie.pdf",
  "ANNEMANN | Practical Mental Magic.pdf",
  "BANDLER | Trance-Formations.pdf",
  "BERNE | Games people play.pdf",
  "CIALDINI | Influence - The Psychology of Persuasion.pdf",
  "CIALDINI | Pre-Suasion.pdf",
  "Corinda.pdf",
  "EKMAN | Telling Lies.pdf",
  "FOER | Moonwalking with Einstein.pdf",
  "GREENE | The 48 Laws of Power.pdf",
  "HEUER | Psychology of intelligence analysis.pdf",
  "How to Win Friends and Influence People.pdf",
  "HUGHES | The Ellipsis Manual.pdf",
  "JOHNSTONE | Impro Improvisation and the Theatre.pdf",
  "Left of Bang.pdf",
  "Maria Konnikova - The Confidence Game_ Why We Fall for It . . . Every Time (Maria Konnikova) (z-library.sk, 1lib.sk, z-lib.sk).pdf",
  "Mastermind How to Think Like Sherlock Holmes (Maria Konnikova) (z-library.sk, 1lib.sk, z-lib.sk).pdf",
  "MAURER | The Big Con.pdf",
  "NAVARRO | What Every Body Is Saying.pdf",
  "Never Split the Difference.pdf",
  "O'BRIEN | You Can Have an Amazing Memory.pdf",
  "ORTIZ | Designing Miracles.pdf",
  "ORTIZ | Strong Magic.pdf",
  "PEASE | The Definitive Book Of Body Language.pdf",
  "ROSEN | My Voice Will Go with You.pdf",
  "ROWLAND | The Full Facts Book of Cold Reading.pdf",
  "SCHAFER | The Like Switch.pdf",
  "Sleights of mind.pdf",
  "The Laws of Human Nature.pdf",
  "Thinking, Fast and Slow.pdf",
  "WISEMAN | Deception Self-Deception.pdf",
];

const aliases = new Map([
  ["3_|_Spy_The_Lie_1780259949557.pdf", "3 | Spy The Lie.pdf"],
  ["ANNEMANN_|_Practical_Mental_Magic_1780256605033.pdf", "ANNEMANN | Practical Mental Magic.pdf"],
  ["CIALDINI_|_Influence_-_The_Psychology_of_Persuasion_1780256605033.pdf", "CIALDINI | Influence - The Psychology of Persuasion.pdf"],
  ["Corinda_1780256605035.pdf", "Corinda.pdf"],
  ["Corinda_1780257854725.pdf", "Corinda.pdf"],
  ["EKMAN_|_Telling_Lies_1780258143506.pdf", "EKMAN | Telling Lies.pdf"],
  ["NAVARRO_|_What_Every_Body_Is_Saying_1780256605034.pdf", "NAVARRO | What Every Body Is Saying.pdf"],
  ["PEASE_|_The_Definitive_Book_Of_Body_Language_1780256605034.pdf", "PEASE | The Definitive Book Of Body Language.pdf"],
  ["ROWLAND_|_The_Full_Facts_Book_of_Cold_Reading_1780258143510.pdf", "ROWLAND | The Full Facts Book of Cold Reading.pdf"],
  ["SCHAFER_|_The_Like_Switch_1780259955545.pdf", "SCHAFER | The Like Switch.pdf"],
]);

function listFiles(dir, extension) {
  if (!existsSync(dir)) return [];
  return readdirSync(dir)
    .filter(file => file.toLowerCase().endsWith(extension))
    .map(file => join(dir, file));
}

function hash(file) {
  return createHash("sha256").update(readFileSync(file)).digest("hex");
}

function fileName(file) {
  return file.split(/[\\/]/).pop();
}

const attachedPdfs = listFiles(attachedDir, ".pdf");
const publicPdfs = listFiles(publicPdfDir, ".pdf");
const publicHashes = new Map(publicPdfs.map(file => [hash(file), file]));
const dataSource = readFileSync(dataFile, "utf8");
const referencedPublicPdfs = [...dataSource.matchAll(/pdf:\s*"\/pdfs\/([^"]+\.pdf)"/g)].map(match => match[1]);

const attachedWithoutPublicCopy = attachedPdfs.filter(file => !publicHashes.has(hash(file)));
const publicWithoutBookCard = publicPdfs.filter(file => !referencedPublicPdfs.includes(fileName(file)));
const referencedMissingFiles = referencedPublicPdfs.filter(file => !existsSync(join(publicPdfDir, file)));

const uploadedRequestedNames = new Set(attachedPdfs.map(file => aliases.get(fileName(file)) ?? fileName(file)));
const missingRequestedUploads = requestedUploads.filter(file => !uploadedRequestedNames.has(file));

let hasFailure = false;

if (attachedWithoutPublicCopy.length) {
  hasFailure = true;
  console.error("Attached PDFs missing from artifacts/corinda/public/pdfs by content hash:");
  attachedWithoutPublicCopy.forEach(file => console.error(`- ${file}`));
}

if (publicWithoutBookCard.length) {
  hasFailure = true;
  console.error("Public PDFs missing from src/lib/data.ts book cards:");
  publicWithoutBookCard.forEach(file => console.error(`- ${file}`));
}

if (referencedMissingFiles.length) {
  hasFailure = true;
  console.error("Book cards reference missing public PDF files:");
  referencedMissingFiles.forEach(file => console.error(`- /pdfs/${file}`));
}

console.log(`Verified ${attachedPdfs.length} attached PDF file(s), ${publicPdfs.length} public PDF file(s), and ${referencedPublicPdfs.length} library book PDF reference(s).`);
console.log(`${new Set(attachedPdfs.map(hash)).size} unique attached PDF(s) are represented in the deployed public PDF folder.`);

if (missingRequestedUploads.length) {
  console.warn("Requested PDF names not found in the repository yet, so they cannot be embedded until uploaded:");
  missingRequestedUploads.forEach(file => console.warn(`- ${file}`));
}

const nonPdfRequestedUploads = ["google-chrome-stable_current_x86_64.rpm", "Large Paradise POV Better Things Are Coming, Baby!.png", "OG Paradise POV Better Things Are Coming, Baby!.png"];
const presentNonPdfAssets = nonPdfRequestedUploads.filter(file => existsSync(join(attachedDir, file.replaceAll(" ", "_"))) || existsSync(join(repoRoot, file)));
if (presentNonPdfAssets.length) {
  const totalBytes = presentNonPdfAssets.reduce((total, file) => total + statSync(join(repoRoot, file)).size, 0);
  console.log(`Found ${presentNonPdfAssets.length} non-PDF requested asset(s), ${totalBytes} bytes total.`);
}

if (hasFailure) process.exit(1);
