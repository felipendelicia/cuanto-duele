import { useState } from "react";
import PageContainer from "./components/PageContainer";
import { Bill, Guest } from "./types";
import NewGuest from "./components/NewGuest";
import GuestContainer from "./components/GuestContainer";
import GuestDisplay from "./components/GuestDisplay";

function App() {
  const [guests, setGuests] = useState<Guest[]>([]);

  return (
    <PageContainer>
      <h1>Cuanto duele 🍻</h1>
      <h2>Agregar nuevo pibe:</h2>
      <NewGuest
        setGuest={(g: Guest) => setGuests([...guests, g])}
        guestsLength={guests.length}
      />
      <h2>Pibes presentes:</h2>
      <GuestContainer>
        {guests.map((guest, i) => (
          <GuestDisplay
            guest={guest}
            guests={guests}
            deleteGuest={(id: number) =>
              setGuests(guests.filter((guest) => guest.id !== id))
            }
            addBill={(id: number, bill: Bill) =>
              setGuests(
                guests.map((guest) =>
                  guest.id === id
                    ? { ...guest, bills: [...guest.bills, bill] }
                    : guest,
                ),
              )
            }
            deleteBill={(id: number, bill_id: number) =>
              setGuests(
                guests.map((guest) =>
                  guest.id === id
                    ? {
                        ...guest,
                        bills: guest.bills.filter(
                          (bill) => bill.id !== bill_id,
                        ),
                      }
                    : guest,
                ),
              )
            }
            key={i}
          />
        ))}
      </GuestContainer>
    </PageContainer>
  );
}

export default App;
