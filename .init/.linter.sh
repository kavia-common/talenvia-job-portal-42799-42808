#!/bin/bash
cd /home/kavia/workspace/code-generation/talenvia-job-portal-42799-42808/talenvia_frontend
npm run build
EXIT_CODE=$?
if [ $EXIT_CODE -ne 0 ]; then
   exit 1
fi

