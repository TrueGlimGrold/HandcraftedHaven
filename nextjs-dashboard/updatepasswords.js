import pkg from "pg";
import bcrypt from "bcrypt";

const { Client } = pkg;

// Database connection URI (from your Supabase credentials)
const client = new Client ({connectionString:
  "postgres://postgres.zrunffokljhcbnktahvt:lbOouTpnyndhC7Ag@aws-0-us-east-1.pooler.supabase.com:6543/postgres",
});

// Initialize PostgreSQL client
//const client = new Client({ connectionString });

async function updatePasswords() {
  try {
    await client.connect();

    // Get all users
    const res = await client.query("SELECT id, password FROM users");
    for (let user of res.rows) {
      const hashedPassword = await bcrypt.hash(user.password, 10); // Hashing with salt rounds = 10

      // Update user password in the database
      await client.query("UPDATE users SET password = $1 WHERE id = $2", [
        hashedPassword,
        user.id,
      ]);

      console.log(`Updated password for user ID: ${user.id}`);
    }

    console.log("All passwords updated successfully!");
  } catch (err) {
    console.error("Error updating passwords:", err);
  } finally {
    await client.end();
  }
}

// Run the update function
updatePasswords();
