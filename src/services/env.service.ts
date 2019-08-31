export class EnvService {

  // The values that are defined here are the default values that can
  // be overridden by env.js

  // API url
  public apiUrl = '';
  public adalConfig = {
      'tenant': '',
      'clientId': '',
      'redirectUri': '',
      'postLogoutRedirectUri': 'string',
      'endpoints': { 'WEB_API_URL': 'string' }
  };
  // Whether or not to enable debug mode
  public enableDebug = true;
  constructor() {
  }

}
