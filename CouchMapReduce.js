var couchapp = require('couchapp');
ddoc = {
    _id: '_design/app'
  , views: {}
}
module.exports = ddoc;

ddoc.views.sta = {
  map: function(doc) {
       emit(doc.status);
  },
  reduce: "_count"
}

ddoc.views.spec = {
  map: function(doc) {
       emit(doc.discipline);
  },
  reduce: "_count"
}

ddoc.views.zal = {
  map: function(doc) {
       emit(doc.founded);
  },
  reduce: "_count"
}