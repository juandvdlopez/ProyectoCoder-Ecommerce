process.loadEnvFile("./src/.env")

export const config={
    PORT:process.env.PORT, 
    MONGO_URL:process.env.MONGO_URL,
    DB_NAME:process.env.DB_NAME,
    SECRET:process.env.SECRET
}

