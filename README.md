# Harsharandeep Dhillon — Portfolio

Professional full-stack portfolio built with **Next.js 15**, **TypeScript**, **Tailwind CSS**, **Prisma**, and **SQLite**.

## Features

- Modern responsive UI with Framer Motion animations
- Content sourced from resume and LinkedIn (Zoox, Multibeam, KPMG, Stanford SSG, etc.)
- Working contact form with server-side validation (Zod)
- SQLite database persistence via Prisma
- Resume download & LinkedIn integration

## Getting Started

```bash
npm install
npx prisma migrate dev --name init
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Stack

| Layer | Technology |
|-------|------------|
| Frontend | Next.js 15, React 19, Tailwind CSS 4, Framer Motion |
| Backend | Next.js API Routes |
| Database | SQLite + Prisma ORM |
| Validation | Zod |

## Contact API

```bash
POST /api/contact
Content-Type: application/json

{
  "name": "Jane Doe",
  "email": "jane@example.com",
  "subject": "Opportunity",
  "message": "Hello!"
}
```

Messages are stored in `prisma/dev.db`.

## Deploy

Works on Vercel. Set `DATABASE_URL` to a hosted SQLite/Turso/Postgres URL for production.

## Contact

- **GitHub:** https://github.com/Dhillon001
- **LinkedIn:** https://www.linkedin.com/in/harsharandeep-dhillon-26b291267/
- **Email:** Hdhillon001@berkeley.edu
