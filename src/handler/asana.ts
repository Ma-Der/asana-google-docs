import createClient from '@config/asana';

export class AsanaHandler {
  public static async authorize(token: string) {
    const client = createClient();

    if (token) {
      client.useOauth({ credentials: token });
      const user = await client.users.me();

      return { client, msg: user.name };
    }

    return { client, msg: 'reauthorize' };
  }

  public static async redirectCallback(code: string) {
    const client = createClient();
    if (!code) throw new Error('Code is missing.');

    const credentials = await client.app.accessTokenFromCode(code);

    return { accessToken: credentials.access_token };
  }
}
