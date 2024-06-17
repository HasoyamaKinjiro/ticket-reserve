import React, { useState } from "react";
import { Container } from "@mui/material";
import DateButton from "./components/DateButton";
import OtherDays from "./components/OtherDays";

const ChooseDay = ({ data }) => {
  const [isSelected, setIsSelected] = useState('1');

  const changeSelected = (e) => {
    setIsSelected(e.target.id);
  };

  return (
    <Container
      sx={{
        display: "flex",
        justifyContent: "space-around",
      }}
    >
      {data.slice(0, 7).map((el, index) => (
        <DateButton
          key={index}
          id={el}
          title={el}
          isSelected={isSelected}
          onClick={changeSelected}
        />
      ))}
      <OtherDays data={data} isSelected={isSelected} changeSelected={changeSelected}/>
    </Container>
  );
};

export default ChooseDay;
