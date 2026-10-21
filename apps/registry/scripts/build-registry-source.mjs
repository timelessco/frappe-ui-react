// Inlines the registry sources into a JSON module so the `/registry/[name]`
// route handler never touches the filesystem at request time. Workers have no
// `fs`, and a bundled map also removes the need for Next to trace the source
// files into the standalone output.
import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";

const root = path.resolve(import.meta.dirname, "..");
const registry = JSON.parse(
	await readFile(path.join(root, "registry.json"), "utf8"),
);

const paths = [
	...new Set(
		registry.items.flatMap((item) => (item.files ?? []).map((file) => file.path)),
	),
].sort();

const sources = {};
for (const filePath of paths) {
	sources[filePath] = await readFile(path.join(root, filePath), "utf8");
}

const target = path.join(root, "lib", "registry-source.generated.json");
await mkdir(path.dirname(target), { recursive: true });
await writeFile(target, `${JSON.stringify(sources, null, "\t")}\n`);

console.log(
	`registry source: ${paths.length} files -> ${path.relative(root, target)}`,
);
