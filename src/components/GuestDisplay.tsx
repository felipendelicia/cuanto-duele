import { useState, ChangeEvent } from "react";
import { Bill, Guest } from "../types";
import { styled } from "styled-components";
import { howMuchOwe } from "../functions";

function GuestDisplay(props: {
  guest: Guest;
  guests: Guest[];
  deleteGuest: (id: number) => void;
  deleteBill: (id: number, bill_id: number) => void;
  addBill: (id: number, bill: Bill) => void;
}) {
  const totalBill = props.guest.bills.reduce((sum, bill) => sum + bill.cost, 0);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Container>
      <h3>{props.guest.name}</h3>
      <p>
        {"Gastó en total: " + totalBill + " $ARS"}{" "}
        {totalBill == 0 ? "🐀" : null}
      </p>
      <Columns>
        <Column>
          <h4>Gastos:</h4>
          <Wrapper>
            {props.guest.bills.length == 0
              ? "No gastó nada 🐀"
              : props.guest.bills.map((bill, i) => {
                  return (
                    <Field
                      key={i}
                      onClick={() => props.deleteBill(props.guest.id, bill.id)}
                    >
                      <p>{bill.description}</p>
                      <p>{bill.cost + " $ARS"}</p>
                    </Field>
                  );
                })}
          </Wrapper>
        </Column>
        <Column>
          <h4>Deudas:</h4>
          <Wrapper>
            {props.guests.length == 1
              ? "Estas solito..."
              : props.guests
                  .filter((guest) => guest.id !== props.guest.id)
                  .map((guest, i) => {
                    const debt = howMuchOwe(
                      props.guest,
                      guest,
                      props.guests.length,
                    );
                    if (debt > 0)
                      return (
                        <p key={i}>
                          Debe {Math.round(debt) + "$ARS"} a {guest.name}
                        </p>
                      );
                  })}
          </Wrapper>
        </Column>
      </Columns>
      {isOpen ? (
        <NewBill
          addBill={(id: number, bill: Bill) => props.addBill(id, bill)}
          guestID={props.guest.id}
          nextID={props.guest.bills.length}
        />
      ) : null}
      <ThinText onClick={() => setIsOpen(!isOpen)} className="omit-on-print">
        {isOpen ? "Mostrar menos" : "Agregar gasto"}
      </ThinText>
      <Button
        onClick={() => props.deleteGuest(props.guest.id)}
        className="omit-on-print"
      >
        Eliminar pibe
      </Button>
    </Container>
  );
}

const Container = styled.div`
  border-radius: 5px;
  font-size: 1.25em;
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const Field = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;
  gap: 10px;
  cursor: pointer;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const Columns = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  @media (max-width: 900px) {
    grid-template-columns: 1fr; /* Cambia a una columna en pantallas pequeñas */
  }
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const NewBill = (props: {
  addBill: (id: number, bill: Bill) => void;
  nextID: number;
  guestID: number;
}) => {
  const [description, setDescription] = useState("");
  const [cost, setCost] = useState("");

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (cost) {
      e.preventDefault();
      const newBill: Bill = {
        description,
        cost: parseInt(cost),
        id: props.nextID,
      };
      props.addBill(props.guestID, newBill);
      setCost("");
      setDescription("");
    }
  };
  return (
    <NewBillContainer className="omit-on-print">
      <Input
        placeholder="Descripcion"
        value={description}
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          setDescription(e.target.value)
        }
        className="omit-on-print"
      />
      <Input
        placeholder="Costo"
        value={cost}
        onChange={(e: ChangeEvent<HTMLInputElement>) => setCost(e.target.value)}
        className="omit-on-print"
      />
      <Button onClick={(e) => handleSubmit(e)} className="omit-on-print">
        Añadir
      </Button>
    </NewBillContainer>
  );
};

const NewBillContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`;

const Button = styled.button`
  background-color: #feecb3;
  border-radius: 5px;
  padding: 5px 10px;
  cursor: pointer;
  align-self: flex-end;
`;

const Input = styled.input`
  border-radius: 5px;
  border-bottom: 1px solid #feecb3;
  padding: 5px 10px;
`;

const ThinText = styled.p`
  font-size: 0.5em;
  cursor: pointer;
`;

export default GuestDisplay;
