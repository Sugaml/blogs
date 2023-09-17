import pgPromise from 'pg-promise';
import * as dotenv from 'dotenv'; 

// Load environment variables from .env file
dotenv.config();

// Define the database connection parameters
const dbConfig = {
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT || '5432', 10), // Parse the port as an integer
  database: process.env.DB_NAME,
};

// Initialize pg-promise with the connection options
const pgp = pgPromise();
const db = pgp(dbConfig);

export default db;
