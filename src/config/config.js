import dotenv from "dotenv";

dotenv.config()

export const config= {
    port:process.env.PORT,
    mongo_url:process.env.MONGO_URL,
    passport_github:process.env.PASSPORTGB_CLIENTSECRET,
    id_passportgb:process.env.PASSPORTGB_CLIENTID,
    secret_jwt:process.env.SECRET_JWT,
}
