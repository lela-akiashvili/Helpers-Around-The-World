export interface Requests {
  accepted: boolean;
  created_at: string;
  date: string;
  id: string;
  location: string;
  text: string;
  time: string;
  user_id: string | null;
}
export interface Offers {
  accepted: boolean;
  created_at: string;
  date: string;
  id: string;
  location: string;
  text: string;
  time: string;
  user_id: string | null;
}
export interface User{
  username:string;
  birthday:number;
  address:string;
  // isActive:boolean
  gender:string;
  role:string;
} 