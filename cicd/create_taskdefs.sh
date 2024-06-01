#!/bin/bash

function create_taskdef {
  local env=$1
  local account_id=$(jq -r .${env} <<< "${TARGET_ACCOUNT_IDS}")

  jq --null-input \
    --arg env "${env}" \
    --arg name "${NAME}" \
    --arg version "${CODEBUILD_BUILD_NUMBER}" \
    --arg pascal_case_name "${PASCAL_CASE_NAME}" \
    --arg account_id "${account_id}" \
    --arg region "${AWS_DEFAULT_REGION}" \
    --from-file taskdef.jq \
    >> taskdef_${env}.json
}

create_taskdef dev
create_taskdef demo
create_taskdef prod
