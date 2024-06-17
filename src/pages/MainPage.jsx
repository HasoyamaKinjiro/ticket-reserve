import React, {useState} from "react";
import { Container } from "@mui/material";
import ChooseDay from "../containers/ChooseDay/ChooseDay";

const MainPage = () => {
  const [data, setData] = useState([
    '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16',
  ]);

  return (
    <Container maxWidth="lg">
      <ChooseDay data={data}/>
    </Container>
  )
};

export default MainPage;
