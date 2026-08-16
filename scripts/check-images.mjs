// Scanne public/images et génère la liste des fichiers réellement présents,
// afin que HotelImage sache quand afficher une vraie photo ou un placeholder.
// Relancer ce script (npm run check:images) après avoir ajouté de vraies photos.
import { readdirSync, writeFileSync, mkdirSync, existsSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const imagesDir = join(__dirname, "..", "public", "images");
const outFile = join(__dirname, "..", "src", "lib", "available-images.generated.ts");

let files = [];
if (existsSync(imagesDir)) {
  files = readdirSync(imagesDir).filter((f) => /\.(webp|jpg|jpeg|png)$/i.test(f));
}

mkdirSync(dirname(outFile), { recursive: true });

const content = `// Fichier généré par scripts/check-images.mjs — ne pas éditer à la main.
export const availableImages: ReadonlySet<string> = new Set(${JSON.stringify(files, null, 2)});
`;

writeFileSync(outFile, content, "utf8");
console.log(`check-images: ${files.length} photo(s) détectée(s) dans public/images.`);
