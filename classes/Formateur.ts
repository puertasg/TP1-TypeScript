import { Personne } from "./Personne";
import { Religion } from "./Religion";
import { Connaissance } from "./Connaissance";

class Formateur extends Personne {

    private _listeConnaissance: Array<Connaissance>;
    constructor(nom: string, prenom: string, genre: boolean, listeConnaissance: Array<Connaissance>, religion?: Religion) {
        super(nom, prenom, genre, religion);
        this._listeConnaissance = listeConnaissance
    }

    enseigner(): Array<Connaissance> {
        let connaissanceExp: Array<Connaissance> = this._listeConnaissance.filter(connaissance => connaissance.anneesExp > 2);
        return connaissanceExp;
    }
}

export { Formateur };