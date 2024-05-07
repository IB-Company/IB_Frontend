import styled from "styled-components";
import HeaderLayout from "../layouts/headerLayout";
import { Link, useLocation, useParams } from "react-router-dom";
import { HEADER_LINK_TEXT } from "../../../constants/headerLinkText";
import Text from "../../../styles/ui/text";
import { useEffect } from "react";

const Header = () => {
  const url = useLocation();

  useEffect(() => {
    console.log(url.pathname);
  }, [url]);

  return (
    <HeaderLayout>
      {Object.keys(HEADER_LINK_TEXT).map((e, i) => {
        return (
          <HeaderLinkBtn key={`HeaderLinkBtn${i}`} to={HEADER_LINK_TEXT[e]}>
            <Text
              color={url.pathname === HEADER_LINK_TEXT[e] ? "#FF202D" : "black"}
            >
              {e}
            </Text>
          </HeaderLinkBtn>
        );
      })}
    </HeaderLayout>
  );
};

export default Header;

const HeaderLinkBtn = styled(Link)`
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  padding: 2rem 1rem;
  box-sizing: border-box;

  transition: 0.2s ease-in-out;

  &:hover {
    color: #ff202d;
  }
`;
