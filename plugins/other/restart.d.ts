export class Restart extends plugin {
    constructor(e: any);
    e: any;
    key: string;
    init(): void;
    restartMsg(): Promise<number | false | ReturnType<this['reply']>>;
    set(isExit: boolean): Promise<string>;
    restart(): Promise<void>;
    stop(time: number): Promise<number | false | ReturnType<this['reply']>>;
    exit(): Promise<void>;
}
