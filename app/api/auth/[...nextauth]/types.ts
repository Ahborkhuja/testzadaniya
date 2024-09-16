declare module "@auth/core/types" {
  interface User {
    id: number;
    accessToken: string;
    refreshToken: string;
  }

  interface JWT {
    id: number;
    accessToken: string;
    refreshToken: string;
  }
}
