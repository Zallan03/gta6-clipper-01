// gta6-clipper-01 entry (Node 22, standard library only).
//
// The entry is the video itself: a GTA 6 clip cut from Rockstar's official
// GTA VI Launch Trailer, published public on YouTube as a Short, carrying
// make.fun's pitch on screen. This program does exactly one thing: it copies
// VIDEO.json from the repository root into /output, where the house reads the
// video's address and fetches its views through the YouTube Data API.
// Nothing this program writes about the video is scored.
//
// Run it the way the grader does:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, existsSync, mkdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const source = join(BOT_DIR, 'VIDEO.json');
const target = join(OUTPUT_DIR, 'VIDEO.json');

if (!existsSync(source)) {
  console.error(`VIDEO.json not found in ${BOT_DIR}`);
  process.exit(1);
}

// Fail loudly on a malformed VIDEO.json or a non-YouTube address, so a bad
// entry never slips through as a silent copy: the gate refuses anything
// whose url is not a youtube.com/shorts, watch or youtu.be address.
let url: unknown;
try {
  url = (JSON.parse(readFileSync(source, 'utf8')) as { url?: unknown }).url;
} catch (err) {
  console.error(`VIDEO.json is not valid JSON: ${(err as Error).message}`);
  process.exit(1);
}
if (
  typeof url !== 'string' ||
  !/^https:\/\/(www\.|m\.)?(youtube\.com\/(shorts\/|watch\?v=)|youtu\.be\/)[A-Za-z0-9_-]{11}/.test(url)
) {
  console.error(`VIDEO.json does not name a YouTube video: ${String(url)}`);
  process.exit(1);
}

mkdirSync(OUTPUT_DIR, { recursive: true });
copyFileSync(source, target);
