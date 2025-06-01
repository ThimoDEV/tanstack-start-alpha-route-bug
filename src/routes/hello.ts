export const ServerRoute = createServerFileRoute().methods({
  GET: async () => {
    return new Response("Hello, World!");
  },
});
