export interface ClientType {
    clientId: string;
    domain: string;
}
export interface ResponseType<T> {
    success: boolean;
    data: T;
    message: string;
}
export interface ListResponse<T> extends ResponseType<T[]> {
    page: number;
    perPage: number;
    total: number;
    totalPages: number;
    data: T[];
}
