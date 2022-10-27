export interface IRouter {
    navigate: NavigateFunction;
    params: Readonly<Params<string>>;
    query: {
        [k: string]: string;
    };
}
