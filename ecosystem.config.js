module.exports = {
  apps: [
    {
      name: 'adsmsk',
      script: 'node_modules/.bin/next',
      args: 'start -p 3000',
      cwd: '/var/www/adsmsk',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production',
        PORT: 3000,
        // ВАЖНО: указать реальный домен, не IP
        NEXT_PUBLIC_SITE_URL: 'https://ads.msk.ru',
        HOSTNAME: '127.0.0.1',
      },
    },
  ],
}