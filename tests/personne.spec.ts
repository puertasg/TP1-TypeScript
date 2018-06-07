import { Personne } from "../classes/Personne";
import { Religion } from "../classes/Religion";
import * as assert from "chai";
import { Boisson } from "../classes/Boisson";

let personne1: Personne = new Personne("Nom personne", "Prénom personne", true, Religion.Atheist);
let boisson: Boisson = new Boisson("Bière", true, false);

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

    it("Should return J'ai bu Bière, contient de l'achool, n'est pas bio", () => {
        assert.expect(personne1.boire(boisson)).to.equal("J'ai bu Bière, contient de l'achool, n'est pas bio");
    });
})