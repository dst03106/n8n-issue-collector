const convertMJML = function() {
    let test = [];
    const issues = $input.first().json.issues;
    for (const issue of issues) {
    let issueInfo = `<mj-text font-size="22px">${issue.issueTitle}</mj-text>
            <mj-spacer></mj-spacer>
            <mj-text font-size="15px" font-weight="bold">🧾 이슈 내용</mj-text>
            <mj-text font-size="14px" line-height="1.6">${issue.issueDescription}</mj-text>
            <mj-text font-size="15px" font-weight="bold">🧩 원인</mj-text>
            <mj-text font-size="14px" line-height="1.6">${issue.rootCause}</mj-text>`;
    
    let resolutionApproach = `<mj-text font-size="15px" font-weight="bold">🛠️ 해결 방향</mj-text><mj-text font-size="14px" line-height="1.6">`;
    let approaches = [] // TODO : 동일한 로직 함수로 만들기
    for (const x of issue.resolutionApproach) {
        approaches.push(`• ${x}`);
    }
    resolutionApproach += approaches.join('<br/>');
    resolutionApproach += '</mj-text>';
    
    let complianceWithStandards = `<mj-text font-size="15px" font-weight="bold">✅ 기준 적합성: ${issue.complianceWithStandards.level}</mj-text><mj-text font-size="14px" line-height="1.6">`
    let standardReasons = [] 
    for (const reason of issue.complianceWithStandards.reasons) {
        standardReasons.push(`• ${reason}`);
    }
    complianceWithStandards += standardReasons.join('<br/>');
    complianceWithStandards += '</mj-text>';
    
    let technicalDifficulty = `<mj-text font-size="15px" font-weight="bold">🧗 기술적인 난이도: ${issue.technicalDifficulty.level}</mj-text><mj-text font-size="14px" line-height="1.6">`
    let difficultyReason  = []
    for (const reason of issue.technicalDifficulty.reasons) {
        difficultyReason.push(`• ${reason}`);
    } 
    technicalDifficulty += difficultyReason.join('<br/>');
    technicalDifficulty += '</mj-text>';

    let issuelink = `<mj-text font-size="15px" font-weight="bold"><p>👉 이슈 보러가기 <a href="${issue.issueURL}">(링크)</a></p></mj-text>`;
    test.push(issueInfo + resolutionApproach + complianceWithStandards + technicalDifficulty + issuelink)
    }

    return {
        issueHTML: `
            <mjml>
            <mj-body>
                <mj-section background-color="#E9E9E9">
            <mj-column>
                        <mj-divider/>
                <mj-image src="https://lh3.googleusercontent.com/d/11VgJS7_uMNmlBLaiN9S68Nz-QWZIsLV4" width="500" height="150"/>
                <mj-divider  border-width="2px"/>
            </mj-column>
            </mj-section>
            
                <mj-wrapper border="1px solid #000000" padding="50px 30px">
                <mj-section>
                    <mj-column>
                    ${test.join(`<mj-divider border-width="1px" border-color="lightgrey"></mj-divider>`)}
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