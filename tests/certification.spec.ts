import { Certification } from "../classes/Certification";
import * as assert from "chai";

let certification: Certification = new Certification("Un diplôme", "2018");

describe("Certification", () => {
    it("Name should be Un diplôme", () => {
        assert.expect(certification.nom).to.equal("Un diplôme");
    });

    it("Year should be 2018", () => {
        assert.expect(certification.anneeObtention).to.equal("2018");
    });
});