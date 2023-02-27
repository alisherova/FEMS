export interface IUserProfile {
  user_id: number;
  firstname: string;
  middlename: null | string;
  lastname: string;
  locale: string;
  gender: null | string;
  description: null | string;
  bio: null | string;
  dob: null | string;
  age: number;
  avatar: {
    full_url: string;
  };
}
