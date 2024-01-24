import React, { useContext, useState } from "react";
import styled from "styled-components";

import dollarIcon from "../../../assets/images/icon-dollar.svg";
import peopleIcon from "../../../assets/images/icon-person.svg";
import { TipCalculatorContext } from "../../../context";
import InputGroup, { Label } from "../Input";
import RadioGroup from "../Input/RadioInput";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  justify-content: space-between;
  padding: 0 8px;

  @media (min-width: 1024px) {
    max-width: 50%;
    gap: 40px;
    padding: 16px;
  }
`;

const inputsData = [
  {
    id: "five",
    label: "5%",
    name: "tip",
    value: 5,
  },
  {
    id: "ten",
    label: "10%",
    name: "tip",
    value: 10,
  },
  {
    id: "fifteen",
    label: "15%",
    name: "tip",
    value: 15,
  },
  {
    id: "twenty-five",
    label: "25%",
    name: "tip",
    value: 25,
  },
  {
    id: "fifty",
    label: "50%",
    name: "tip",
    value: 50,
  },
];

const InputBox = () => {
  const [changes, setChanges] = useState({
    bill: false,
    people: false,
  });
  const { inputs, changeInputs } = useContext(TipCalculatorContext);
  const { bill, people } = inputs;

  const handleChanges = (target) => {
    setChanges({
      ...changes,
      [target.name]: true,
    });
    changeInputs(target);
  };

  return (
    <Container>
      <InputGroup
        error={bill <= 0 && changes.bill}
        icon={dollarIcon}
        id="bill"
        onChange={handleChanges}
        placeholder="0"
        step="0.01"
        title="Bill"
        type="number"
        value={parseFloat(bill, 10).toString()}
      />
      <div>
        <Label>Select Tip %</Label>
        <RadioGroup inputsData={inputsData} onChange={changeInputs} />
      </div>
      <InputGroup
        error={people <= 0 && changes.people}
        icon={peopleIcon}
        id="people"
        onChange={handleChanges}
        placeholder="0"
        step="1"
        title="Number of People"
        type="number"
        value={parseInt(people, 10).toString()}
      />
    </Container>
  );
};

export default InputBox;
