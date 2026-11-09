# Josh, Web Designer: Portfolio Website

A portfolio site for showing clients your past work, with a contact form
for new enquiries. It's built with Next.js and includes two interactive 3D
scenes: a desk in the hero, and a GoHighLevel, WordPress, Squarespace, Wix
and Hostinger logo orbit.

## Run it on your computer

You need [Node.js](https://nodejs.org) 20.9 or newer and VS Code.

```bash
npm install
npm run dev        # open http://localhost:3000
```

Save any file and the browser updates by itself.

Before you publish, run:

```bash
npm run check      # checks for errors and does a full production build
```

It must finish without errors.

## What to edit

Almost everything you'll want to change lives in a few plain text files.

| I want to change… | Edit this file |
|---|---|
| Name, email, social links, Upwork/Fiverr links, menu, stats | `src/lib/site.ts` |
| Portfolio projects | `src/data/projects.ts` (+ screenshots in `public/projects/`) |
| Services | `src/data/services.ts` |
| The 5 platforms in the 3D orbit | `src/data/platforms.ts` (+ logos in `public/logos/`) |
| Logo strip ("Connected tools") | `src/data/tech.ts` (+ icons in `public/tech/`) |
| Client reviews | `src/data/testimonials.ts` |
| Your photo | replace `src/assets/about-portrait.webp` (4:5, about 1200×1500) |
| Colours and fonts | `@theme` in `src/app/globals.css` |

Any link left as `""` in `site.ts` is simply hidden on the site.

## Checklist before going live

1. **Your details.** In `src/lib/site.ts`, set your full name, contact email,
   stats, and any Upwork, Fiverr, LinkedIn or Instagram links.
2. **Your photo.** Replace `src/assets/about-portrait.webp`. Keep the same file name.
3. **Your projects.** `src/data/projects.ts` contains six **sample** projects.
   Replace them with your real work: add a screenshot of each live site to
   `public/projects/`, then fill in the text. Set `featured: true` on your
   best three to show them on the home page.
4. **Reviews.** The Reviews section is hidden until you add at least one
   real client review to `src/data/testimonials.ts`.
5. **GoHighLevel logo.** `public/logos/gohighlevel.webp` is a plain "GHL"
   placeholder. Replace it with the official logo: a 256×256 WebP or PNG
   with a transparent or white background, using the same file name.
6. **Contact form email delivery.** Create a [Resend](https://resend.com)
   account and API key, then verify a sending domain in Resend. Copy
   `.env.example` to `.env.local` and set `RESEND_API_KEY` and `FROM_EMAIL`
   to an address on that verified domain. `CONTACT_EMAIL` is optional and
   defaults to the email address in `src/lib/site.ts`. Add these server-only
   variables in Vercel and redeploy. The form reports success only after
   Resend accepts the email; without the required configuration it shows an
   error and keeps the visitor's entries.

## Put it on GitHub and publish it

1. Create a new **empty** repository on GitHub (no README).
2. In VS Code's terminal, inside this folder:
   ```bash
   git init
   git add .
   git commit -m "First version"
   git branch -M main
   git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPO.git
   git push -u origin main
   ```
3. Go to [vercel.com](https://vercel.com), sign in with GitHub, click
   **Add New → Project** and import the repository. Leave the settings as
   they are.
4. In Vercel, open **Project → Settings → Environment Variables** and add
   `RESEND_API_KEY`, `FROM_EMAIL`, and optionally `CONTACT_EMAIL`, then
   redeploy. Do not prefix the Resend key with `NEXT_PUBLIC_`.
5. To use your own domain, add it under **Project → Settings → Domains** and
   follow the DNS steps Vercel shows. Then also add the environment variable
   `NEXT_PUBLIC_SITE_URL=https://your-domain.com`.

After that, every time you push to `main` from VS Code, the live site
updates automatically within a minute or two.

## Tech notes

Next.js 16 (App Router) · React 19 · TypeScript · Tailwind CSS v4 · Motion ·
React Three Fiber + Drei. The 3D scenes are built in code (no model files),
pause when scrolled off screen, and switch to still versions for visitors
whose devices are set to reduce motion.

Platform names and logos are trademarks of their owners, used only to say
which platforms you build on.

# Joshua-Portfolio
