class Certification {
    private _nom: string;
    private _anneeObtention: Date;

    constructor(nom: string, anneeObtention: Date) {
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
     * @return {Date}
     */
    public get anneeObtention(): Date {
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
     * @param {Date} value
     */
    public set anneeObtention(value: Date) {
        this._anneeObtention = value;
    }

}

export { Certification };