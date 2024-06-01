module.exports = {
  apps: [
    {
      name: 'acp-program.service',
      script: 'dist/main.js',
      instances: 1,
      // exec_mode:'cluster',
      autorestart: true,
      watch: false,
      node_args: '--max_old_space_size=2048',
      max_memory_restart: '2G',
      env: {
        NODE_ENV: 'development',
      },
      env_production: {
        NODE_ENV: 'production',
      },
    },
  ],
};
