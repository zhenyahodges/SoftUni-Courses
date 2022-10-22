const routes = {};

function register(path, handler) {
  routes[path] = handler;
}

function match(req, res) {
  const url = new URL(req.url, `http://${req.headers.host}`);

  const handler = routes[url.pathname];

  if(typeof handler === 'function') {
    handler(req, res);
  }else{
    routes.default(req, res); //exception if doesn't exist
  }

}

module.exports={
    register,
    match
}