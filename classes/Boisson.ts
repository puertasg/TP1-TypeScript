class Boisson {
    private _nom: string;
    private _alcholisee: boolean;
    private _bio: boolean;
    constructor(nom: string, alcholisee: boolean, bio: boolean) {
        this._nom = nom;
        this._alcholisee = alcholisee;
        this._bio = bio;
    }
    /**
     * Getter nom
     * @return {string}
     */
    public get nom(): string {
        return this._nom;
    }

    /**
     * Getter alcholisee
     * @return {boolean}
     */
    public get alcholisee(): boolean {
        return this._alcholisee;
    }

    /**
     * Getter bio
     * @return {boolean}
     */
    public get bio(): boolean {
        return this._bio;
    }

    /**
     * Setter nom
     * @param {string} value
     */
    public set nom(value: string) {
        this._nom = value;
    }

    /**
     * Setter alcholisee
     * @param {boolean} value
     */
    public set alcholisee(value: boolean) {
        this._alcholisee = value;
    }

    /**
     * Setter bio
     * @param {boolean} value
     */
    public set bio(value: boolean) {
        this._bio = value;
    }

    public toString(): string {
        let alchoolString: string;
        let bioString: string;

        if (this._alcholisee) {
            alchoolString = "contient de l'achool";
        }
        else {
            alchoolString = "ne contient pas d'alchool";
        }

        if (this._bio) {
            bioString = "est bio";
        }
        else {
            bioString = "n'est pas bio";
        }
        return `${this._nom}, ${alchoolString}, ${bioString}`;
    }
}

export { Boisson }