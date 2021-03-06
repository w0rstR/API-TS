import { NextFunction, Response } from 'express';
import { userService, tokenService } from '../services';
import { IRequestExtended } from '../interfaces';
import { ErrorHendler } from '../error/errorHendler';

class AuthMiddlewares {
    public async checkAccessToken(req:IRequestExtended, res:Response, next:NextFunction) {
        try {
            const accessToken = req.header('authorization')?.split(' ')[1];

            if (!accessToken) {
                next(new ErrorHendler('You not have token', 401));
                return;
            }

            const { userEmail } = tokenService.verifyToken(accessToken);
            const userFromToken = await userService.getUserByEmail(userEmail);

            if (!userFromToken) {
                next(new ErrorHendler('User not found!', 404));
                return;
            }

            req.user = userFromToken;
            next();
        } catch (e: any) {
            next(e);
        }
    }

    public async checkRefreshToken(req:IRequestExtended, res:Response, next:NextFunction) {
        try {
            const { refreshToken } = req.cookies;
            const payloadFromToken = await tokenService.verifyToken(refreshToken, 'refresh');
            const userFromPayload = await userService.getUserByEmail(payloadFromToken.userEmail);
            const tokenFromDb = await tokenService.findRefreshToken(refreshToken);

            if (!payloadFromToken || !userFromPayload || !tokenFromDb) {
                next(new ErrorHendler('Wrong token', 401));
                return;
            }

            req.user = userFromPayload;
            next();
        } catch (e: any) {
            next(e);
        }
    }
}

export const authMiddlewares = new AuthMiddlewares();
