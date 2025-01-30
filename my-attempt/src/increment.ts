import { Client } from 'pg'


const client = new Client({
    connectionString: "postgresql://neondb_owner:npg_FKmPCjH0B5Aw@ep-red-unit-a879zfnj-pooler.eastus2.azure.neon.tech/neondb?sslmode=require"
})

const insertData =  async ()=>{
    await client.connect();
    const insertQuery = "INSERT INTO users (username, email, password) VALUES ($1, $2, $3)";
    const values = ['username', "email", "password"];
    const res = await client.query(insertQuery, values)
}