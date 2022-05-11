import { Pool } from "pg";

const connectionString = 'postgres://upoxahma:x6dwWqoh97gxGw5aEWQb1eJXEv-46vLH@hansken.db.elephantsql.com/upoxahma';

const db = new Pool({ connectionString });

export default db;