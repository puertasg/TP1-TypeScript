class Trailer {
    private _postdate: string;
    private _url: string;
    private _type: string;
    private _exclusive: boolean;
    private _hd: boolean;
    
    constructor(postdate: string, url: string, type: string, exclusive: boolean, hd: boolean) {
        this._postdate = postdate;
        this._url = url;
        this._type = type;
        this._exclusive = exclusive;
        this._hd = hd;
    }
    /**
     * Getter postdate
     * @return {string}
     */
    public get postdate(): string {
        return this._postdate;
    }

    /**
     * Getter url
     * @return {string}
     */
    public get url(): string {
        return this._url;
    }

    /**
     * Getter type
     * @return {string}
     */
    public get type(): string {
        return this._type;
    }

    /**
     * Getter exclusive
     * @return {boolean}
     */
    public get exclusive(): boolean {
        return this._exclusive;
    }

    /**
     * Getter hd
     * @return {boolean}
     */
    public get hd(): boolean {
        return this._hd;
    }

    /**
     * Setter postdate
     * @param {string} value
     */
    public set postdate(value: string) {
        this._postdate = value;
    }

    /**
     * Setter url
     * @param {string} value
     */
    public set url(value: string) {
        this._url = value;
    }

    /**
     * Setter type
     * @param {string} value
     */
    public set type(value: string) {
        this._type = value;
    }

    /**
     * Setter exclusive
     * @param {boolean} value
     */
    public set exclusive(value: boolean) {
        this._exclusive = value;
    }

    /**
     * Setter hd
     * @param {boolean} value
     */
    public set hd(value: boolean) {
        this._hd = value;
    }
}


export { Trailer }