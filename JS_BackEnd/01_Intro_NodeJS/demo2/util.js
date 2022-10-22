function html(body, title = "Demo") {
  return `<!DOCTYPE html>
    <html lang="en">
    <head>
    <title>${title}</title>
    </head>
    <body>
    <nav>
    <ul>
    <li><a href ="/">Home</li>
    <li><a href ="/about">About</li>
    <li><a href ="/catalogue">Catalogue</a></li>
    <li><a href ="/create">Create</a></li>
    </ul>    
      </nav>
        ${body}      
    </body>
    </html>`;
}

const data = [
  {
    id: "abc1",
    name: "Product 1",
    color: "Red",
  },
  {
    id: "abc",
    name: "Product 2",
    color: "Green",
  },
];

// module.exports = {
//   html,
//   data,
// };

exports.html =html
exports.data =data

