import { UserI } from './user';

export interface AuthContextI {
  user: UserI | null;
  loading: boolean;
}
