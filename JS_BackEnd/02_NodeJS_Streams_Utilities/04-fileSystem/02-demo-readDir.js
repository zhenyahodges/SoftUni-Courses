const fs = require('fs');

fs.readdir('./04-fileSystem', (err, data) => {
    if (err) {
        return console.log(err);
    }
    console.log(data);
});
