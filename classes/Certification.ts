class Certification {
    private _nom: string;
    private _anneeObtention: string;

    constructor(nom: string, anneeObtention: string) {
        this._nom = nom;
        this._anneeObtention = anneeObtention;
    }
    /**
     * Getter nom
     * @return {string}
     */
    public get nom(): string {
        return this._nom;
    }

    /**
     * Getter anneeObtention
     * @return {string}
     */
    public get anneeObtention(): string {
        return this._anneeObtention;
    }

    /**
     * Setter nom
     * @param {string} value
     */
    public set nom(value: string) {
        this._nom = value;
    }

    /**
     * Setter anneeObtention
     * @param {string} value
     */
    public set anneeObtention(value: string) {
        this._anneeObtention = value;
    }
}

export { Certification };