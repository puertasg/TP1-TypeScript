import { Connaissance } from "../classes/Connaissance";
import * as assert from "chai"

let connaissance = new Connaissance("Nouvelle connaissance", 3);

describe("Connaissance", () => {
    it("Name should be Nouvelle connaissance", () => {
        assert.expect(connaissance.nom).to.equal("Nouvelle connaissance");
    });

    it("Years of exp. should be 3", () => {
        assert.expect(connaissance.anneesExp).to.equal(3);
    });
})