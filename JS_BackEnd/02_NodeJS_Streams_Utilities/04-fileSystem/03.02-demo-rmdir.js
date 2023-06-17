const fs = require('fs/promises');

// delete directory

fs.rmdir('./test2').then(() => {
    console.log('finished deleting');
});

