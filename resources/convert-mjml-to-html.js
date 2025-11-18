const convertMJMLToHTML = function() {
    const mjml2html = require('mjml');
    return {
        htmlOutput: mjml2html($input.first().json.issueHTML)
    }
};

module.exports = {
    "jsCode": convertMJMLToHTML.toString()  
};