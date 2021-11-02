const express = require("express");
const bodyParser = require('body-parser');
const app = express();
const path = require("path");
const routes = require('./routes');
const { dataMiddleware, optionLang } = require('./middlewares/data');

app.set("views", __dirname + "/views");
app.set("view engine", "jsx");
app.engine("jsx", require("express-react-views").createEngine());

app.set("port", process.env.PORT || 3000);

app.use(express.static(path.join(__dirname, "./statics")));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/", dataMiddleware('es'), optionLang('en'), routes);
app.use("/es", dataMiddleware('es'), optionLang('en'), routes);
app.use("/en", dataMiddleware('en'), optionLang('es'), routes);

app.listen(app.get("port"), function () {
  console.log(
    "Express server listening on port %d in %s mode",
    app.get("port"),
    app.get("env")
  );
});
