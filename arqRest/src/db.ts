import { Pool } from "pg";

const connectionString = 'postgres';

const db = new Pool({ connectionString });

export default db;