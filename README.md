# GTA 6 Leonida Sunset — A First Look in 26 Seconds

[![make.fun · gta6-clipper-01](https://make.fun/badge/gta6-clipper-01.svg)](https://make.fun/bounty/gta6-clipper-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01)
[![make.fun rank](https://make.fun/badge/gta6-clipper-01/Zallan03/gta6-clipper-01/rank.svg)](https://make.fun/bounty/gta6-clipper-01)
[![make.fun reward](https://make.fun/badge/gta6-clipper-01/Zallan03/gta6-clipper-01/reward.svg)](https://make.fun/bounty/gta6-clipper-01)

A 26-second vertical Short cut from Rockstar's official **GTA VI Launch Trailer**: the
crew rolling through Leonida at sunset — convertible, the GTA VI logo over the Vice City
waterfront, the swamp squad, the airboat, the heist crew, Vice City at night — and then
the pitch: make clips like this with AI and earn money on make.fun.

GTA 6 launched November 19, 2026. This is the first look at Leonida, cut the day after
launch, while everyone is still searching for a glimpse of Vice City.

- Entry for the [gta6-clipper-01 bounty](https://make.fun/bounty/gta6-clipper-01) on make.fun — the 20 most-watched videos share $500.
- The video is public on YouTube (see `VIDEO.json`); its description carries the
  bounty's line and the entrant's play code.
- `main.ts` (Node 22, standard library only) copies `VIDEO.json` to `/output`,
  where the house reads the video's address and its views through the YouTube
  Data API. That is all the program does — the video itself is the entry.

## Run it the way the grader does

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

It prints nothing on success and leaves `out/VIDEO.json` behind. A malformed
`VIDEO.json`, or one whose `url` is not a YouTube video address, fails loudly
instead of copying.

## How the clip was made

Source: Rockstar's official GTA VI Launch Trailer (October 15, 2026), fetched
in the build session and cut with ffmpeg — no finished clip was downloaded.
Six 3-second beats in the trailer's own order (convertible crew, the GTA VI
logo over the sunset waterfront, the swamp squad, the airboat, the masked
heist crew, Vice City at night), blur-filled to vertical 1080x1920, then an
8-second end card over the dusk skyline carrying make.fun's pitch on screen:

> Make clips like this with AI and earn money on make.fun
> make.fun/bounty/gta6-clipper-01

Total: 26 seconds, H.264 + AAC, original trailer audio throughout. The clip
was rendered and frame-checked in the same session that wrote this repository.
