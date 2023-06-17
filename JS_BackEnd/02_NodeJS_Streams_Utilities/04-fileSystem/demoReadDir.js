const fs = require('fs');

fs.readdir('./fileSystem', (err, data) => {
    if (err) {
        return console.log(err);
    }
    console.log(data);
});
