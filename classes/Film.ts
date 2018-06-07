import { Trailer } from "./Trailer";

class Film {
    private _title: string;
    private _releasedate: string;
    private _studio: string;
    private _poster: string;
    private _location: string;
    private _rating: string;
    private _genre: string[];
    private _directors: string;
    private _actors: string[];
    private _trailers: Array<Trailer>;

    constructor(title: string, releasedate: string, studio: string, poster: string, location: string, rating: string, genre: string[], directors: string, actors: string[], trailers: Array<Trailer>) {
        this._title = title;
        this._releasedate = releasedate;
        this._studio = studio;
        this._poster = poster;
        this._location = location;
        this._rating = rating;
        this._genre = genre;
        this._directors = directors;
        this._actors = actors;
        this._trailers = trailers;
    }
    
    /**
     * Getter title
     * @return {string}
     */
    public get title(): string {
        return this._title;
    }

    /**
     * Getter releasedate
     * @return {string}
     */
    public get releasedate(): string {
        return this._releasedate;
    }

    /**
     * Getter studio
     * @return {string}
     */
    public get studio(): string {
        return this._studio;
    }

    /**
     * Getter poster
     * @return {string}
     */
    public get poster(): string {
        return this._poster;
    }

    /**
     * Getter location
     * @return {string}
     */
    public get location(): string {
        return this._location;
    }

    /**
     * Getter rating
     * @return {string}
     */
    public get rating(): string {
        return this._rating;
    }

    /**
     * Getter genre
     * @return {string[]}
     */
    public get genre(): string[] {
        return this._genre;
    }

    /**
     * Getter directors
     * @return {string}
     */
    public get directors(): string {
        return this._directors;
    }

    /**
     * Getter actors
     * @return {string[]}
     */
    public get actors(): string[] {
        return this._actors;
    }

    /**
     * Getter trailers
     * @return {Array<Trailer>}
     */
    public get trailers(): Array<Trailer> {
        return this._trailers;
    }

    /**
     * Setter title
     * @param {string} value
     */
    public set title(value: string) {
        this._title = value;
    }

    /**
     * Setter releasedate
     * @param {string} value
     */
    public set releasedate(value: string) {
        this._releasedate = value;
    }

    /**
     * Setter studio
     * @param {string} value
     */
    public set studio(value: string) {
        this._studio = value;
    }

    /**
     * Setter poster
     * @param {string} value
     */
    public set poster(value: string) {
        this._poster = value;
    }

    /**
     * Setter location
     * @param {string} value
     */
    public set location(value: string) {
        this._location = value;
    }

    /**
     * Setter rating
     * @param {string} value
     */
    public set rating(value: string) {
        this._rating = value;
    }

    /**
     * Setter genre
     * @param {string[]} value
     */
    public set genre(value: string[]) {
        this._genre = value;
    }

    /**
     * Setter directors
     * @param {string} value
     */
    public set directors(value: string) {
        this._directors = value;
    }

    /**
     * Setter actors
     * @param {string[]} value
     */
    public set actors(value: string[]) {
        this._actors = value;
    }

    /**
     * Setter trailers
     * @param {Array<Trailer>} value
     */
    public set trailers(value: Array<Trailer>) {
        this._trailers = value;
    }
}

export { Film };