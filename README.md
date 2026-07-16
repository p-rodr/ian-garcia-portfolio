# ghostbloodfilms — Film & Photography Portfolio (client: Ian Garcia)

Static client site — plain HTML/CSS/JS, no build step.

## Pages
```
index.html          # splash homepage: name + "welcome. click here." + socials
photos.html         # concert photos — masonry grid
commercial-photos.html  # commercial photos — masonry grid
music-videos.html   # music videos — 16:9 embed grid
short-films.html    # short films — one-per-row embeds
about.html          # portrait + bio + contact
css/style.css       # design tokens (colors/fonts) at top of file
js/main.js          # footer year
assets/images/      # photos, portrait
assets/fonts/       # self-hosted fonts (if any)
```

## Reference sites the design follows
- Homepage: alanaswaringenphoto.squarespace.com (minimal splash)
- Photo grid: veesanders.com (Format-style masonry)
- About: izqueerdo.com/about (portrait, bio below)
- Category tabs: lorentoney.com (Concert Photos / Music Videos / Short Films)

## Still needed from client
- YouTube video IDs for music videos and short films (Drive has a Film Portfolio folder with picks)
- Portrait photo + bio text for About (Drive has an About Section folder)
- Brand colors/fonts, if any (edit `:root` tokens in `css/style.css`)

## Photos
Concert (40, in `assets/images/concerts/`): Clowder at GMan Tavern, Ghost Days at
Bottom Lounge, Julian Saunders at Record Breakers (gif), La Rosa Noir at Bottom
Lounge, Poolish at Grant Slam, Strangersfilth at The Emporium.
Commercial (26, in `assets/images/commercial/`): Tokki Star brand + clown shoots,
The Sea Ghouls merch shoot. All resized to 1600px max from Drive originals
(source: client's Drive > Website Materials > Portfolio > Photography Portfolio;
Portraits and Julian Saunders Studio BTS intentionally excluded).

## Contact
- Client: iangarciaphotography@gmail.com
- Instagram: https://www.instagram.com/ghostbloodfilms/
- YouTube: https://www.youtube.com/@ghostbloodfilms

## Run locally
```
python3 -m http.server
```

## Hosting
TBD — static, deploys anywhere (Netlify, Vercel, client's host).
