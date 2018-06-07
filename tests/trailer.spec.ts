import { Trailer } from "../classes/Trailer";
import * as assert from "chai";

let trailer: Trailer = new Trailer(new Date('December 17, 1995'), "url ici", "type ici", true, false);
describe("Trailer", () => {
    it("Post date should be Sun Dec 17 1995", () => {
        assert.expect(trailer.postdate.toDateString()).to.equal("Sun Dec 17 1995");
    });

    it("URL should be url ici", () => {
        assert.expect(trailer.url).to.equal("url ici");
    });

    it("Type should be type ici", () => {
        assert.expect(trailer.type).to.equal("type ici");
    });

    it("Exclusive should be true", () => {
        assert.expect(trailer.exclusive).to.be.true;
    });

    it("HD should be false", () => {
        assert.expect(trailer.hd).to.be.false;
    });
})