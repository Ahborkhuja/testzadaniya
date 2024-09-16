export {
  Product,
  Pagination,
  User,
  Todo,
  Post,
  LoginSuccessResponse,
  CredentialsInterface
};

export type LoginResponse = LoginFailureResponse | LoginSuccessResponse;

interface Review {
  rating: number;
  comment: string;
  date: string;
  reviewerName: string;
  reviewerEmail: string;
}

interface Meta {
  createdAt: string;
  updatedAt: string;
  barcode: string;
  qrCode: string;
}

interface Product {
  id: number;
  title: string;
  description: string;
  category: string;
  price: number;
  rating: number;
  tags: string[];
  availabilityStatus: string;
  reviews: Review[];
  meta: Meta;
  images: string[];
}

interface User {
  id: number;
  firstName: string;
  lastName: string;
  username: string;
  password: string
  age: number;
  gender: string;
  email: string;
  phone: string;
  token: string;
  accessToken: string;
  refreshToken: string;
  image: string;
}

interface Todo {
  id: number;
  todo: string;
  completed: boolean;
  userId: number;
}

interface Reactions {
  likes: number;
  dislikes: number;
}

interface Post {
  id: number;
  title: string;
  body: string;
  tags: string[];
  reactions: Reactions;
  views: number;
  userId: number;
}


interface Pagination<T> {
  data: T;
  total: number;
  skip: number;
  limit: number;
}

interface LoginFailureResponse {
  message: string;
}

interface LoginSuccessResponse {
  id: number;
  username: string;
  email: string;
  firstName: string;
  lastName: string;
  gender: string;
  image: string;
  token: string; // JWT accessToken
  refreshToken: string; // JWT refreshToken
}

interface CredentialsInterface {
  username: string;
  password: string;
}