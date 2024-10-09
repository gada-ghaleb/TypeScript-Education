import { IAzienda } from "../interfaces/IAzienda";
import { IPartecipante } from "../interfaces/IPartecipante";

class Azienda implements IAzienda {
  constructor(
    public nomeAzienda: string,
    public settoreAttività: string,
    public descrizione: string,
    public posizioniAperte: string[]
  ) {}

  offriPosizione(partecipante: IPartecipante, posizione: string): void {
    console.log(
      `L'azienda ${this.nomeAzienda} ha offerto la posizione ${posizione} a ${partecipante.nome} ${partecipante.cognome}.`
    );
  }

  mostraPosizioniAperte(): void {
    console.log(`Posizioni aperte presso ${this.nomeAzienda}:`);
    this.posizioniAperte.forEach((posizione) => {
      console.log(`- ${posizione}`);
    });
  }
}

export { Azienda };
