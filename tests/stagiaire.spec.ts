import { Certification } from "../classes/Certification";
import { Stagiaire } from "../classes/Stagiaire";
import * as assert from "chai";

let certification: Certification = new Certification("Un diplôme", new Date('December 17, 2018 03:24:00'));
let certification2: Certification = new Certification("Un deuxième diplôme", new Date('December 17, 2017 03:24:00'));

let listeCertifications: Array<Certification> = [certification, certification2];
let stagiaire: Stagiaire = new Stagiaire("N stagiaire", "P stagiaire", false, listeCertifications);

describe("Stagiaire", () => {
    it("Should have 2 certifications", () => {
        assert.expect(stagiaire.listeCertifications.length).to.equal(2);
    });
})