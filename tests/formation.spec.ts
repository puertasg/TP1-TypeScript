import { Formation } from "../classes/Formation";
import { Stagiaire } from "../classes/Stagiaire";
import { Certification } from "../classes/Certification";
import { Formateur } from "../classes/Formateur";
import { Connaissance } from "../classes/Connaissance";
import * as assert from "chai";

let certification = new Certification("Un diplôme", "2018");
let certification2 = new Certification("Un deuxième diplôme", "2017");

let listeCertifications = [certification, certification2];
let stagiaire1 = new Stagiaire("N stagiaire 1", "P stagiaire 1", false, listeCertifications);
let stagiaire2 = new Stagiaire("N stagiaire 2", "P stagiaire 2", true, listeCertifications);

let connaissance = new Connaissance("Nouvelle connaissance", 0);
let connaissanceAcquise = new Connaissance("Connaissance acquise", 4);

let listeConnaissances = [connaissance, connaissanceAcquise];
let formateur1 = new Formateur("Nom du 1er formateur", "Prénom du 1er formateur", true, listeConnaissances);
let formateur2 = new Formateur("Nom du 1er formateur", "Prénom du 1er formateur", false, listeConnaissances);

let listeStagiaires = [stagiaire1, stagiaire2];
let listeFormateurs = [formateur1, formateur2];

let formation = new Formation("Une nouvelle formation", "03-04-2018", "29-06-2018", listeStagiaires, listeFormateurs);

describe("Formation", () => {
    it("Name should be Une nouvelle formation", () => {
        assert.expect(formation.nom).to.equal("Une nouvelle formation");
    });

    it("Date début should be 03-04-2018", () => {
        assert.expect(formation.dateDebut).to.equal("03-04-2018");
    });

    it("Date fin should be 29-06-2018", () => {
        assert.expect(formation.dateFin).to.equal("29-06-2018");
    });

    it("Should have 2 Stagiaires", () => {
        assert.expect(formation.listeStagiaires.length).to.equal(2);
    });

    it("Should have 2 Formateurs", () => {
        assert.expect(formation.listeFormateurs.length).to.equal(2);
    });
})