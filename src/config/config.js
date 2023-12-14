import dotenv from "dotenv";

dotenv.config()

export default {
    port:process.env.PORT,
    mongo_uri:process.env.MONGO_URI,
    passport_github:process.env.PASSPORTGB_CLIENTSECRET,
    id_passportgb:process.env.PASSPORTGB_CLIENTID,
    secret_jwt:process.env.SECRET_JWT,
};