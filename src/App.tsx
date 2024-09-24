import { useState, useRef } from "react";
import PageContainer from "./components/PageContainer";
import { Bill, Guest } from "./types";
import NewGuest from "./components/NewGuest";
import GuestContainer from "./components/GuestContainer";
import GuestDisplay from "./components/GuestDisplay";
import ExportPDFButton from "./components/ExportPDFButton";
import { useReactToPrint } from "react-to-print";

function App() {
  const [guests, setGuests] = useState<Guest[]>([]);
  const componentRef = useRef<HTMLDivElement>(null);

  const handlePrint = useReactToPrint({
    content: () => componentRef.current!,
    documentTitle: "Lista de Invitados",
    onBeforeGetContent: () => {
      console.log("Preparando el contenido para imprimir...");
    },
    onAfterPrint: () => {
      console.log("Impresión completada.");
    },
  });

  return (
    <PageContainer>
      <h1>Cuanto duele 🍻</h1>
      <h2>Agregar nuevo pibe:</h2>
      <NewGuest
        setGuest={(g: Guest) => setGuests([...guests, g])}
        guestsLength={guests.length}
      />
      <ExportPDFButton onClick={handlePrint}>Exportar a PDF</ExportPDFButton>
      <h2>Pibes presentes:</h2>
      <div ref={componentRef} className="print-container">
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
      </div>
    </PageContainer>
  );
}

export default App;
