import Component from '../structures/Component';
export default class Null extends Component {
    public createInstance(raw: string): Component {
        return new Null();
    }
    public getTag(): string {
        return "Null";
    }
    public parseValue(value: string): Component {
        return new Null();
    }

}