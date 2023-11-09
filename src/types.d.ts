export interface User {
  id: number;
  name: string;
  email: string;
  checkbox: boolean;
  role: string;
}

export interface UserMutation {
  name: string;
  email: string;
  checkbox: boolean;
  role: string;
}