class Partecipante {
    nome;
    cognome;
    paeseOrigine;
    livelloIstruzione;
    competenzeLinguistiche;
    ambitoFormazioneInteresse;
    constructor(nome, cognome, paeseOrigine, livelloIstruzione, competenzeLinguistiche, ambitoFormazioneInteresse) {
        this.nome = nome;
        this.cognome = cognome;
        this.paeseOrigine = paeseOrigine;
        this.livelloIstruzione = livelloIstruzione;
        this.competenzeLinguistiche = competenzeLinguistiche;
        this.ambitoFormazioneInteresse = ambitoFormazioneInteresse;
    }
    iscrivitiCorso(corso) {
        corso.aggiungiPartecipante(this);
        console.log(`${this.nome} ${this.cognome} si è iscritto al corso ${corso.titolo}.`);
    }
}
export { Partecipante };
