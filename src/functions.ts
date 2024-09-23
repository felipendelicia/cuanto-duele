import { Bill, Guest } from "./types";

export const sumAllBills = (bills: Bill[]) => {
  return bills.reduce((sum, bill) => sum + bill.cost, 0);
};

export function howMuchOwe(
  person1: Guest,
  person2: Guest,
  totalGuests: number,
) {
  const person1Debt = sumAllBills(person2.bills) / totalGuests;
  const person2Debt = sumAllBills(person1.bills) / totalGuests;

  return person1Debt - person2Debt;
}
