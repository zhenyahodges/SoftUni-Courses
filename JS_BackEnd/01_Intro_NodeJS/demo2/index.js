const http = require("http");
const router = require("./router.js");

const {
  cataloguePage,
  createPage,
  createItem,
} = require("./controllers/catalogueController.js");

const {
  homePage,
  aboutPage,
  defaultPage,
} = require("./controllers/homeController.js");

router.get("/", homePage);
router.get("/about", aboutPage);
router.get("/catalogue", cataloguePage);
router.get("/create", createPage);
router.post("/create",createItem)
router.get("default", defaultPage);

const server = http.createServer(router.match);

server.listen(3000);
