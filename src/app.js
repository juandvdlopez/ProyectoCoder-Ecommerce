import express from 'express'; 
import { engine } from 'express-handlebars';
import passport from 'passport';
import cookieParser from 'cookie-parser';


import { router as authRouter } from './routes/authRoutes.js';
import { router as sessionRouter } from './routes/sessionRoutes.js';
import { router as adminRouter } from './routes/adminRoutes.js';
import { authorizeRole } from './middleware/authorizeRole.js';
import { connDB } from './util/ConnDB.js';
import { config } from './config/config.js';	
import { passportInit } from './config/passport.config.js';
import {auth} from './middleware/is-auth.js';
import { passportCall } from './util/util.js';




const PORT = config.PORT;

const app = express();

//Express settings
app.use(express.json());       // to support JSON-encoded bodies
app.use(express.urlencoded({extended: true})); // to support URL-encoded bodies     
app.use(cookieParser())
app.engine("handlebars", engine());
app.set("view engine", "handlebars");

// Passport settings
passportInit();
app.use(passport.initialize());

app.use(express.static("./src/public"))


app.use('/api/auth',authRouter); 
//app.use('/api/session', passport.authenticate("current", { session: false }), sessionRouter)
app.use('/api/session', passportCall("current"), authorizeRole(["user"]), sessionRouter)
app.use('/api/admin', passportCall("current"),authorizeRole(["admin"]), adminRouter)




//app.use('/api/',authRouter); 


app.get('/', (req, res) => {
    res.send('Hello World!');
});



const server= app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});         


connDB(config.MONGO_URL, config.DB_NAME);
