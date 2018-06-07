import { Stagiaire } from "./Stagiaire";
import { Formateur } from "./Formateur";

class Formation {
    private _nom: string;
    private _dateDebut: Date;
    private _dateFin: Date;
    private _listeStagiaires: Array<Stagiaire>;
    private _listeFormateurs: Array<Formateur>;

    constructor(nom: string, dateDebut: Date, dateFin: Date, listeStagiaires: Array<Stagiaire>, listeFormateurs: Array<Formateur>) {
        this._nom = nom;
        this._dateDebut = dateDebut;
        this._dateFin = dateFin;
        this._listeStagiaires = listeStagiaires;
        this._listeFormateurs = listeFormateurs;
    }
    
    /**
     * Getter nom
     * @return {string}
     */
    public get nom(): string {
        return this._nom;
    }

    /**
     * Getter dateDebut
     * @return {Date}
     */
    public get dateDebut(): Date {
        return this._dateDebut;
    }

    /**
     * Getter dateFin
     * @return {Date}
     */
    public get dateFin(): Date {
        return this._dateFin;
    }

    /**
     * Getter listeStagiaires
     * @return {Array<Stagiaire>}
     */
    public get listeStagiaires(): Array<Stagiaire> {
        return this._listeStagiaires;
    }

    /**
     * Getter listeFormateurs
     * @return {Array<Formateur>}
     */
    public get listeFormateurs(): Array<Formateur> {
        return this._listeFormateurs;
    }

    /**
     * Setter nom
     * @param {string} value
     */
    public set nom(value: string) {
        this._nom = value;
    }

    /**
     * Setter dateDebut
     * @param {Date} value
     */
    public set dateDebut(value: Date) {
        this._dateDebut = value;
    }

    /**
     * Setter dateFin
     * @param {Date} value
     */
    public set dateFin(value: Date) {
        this._dateFin = value;
    }

    /**
     * Setter listeStagiaires
     * @param {Array<Stagiaire>} value
     */
    public set listeStagiaires(value: Array<Stagiaire>) {
        this._listeStagiaires = value;
    }

    /**
     * Setter listeFormateurs
     * @param {Array<Formateur>} value
     */
    public set listeFormateurs(value: Array<Formateur>) {
        this._listeFormateurs = value;
    }
}

export { Formation };