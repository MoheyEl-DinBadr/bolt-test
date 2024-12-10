import { UserManager, WebStorageStateStore } from 'oidc-client';

    const userManager = new UserManager({
      authority: import.meta.env.VITE_OIDC_AUTHORITY,
      client_id: import.meta.env.VITE_CLIENT_ID,
      client_secret: import.meta.env.VITE_CLIENT_SECRET,
      redirect_uri: window.location.origin + '/callback',
      post_logout_redirect_uri: window.location.origin,
      response_type: 'code',
      scope: 'openid profile email offline_access', // Include offline_access to request refresh tokens
      userStore: new WebStorageStateStore({ store: window.localStorage }),
      automaticSilentRenew: true, // Enable automatic silent renew
    });

    export default userManager;
