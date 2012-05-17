NoSQL
=====
Dodawanie do bazy CouchDB
-------------------------------------------------------
	./importCouch.sh $1 $2

$1 - host na którym działa baza danych CouchDB

$2 - port na którym działa baza danych CouchDB

Eksport z bazy CouchDB
-------------------------------------------------------
	/.exportCouch.sh
Tworzy plik `cyclistN.json` w którym są dane gotowe do zapisu w bazie MongoDB.

Import do bazy MongoDB
-------------------------------------------------------
	./importMongoDB.sh $1 $2
$1 - host na którym działa baza danych MongoDB

$2 - port na którym działa baza danych MongoDB