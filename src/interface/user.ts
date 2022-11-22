export default interface IUser {
  user: TUser;
  token: string;
}

export type TUser = {
  readonly id: number;
  email: string;
  name: string;
  role: string;
  forms: number[];
  created_at: string;
  updated_at: string;
};
