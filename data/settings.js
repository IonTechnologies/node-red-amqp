module.exports = {
    credentialSecret: process.env.NODE_RED_CREDENTIAL_SECRET,
    logging: {
        // Console logging
        console: {
            level: "debug",
            metrics: false,
            audit: false
        }
    }
}