#!/bin/bash

curl -X PUT 'http://'$1':'$2'/cyclist'
curl -X POST -H "Content-Type: application/json" --data @cyclingteam.json http://$1:$2/cyclist/_bulk_docs
