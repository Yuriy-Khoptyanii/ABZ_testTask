export interface User {
  id: string;
  name: string;
  email: string;
  phone: string;
  position: string;
  position_id: string;
  registration_timestamp: number;
  photo: string;
}

export interface SignUpValues {
  name: string;
  email: string;
  phone: string;
  position: number;
  photo?: File;
}
export interface Positions {
  id: number;
  name: string;
}
