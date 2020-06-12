#!/bin/bash

RELATIVE_SH_PATH=$(dirname "$0")
ABSOLUT_SH_PATH=$(realpath "$RELATIVE_SH_PATH")

NODE_MODULES_PATH="${ABSOLUT_SH_PATH}/../node_modules"
BIN_PATH="${NODE_MODULES_PATH}/typescript-json-schema/bin/typescript-json-schema"

if [[ -z "$1" ]] || [[ -z "$2" ]]; then
    printf "\n";
    printf "Usage: typescript-json-schema <path-to-typescript-files> <type> \n"
    printf "\n";
    printf "    path-to-typescript-files:       Path to typescript file \n";
    printf "    type:                           Specific type or \"*\" to generate the schema for all types \n";
    printf "\n";
    exit;
fi

file=$1
dir=$(dirname "$file")
fileType=$(basename "$file")
fileSchema="${fileType/Type.ts/Schema.ts}"
schemaName="${fileSchema/.ts/}"
#type="${fileType/.ts/}"
type=$2

schema=$(${BIN_PATH} --ignoreErrors --required "$file" "$type")
echo "export const ${schemaName} = ${schema};" > "${dir}/${fileSchema}"
