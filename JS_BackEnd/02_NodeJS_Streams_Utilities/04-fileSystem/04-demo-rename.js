const fs = require('fs/promises');

fs.rename('./test', './renamed').then(() => {
    console.log('finished renaming');
});
