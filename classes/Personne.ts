import { Religion } from "./Religion"
import { Boisson } from "./Boisson"
class Personne {
    private _nom: string;
    private _prenom: string;
    private _genre: boolean;
    private _religion?: Religion;

    constructor(nom: string, prenom: string, genre: boolean, religion?: Religion) {
        this._nom = nom;
        this._prenom = prenom;
        this._genre = genre;
        if (religion) {
            this._religion = religion;
        }
    }

    /**
     * Getter nom
     * @return {string}
     */
    public get nom(): string {
        return this._nom;
    }

    /**
     * Getter prenom
     * @return {string}
     */
    public get prenom(): string {
        return this._prenom;
    }

    /**
     * Getter genre
     * @return {boolean}
     */
    public get genre(): boolean {
        return this._genre;
    }

    /**
     * Setter nom
     * @param {string} value
     */
    public set nom(value: string) {
        this._nom = value;
    }

    /**
     * Setter prenom
     * @param {string} value
     */
    public set prenom(value: string) {
        this._prenom = value;
    }

    /**
     * Setter genre
     * @param {boolean} value
     */
    public set genre(value: boolean) {
        this._genre = value;
    }

    boire(boisson: Boisson) {
        let msg = `J'ai bu ${boisson.toString()}`;
        console.log(msg);
        return msg;
    }

    toString(): string {
        return `${this._prenom} ${this._nom}`;
    }
}

export { Personne };