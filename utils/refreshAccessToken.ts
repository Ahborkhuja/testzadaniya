import { JWT } from "@auth/core/types";

export const refreshAccessToken = async (token: JWT) => {
  const res = await fetch(
    `${process.env.API_URL}/auth/refresh`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        refreshToken: token.refreshToken,
        expiresInMins: 30
      })
    }
  );
  if (!res.ok) throw new Error("Failed to refresh token");

  const { data } = await res.json();

  return {
    ...token,
    accessToken: data.token,
  };
};
