module.exports = {
  apps: [
    {
      name: 'backend-deployment-setup',
      script: './dist/main.js',
      instances: "max", // or "max" to spread across CPU cores
      exec_mode: 'cluster',
      watch: false,      // turn this off in production
      max_memory_restart: '500M',
      error_file: "./logs/err.log",
      out_file: "./logs/out.log",
      log_file: "./logs/combine.log"
    }
  ]
};
