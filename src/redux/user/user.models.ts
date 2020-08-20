export interface User {
  id: string;
  displayName: string;
  email: string;
  dateCreated: any;
}

export interface UserState {
  currentUser: User | null
}
