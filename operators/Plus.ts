import Component from '../structures/Component';
import IOperator from './IOperator';
import Null from '../operands/Null';
import Str from '../operands/Str';
import Num from '../operands/Num';
export default class Plus extends Component implements IOperator {

    protected parseValue(value: string) {
        return value;
    }
    public createInstance(raw: string): Component {
        return new Plus();
    }
    public getTag(): string {
        return "Plus";
    }

    assert(params: Component[]): string {
        let strTag = new Str("").getTag();
        let numTag = new Num("").getTag();
        //Just have number and string in params
        for (let i = 0; i < params.length; i++) {
            let cur = params[i].getTag();
            if (cur != strTag && cur != numTag) {
                return "Invalid";
            }
        }
        //check if contains string param
        for (let i = 0; i < params.length; i++) {
            if (params[i].getTag() == "Str") {
                return "StringMode";
            }
        }
        return "NumberMode";
    }

    /**
     * Plus string or number
     * @param params 
     */
    public execute(...params: Component[]): Component {
        var result: Component = new Null();
        var validation = this.assert(params);
        switch (validation) {
            case "StringMode":
                var strResult: string = "";
                for (let i = 0; i < params.length; i++) {
                    strResult += params[i].raw;
                }
                result = new Str(strResult);
                break;
            case "NumberMode":
                var numResult: number = 0;
                for (let i = 0; i < params.length; i++) {
                    numResult += params[i].value();
                }
                result = new Num(numResult.toString());
                break;
            case "Invalid":

                break;
        }

        return result;
    }

}