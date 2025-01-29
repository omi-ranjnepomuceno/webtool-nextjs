export type AuthTokenPayload = {
  iat: number;
  exp: number;
  token: string;
  email: string;
  type: string;
  user_id: string;
  is_staff: boolean;
};
