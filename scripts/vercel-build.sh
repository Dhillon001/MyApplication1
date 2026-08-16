#!/usr/bin/env sh
set -e

npx prisma generate

if [ -n "$DATABASE_URL" ]; then
  npx prisma migrate deploy
else
  echo "Warning: DATABASE_URL not set — skipping database migrations."
  echo "Add a Neon DATABASE_URL in Vercel env vars for the contact form to work."
fi

npx next build
