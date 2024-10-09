class Azienda {
    nomeAzienda;
    settoreAttività;
    descrizione;
    posizioniAperte;
    constructor(nomeAzienda, settoreAttività, descrizione, posizioniAperte) {
        this.nomeAzienda = nomeAzienda;
        this.settoreAttività = settoreAttività;
        this.descrizione = descrizione;
        this.posizioniAperte = posizioniAperte;
    }
    offriPosizione(partecipante, posizione) {
        console.log(`L'azienda ${this.nomeAzienda} ha offerto la posizione ${posizione} a ${partecipante.nome} ${partecipante.cognome}.`);
    }
    mostraPosizioniAperte() {
        console.log(`Posizioni aperte presso ${this.nomeAzienda}:`);
        this.posizioniAperte.forEach((posizione) => {
            console.log(`- ${posizione}`);
        });
    }
}
export { Azienda };
