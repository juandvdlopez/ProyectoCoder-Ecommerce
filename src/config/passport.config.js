import passport from "passport"
import local    from "passport-local"
import passportJwt from "passport-jwt"
import { UserDAO } from "../dao/UserDAO.js"
import { hashPassword, comparePassword } from "../util/util.js" 
import { config } from "./config.js"


const searchToken = (req) => {
   

    let token= null
    if (req.cookies.tokenCookie){ 
        
        token=req.cookies.tokenCookie
    }

    return token
} 



export const passportInit=()=>{

    // Paso 1
    passport.use ("signup" , 
    new  local.Strategy ( 
        { 
            passReqToCallback: true,
            usernameField: "email"
        }, 
        async (req, username, password, done) => {
            try { 
                
                let { email} = req.body 
                if (!email) {	
                    return done(null, false, { message: "El email no puede estar vacio" })
                } 
                let exists = await UserDAO.getBy({ email: username })
                if (exists) {
                    
                    return done(null, false, { message: "El email ya se encuentra registrado" })
                }
                password = hashPassword(password); 
                let newUser = await UserDAO.addUser({ firstName: req.body.firstName, lastName: req.body.lastName, email: username, role: req.body.role, password })
                return done(null, newUser)
            } catch (error) {
                return done(error)
            }
            
        }
     )
    )


    passport.use ( "login", 
        new local.Strategy( 
            { 
                usernameField:"email" 
            },
            async ( username, password, done) => {
                try { 
                 
                    let user = await UserDAO.getBy({ email: username })
                    console.log( user )
                  
                    if (!user) {    
                   
                        return done(null, false)
                    }   
                    if (!comparePassword(password, user.password)) {
                       
                        return done(null, false)
                    }
                    

                    // Login exitoso - delete data sensitive
                    delete user.password
                    return done(null, user)                                     
                } catch (error) {
                    return done(error)
                }
            }

        )
    )


    passport.use ("current", 
        new passportJwt.Strategy(
            {
                secretOrKey: config.SECRET,
                jwtFromRequest: new passportJwt.ExtractJwt.fromExtractors([searchToken])
            } , 
            async (user, done) => { 
                try { 
                    return done(null, user)

                } catch (error) {
                    return done(error)
                }

            } 
        ) 

    )

} 