/**
 * Basic unit of everything in language
 */
export default abstract class Component {
    /**
     * Raw value of this component
     */
    private _value: string = "";

    constructor(value: string = "") {
        this._value = value;
    }

    /**
     * Convert raw string to actual value
     * @param value Actual value of component
     */
    protected abstract parseValue(value: string): Component;

    /**
     * Create new instance of this component base on passing parameters
     * @param params Parameter for new instance are passed to constructor
     */
    public abstract createInstance(raw: string): Component;

    /**
     * Tag of component is unique, helping parser in parsing process
     */
    public abstract getTag(): string;

    /**
     * Get value of component
     */
    get value(): Component {
        return this.parseValue(this._value);
    }
    /**
     * Get raw value as string
     */
    get raw(): string {
        return this._value;
    }
}