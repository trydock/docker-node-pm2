module.exports = {
  apps : [{
    script    : "index.js",
    cwd       : "/app",
    instances : "4",
    exec_mode : "cluster"
  }]
}
