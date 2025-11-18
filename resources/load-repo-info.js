const repo_input = `${process.env.REPO}`.split("/");
const repo_owner = repo_input[0];
const repo_name = repo_input[1];
const loadRepoInfo = `{
    return {
        owner: "${repo_owner}",
        name: "${repo_name}"
    }
};
`

module.exports = {
    "jsCode": loadRepoInfo
};