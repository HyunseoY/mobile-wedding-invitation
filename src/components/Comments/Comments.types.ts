import { FieldValue } from "firebase/firestore";

export interface CommentType {
  id: string;
  name: string;
  password: string;
  content: string;
  createdAt: FieldValue;
}
