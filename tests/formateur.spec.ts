import { Formateur } from "../classes/Formateur";
import { Connaissance } from "../classes/Connaissance";
import * as assert from "chai";

let connaissance = new Connaissance("Nouvelle connaissance", 0);
let connaissanceAcquise = new Connaissance("Connaissance acquise", 4);

let listeConnaissances = [connaissance, connaissanceAcquise];
let formateur = new Formateur("Nom du formateur", "Prénom du formateur", true, listeConnaissances);

describe("Formateur", () => {
    it("Name should be Nom du formateur", () => {
        assert.expect(formateur.nom).to.equal("Nom du formateur");
    });

    it("Firstname should be Prénom du formateur", () => {
        assert.expect(formateur.prenom).to.equal("Prénom du formateur");
    });

    it("Genre should be true", () => {
        assert.expect(formateur.genre).to.be.true;
    });

    it("Should have 2 Connaissance", () => {
        assert.expect(formateur.listeConnaissance.length).to.equal(2);
    });

    it("Should have 1 Connaissance enseignable", () => {
        assert.expect(formateur.enseigner().length).to.equal(1);
    });
})