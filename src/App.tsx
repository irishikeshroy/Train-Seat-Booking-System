import React, { useState } from 'react';
import { AlertCircle } from 'lucide-react';
import SeatMap from './components/SeatMap';
import BookingForm from './components/BookingForm';
import { generateInitialSeats } from './utils/seatUtils';

export type Seat = {
  id: number;
  isBooked: boolean;
  rowNumber: number;
};

function App() {
  const [seats, setSeats] = useState<Seat[]>(generateInitialSeats());
  const [error, setError] = useState<string>('');
  const [successMessage, setSuccessMessage] = useState<string>('');

  const bookSeats = (numSeats: number) => {
    if (numSeats > 7) {
      setError('You can only book up to 7 seats at a time');
      return;
    }

    const availableSeats = seats.filter(seat => !seat.isBooked);
    if (availableSeats.length < numSeats) {
      setError('Not enough seats available');
      return;
    }

    // Try to find seats in the same row
    const rows = Array.from(new Set(seats.map(seat => seat.rowNumber)));
    let seatsToBook: number[] = [];

    // First, try to find seats in the same row
    for (const row of rows) {
      const seatsInRow = seats.filter(
        seat => seat.rowNumber === row && !seat.isBooked
      );
      if (seatsInRow.length >= numSeats) {
        seatsToBook = seatsInRow.slice(0, numSeats).map(seat => seat.id);
        break;
      }
    }

    // If we couldn't find seats in the same row, book nearby seats
    if (seatsToBook.length === 0) {
      seatsToBook = availableSeats.slice(0, numSeats).map(seat => seat.id);
    }

    setSeats(prevSeats =>
      prevSeats.map(seat => ({
        ...seat,
        isBooked: seat.isBooked || seatsToBook.includes(seat.id),
      }))
    );

    setSuccessMessage(
      `Successfully booked seats: ${seatsToBook.join(', ')}`
    );
    setError('');

    // Clear success message after 3 seconds
    setTimeout(() => {
      setSuccessMessage('');
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            Train Seat Booking
          </h1>
          <p className="text-gray-600">
            Book up to 7 seats at once • {seats.filter(s => !s.isBooked).length} seats available
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <BookingForm onSubmit={bookSeats} />
          
          {error && (
            <div className="mt-4 p-4 bg-red-50 rounded-md flex items-center gap-2 text-red-700">
              <AlertCircle className="h-5 w-5" />
              <p>{error}</p>
            </div>
          )}
          
          {successMessage && (
            <div className="mt-4 p-4 bg-green-50 rounded-md text-green-700">
              {successMessage}
            </div>
          )}
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-xl font-semibold mb-4">Seat Map</h2>
          <SeatMap seats={seats} />
        </div>
      </div>
    </div>
  );
}

export default App;