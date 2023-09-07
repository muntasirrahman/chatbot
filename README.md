# AI ChatBot

This app uses Vercel's [AI SDK](https://github.com/vercel-labs/ai) to stream tokens to the client and display the incoming messages.

## Clone

Clone the repo.

```bash
git clone https://github.com/muntasirrahman/chatbot.git
```

## Forking this repository

Forking and synchronizing with this repository

Add this repo as upstream repository

```bash
git remote add upstream https://github.com/muntasirrahman/chatbot.git
```

Choose how to resolve the conflict

```bash
git config pull.rebase false
```

Pull the source

```bash
git pull --allow-unrelated-histories upstream main
```

## Launch the development server

Copy the `.env.example` file to `.env.local`. Set the OpenAI API key value, e.g.:

```
OPENAI_API_KEY="sk-abcdefghi"
```

To launch the development server:

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to see a streamed response:

![An example of conversation](/public/images/desktop-view.png)

The view is `app/page.tsx`. The Backend logic lives in `app/api/chat/route.ts`.

## Deployment on Vercel ▲

Follow [this deployment documentation](https://nextjs.org/docs/deployment) to deploy on Vercel.
