
## Getting Started

- What did we do today?
    - We just recapped what Next.js is capable of.

- Better fetches: by using a **server** component we can directly fetch the data from the backend without hitting the backend with localhost
- As we connect to PrismaClient again and again, as in when we use dev mode we save-un-save things again and again which initializes new client which exhausts the number of clients that can be connected to the DB, solution: create a db.ts file with globalthis which doesnt change with a hot reload. 