declare module "@auth/core/types" {
  interface User {
    accessToken: string;
    accessTokenUpdatedAt: string;
    accessTokenExpiredAt: string;
    refreshToken: string;
    userId: string;
    active: 0 | 1 | 2;
  }

  interface JWT {
    accessToken: string;
    accessTokenUpdatedAt: string;
    accessTokenExpiredAt: string;
    refreshToken: string;
    userId: string;
    active: 0 | 1 | 2;
  }
}
