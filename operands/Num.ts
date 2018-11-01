import Component from '../structures/Component';
export default class Num extends Component {

    constructor(num: string) {
        super(num);
    }
    protected parseValue(value: string): any {
        return +value;
    }
    public createInstance(raw: string): Component {
        return new Num(raw);
    }
    public getTag(): string {
        return "Num";
    }


}