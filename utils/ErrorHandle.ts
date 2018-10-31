/**
 * Manage all error message in compile-time, runtime, etc.
 */
export default class ErrorHandle extends Array<Message> {

    private constructor() {
        super();
        this.clear();
    }
    /**
     * Applied singleton design pattern
     */
    private static instance: ErrorHandle;

    public getInstance(): ErrorHandle {
        if (ErrorHandle.instance == null) {
            ErrorHandle.instance = new ErrorHandle();
        }
        return ErrorHandle.instance;
    }

    /**
     * Clear all message
     */
    public clear(): void {
        this.splice(0, this.length);
    }

    /**
     * Count all errors based on message type
     * @param errorType message type
     */
    public errorCount(errorType: MessageType): number {
        var count: number = 0;
        for (let i = 0; i < this.length; i++) {
            if (this[i].Type == errorType)
                count++;
        }
        return count;
    }

}

export class Message {
    /**
     * Type of message
     */
    private _type: MessageType = MessageType.Info;
    /**
     * Message content meaningful
     */
    private _content: string = "";
    public get Content(): string {
        return this._content;
    }
    public set Content(value: string) {
        this._content = value;
    }
    /**
     * Place where raises message Level 1 (File, Class, etc.)
     */
    private _positionL1: string = "";
    public get PositionL1(): string {
        return this._positionL1;
    }
    public set PositionL1(value: string) {
        this._positionL1 = value;
    }
    /**
     * Place where raises message Level 2 (Function, etc.)
     */
    private _positionL2: string = "";
    public get PositionL2(): string {
        return this._positionL2;
    }
    public set PositionL2(value: string) {
        this._positionL2 = value;
    }
    /**
     * Place where raises message Level 3 (Statement, Block, etc.)
     */
    private _positionL3: string = "";
    public get PositionL3(): string {
        return this._positionL3;
    }
    public set PositionL3(value: string) {
        this._positionL3 = value;
    }
    public get Type(): MessageType {
        return this._type;
    }
    public set Type(type: MessageType) {
        this._type = type;
    }
    constructor(type: MessageType, content: string, positionL1: string = "", positionL2: string = "", positionL3: string = "") {
        this._type = type;
        this._content = content;
        this._positionL1 = positionL1;
        this._positionL2 = positionL2;
        this._positionL3 = positionL3;
    }
}

/**
 * Type of message
 */
export enum MessageType {
    /**
     * Message happening when program is running
     */
    RuntimeError,
    /**
     * Message happening when program is compiling
     */
    CompileError,
    /**
     * Message happening when program is compiling, it not cause crash, but programmers should not ignore it and fix instead.
     */
    CompileWarning,
    /**
     * Some valueable information in compilation process
     */
    Info
}