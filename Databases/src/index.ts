import { Client } from 'pg'
 
const client = new Client({
 connectionString:  "postgresql://postgres:mysecretpassword@localhost:5432/postgres"
})

const createUsersTable = async ()=>{
    await client.connect()
    const result = await client.query(`
        CREATE TABLE users (
            id SERIAL PRIMARY KEY,
            username VARCHAR(50) UNIQUE NOT NULL,
            email VARCHAR(255) UNIQUE NOT NULL,
            password VARCHAR(255) NOT NULL,
            created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
        );
    `)
    console.log(result)
 
}


createUsersTable()