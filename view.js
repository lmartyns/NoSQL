var couchapp = require('couchapp');
ddoc = {
  _id: '_design/app'
  , views: {}
  , lists: {}
}
module.exports = ddoc;

ddoc.views.view = {
  map: function(doc) {
    emit(null, doc);
  }
}

ddoc.lists.to_json = function(head, req) {
 
 provides('json', function() {
        var results = [];

        while (row = getRow()) {
            results.push({
                teamname: row.value.teamname,
                status: row.value.status,
                discipline: row.value.discipline,
                manager: row.value.manager,
                code: row.value.code,
                founded: row.value.founded
            });
        }
send(JSON.stringify(results));
    });
} 