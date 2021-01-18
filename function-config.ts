import { resolve } from 'path'

enum HttpMethod {
    GET = 'GET',
    POST = 'POST',
    PUT = 'PUT',
    DELETE = 'DELETE'
}

interface FunctionConfig {
    folder: string,
    path: string,
    allowedMethod: HttpMethod
}

export const FUNCTION_PATH  = resolve(__dirname, 'functions')

export const FUNCTION_CONFIG: FunctionConfig[] = [
    {
        folder: 'bye-world',
        path: 'bye-world',
        allowedMethod: HttpMethod.GET
    },
    {
        folder: 'hello-world',
        path: 'hello-world',
        allowedMethod: HttpMethod.GET
    }
]

