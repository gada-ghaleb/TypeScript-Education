import { Azienda } from "./classes/Azienda.js";
import { Corso } from "./classes/Corso.js";
import { Partecipante } from "./classes/Partecipante.js";

let partecipante1 = new Partecipante("Ali", "Khan", "Pakistan", "Diploma", ["Inglese", "Urdu"], "Carpenteria");
let partecipante2 = new Partecipante("Maria", "Garcia", "Spagna", "Laurea", ["Inglese", "Spagnolo"], "Sartoria");
let partecipante3 = new Partecipante("Anna", "Verdi", "Spagna", "Laurea", ["Spagnolo", "Italiano"], "Sartoria");
let partecipante4 = new Partecipante("Fatima", "Al-Hassan", "Egitto", "Diploma", ["Arabo", "Inglese"], "Cucina");

let corsoCarpenteria = new Corso("Corso di Carpenteria", "Impara il mestiere di carpentiere", "Artigianato", 3);
let corsoSartoria = new Corso("Corso di Sartoria", "Crea abiti su misura", "Moda", 2);
let corsoCucina = new Corso("Corso di Cucina Mediterranea", "Impara a preparare piatti mediterranei tradizionali", "Cucina", 2);

partecipante1.iscrivitiCorso(corsoCarpenteria);
partecipante2.iscrivitiCorso(corsoSartoria);
partecipante3.iscrivitiCorso(corsoSartoria);
partecipante4.iscrivitiCorso(corsoCucina);

let falegnameriaNapoli = new Azienda("Falegnameria Napoli", "Carpenteria", "Specializzata in mobili artigianali", ["Carpentiere"]);
let atelierModaParigi = new Azienda("Atelier di Moda Parigi", "Moda", "Atelier di sartoria e abbigliamento", ["Sarto"]);
let ristoranteDelMare = new Azienda("Ristorante del Mare", "Cucina", "Ristorante specializzato in cucina mediterranea", ["Cuoco", "Aiuto Cuoco"]);

falegnameriaNapoli.offriPosizione(partecipante1, "Carpentiere");
atelierModaParigi.offriPosizione(partecipante2, "Sarto");
atelierModaParigi.offriPosizione(partecipante3, "Sarto");
ristoranteDelMare.offriPosizione(partecipante4, "Cuoco");
