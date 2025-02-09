import mysql2, { createConnection } from "mysql2/promise";

let db_con;
export const connect = async () => {
  try {
    if (!db_con) {
      db_con = await createConnection({
        host: process.env.HOST,
        user: process.env.USER,
        password: process.env.PASSWORD,
        database: process.env.DATABASE,
      });
    }
    return db_con;
  } catch (err) {
     console.log("Database connection failed:", err);
     throw err
  }
};


