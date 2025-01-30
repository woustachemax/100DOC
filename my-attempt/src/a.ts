import { Client } from 'pg'

const client = new Client ({
    connectionString: "postgresql://neondb_owner:npg_FKmPCjH0B5Aw@ep-red-unit-a879zfnj-pooler.eastus2.azure.neon.tech/neondb?sslmode=require"
})

const createUserTable = async()=>{
    await client.connect();
    const result = await client.query(`
        CREATE TABLE users(
        id SERIAL PRIMARY KEY,
        username VARCHAR(50) UNIQUE NOT NULL,
        email VARCHAR(250) UNIQUE NOT NULL,
        password VARCHAR(250) NOT NULL,
        created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
        );
        `)
        console.log(result);
}

createUserTable();
