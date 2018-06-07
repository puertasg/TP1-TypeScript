import { Stagiaire } from "./Stagiaire";
import { Formateur } from "./Formateur";

class Formation {
    private _nom: string;
    private _dateDebut: string;
    private _dateFin: string;
    private _listeStagiaires: Array<Stagiaire>;
    private _listeFormateurs: Array<Formateur>;

    constructor(nom: string, dateDebut: string, dateFin: string, listeStagiaires: Array<Stagiaire>, listeFormateurs: Array<Formateur>) {
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
     * @return {string}
     */
    public get dateDebut(): string {
        return this._dateDebut;
    }

    /**
     * Getter dateFin
     * @return {string}
     */
    public get dateFin(): string {
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
     * @param {string} value
     */
    public set dateDebut(value: string) {
        this._dateDebut = value;
    }

    /**
     * Setter dateFin
     * @param {string} value
     */
    public set dateFin(value: string) {
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