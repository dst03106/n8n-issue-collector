const getIssueFromGithubQuery = `
    query {
        repository(owner: "{{ $json.owner }}", name: "{{ $json.name }}") {
            issues(first: 10, states: OPEN, orderBy: { field: CREATED_AT, direction: DESC }) {
                nodes {
                    title
                    url
                    body
                    author {
                        ... on User {
                            login
                        }
                    }
                    issueType {
                        name
                    }
                    labels(first: 5) {
                        edges {
                            node {
                                name
                            }
                        }
                    }
                    comments(first: 10) {
                        nodes {
                            body
                        }
                    }
                }
            }
        }
    }
`
module.exports = {
    "authentication": "headerAuth",
    "endpoint": "https://api.github.com/graphql",
    "query": `=${getIssueFromGithubQuery}`,
    "variables": "="
}