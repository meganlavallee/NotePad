// Requiring Express
const express = require('express');

// PORT using
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

// Routes
require("./routes/apiRoutes.js")(app);
require("./routes/htmlRoutes.js")(app);


require("./Develop/routes/apiroutes.js")(app);
require("./Develop/routes/htmlroutes.js")(app);

app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
})