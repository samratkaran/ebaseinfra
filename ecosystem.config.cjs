module.exports = {
  apps: [
    {
      name: "ebase-app",
      script: "npm",
      args: "start",
      env_production: {
        NODE_ENV: "production",
      },
    },
  ],

  deploy: {
    production: {
      user: "root",
      host: "69.62.72.79",
      ref: "origin/main",
      repo: "git@github.com:samratkaran/ebaseinfra.git",
      path: "/var/www/ebaseweb/ebaseinfra",
      "post-deploy":
        "git pull origin main && npm install && npm run build && pm2 restart ebase-app",
    },
  },
};


