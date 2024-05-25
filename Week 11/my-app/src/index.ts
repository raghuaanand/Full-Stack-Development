/**
 * Welcome to Cloudflare Workers! This is your first worker.
 *
 * - Run `npm run dev` in your terminal to start a development server
 * - Open a browser tab at http://localhost:8787/ to see your worker in action
 * - Run `npm run deploy` to publish your worker
 *
 * Bind resources to your worker in `wrangler.toml`. After adding bindings, a type definition for the
 * `Env` object can be regenerated with `npm run cf-typegen`.
 *
 * Learn more at https://developers.cloudflare.com/workers/
 */


export interface Env{

}


//  we do not have do wrtie express code here, express in not even there in the dev dependencies. express code is done by the cloudfare itself -> see projeccts.100xdevs.com 



//  what were we looking for in express

//  app.get("/user")
// body, headers, query parameters...



export default {
	async fetch(request: Request, env: Env, ctx: ExecutionContext): Promise<Response> {

		//  the request object above gives us everything we needed in express 
		console.log(request.body);
		console.log(request.headers);
		
		if (request.method === "GET") {
			return Response.json({
				message: "you sent a get request"
			});
		} else {
			return Response.json({
				message: "you did not send a get request"
			});
		}
	},
};




// ---> We have wrangler in the dependencies that is the CLI Of cloudfare -> it is what lets us deploy our application to the cloud fare.
