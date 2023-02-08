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
  {
    method: "GET",
    path: "/about",
    handler: (req, h) => {
      return "Ini Halaman About";
    },
  },
  {
    method: "*",
    path: "/about",
    handler: (req, h) => {
      return "Halaman ini tidak bisa diakses dengan method tersebut";
    },
  },
  {
    method: "GET",
    path: "/hello/{name?}",

    handler: (req, h) => {
      const { name = "Alan" } = req.params;
      const { lang } = req.query;
      if (lang == "id") {
        return `Hai, ${name}!`;
      }
      return `Halo, ${name}!`;
    },
  },
  // {
  //   method: "GET",
  //   path: "/{any*}",
  //   handler: (req, h) => {
  //     return "Halaman tidak ditemukan";
  //   },
  // },
];

module.exports = routes;
