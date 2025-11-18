module.exports = {
    "fromEmail": "hello@demomailtrap.co",
    "toEmail": process.env.EMAIL,
    "subject": "Issue Report",
    "html": "={{ $json.htmlOutput.html }}",
    "additionalFields": {}
};