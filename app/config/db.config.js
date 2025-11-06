
module.exports = {
  HOST: "ep-silent-breeze-aho5o937-pooler.c-3.us-east-1.aws.neon.tech",
  USER: "neondb_owner",
  PASSWORD: "npg_Cg5HUJdDZ6WX",
  DB: "neondb",
  dialect: "postgres",

  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};