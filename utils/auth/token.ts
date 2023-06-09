import { sign } from 'jsonwebtoken';

export const generateAccessToken = (userId: string): string => {
    const secret = process.env.JWT_SECRET!;
    const expiresIn = process.env.JWT_EXPIRES_IN!;

    return sign({ userId }, secret, { expiresIn });
}