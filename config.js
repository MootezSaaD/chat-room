require('dotenv').config();

module.exports = {
  // Our database filename
  // anything://user:password@host:port/database
  chat_db_filename: 'chat.db',
  pg_server_url: process.env.DATABASE_URL,
  pg_local_url: 'postgres://keithy@localhost:5432/chatter',
};
