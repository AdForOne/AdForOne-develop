import styled from "@emotion/styled";

export default function Category() {
  const IMGCategory = styled.img`
    width: 99px;
    height: 99px;
  `;

  return (
    <div>
      <IMGCategory src="https://source.unsplash.com/random" />
    </div>
  );
}
