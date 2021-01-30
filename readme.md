Do uruchomienia projektu wymagane jest środowisko node.js (Projekt był budowany przy użyciu wersji 15.5.0). Poza samym środowiskiem,
potrzebne jest także pobranie wszystkich zależności. Jest to możliwe za pomocą komendy `npm install`, która należy wywołać w folderze projektu.
Plik definiujący zależności to `package.json`.
Do uruchomienia projektu potrzebna jest baza danych. Domyślnie aplikacja próbuje połączyć się z bazą na localhost.
Zmiana adresu możliwa a także dialektu możliwa jest w pliku `config/sequelize/sequelize.js`. 
Polecenie generujące schemat można znaleźć w pliku `config/sequelize/schema.sql`.
Za pomocą pliku `docker/docker-compose.yml` można uruchomić bazę danych w środowisku docker. Aby to zrobić, wywołujemy komendę `docker-compose up`, 
wcześniej upewniając się że znajdujemy się w folderze `docker`. 
Należy pamiętać o dodaniu schematu `tin-example-sequelize` w bazie. Polecenie sql znajduje sie w pliku `config/sequelize/schema.sql`.
W przypadku hostowanie bazy na dockerze można to zrobić przez aplikację phpAdmin. Aby uzyskać do niej dostęp przechodzimy na `http://localhost:8183/index.php`.
Dane logowania: Serwer - `mysql`. Użytkownik: `root`. Hasło: `root`. 

Przy każdym uruchomieniu aplikacja automatycznie wygeneruje przykładowe dane i zastąpi nimi te znajdujące się w bazie.
Generowane danę można znaleźć i edytować w pliku `config/sequelize/init.js`.

Uruchomienie aplikacji:

polecenie `npm run-script start` uruchomi serwer.
polecenie `npm run-script debug` uruchomi serwer w trybie debugowania, co sprawi że serwer będzie automatycznie restartować się przy zmianie plików a także pozwoli na podłączenie debugera.

Testowanie:

Aby wygodnie testować walidację po stronie serwera, należy wyłączyć walidację po stronie klienta. Aby to zrobić, trzeba usunąć (zakomentować)
fragment `onsubmit="return validateForm()"`. Fragment znajduję  się w plikach edit.ejs i form.ejs i usunięcio go wyłącza walidację odpowiednio na stronach
`./edit` i `./form`.  

Testowanie można przeprowadzić również za pomocą API (`./API/`).

Schemat adresów:

`/` - strona początkowa

`/boss` , `/weapon` , `/drop` - lista danych

`/*DANE*/details/:id` -szczegóły obiektu o podanym id <br/>
`/*DANE*/edit/:id` - forma umożliwiająca edycję obiektu <br/>
`/*DANE*/add` - forma umożliwiająca dodanie nowego obiektu <br/>

API:
`GET /API/*DANE*` - zwraca listę obiektów <br/>
`GET /API/*DANE/:id` - zwraca szczegółu obiektu o podanym id <br/>
`POST /API/*DANE*` - tworzy nowy obiekt <br/>
`PUT /API/*DANE*/:id` - aktualizuje obiekt o podanym id <br/>
`DELETE /API/*DANE*/:id` - usuwa obiekt o podanym id <br/>

Wykorzystane technologie:

[Node.js](https://nodejs.org) <br/>
[Docker](https://www.docker.com) <br/>
[Sequelize](https://sequelize.org) <br/>

Znane błędy:

W repozytorium `repository/sequelize/WeaponRepository.js` w metodzie `getDataById()` 
przy próbie podłączenia modelu `Boss` aplikacja crushuje się. Z tego powodu fragment ten 
został zakomentowany:
`include: [{model: Boss, as: 'Boss' }]` (linia 25).

Ponieważ widoki są uniwersalne niezależnie od liczby danych, w przypadku rozwiązania problemu nie trzeba będzie aktualizować
żadnego z pliku widoków, gdyż te układane są na podstawie modeluDanych, a ten generowany jest na podstawie zwróconych danych.
Dzięki temu aplikacja jest bardzo uniwersalna a proces dodawania czy zmieniania modelów danych ogranicza się do dodania modelów 
i repozytoriów oraz podłączenia kontrolerów (proces ułatwiony dzięki istnieniu `controllers/universalController.js`).
Nie ma potrzeby w żaden sposób modyfikować plików `views`.


s19115 Gustaw Ignut