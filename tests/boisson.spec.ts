import { Boisson } from "../classes/Boisson";
import * as assert from "chai"

let boisson: Boisson = new Boisson("Verre d'eau", false, true);

describe("Boisson", () => {
    it("Alchool flag should be false", () => {
        assert.expect(boisson.alcholisee).to.be.false;
    });

    it("Bio flag should be true", () => {
        assert.expect(boisson.bio).to.be.true;
    });

    it("Name should be Verre d'eau", () => {
        assert.expect(boisson.nom).to.equal("Verre d'eau");
    });
})