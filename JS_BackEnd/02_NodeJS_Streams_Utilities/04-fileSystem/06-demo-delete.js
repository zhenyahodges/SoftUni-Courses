const fs = require('fs/promises');


fs.unlink('./04-fileSystem/text2.txt').then(() => {
    console.log('finished deleting');
});
