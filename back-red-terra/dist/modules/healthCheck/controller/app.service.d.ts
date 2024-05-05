export declare class AppService {
    getHealth(): Promise<{
        statusCode: number;
        message: string;
    }>;
}
