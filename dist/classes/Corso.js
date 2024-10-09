class Corso {
    titolo;
    descrizione;
    settoreProfessionale;
    durata;
    elencoIscritti = [];
    constructor(titolo, descrizione, settoreProfessionale, durata) {
        this.titolo = titolo;
        this.descrizione = descrizione;
        this.settoreProfessionale = settoreProfessionale;
        this.durata = durata;
    }
    aggiungiPartecipante(partecipante) {
        this.elencoIscritti.push(partecipante);
        console.log(`Partecipante ${partecipante.nome} ${partecipante.cognome} aggiunto al corso ${this.titolo}.`);
    }
    mostraPartecipanti() {
        if (this.elencoIscritti.length === 0) {
            console.log(`Non ci sono partecipanti iscritti al corso ${this.titolo}.`);
        }
        else {
            console.log(`Partecipanti iscritti al corso ${this.titolo}:`);
            this.elencoIscritti.forEach((partecipante) => {
                console.log(`- ${partecipante.nome} ${partecipante.cognome}`);
            });
        }
    }
}
export { Corso };
