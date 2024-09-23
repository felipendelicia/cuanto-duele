import styled from "styled-components";
import { ChangeEvent, useState } from "react";
import { Guest } from "../types";

function NewGuest(props: {
  setGuest: (g: Guest) => void;
  guestsLength: number;
}) {
  const [name, setName] = useState("");

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };
  const handleOnClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    props.setGuest({ name, bills: [], id: props.guestsLength });
    setName("");
  };

  return (
    <Container>
      <Input
        value={name}
        onChange={(e) => handleOnChange(e)}
        placeholder="Nombre del pibe"
      />
      <Add type="submit" onClick={(e) => handleOnClick(e)}>
        Añadir
      </Add>
    </Container>
  );
}

const Container = styled.form`
  display: flex;
  align-items: center;
  gap: 5px;
`;

const Input = styled.input`
  background-color: #fffef0;
  border-radius: 5px;
  font-size: 1.25em;
  padding: 5px 10px;
`;

const Add = styled.button`
  background-color: #fffef0;
  border-radius: 5px;
  font-size: 1.25em;
  padding: 5px 10px;
  cursor: pointer;
`;

export default NewGuest;
