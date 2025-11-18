const parseYaml = function() {
    const YAML = require('yaml');
    for (const item of $input.all()) {
    let response = $input.first().json.output;
    let responseText = response
            .replace(/^(\n)+/, '')
            .replace(/^yaml/, '')
            .replace(/^```yaml/, '')
            .trimEnd()
            .replace(/```$/, '');
        item.json = YAML.parse(responseText);
    }
    
    return $input.all();
};

module.exports = {
  "jsCode": parseYaml.toString()
};