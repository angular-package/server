// Externals.
import jsonwebtoken from 'jsonwebtoken';

// Internals.
import { jwtSecretKey } from '../config';

/**
 * Auth token sign and verify.
 */
export class AuthToken {
  #secretKey: jsonwebtoken.Secret = jwtSecretKey;
  #expiresIn = '7d';

  /**
   * jwt sign token based on specific payload.
   * @param payload User to token.
   * @param options Some sign options.
   */
  public sign(
    payload: string | object | Buffer,
    callback: jsonwebtoken.SignCallback,
    options?: jsonwebtoken.SignOptions
  ): this {
    jsonwebtoken.sign(payload, this.#secretKey, { ...options, expiresIn: this.#expiresIn }, callback);
    return this;
  }

  /**
   * Verify provided token.
   * @param token String as token to verify.
   */
  public verify(token: string, callback: jsonwebtoken.VerifyCallback): this {
    jsonwebtoken.verify(token, this.#secretKey, callback);
    return this;
  }
}
