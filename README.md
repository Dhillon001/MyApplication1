# Harsharandeep Dhillon — Portfolio

Professional full-stack portfolio built with **Next.js 15**, **TypeScript**, **Tailwind CSS**, **Prisma**, and **PostgreSQL**.

## Features

- Modern responsive UI with Framer Motion animations
- Content sourced from resume and LinkedIn (Zoox, Multibeam, KPMG, Stanford SSG, etc.)
- Working contact form with server-side validation (Zod)
- PostgreSQL database persistence via Prisma
- Resume download & LinkedIn integration

## Getting Started

```bash
npm install
cp .env.example .env   # add your Neon DATABASE_URL
npx prisma migrate dev
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Deploy on Vercel (Free)

1. Push this repo to GitHub (already at `Dhillon001/MyApplication1`)
2. Go to [vercel.com/new](https://vercel.com/new) and import the repo
3. Create a free database at [neon.tech](https://neon.tech) (or use Vercel Storage → Postgres)
4. In Vercel → **Settings → Environment Variables**, add:
   - `DATABASE_URL` = your Neon connection string
5. Click **Deploy**

The site runs on Vercel Hobby (**$0/mo**) for personal portfolios.

## Stack

| Layer | Technology |
|-------|------------|
| Frontend | Next.js 15, React 19, Tailwind CSS 4, Framer Motion |
| Backend | Next.js API Routes |
| Database | PostgreSQL (Neon) + Prisma ORM |
| Validation | Zod |

## Contact

- **GitHub:** https://github.com/Dhillon001
- **LinkedIn:** https://www.linkedin.com/in/harsharandeep-dhillon-26b291267/
- **Email:** Hdhillon001@berkeley.edu
