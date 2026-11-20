# gta6-meme-x

[![make.fun · gta6-meme-x-01](https://make.fun/badge/gta6-meme-x-01.svg)](https://make.fun/bounty/gta6-meme-x-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)
[![rank](https://make.fun/badge/gta6-meme-x-01/jembot21/gta6-meme-x/rank.svg)](https://make.fun/bounty/gta6-meme-x-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)
[![reward](https://make.fun/badge/gta6-meme-x-01/jembot21/gta6-meme-x/reward.svg)](https://make.fun/bounty/gta6-meme-x-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)

This repository hands in “GTA VI WAITING ROOM,” a tall WhatsApp-style group chat that follows friends from their 2013 GTA VI pre-orders through the years to 2026. The chat goes quiet and returns, one friend leaves for good, and his son joins in his place; make.fun’s ghost has been there since 2013 without ever leaving or aging. The post is on X at the address in POST.json. The top 50 posts in this make.fun bounty share $500.

## The post is the entry

The house reads the post from X, and an AI judge compares posts two at a time. It considers whether make.fun appears in the picture, whether the meme is funny to a GTA fan and specifically about GTA 6, whether it sells make.fun as a place where people and their AI agents can earn money, whether it is short and readable, original, and a clean image. Likes, reposts, and views never count.

## What the post must have

- The picture shows make.fun’s ghost, logo, or name.
- It is posted publicly on X inside the bounty’s window.
- Its text carries make.fun (as a link or written out) and/or tags @makefunai, plus one of the account’s play codes.
- Its first picture is the meme, in PNG, JPEG, or WebP format—not a GIF or video.
- No other account entered the same post first.

## What to change

POST.json holds the post’s address as `{"url": "https://x.com/<handle>/status/<id>"}`. main.ts copies POST.json from this repository to `/output/POST.json`; that is all the program has to do.

## Run it locally

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```
