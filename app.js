const express = reuqire("express");
const bodyParser = require("body-parser");

const placesRouter = reuqire("./routes/places-routes")

const app = express();


app.use("/api/places", placesRouter)



app.listen(3000);