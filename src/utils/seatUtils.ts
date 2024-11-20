import type { Seat } from '../App';

export const generateInitialSeats = (): Seat[] => {
  const seats: Seat[] = [];
  let seatId = 1;
  
  // Generate 11 rows with 7 seats each for the first 11 rows
  for (let row = 1; row <= 11; row++) {
    for (let seat = 1; seat <= 7; seat++) {
      seats.push({
        id: seatId++,
        isBooked: false,
        rowNumber: row,
      });
    }
  }
  
  // Add the last row with 3 seats
  for (let seat = 1; seat <= 3; seat++) {
    seats.push({
      id: seatId++,
      isBooked: false,
      rowNumber: 12,
    });
  }
  
  return seats;
};