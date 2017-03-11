const pgp = require('pg-promise')()
const db = pgp(process.env.DATABASE_URL || 'postgres://tajenglish@localhost:5432/challenge_accepted');

module.exports = db;
