export default {
  esbuild: { jsx: "automatic", jsxImportSource: "preact" },
  resolve: { alias: { react: "preact/compat", "react-dom": "preact/compat" } },
  server: {
    proxy: {
      "/api": {
        target: process.env.API_TARGET || "https://kite.twitter.cat",
        changeOrigin: true,
        secure: true,
      },
      "/stats": {
        target: "https://kite.twitter.cat",
        changeOrigin: true,
        secure: true,
      },
    },
  },
}
