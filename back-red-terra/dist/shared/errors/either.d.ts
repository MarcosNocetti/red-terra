export type Either<F, S> = Failure<F, S> | Success<F, S>;
export declare class Failure<F, S> {
    readonly value: F;
    constructor(value: F);
    isFailure(): this is Failure<F, S>;
    isSuccess(): this is Success<F, S>;
}
export declare class Success<F, S> {
    readonly value: S;
    constructor(value: S);
    isFailure(): this is Failure<F, S>;
    isSuccess(): this is Success<F, S>;
}
export declare const failure: <F, S>(error: F) => Either<F, S>;
export declare const success: <F, S>(value: S) => Either<F, S>;
