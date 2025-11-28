export class update extends plugin {
    constructor();
    typeName: string;
    get quiet(): boolean;
    exec(cmd: string | string[], plugin: string, opts?: any): Promise<ReturnType<typeof Bot['exec']>>;
    init(): void;
    autoUpdate(): void;
    update(): Promise<boolean>;
    getPlugin(plugin?: string): Promise<string | false>;
    runUpdate(plugin?: string): Promise<boolean>;
    private oldCommitId?: string;
    private isUp?: boolean;
    private isPkgUp?: boolean;
    getCommitId(...args: any[]): Promise<string>;
    getTime(...args: any[]): Promise<string>;
    getBranch(...args: any[]): Promise<string>;
    getRemote(branch: string, ...args: any[]): Promise<string>;
    getRemoteBranch(string: boolean, ...args: any[]): Promise<string | {
        remote: string;
        branch: string;
    }>;
    getRemoteUrl(branch: string, hide: string, ...args: any[]): Promise<{}>;
    gitErrUrl(error: string): string;
    gitErr(plugin: string, stdout: string, error: string): Promise<true | void>;
    updateAll(): Promise<boolean>;
    updatePackage(): Promise<ReturnType<typeof Bot['exec']> | ReturnType<this['reply']>>
    restart(): void;
    getLog(plugin?: string): Promise<false | "" |ReturnType<this['reply']> | ReturnType<typeof Bot['makeForwardArray']>>;
    updateLog(): Promise<false | ReturnType<this['reply']>>;
}
