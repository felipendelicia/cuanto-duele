export interface Guest {
  id: number;
  name: string;
  bills: Bill[];
}

export interface Bill {
  id: number;
  description: string;
  cost: number;
}
