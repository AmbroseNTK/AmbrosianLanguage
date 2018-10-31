import Component from '../structures/Component';
import Null from '../operands/Null';
/**
 * Parse raw string to components
 */
export default class Parser extends Array<ParseElement> {

    constructor() {
        super();
    }

    /**
     * Extract components from source
     * @param source source code
     */
    public execute(source: string): Array<Component> {
        var result = new Array<Component>();
        var traceTable: TraceTable = new TraceTable();
        traceTable.initialize(0, source.length);

        for (let i = 0; i < this.length; i++) {
            var temp = source.substring(0);
            var pos = -1;
            var matches = temp.match(this[i].Feature);
            while (matches != null && matches.length != 0) {
                pos = temp.search(this[i].Feature);
                if (traceTable[0][pos] == "") {
                    if (this[i].IsTrace) {
                        for (let j = pos; j < pos + matches[0].length; j++) {
                            traceTable[0][j] = this[i].Result.getTag();
                        }
                    }
                    result.push(this[i].Result.createInstance(matches[0]));
                }

                temp = temp.substring(pos + matches[0].length - 1);
                matches.splice(0, 1);
            }
        }

        return result;
    }
}

/**
 * Specific parse process for a component
 */
export class ParseElement {

    /**
     * Feature of component, Regular Expression
     */
    public Feature: RegExp;
    /**
     * Component need to be parsed
     */
    public Result: Component = new Null();

    /**
     * Set true to mark this component to trace table
     */
    public IsTrace: boolean = false;

    /**
     * 
     * @param feature Feature of component, Regular Expression
     * @param result Component need to be parsed
     * @param isTrace Set true to mark this component to trace table
     */
    constructor(feature: RegExp, result: Component, isTrace: boolean) {
        this.Feature = feature;
        this.Result = result;
        this.IsTrace = isTrace;
    }
}

/**
 * Marking parsed characters
 */
export class TraceTable extends Array<Array<string>>{
    constructor() {
        super();
    }

    /**
     * Initialize new matrix row x col
     * @param numOfRows Number of rows
     * @param numOfCols Number of cols
     */
    public initialize(numOfRows: number, numOfCols: number): void {
        this.splice(0, this.length);
        for (let i = 0; i < numOfRows; i++) {
            this.push(new Array<string>());
            for (let j = 0; j < numOfCols; j++) {
                this[i].push("");
            }
        }
    }

    /**
     * Get tag at row,column position
     * @param row row
     * @param col column
     */
    public get(row: number, col: number): string {
        return this[row][col];
    }

}