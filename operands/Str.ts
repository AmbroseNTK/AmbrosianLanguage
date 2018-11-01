import Component from '../structures/Component';
export default class Str extends Component {

    constructor(str: string) {
        super(str);
    }
    protected parseValue(value: string): any {
        return value;
    }

    public createInstance(raw: string): Component {
        return new Str(raw);
    }
    public getTag(): string {
        return "Str";
    }


}