export type ChatStatus =
  | "new"
  | "read-in-work"
  | "dialogue-read"
  | "dialogue-read-return";

export type ChatItem = {
  id: number;
  link: string;
  category: string;
  name: string;
  email: string;
  message: string;
  date: string;
  time: string;
  isNew?: boolean;
  status: ChatStatus;
};