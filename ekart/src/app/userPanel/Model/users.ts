export class users {
  id: number;
  firstname!: string;
  lastname!: string;
  username!: string;
  email!: string;
  gender: 'male' | 'female';
  password!: string;
  confirmpassword!: string;
  role: string;
}
