import { ChangeEvent } from "react";

export interface IInput {
  text: string;
  onChangeTest: (e: ChangeEvent<HTMLInputElement>) => void;
  MessageSubmit: () => void;
}
