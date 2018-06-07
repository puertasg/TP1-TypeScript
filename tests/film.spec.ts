import { Film } from "../classes/Film"
import { Trailer } from "../classes/Trailer";
import * as assert from "chai";

let genre: string[] = ["Action and Adventure"]
let actors: string[] = [
    "Dean Ambrose",
    "Roger Cross",
    "Daniel Cudmore",
    "Lochlyn Munro",
    "Ty Olsson",
    "Sarah Smyth"
]
let trailers: Array<Trailer> = [new Trailer(new Date('July 27, 2015'), "/trailers/lions_gate/12rounds3lockdown/", "Trailer", false, true)];
let film: Film = new Film("12 Rounds 3: Lockdown", new Date('September 11, 2015'), "Lionsgate", "http://trailers.apple.com/trailers/lions_gate/12rounds3lockdown/images/poster.jpg", "/trailers/lions_gate/12rounds3lockdown/", "R", genre, "Stephen Reynolds", actors, trailers);

describe('Film', () => {
    it('Should have 6 actors', () => {
        assert.expect(film.actors.length).to.equal(6);
    });

    it('Should have 1 genre', () => {
        assert.expect(film.genre.length).to.equal(1);
    });

    it('Should have 1 trailer', () => {
        assert.expect(film.trailers.length).to.equal(1);
    });
});