# twitter.cat

twitter search engine & crawler.

## development

### requirements

- postgres db with the required tables and indexes

- your own crawler, this isn't open-source for obvious reasons

- bun installed

- a server accessible from the internet

### client

1. set your server url in `client/js/config.js`

2. `cd client`

3. `bunx serve`

this should be deployed to your preferred static hosting provider.

### server

1. `cd server`

2. rename `.env.example` to `.env` and fill in your credentials

3. `bun install` & `bun run dev`

port `3001` or `env.PORT` should deployed to your server, along with the postgres database.