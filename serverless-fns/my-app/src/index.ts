export default {
	async fetch(request: Request, env: Env, ctx: ExecutionContext): Promise<Response> {

			return Response.json({
				message: "running server"
			})
	
}
}