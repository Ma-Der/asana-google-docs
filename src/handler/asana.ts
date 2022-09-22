import { createClient, clientUseAuth } from '@config/asana';

export class AsanaHandler {
  public static async authorize(token: string) {
    const client = createClient();

    if (token) {
      clientUseAuth(client, token);

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

  public static async getTasks(token: string) {
    const client = createClient();
    clientUseAuth(client, token);

    const tasks = await client.tasks.findAll({
      project: '1203014636253652',
    });

    return tasks.data;
  }
}
