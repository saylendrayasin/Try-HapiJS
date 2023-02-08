const Hapi = require("@hapi/hapi");

const init = async () => {
  const server = Hapi.server({
    port: 5000,
    host: "localhost",
  });

  server.route({
    method: "GET",
    path: "/",
    handler: (req, h) => {
      return "Hello World";
    },
  });

  await server.start();
  console.log(`Server running on ${server.info.uri}`);
};

init();
