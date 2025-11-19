module.exports = {
    "fromEmail": process.env.EMAIL,
    "toEmail": process.env.EMAIL,
    "subject": "Issue Report",
    "html": "={{ $json.htmlOutput.html }}",
    "options": {}
};