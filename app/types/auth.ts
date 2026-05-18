export type UserRole = "cliente" | "lojista" | "admin";

export interface AuthUser {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  storeId?: string;
}
