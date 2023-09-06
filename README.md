# AI ChatBot

This app uses Vercel's [AI SDK](https://github.com/vercel-labs/ai) to stream tokens to the client and display the incoming messages.

## Getting Started

Clone the repo.

Copy the `.env.example` file to `.env.local`. Set the OpenAI API key value.

Start:

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to see a streamed response:

![An example of conversation](/public/images/desktop-view.png)

The view is `app/page.tsx`. The Backend logic lives in `app/api/chat/route.ts`.

## Deployment on Vercel ▲

Follow [this deployment documentation](https://nextjs.org/docs/deployment) to deploy on Vercel.
