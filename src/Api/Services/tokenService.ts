export function saveToken(token: string, expirationMinutes: number) {
  const now = new Date();
  const expirationTime = now.getTime() + expirationMinutes * 60 * 1000;

  const tokenData = {
    value: token,
    expiresAt: expirationTime,
  };

  localStorage.setItem("token", JSON.stringify(tokenData));
}

export function getToken(): string | null {
  const tokenData = localStorage.getItem("token");
  if (!tokenData) return null;

  const parsed = JSON.parse(tokenData);
  const now = new Date().getTime();

  if (now > parsed.expiresAt) {
    localStorage.removeItem("token");
    return null;
  }

  return parsed.value;
}

export function removeToken() {
  localStorage.removeItem("token");
}
