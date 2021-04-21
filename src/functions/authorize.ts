import fetch from "node-fetch";

const getToken = async (
  clientId: string,
  clientSecret: string,
  code: string
) => {
  const response = await fetch("https://github.com/login/oauth/access_token", {
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify({
      client_id: clientId,
      client_secret: clientSecret,
      code,
    }),
  });

  if (response.status !== 200) {
    throw new Error(
      `failed to fetch POST ${response.url} with status ${response.status}`
    );
  }

  const { access_token } = await response.json();

  return access_token;
};

const getUser = async (token: string) => {
  const response = await fetch(`https://api.github.com/user`, {
    headers: {
      accept: "application/json",
      authorization: `token ${token}`,
    },
  });

  if (response.status !== 200) {
    throw new Error(
      `failed to fetch POST ${response.url} with status ${response.status}`
    );
  }

  const user = await response.json();

  return { userId: user.login, avatar: user.avatar_url, name: user.name, token };
};

export const authorize = async (
  clientId: string,
  clientSecret: string,
  code: string
) => {
  const token = await getToken(clientId, clientSecret, code);
  const user = await getUser(token);
  return { user, token };
};
