import { Pool } from 'pg';
import dotenv from 'dotenv';


dotenv.config();


if (!process.env.DATABASE_URL) {
  throw new Error("Missing DATABASE_URL in environment variables");
}

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

export default pool;
