import { Personne } from "../classes/Personne";
import { Religion } from "../classes/Religion";
import * as assert from "chai";
let personne1: Personne = new Personne("Nom personne", "Prénom personne", true, Religion.Atheist);

describe("Personne", () => {
    it("Name should be Nom personne", () => {
        assert.expect(personne1.nom).to.equal("Nom personne");
    });

    it("Firstname should be Prénom personne", () => {
        assert.expect(personne1.prenom).to.equal("Prénom personne");
    });

    it("Genre should be true", () => {
        assert.expect(personne1.genre).to.be.true;
    });
})