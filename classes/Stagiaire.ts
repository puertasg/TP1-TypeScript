import { Personne } from "./Personne";
import { Religion } from "./Religion";

class Stagiaire extends Personne {
    private _listeCertifications: Array<Certification>;
    constructor(nom: string, prenom: string, genre: boolean, listeCertifications: Array<Certification>, religion?: Religion) {
        super(nom, prenom, genre, religion);
        this._listeCertifications = listeCertifications;
    }
    /**
     * Getter listeCertifications
     * @return {Array<Certification>}
     */
    public get listeCertifications(): Array<Certification> {
        return this._listeCertifications;
    }

    /**
     * Setter listeCertifications
     * @param {Array<Certification>} value
     */
    public set listeCertifications(value: Array<Certification>) {
        this._listeCertifications = value;
    }
}

export { Stagiaire }