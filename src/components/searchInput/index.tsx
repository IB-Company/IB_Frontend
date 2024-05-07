import React from "react";
import styled from "styled-components";
import SearchIcon from "../../styles/svg/searchIcon";

const SearchInput = () => {
  return (
    <Container>
      <StyledInput placeholder="가고 싶은 나라를 검색해보세요!" />
      <IconDiv>
        <SearchIcon />
      </IconDiv>
    </Container>
  );
};

export default SearchInput;

const Container = styled.div`
  display: flex;
  position: relative;
`;

const StyledInput = styled.input`
  width: 25rem;

  padding: 1.4rem 1.2rem;
  box-shadow: 0 0 0 0.1rem #ff202d;
  border-radius: 0.5rem;

  transition: 0.25s ease-in-out;

  &::placeholder {
    color: #aaaaaa;
  }

  &:focus {
    transform: scale(1.02);
    box-shadow: 0 0 0 0.2rem #ff202d;
  }
`;

const IconDiv = styled.div`
  position: absolute;
  top: 50%;
  right: 0;

  padding: 1rem;
  transform: translateY(-50%);

  cursor: pointer;
`;
