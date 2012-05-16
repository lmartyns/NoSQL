#!/bin/bash

mongoimport --host localhost --port $1 --db test --collection cyclingteam --type json --file cyclingteam.json