import React from 'react';
import type { Seat } from '../App';

interface SeatMapProps {
  seats: Seat[];
}

const SeatMap: React.FC<SeatMapProps> = ({ seats }) => {
  const rows = Array.from(
    new Set(seats.map(seat => seat.rowNumber))
  );

  return (
    <div className="flex flex-col gap-4">
      {rows.map(rowNum => (
        <div key={rowNum} className="flex gap-4 justify-center">
          {seats
            .filter(seat => seat.rowNumber === rowNum)
            .map(seat => (
              <div
                key={seat.id}
                className={`
                  w-12 h-12 rounded-lg flex items-center justify-center
                  font-semibold text-sm transition-colors
                  ${
                    seat.isBooked
                      ? 'bg-gray-900 text-white'
                      : 'bg-emerald-100 text-emerald-700 hover:bg-emerald-200'
                  }
                `}
              >
                {seat.id}
              </div>
            ))}
        </div>
      ))}
      
      <div className="mt-6 flex gap-4 justify-center items-center text-sm">
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 bg-emerald-100 rounded"></div>
          <span className="text-gray-600">Available</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 bg-gray-900 rounded"></div>
          <span className="text-gray-600">Booked</span>
        </div>
      </div>
    </div>
  );
};

export default SeatMap;