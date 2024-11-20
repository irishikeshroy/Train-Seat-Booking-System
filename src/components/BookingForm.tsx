import React, { useState } from 'react';

interface BookingFormProps {
  onSubmit: (seats: number) => void;
}

const BookingForm: React.FC<BookingFormProps> = ({ onSubmit }) => {
  const [seats, setSeats] = useState<string>('1');
  const [inputError, setInputError] = useState<string>('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const numSeats = parseInt(seats);
    
    if (numSeats < 1) {
      setInputError('Please enter at least 1 seat');
      return;
    }
    
    if (numSeats > 7) {
      setInputError('Maximum 7 seats allowed per booking');
      return;
    }
    
    setInputError('');
    onSubmit(numSeats);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSeats(value);
    setInputError('');
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="flex gap-4 items-end">
        <div className="flex-1">
          <label
            htmlFor="seats"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Number of Seats
          </label>
          <input
            type="number"
            id="seats"
            value={seats}
            onChange={handleInputChange}
            className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          Book Seats
        </button>
      </form>
      
      {inputError && (
        <p className="mt-2 text-sm text-red-600">
          {inputError}
        </p>
      )}
    </div>
  );
};

export default BookingForm;