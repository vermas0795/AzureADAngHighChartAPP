(function (window) {
    window.__env = window.__env || {};
  
    // API url
    window.__env.apiUrl = 'https://dev.your-api.com';
    window.__env.adalConfig= {
      'tenant': 'your tenant',
      'clientId': 'client-id',
      'redirectUri': 'http://localhost:4200',
      'postLogoutRedirectUri': 'string',
      'endpoints': { 'WEB_API_URL': 'string' },
      'navigateToLoginRequestUrl': 'false',
      'cacheLocation': '<localStorage>', 
      }
    // Whether or not to enable debug mode
    // Setting this to false will disable console output
    window.__env.enableDebug = false;
  }(this));