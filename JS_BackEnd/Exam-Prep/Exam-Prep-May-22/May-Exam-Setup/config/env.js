exports.PORT = 3000;
// const opt1='mongodb://localhost:27017/artGallery'
const opt2='mongodb://127.0.0.1:27017/artGallery'
exports.DB_QUERYSTRING= `${opt2}` || `${opt1}`;

