import { Certification } from "../classes/Certification";
import { Stagiaire } from "../classes/Stagiaire";
import * as assert from "chai";

let certification = new Certification("Un diplôme", "2018");
let certification2 = new Certification("Un deuxième diplôme", "2017");

let listeCertifications = [certification, certification2];
let stagiaire = new Stagiaire("N stagiaire", "P stagiaire", false, listeCertifications);

describe("Stagiaire", () => {
    it("Should have 2 certifications", () => {
        assert.expect(stagiaire.listeCertifications.length).to.equal(2);
    });
})