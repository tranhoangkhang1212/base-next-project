export {};

declare global {
    namespace NodeJS {
        interface ProcessEnv {
            REACT_APP_NODE_ENV: string;
            REACT_APP_PORT: number;
        }
    }
}
