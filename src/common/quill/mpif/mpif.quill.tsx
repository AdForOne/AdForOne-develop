import dynamic from "next/dynamic";
import styled from "@emotion/styled";
import "react-quill/dist/quill.snow.css";
import { FieldValues, UseFormRegister } from "react-hook-form";

interface IPropsQuill {
  register: UseFormRegister<FieldValues>;
  registerName: string;
  onChange: (value: string) => void;
  default: string | null;
}

export default function MPIFQuill(props: IPropsQuill) {
  const QuillWrapper = dynamic(() => import("react-quill"), {
    ssr: false,
    loading: () => <p>Loading ...</p>,
  });
  const ServiceText = styled(QuillWrapper)`
    width: 100%;
    height: 350px;
  `;

  return (
    <ServiceText
      onChange={props.onChange}
      defaultValue={props.default ? props.default : ""}
    ></ServiceText>
  );
}
