module.exports = {
  HOST: "ep-blue-paper-ah8vvegq-pooler.c-3.us-east-1.aws.neon.tech",
  USER: "neondb_owner",
  PASSWORD: "npg_hxHR3jE2aNlY",
  DB: "neondb",
  dialect: "postgres",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};