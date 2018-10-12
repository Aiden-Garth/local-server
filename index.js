const Express = require("express");
const app = Express();
const server = app.listen(9000, "localhost", null, () => console.log("Server started on http://localhost:9000/"));

app.use(Express.static("File_Server/public"));
