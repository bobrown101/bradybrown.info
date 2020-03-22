module.exports = {
    target: "serverless",
    env: {
        personal_email: process.env.personal_email,
        sendgrid_api_key: process.env.sendgrid_api_key,
        website_email: process.env.website_email
    }
}