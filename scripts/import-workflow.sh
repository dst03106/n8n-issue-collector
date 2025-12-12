#!/bin/bash

GIT_ROOT=$(git rev-parse --show-toplevel)
cat << EOF > cred.json
[
	 {
			"id": "openRouterApi",
			"name": "OpenRouter account",
			"type": "openRouterApi",
			"data": {
					"apiKey": "$OPENROUTER_API_KEY"
			}
		},
		{
			"id": "httpHeaderAuth",
			"name": "Header Auth account",
			"type": "httpHeaderAuth",
			"data": {
					"name": "Authorization",
					"value": "Bearer $N8N_GITHUB_ACCESS_TOKEN"
			}
		},
		{
			 "id": "smtp",
			 "name": "SMTP account",
			 "type": "smtp",
			 "data": {
					"user": "$EMAIL",
					"password": "$GOOGLE_APP_PASSWORD",
					"host": "smtp.gmail.com",
					"port": 465,
					"secure": true,
					"disableStartTls": false,
					"hostName": ""
				}
		}
] 
EOF
npx n8n import:credentials --input="cred.json"
node $GIT_ROOT/scripts/build-workflow.js n8n.json
npx n8n import:workflow --input="$GIT_ROOT/dist/workflow.json"
