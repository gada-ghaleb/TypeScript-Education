import { IPartecipante } from './IPartecipante';

export interface IAzienda {
    nomeAzienda: string;
    settoreAttività: string;
    descrizione: string;
    posizioniAperte: string[];

    
    offriPosizione(partecipante: IPartecipante, posizione: string): void;
}
