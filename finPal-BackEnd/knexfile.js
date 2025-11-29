// knexfile.js
import dotenv from "dotenv";
dotenv.config();
export default {
  development: {
    client: "postgresql",
    connection: {
      host: "localhost",
      port: 5432,
      database: "finpal",
      user: "postgres",
      password: process.env.DB_PASSWORD,
      ssl: false,
    },
    migrations: {
      directory: "./migrations",
    },
    seeds: {
      directory: "./seeds",
    },
  },
};
