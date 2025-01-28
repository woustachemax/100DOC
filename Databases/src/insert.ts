import { Client } from 'pg';

async function insertData() {
  const client = new Client({
    connectionString:  "postgresql://postgres:mysecretpassword@localhost:5432/postgres"
  });

  try {
    await client.connect();
    const insertQuery = "INSERT INTO users (username, email, password) VALUES ('username2', 'user3@example.com', 'user_password');";
    const res = await client.query(insertQuery);
    console.log('Insertion success:', res);
  } catch (err) {
    console.error('Error during the insertion:', err);
  } finally {
    await client.end(); 
  }
}

insertData();