#!/bin/bash

mongoimport --host $1 --port $2 --db test --collection cyclingTeam --type json --file cyclistN.json