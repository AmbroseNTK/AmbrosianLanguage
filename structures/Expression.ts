import Component from './Component';
import Null from '../operands/Null';
import Parser from '../utils/Parser';
/**
 * Expression in language
 */
export default class Expression extends Component {

    /**
     * Raw string contains all raw components
     */
    private _raw: string = "";
    /**
     * List of components is extracted from raw string
     */
    private _listComp: Array<Component> = new Array<Component>();

    public get ListComp(): Array<Component> {
        return this._listComp;
    }

    private _parser: Parser = new Parser();
    public set Parser(parser: Parser) {
        this._parser = parser;
    }

    constructor(raw: string = "") {
        super();
        this._raw = raw;
        this._listComp = new Array<Component>();
    }

    protected parseValue(value: string): Component {
        return this;
    }

    public execute(): Component {
        this._listComp = this._parser.execute(this._raw);
        return new Null();
    }

    public createInstance(raw: string): Component {
        return new Expression(raw);
    }
    public getTag(): string {
        return "Expression";
    }

}