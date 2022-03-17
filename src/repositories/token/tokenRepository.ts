import { getManager } from 'typeorm';
import { IToken, Token } from '../../entity/token';

class TokenRepository {
    public async createToken(token:any):Promise<IToken> {
        return getManager()
            .getRepository(Token)
            .save(token);
    }

    public async findTokenByUser(userId:number):Promise<IToken | undefined> {
        return getManager().getRepository(Token).findOne({ userId });
    }

    public async deleteUserToken(userId: number | undefined):Promise<Object> {
        return getManager().getRepository(Token).delete({ userId });
    }
}

export const tokenRepository = new TokenRepository();