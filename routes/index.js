const routes = [
  {
    method: "GET",
    path: "/",
    handler: (req, h) => {
      return "Ini halaman homepage";
    },
  },
  {
    method: "*",
    path: "/",
    handler: (req, h) => {
      return "Halaman tidak dapat diakses dengan method tersebut";
    },
  },
];

module.exports = routes;
