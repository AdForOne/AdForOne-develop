import dynamic from "next/dynamic";
import styled from "@emotion/styled";
import "react-quill/dist/quill.snow.css";

export default function MPIFQuill() {
  const QuillWrapper = dynamic(() => import("react-quill"), {
    ssr: false,
    loading: () => <p>Loading ...</p>,
  });
  const ServiceText = styled(QuillWrapper)`
    width: 100%;
    height: 350px;
  `;

  return <ServiceText></ServiceText>;
}
