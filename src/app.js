import express from "express";
import cookieParser from "cookie-parser";
import { __dirname } from "./utils.js";
import handlebars from "express-handlebars";
import viewsRouter from "./routing/views.router.js";
import sessionsRouter from "./routing/sessions.router.js";
import session from "express-session";
import productsRouter from "./routing/products.router.js";
import cartsRouter from "./routing/cart.router.js";
import "./config/configDB.js";
import fileStore from "session-file-store";
const FileStore = fileStore(session);
import MongoStore from "connect-mongo";
import "./config/passport.js"
import passport from "passport";
import config from "./config/config.js";

const URI=config.mongo_uri;

//app express
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/public"));
app.use(cookieParser("SecretCookie"));

//dotenv


// session
//file
// app.use(
//   session({
//     store: new FileStore({
//       path: __dirname + "/sessions",
//     }),
//     secret: "secretSession",
//     cookie: { maxAge: 60000 },
//   })
// );

//mongo

app.use(
  session({
    store: new MongoStore({
      mongoUrl:"mongodb+srv://joaquinfefe:ecommercecoder@ecommerce.gmltjrj.mongodb.net/?retryWrites=true&w=majority",
    }),
    secret: "secretSession",
    cookie: { maxAge: 60000 },
  })
);
//passport
app.use(passport.initialize());
app.use(passport.session());
// handlebars
app.engine("handlebars", handlebars.engine());
app.set("views", __dirname + "/views");
app.set("view engine", "handlebars");

// routes
app.use("/", viewsRouter);

app.use("/api/sessions", sessionsRouter);
app.use("/api/products", productsRouter);
app.use("/api/cart", cartsRouter);


app.listen(8080, () => {
  console.log("Escuchando al puerto 8080");
});
