import "jsr:@std/dotenv";
import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";
if (!Deno.env.get("DATABASE_URL")) throw new Error("DATABASE_URL is not set");
const client = postgres(Deno.env.get("DATABASE_URL") as string);
export const db = drizzle(client);
