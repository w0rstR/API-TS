"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authService = void 0;
const userServices_1 = require("./userServices");
const tokenServices_1 = require("./tokenServices");
class AuthServices {
    async registaration(body) {
        const createdUser = await userServices_1.userService.createUser(body);
        return this._getTokenData(createdUser);
    }
    async _getTokenData(userData) {
        const { id, email } = userData;
        const tokenPair = await tokenServices_1.tokenService.generateTokenPair({ userId: id, userEmail: email });
        await tokenServices_1.tokenService.saveToken(id, tokenPair.refreshToken, tokenPair.accessToken);
        return {
            ...tokenPair,
            userId: id,
            userEmail: email,
        };
    }
}
exports.authService = new AuthServices();
//# sourceMappingURL=authServices.js.map