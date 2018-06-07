class Connaissance {

    private _nom: string;
    private _anneesExp: number;
    constructor(nom: string, anneesExp: number) {
        this._nom = nom;
        this._anneesExp = anneesExp;
    }
    /**
     * Getter nom
     * @return {string}
     */
    public get nom(): string {
        return this._nom;
    }

    /**
     * Getter anneesExp
     * @return {number}
     */
    public get anneesExp(): number {
        return this._anneesExp;
    }

    /**
     * Setter nom
     * @param {string} value
     */
    public set nom(value: string) {
        this._nom = value;
    }

    /**
     * Setter anneesExp
     * @param {number} value
     */
    public set anneesExp(value: number) {
        this._anneesExp = value;
    }
}


export { Connaissance };