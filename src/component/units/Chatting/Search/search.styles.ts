import styled from "@emotion/styled";

// Search
export const Wrapper = styled.div`
  border-bottom: 1px solid gray;
`;
// SearchForm
export const SearchBox = styled.div`
  padding: 10px;
`;

export const SearchInput = styled.input`
  background-color: transparent;
  border: none;
  color: white;
  outline: none;

  &::placeholder {
    color: lightgray;
  }
`;

export const UserChatWrapper = styled.div`
  padding: 10px;
  display: flex;
  align-items: center;
  gap: 10px;
  color: white;
  cursor: pointer;

  &:hover {
    background-color: #2f2d52;
  }
`;

export const UsersImg = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  object-fit: cover;
`;

export const UserChatInfo = styled.div``;
