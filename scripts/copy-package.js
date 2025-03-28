import { readFileSync, writeFileSync, existsSync, mkdirSync } from "fs";
import { fileURLToPath } from "url";
import { dirname, resolve } from "path";

// Obtener __dirname en ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Leer el package.json original
const packageJsonPath = resolve(__dirname, "../package.json");
const packageJson = JSON.parse(readFileSync(packageJsonPath, "utf8"));

// Definir las claves necesarias para el package.json de la librería
const newPackageJson = {
  name: packageJson.name,
  version: packageJson.version,
  description: packageJson.description || "",
  main: packageJson.main,
  module: "index.js",
  type: packageJson.type,
  files: ["index.js", "components/"],
  author: packageJson.author || "",
  license: packageJson.license || "MIT",
};

// Crear la carpeta dist si no existe
const distPath = resolve(__dirname, "../dist");
if (!existsSync(distPath)) {
  mkdirSync(distPath);
}

// Guardar el nuevo package.json en la carpeta dist/
const newPackageJsonPath = resolve(distPath, "package.json");
writeFileSync(newPackageJsonPath, JSON.stringify(newPackageJson, null, 2));
