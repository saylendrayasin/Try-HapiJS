const routes = [
  {
    mehtod: "GET",
    path: "/",
    handler: (req, h) => {
      return "Ini halaman homepage";
    },
  },
  {
    mehtod: "*",
    path: "/",
    handler: (req, h) => {
      return "Halaman tidak dapat diakses dengan method tersebut";
    },
  },
  {
    mehtod: "GET",
    path: "/about",
    handler: (req, h) => {
      return "Ini Halaman About";
    },
  },
  {
    mehtod: "*",
    path: "/",
    handler: (req, h) => {
      return "Halaman ini tidak bisa diakses dengan method tersebut";
    },
  },
  {
    mehtod: "GET",
    path: "/{any*}",
    handler: (req, h) => {
      return "Halaman tidak ditemukan";
    },
  },
];

module.exports = routes;
