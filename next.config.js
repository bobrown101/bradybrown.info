console.log("Hey brady - this is build", JSON.stringify(process.env, null, 4))
module.exports = {
    target: "serverless",
    env: {
        PERSONAL_EMAIL: process.env.PERSONAL_EMAIL,
        SENDGRID_API_KEY: process.env.SENDGRID_API_KEY,
        WEBSITE_EMAIL: process.env.WEBSITE_EMAIL
    }
}