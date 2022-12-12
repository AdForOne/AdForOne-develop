import { ChangeEvent } from "react";

export interface IInput {
  text: string;
  onChangeText: (e: ChangeEvent<HTMLInputElement>) => void;
  onChangeIMG: (e: ChangeEvent<HTMLInputElement>) => void;
  MessageSubmit: () => void;
}
