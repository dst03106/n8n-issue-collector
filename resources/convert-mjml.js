const convertMJML = function() {
    const createBulletedList = (items) => {
        if (!Array.isArray(items) || items.length === 0) {
            return '';
        }
        return items.map(item => `<mj-text mj-class="section-content">• ${item}</mj-text>`).join('<br/>');
    };
  
    let summary = `
        <mj-section padding="15px">
            <mj-column border="1px solid #dddddd" background-color="#FCF0D2">
                <mj-text mj-class="section-title">📌 Quick Summary</mj-text>
                ${createBulletedList($input.first().json.summary)}
            </mj-column>
        </mj-section>`;
  
    let issues = [];
    for (const issue of $input.first().json.issues) {
        let issueInfo = `<mj-text mj-class="issue-title">${issue.issueTitle}</mj-text>
                        <mj-spacer/>
                        <mj-text mj-class="section-title">🧾 Issue Description</mj-text>
                        <mj-text mj-class="section-content">${issue.issueDescription}</mj-text>
                        <mj-text mj-class="section-title">🧩 Root Cause</mj-text>
                        <mj-text mj-class="section-content">${issue.rootCause}</mj-text>`;
        let resolutionApproach = `<mj-text mj-class="section-title">🛠️ Resolution Approach</mj-text><mj-text font-size="14px" line-height="1.6">`;
        resolutionApproach += createBulletedList(issue.resolutionApproach);
        resolutionApproach += '</mj-text>';
        
        let issueSuitability = `<mj-text mj-class="section-title">✅ Issue Suitability: ${issue.issueSuitability.level}</mj-text><mj-text font-size="14px" line-height="1.6">`
        issueSuitability += createBulletedList(issue.issueSuitability.reasons);
        issueSuitability += '</mj-text>';
        
        let technicalDifficulty = `<mj-text mj-class="section-title">🧗 Technical Difficulty: ${issue.technicalDifficulty.level}</mj-text><mj-text font-size="14px" line-height="1.6">`
        technicalDifficulty += createBulletedList(issue.technicalDifficulty.reasons);
        technicalDifficulty += '</mj-text>';
  
        let issuelink = `<mj-text mj-class="section-title"><p>👉 Go to Issue <a href="${issue.issueURL}">(Link)</a></p></mj-text>`;
  
        issues.push(issueInfo + resolutionApproach + issueSuitability + technicalDifficulty + issuelink)
    }
  
    return {
        issueHTML: `
            <mjml>
              <mj-head>
                    <mj-attributes>
                        <mj-class name="issue-title" font-size="22px" />
                        <mj-class name="section-title" font-size="15px" font-weight="bold"/>
                        <mj-class name="section-content" font-size="14px" line-height="1.6"/>
                    </mj-attributes>
                </mj-head>
                <mj-body>
                    <mj-section>
                        <mj-column>
                            <mj-image src="https://lh3.googleusercontent.com/d/1bveO7WYcxDDMgPJGCKniHpxKWUJkgDqf" width="1000" height="150"/>
                        </mj-column>
                    </mj-section>
                    <mj-divider  border-width="1px" border-color="#D3D3D3"/>
                    <mj-section>
                        <mj-column>
                            <mj-image src="${
$('Get Programming Humor From Reddit').first().json.data.children[0].data.preview.images[0].source.url}" width="400px"/>
                            <mj-text align="center" font-weight="bold" mj-class="section-content">⬆️ ${
$('Get Programming Humor From Reddit').first().json.data.children[0].data.title}</mj-text>
                        </mj-column>
                    </mj-section>
                    <mj-wrapper>
                        ${summary}
                        <mj-section>
                            <mj-column>
                                ${issues.join(`<mj-divider  border-width="1px" border-color="#D3D3D3"/>`)}
                            </mj-column>
                        </mj-section>
                    </mj-wrapper>
            </mj-body>
            </mjml>`
    }
};

module.exports = {
    "jsCode": convertMJML.toString()
};
