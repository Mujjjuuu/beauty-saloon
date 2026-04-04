import React from 'react';
import { Salon, Service, Booking } from '../../types';
import { Star, MapPin, Clock } from 'lucide-react';
import { cn } from '../../lib/utils';

export const SalonCard: React.FC<{ salon: Salon; onClick?: () => void }> = ({ salon, onClick }) => {
  return (
    <div 
      onClick={onClick}
      className="bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100 active:scale-[0.98] transition-transform cursor-pointer"
    >
      <div className="relative h-48">
        <img 
          src={salon.image} 
          alt={salon.name} 
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-xl flex items-center gap-1">
          <Star className="w-3.5 h-3.5 text-yellow-400 fill-yellow-400" />
          <span className="text-xs font-bold">{salon.rating}</span>
        </div>
      </div>
      <div className="p-4 space-y-2">
        <div className="flex justify-between items-start">
          <h3 className="font-bold text-lg text-gray-900">{salon.name}</h3>
          <span className="text-[#FF2D55] font-bold">Rs {salon.startingPrice}+</span>
        </div>
        <div className="flex items-center gap-1 text-gray-500 text-sm">
          <MapPin className="w-3.5 h-3.5" />
          <span>{salon.location}</span>
        </div>
        <div className="flex items-center gap-4 text-xs font-medium">
          <div className="flex items-center gap-1 text-green-600">
            <Clock className="w-3 h-3" />
            <span>Open Now</span>
          </div>
          <div className="text-gray-400">
            {salon.distance} away
          </div>
        </div>
      </div>
    </div>
  );
};

export const ServiceCard: React.FC<{ 
  service: Service; 
  selected?: boolean;
  onClick?: () => void;
}> = ({ service, selected, onClick }) => {
  return (
    <div 
      onClick={onClick}
      className={cn(
        "p-4 rounded-2xl border-2 transition-all cursor-pointer flex justify-between items-center",
        selected ? "border-[#FF2D55] bg-[#FDF2F4]" : "border-gray-100 bg-white"
      )}
    >
      <div>
        <h4 className="font-bold text-gray-900">{service.name}</h4>
        <div className="flex items-center gap-2 text-sm text-gray-500 mt-1">
          <Clock className="w-3.5 h-3.5" />
          <span>{service.duration}</span>
        </div>
      </div>
      <div className="text-right">
        <div className="font-bold text-[#FF2D55]">Rs {service.price}</div>
      </div>
    </div>
  );
};

export const BookingCard: React.FC<{ booking: Booking }> = ({ booking }) => {
  const statusColors = {
    upcoming: 'bg-blue-100 text-blue-600',
    completed: 'bg-green-100 text-green-600',
    cancelled: 'bg-red-100 text-red-600',
  };

  return (
    <div className="bg-white p-4 rounded-2xl border border-gray-100 shadow-sm space-y-3">
      <div className="flex justify-between items-start">
        <div>
          <h3 className="font-bold text-gray-900">{booking.salonName}</h3>
          <p className="text-sm text-gray-500">{booking.serviceName}</p>
        </div>
        <span className={cn("text-[10px] font-bold uppercase px-2 py-1 rounded-lg", statusColors[booking.status])}>
          {booking.status}
        </span>
      </div>
      <div className="flex items-center gap-4 text-sm text-gray-600 pt-2 border-t border-gray-50">
        <div className="flex items-center gap-1.5">
          <Clock className="w-4 h-4 text-gray-400" />
          <span>{booking.date} • {booking.time}</span>
        </div>
      </div>
    </div>
  );
};
