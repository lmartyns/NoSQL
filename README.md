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

CouchDB Map Reduce
-------------------------------------------------------
Zapisanie operacji Map Reduce do bazy CouchDB.
	
	couchapp push CouchMapReduce.js http://localhost:5984/cyclist

Zapytania oraz odpowiedzi

Ilość zespołów z licencją ProTour.

	http://sigma.ug.edu.pl:5984/cyclist/_design/app/_view/sta?key="ProTour"
Odpowiedź:

	{"rows":[
		{"key":null,"value":16}
	]}

Jakie to zespoły?
	
	http://sigma.ug.edu.pl:5984/cyclist/_design/app/_view/sta?key="ProTour"&reduce=false	
Odpowiedź:

	{"total_rows":46,"offset":13,"rows":[
		{"id":"3a6700edfbcba5740e567122d30169da","key":"ProTour","value":null},
		{"id":"3a6700edfbcba5740e567122d3018506","key":"ProTour","value":null},
		{"id":"3a6700edfbcba5740e567122d301895e","key":"ProTour","value":null},
		{"id":"3a6700edfbcba5740e567122d30195d8","key":"ProTour","value":null},
		{"id":"3a6700edfbcba5740e567122d301ab79","key":"ProTour","value":null},
		{"id":"3a6700edfbcba5740e567122d301e43d","key":"ProTour","value":null},
		{"id":"3a6700edfbcba5740e567122d301faef","key":"ProTour","value":null},
		{"id":"3a6700edfbcba5740e567122d3020555","key":"ProTour","value":null},
		{"id":"3a6700edfbcba5740e567122d3021acb","key":"ProTour","value":null},
		{"id":"3a6700edfbcba5740e567122d30220fb","key":"ProTour","value":null},
		{"id":"3a6700edfbcba5740e567122d30235fd","key":"ProTour","value":null},
		{"id":"3a6700edfbcba5740e567122d3026547","key":"ProTour","value":null},
		{"id":"3a6700edfbcba5740e567122d3026b9d","key":"ProTour","value":null},
		{"id":"3a6700edfbcba5740e567122d3026c41","key":"ProTour","value":null},
		{"id":"3a6700edfbcba5740e567122d3029a88","key":"ProTour","value":null},
		{"id":"3a6700edfbcba5740e567122d3029e96","key":"ProTour","value":null}
	]}

Zespoły które występują na torze:

	http://sigma.ug.edu.pl:5984/cyclist/_design/app/_view/spec?key="Track"
	
Odpowiedź:
	
	{"rows":[
		{"key":null,"value":3}
	]}
	
Jakie to zespoły? :
	
	http://sigma.ug.edu.pl:5984/cyclist/_design/app/_view/spec?key="Track"&reduce=false
Odpowiedź:
	
	{"total_rows":46,"offset":43,"rows":[
		{"id":"3a6700edfbcba5740e567122d3020ded","key":"Track","value":null},
		{"id":"3a6700edfbcba5740e567122d3021303","key":"Track","value":null},
		{"id":"3a6700edfbcba5740e567122d3026ab1","key":"Track","value":null}
	]}
	
Zaspoły założone w 2000 roku:

	http://sigma.ug.edu.pl:5984/cyclist/_design/app/_view/zal?key="2000"&reduce=false
	
Odpowiedz:

	{"total_rows":46,"offset":21,"rows":[
		{"id":"a1b6b040896f9249c71d099c56000dd7","key":"2000","value":null},
		{"id":"a1b6b040896f9249c71d099c56009b48","key":"2000","value":null}
	]}
	
