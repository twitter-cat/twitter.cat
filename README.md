<a href="https://twitter.cat" target="_blank">

<img src="https://twitter.cat/assets/svgs/kitty.svg" width="50" alt="twitter.cat logo"/>

</a>

<h1><a href="https://twitter.cat" target="_blank">twitter.cat</a></h1>

twitter search engine & crawler.

## development

### requirements

- a clickhouse db with the required tables and indexes
- a server accessible from the internet
- the data
- bun

### client

1. set your server url in `client/js/config.js`
2. `cd client`
3. `bunx serve`

this should be deployed to your preferred cdn.

### server

1. `cd server`
2. rename `.env.example` to `.env` and fill in your credentials
3. `bun install` & `bun run dev`

## crawling

in order for you to have any tweets to search, you'll need to manage crawlers that ingest tweet data to your clickhouse.

these crawlers are not open-source. the production twitter.cat instance uses many crawlers running in parallel on different machines.