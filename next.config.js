module.exports = {
    target: "serverless",
    env: {
        PERSONAL_EMAIL: process.env.PERSONAL_EMAIL,
        SENDGRID_API_KEY: process.env.SENDGRID_API_KEY,
        WEBSITE_EMAIL: process.env.WEBSITE_EMAIL
    }
}