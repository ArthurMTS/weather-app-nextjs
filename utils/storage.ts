export const storage = (action: "set" | "get", key: string, value?: any) => {
  if (typeof window === "undefined") return;
  if (action === "set") return localStorage.setItem(key, value);
  else if (action === "get") return localStorage.getItem(key);
};
