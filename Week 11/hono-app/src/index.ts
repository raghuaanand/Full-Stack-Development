import { Hono } from 'hono'

const app = new Hono()

app.get('/', async (c) => {
  const html= `<!DOCTYPE html>
  <body>
    <h1>Hello World</h1>
    <p>This markup was generated by a Cloudflare Worker.</p>
  </body>`;

  return c.text(html); 
})

app.post('/', async (c) => {
  const body = await c.req.json()
  console.log(body);
  console.log(c.req.header("Authorization"));
  console.log(c.req.query("param"));

  return c.text('Hello Hono!')
})

export default app