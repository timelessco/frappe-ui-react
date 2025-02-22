#!/usr/bin/env node
import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { $ } from "execa";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Run cspell command and get output
const { stdout } = await $({
	reject: false,
})`cspell --words-only --unique --gitignore --cache --dot **/*`;

const newWords = stdout
	.trim()
	.split("\n")
	.sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));

// Read existing cspell.json
const cspellPath = path.join(__dirname, "..", "cspell.json");
const cspellContent = JSON.parse(await fs.readFile(cspellPath, "utf8"));

// Merge existing and new words, remove duplicates
const allWords = [
	...new Set([...(cspellContent.words || []), ...newWords]),
].sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));

// Update cspell.json
cspellContent.words = allWords;

// Write back with pretty formatting
await fs.writeFile(
	cspellPath,
	`${JSON.stringify(cspellContent, undefined, "\t")}\n`,
);
