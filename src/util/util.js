import bcrypt from "bcrypt"
import passport from "passport"

export const hashPassword =  (password) => {  
    return bcrypt.hashSync(password, bcrypt.genSaltSync(10)) 
} 
export const comparePassword = (password, hash) => bcrypt.compareSync(password, hash)

export const passportCall = strategy => function (req, res, next) {
    passport.authenticate(strategy, function (err, user, info, status) {
        if (err) { return next(err) }   // return done(error)
        if (!user) { // return done(null, false)
            res.setHeader('Content-Type','application/json');
            console.log(`usuario no autenticado`)
            //console.log({error:`${info.message?info.message:info.toString()}`})
            return res.status(401).json({error:`${info.message?info.message:info.toString()}`})
        }  
        req.user=user;   // return done(null, usuario)
        
        return next()
    })(req, res, next);
} 