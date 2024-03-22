import { jwtDecode } from 'jwt-decode';

export const jwtDecoder = (token: string): any => {
    try {
        return jwtDecode(token);
    } catch (error) {
        return null;
    }
}