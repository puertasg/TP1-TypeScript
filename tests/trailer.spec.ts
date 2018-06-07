import { Trailer } from "../classes/Trailer";
import * as assert from "chai";

let trailer = new Trailer("post date", "url ici", "type ici", true, false);

describe("Trailer", () => {
    it("Post date should be post date", () => {
        assert.expect(trailer.postdate).to.equal("post date");
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