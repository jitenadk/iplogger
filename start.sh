#!/bin/bash

if [ -z "$1" ]; then
    echo "[-] Provide an argument :: ./run.sh {test, init}"
    exit 1
fi

if [ "$1" == "test" ]; then
    npm run test-honeypot
elif [ "$1" == "init" ]; then 
    npm run init-honeypot
fi
