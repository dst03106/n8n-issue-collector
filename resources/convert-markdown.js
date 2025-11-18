const convertMarkdown = function() {
  let markdwon_list = [];
  
  const issues = $input.first().json.data.repository.issues.nodes;
  
  for (let i = 0; i < issues.length; i++) {
    const issue = issues[i];
    if (!issue.author?.login) continue;
    
    const comments_text = issue.comments?.nodes.length ? issue.comments.nodes.map(c => `- ${c.body}`).join('\n') : "NA";
    const labels_text = issue.labels.edges.length ? issue.labels.edges.map(edge => edge.node.name).join(",") : "NA";
    const issue_type = issue.issueType ?? "NA";
    
    markdwon_list.push(`
      ## Issue ${i}
      **Title**: ${issue.title}
      **Type**: ${issue_type}
      **Labels**: ${labels_text}
      **Body**: ${issue.body}
      **Comments**: ${comments_text}
      **URL**: ${issue.url}
    `)
  }
  
  return {
    markdown_list: markdwon_list.join('\n')
  }
};

module.exports = {
  "jsCode": convertMarkdown.toString()
};