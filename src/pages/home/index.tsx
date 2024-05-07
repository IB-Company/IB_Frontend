import styled from "styled-components";
import AppLayout from "../../components/common/layouts/appLayout";
import { Column } from "../../styles/ui/column";
import Text from "../../styles/ui/text";
import SearchInput from "../../components/searchInput";

const Home = () => {
  return (
    <AppLayout>
      <Column gap={"6rem"} alignItems="center">
        <Text fontSize={"8rem"}>로고</Text>
        <SearchInput />
      </Column>
    </AppLayout>
  );
};

export default Home;
