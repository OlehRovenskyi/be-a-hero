export enum USER_ROLE {
  STUDENT = 'student',
  TEACHER = 'teacher',
}

export interface User {
  id: string;
  name: string;
  age: number;
  role: USER_ROLE;
  active: boolean;
}
