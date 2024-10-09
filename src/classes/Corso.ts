import { ICorso } from "../interfaces/ICorso";
import { IPartecipante } from "../interfaces/IPartecipante";

class Corso implements ICorso {
  public elencoIscritti: IPartecipante[] = [];

  constructor(
    public titolo: string,
    public descrizione: string,
    public settoreProfessionale: string,
    public durata: number
  ) {}

  aggiungiPartecipante(partecipante: IPartecipante): void {
    this.elencoIscritti.push(partecipante);
    console.log(
      `Partecipante ${partecipante.nome} ${partecipante.cognome} aggiunto al corso ${this.titolo}.`
    );
  }

  mostraPartecipanti(): void {
    if (this.elencoIscritti.length === 0) {
      console.log(`Non ci sono partecipanti iscritti al corso ${this.titolo}.`);
    } else {
      console.log(`Partecipanti iscritti al corso ${this.titolo}:`);
      this.elencoIscritti.forEach((partecipante) => {
        console.log(`- ${partecipante.nome} ${partecipante.cognome}`);
      });
    }
  }
}

export { Corso };
