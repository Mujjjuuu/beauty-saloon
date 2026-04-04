import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useAppContext } from '../context/AppContext';
import { Button } from '../components/ui/Inputs';
import { ChevronLeft, Calendar as CalendarIcon, Clock, CheckCircle2 } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export const BookingScreen: React.FC = () => {
  const { salonId, serviceId } = useParams();
  const navigate = useNavigate();
  const { salons, addBooking } = useAppContext();
  
  const salon = salons.find(s => s.id === salonId);
  const service = salon?.services.find(s => s.id === serviceId);

  const [selectedDate, setSelectedDate] = useState<string>('2024-03-25');
  const [selectedTime, setSelectedTime] = useState<string>('10:00 AM');
  const [isConfirmed, setIsConfirmed] = useState(false);

  if (!salon || !service) return <div>Not found</div>;

  const timeSlots = [
    '09:00 AM', '10:00 AM', '11:00 AM', 
    '12:00 PM', '01:00 PM', '02:00 PM',
    '03:00 PM', '04:00 PM', '05:00 PM'
  ];

  const dates = [
    { day: 'Mon', date: '25', full: '2024-03-25' },
    { day: 'Tue', date: '26', full: '2024-03-26' },
    { day: 'Wed', date: '27', full: '2024-03-27' },
    { day: 'Thu', date: '28', full: '2024-03-28' },
    { day: 'Fri', date: '29', full: '2024-03-29' },
  ];

  const handleConfirm = () => {
    addBooking({
      id: Math.random().toString(36).substr(2, 9),
      salonId: salon.id,
      salonName: salon.name,
      serviceName: service.name,
      date: selectedDate,
      time: selectedTime,
      price: service.price,
      status: 'upcoming'
    });
    setIsConfirmed(true);
  };

  if (isConfirmed) {
    return (
      <div className="h-full flex flex-col items-center justify-center p-8 text-center space-y-6">
        <motion.div 
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center"
        >
          <CheckCircle2 className="w-12 h-12 text-green-600" />
        </motion.div>
        <div className="space-y-2">
          <h1 className="text-3xl font-black text-gray-900">Booking Success!</h1>
          <p className="text-gray-500">Your appointment at {salon.name} has been confirmed.</p>
        </div>
        <div className="w-full bg-white p-6 rounded-3xl border border-gray-100 space-y-4">
          <div className="flex justify-between text-sm">
            <span className="text-gray-400">Service</span>
            <span className="font-bold text-gray-900">{service.name}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-gray-400">Date & Time</span>
            <span className="font-bold text-gray-900">{selectedDate} • {selectedTime}</span>
          </div>
          <div className="flex justify-between text-sm pt-4 border-t border-gray-50">
            <span className="text-gray-400 font-bold">Total Price</span>
            <span className="font-black text-[#FF2D55]">Rs {service.price}</span>
          </div>
        </div>
        <Button size="full" onClick={() => navigate('/home')}>Go to Home</Button>
      </div>
    );
  }

  return (
    <div className="flex flex-col h-full">
      <header className="p-6 flex items-center gap-4">
        <button onClick={() => navigate(-1)} className="w-10 h-10 bg-white rounded-xl flex items-center justify-center shadow-sm border border-gray-100">
          <ChevronLeft className="w-6 h-6 text-gray-900" />
        </button>
        <h1 className="text-xl font-black text-gray-900">Book Appointment</h1>
      </header>

      <div className="flex-1 overflow-y-auto p-6 space-y-8">
        <section className="space-y-4">
          <h3 className="font-bold text-gray-900">Select Date</h3>
          <div className="flex gap-3 overflow-x-auto pb-2 no-scrollbar">
            {dates.map((d) => (
              <button
                key={d.full}
                onClick={() => setSelectedDate(d.full)}
                className={cn(
                  "flex flex-col items-center justify-center w-16 h-20 rounded-2xl border-2 transition-all shrink-0",
                  selectedDate === d.full ? "border-[#FF2D55] bg-[#FDF2F4]" : "border-gray-100 bg-white"
                )}
              >
                <span className={cn("text-[10px] font-bold uppercase", selectedDate === d.full ? "text-[#FF2D55]" : "text-gray-400")}>{d.day}</span>
                <span className={cn("text-lg font-black", selectedDate === d.full ? "text-[#FF2D55]" : "text-gray-900")}>{d.date}</span>
              </button>
            ))}
          </div>
        </section>

        <section className="space-y-4">
          <h3 className="font-bold text-gray-900">Select Time Slot</h3>
          <div className="grid grid-cols-3 gap-3">
            {timeSlots.map((t) => (
              <button
                key={t}
                onClick={() => setSelectedTime(t)}
                className={cn(
                  "py-3 rounded-xl border-2 text-xs font-bold transition-all",
                  selectedTime === t ? "border-[#FF2D55] bg-[#FDF2F4] text-[#FF2D55]" : "border-gray-100 bg-white text-gray-600"
                )}
              >
                {t}
              </button>
            ))}
          </div>
        </section>

        <section className="bg-white p-6 rounded-3xl border border-gray-100 space-y-4">
          <h3 className="font-bold text-gray-900">Booking Summary</h3>
          <div className="space-y-3">
            <div className="flex justify-between text-sm">
              <span className="text-gray-400">Service</span>
              <span className="font-bold text-gray-900">{service.name}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-400">Price</span>
              <span className="font-bold text-gray-900">Rs {service.price}</span>
            </div>
            <div className="flex justify-between text-sm pt-3 border-t border-gray-50">
              <span className="text-gray-900 font-bold">Total</span>
              <span className="font-black text-[#FF2D55]">Rs {service.price}</span>
            </div>
          </div>
        </section>
      </div>

      <div className="p-6 bg-white border-t border-gray-100">
        <Button size="full" onClick={handleConfirm}>Confirm Booking</Button>
      </div>
    </div>
  );
};

import { cn } from '../lib/utils';
