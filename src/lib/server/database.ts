import { DB_PATH } from "$env/static/private";
import Database from "better-sqlite3";

export const db = new Database(DB_PATH);
db.pragma("journal_mode = WAL");

const stmt = db.prepare(`
	CREATE TABLE IF NOT EXISTS newsletter (
		id TEXT NOT NULL,
		title TEXT NOT NULL,
		preview TEXT NOT NULL,
		content TEXT NOT NULL,
		published_at DATETIME DEFAULT CURRENT_TIMESTAMP NOT NULL,
		CONSTRAINT newsletter_pk PRIMARY KEY (id)
	);
 `);

stmt.run();
