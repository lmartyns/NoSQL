#!/bin/bash

couchapp push view.js http://$1:$2/cyclist
curl 'http://'$1':'$2'/cyclist/_design/app/_list/to_json/view' | sed -e 's/},/&\n/g;s/\[//g;s/\]//g;s/},/}/g' > disasters.json