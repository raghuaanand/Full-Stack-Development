import { Hono } from "hono";
const app = new Hono();

async function authMiddleware(c:any, next:any) {
    if(c.req.header("Authorization")){
        await next()
        // next calls the next function in queue
    }else{
        return c.text("you do not have the access")
    }
}

app.get('/', authMiddleware, async (c) => {
    const body = await c.req.json();
    console.log(body)
    console.log(c.req.header("Authorization"))
    console.log(c.req.query("param"))

    return c.text("Everytihing is fine");
})

export default app