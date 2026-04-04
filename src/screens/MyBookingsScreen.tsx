import React from 'react';
import { useAppContext } from '../context/AppContext';
import { BookingCard } from '../components/ui/Cards';

export const MyBookingsScreen: React.FC = () => {
  const { bookings } = useAppContext();

  const upcoming = bookings.filter(b => b.status === 'upcoming');
  const past = bookings.filter(b => b.status !== 'upcoming');

  return (
    <div className="p-6 space-y-8">
      <h1 className="text-2xl font-black text-gray-900">My Bookings</h1>

      <section className="space-y-4">
        <h3 className="font-bold text-gray-900 flex items-center gap-2">
          Upcoming
          <span className="bg-[#FF2D55] text-white text-[10px] px-2 py-0.5 rounded-full">{upcoming.length}</span>
        </h3>
        {upcoming.length > 0 ? (
          <div className="grid gap-4">
            {upcoming.map((booking) => (
              <BookingCard key={booking.id} booking={booking} />
            ))}
          </div>
        ) : (
          <div className="bg-white p-8 rounded-3xl border border-dashed border-gray-200 text-center text-gray-400 text-sm">
            No upcoming appointments
          </div>
        )}
      </section>

      <section className="space-y-4">
        <h3 className="font-bold text-gray-900">Past Bookings</h3>
        <div className="grid gap-4">
          {past.map((booking) => (
            <BookingCard key={booking.id} booking={booking} />
          ))}
        </div>
      </section>
    </div>
  );
};
