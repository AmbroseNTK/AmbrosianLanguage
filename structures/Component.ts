/**
 * Basic unit of everything in language
 */
export default abstract class Component {
    /**
     * Raw value of this component
     */
    private _value: string = "";
    protected _posColumn: number = 0;
    protected _posRow: number = 0;

    /**
     * 
     * @param value Value of component
     * @param posColumn Position (Column) of component in source code
     * @param posRow  Position (Row) of component in source code
     */
    constructor(value: string = "", posColumn: number = 0, posRow: number = 0) {
        this._value = value;
        this._posColumn = posColumn;
        this._posRow = posRow;
    }

    /**
     * Convert raw string to actual value
     * @param value Actual value of component
     */
    protected abstract parseValue(value: string): any;

    /**
     * Create new instance of this component base on passing parameters
     * @param params Parameter for new instance are passed to constructor
     */
    public abstract createInstance(raw: string, column: number, row: number): Component;

    /**
     * Tag of component is unique, helping parser in parsing process
     */
    public abstract getTag(): string;

    /**
     * Get value of component
     */
    get value(): any {
        return this.parseValue(this._value);
    }
    /**
     * Get raw value as string
     */
    get raw(): string {
        return this._value;
    }

    get posRow(): number {
        return this._posRow;
    }
    get posColumn(): number {
        return this._posColumn;
    }

}