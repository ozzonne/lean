import { HandlerContext } from "$fresh/server.ts";

export const handler = (_req: Request, _ctx: HandlerContext): Response => {
  //   const email: string = _req.body;
  return new Response(JSON.stringify(_ctx));
};
