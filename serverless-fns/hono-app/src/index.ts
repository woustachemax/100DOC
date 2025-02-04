import { Hono } from 'hono'

const app = new Hono()

const authMiddleware =  async(c: any, next: any)=>{
  if (c.req.header("Authorization")){


    await next()
  }

  else{
    return c.text("You don't have access")
  }
}

app.post('/', authMiddleware, async (c) => {
  //body,  headers, query params, middleware, connectineting to db 
  // all can be done by c no req/res needed
  const body =  await c.req.json()
  console.log(body)
  console.log(c.req.header("Authorization"))
  console.log(c.req.query("params"))
  return c.text('Hello Hono!')
})

export default app
