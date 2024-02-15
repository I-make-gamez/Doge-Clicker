const { db } = require("@vercel/postgres");
const { users } = require("../lib/placeholder-data");
const crypto = require("crypto");

async function seedUsers(client) {
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
    const usersTable = await client.sql`
            CREATE TABLE IF NOT EXISTS users (
                id SERIAL PRIMARY KEY,
                username TEXT NOT NULL UNIQUE,
                password TEXT NOT NULL,
                admin BOOLEAN NOT NULL,
                dogecoin INTEGER,
                clickpower INTEGER,
                clicksper INTEGER,
                avatar TEXT NOT NULL,
                level INTEGER,
                exp INTEGER
            );
        `;

    console.log(`created users table`);
    const insertedUsers = await Promise.all(
      users.map(async (user) => {
        const hashedPassword = hashPassword(user.password);
        return client.sql`
                INSERT INTO users (username, password, admin, dogeCoin, clickPower, clicksPer, avatar, level, exp)
                VALUES (${user.username}, ${hashedPassword}, ${user.admin}, ${user.dogeCoin}, ${user.clickPower}, ${user.clicksPer}, ${user.avatar}, ${user.level}, ${user.exp})
              `;
      })
    );
    console.log(`Seeded ${insertedUsers.length} users`);

    return {
      usersTable,
      users: insertedUsers,
    };
  } catch (error) {
    console.error("Error seeding users:", error);
    throw error;
  }
}

// Function to hash the password using SHA-256
function hashPassword(password) {
  const hash = crypto.createHash('sha256');
  hash.update(password);
  return hash.digest('hex');
}

async function main() {
  const client = await db.connect();

  await seedUsers(client);  
  await client.end();
}

main().catch((err) => {
  console.error(
    'An error occurred while attempting to seed the database:',
    err,
  );
});
