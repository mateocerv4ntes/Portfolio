# Astro Portfolio Workflow Guide

This guide outlines your working process and setup for building and maintaining your portfolio site using [Astro](https://astro.build), Git, GitHub, and Netlify.

---

## 1. Project Structure & Purpose

Your project folder is:

```
Portfolio/
```

Inside it, you have a static Astro site built with:

* **Astro** for static site generation
* **Git** for version control
* **GitHub** for code hosting
* **Netlify** for deployment (hosted at [m4teo.netlify.app](https://m4teo.netlify.app))

---

## 2. Folder Layout (Basic Astro)

```
Portfolio/
├── public/             # Static files (e.g., images, background.jpg)
├── src/
│   ├── components/     # Astro or JS components
│   ├── layouts/        # Shared page layouts
│   ├── pages/          # Each .astro file here = a route (e.g. index.astro = homepage)
│   └── styles/         # CSS styles (e.g. global.css)
├── astro.config.mjs    # Astro config
├── package.json        # Project metadata and scripts
├── .git/               # Git tracking (hidden folder)
└── .gitignore
```

---

## 3. Making and Deploying Changes

### A. Run Locally (`npm run dev`)

To see your site as you work:

```bash
npm run dev
```

This starts a local development server (usually at [http://localhost:4321](http://localhost:4321)) that **auto-updates** as you edit files.

✅ You **do not need to stop** this to push to GitHub or deploy to Netlify.

You only need to stop it if:

* You’re done working
* You want to test a clean build
* Something gets stuck/crashes

To stop: `Ctrl + C`

---

### B. Add / Commit / Push to GitHub

After making changes:

```bash
git add .               # Stage all changes
git commit -m "message" # Commit your changes
git push                # Push to GitHub
```

This will trigger a new **Netlify build** if your site is connected to that GitHub repo.

---

## 4. Netlify Deploy Flow

1. You push changes to GitHub
2. Netlify notices the change
3. It pulls the repo and runs Astro’s build step
4. It deploys the updated static site to `m4teo.netlify.app`

No need to manually trigger a deploy.

---

## 5. Tips

* Use `npm run dev` to preview locally before pushing
* Use `.astro` files for pages (e.g., `index.astro` becomes `/`)
* Use the `public/` folder for static assets like images
* Keep styles in `src/styles/global.css` or use scoped styles in `.astro` files

---

## 6. Coming Later

You’ll later add:

* JS interactivity
* React or Astro components
* Fancy transitions, hover states, and advanced layouts

But for now, keep things in HTML and CSS as you learn.

---

This document will grow as your skills and site evolve.
