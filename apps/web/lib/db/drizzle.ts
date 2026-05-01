import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';
import * as schema from './schema';
import dotenv from 'dotenv';
import path from 'node:path';

dotenv.config({ path: path.resolve(process.cwd(), '../../.env') });
dotenv.config();

const connectionString =
  process.env.POSTGRES_URL || 'postgres://postgres:postgres@localhost:5432/postgres';

export const client = postgres(connectionString.replace(/^['"]|['"]$/g, ''));
export const db = drizzle(client, { schema });
