import React from 'react';
import { Salon, Service, Booking } from '../../types';
import { Star, MapPin, Clock, Heart } from 'lucide-react';
import { cn } from '../../lib/utils';

export const SalonCard: React.FC<{ salon: Salon; onClick?: () => void }> = ({ salon, onClick }) => {
  const [isFavorite, setIsFavorite] = React.useState(false);

  const toggleFavorite = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsFavorite(!isFavorite);
  };

  return (
    <div 
      onClick={onClick}
      className="bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100 active:scale-[0.98] transition-transform cursor-pointer group"
    >
      <div className="relative h-48">
        <img 
          src={salon.image} 
          alt={salon.name} 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          referrerPolicy="no-referrer"
        />
        <div className="absolute top-4 left-4 z-10">
          <button 
            onClick={toggleFavorite}
            className={cn(
              "w-10 h-10 rounded-xl backdrop-blur-md flex items-center justify-center transition-all",
              isFavorite ? "bg-[#FF2D55] text-white" : "bg-white/70 text-gray-900 hover:bg-white"
            )}
          >
            <Heart className={cn("w-5 h-5", isFavorite && "fill-current")} />
          </button>
        </div>
        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-xl flex items-center gap-1">
          <Star className="w-3.5 h-3.5 text-yellow-400 fill-yellow-400" />
          <span className="text-xs font-bold">{salon.rating}</span>
        </div>
      </div>
      <div className="p-6 flex flex-col items-center justify-center text-center min-h-[160px]">
        <h3 className="font-black text-gray-900 text-xl leading-tight mb-2">{salon.name}</h3>
        <div className="flex items-center justify-center gap-1.5 text-gray-400 text-xs mb-4">
          <MapPin className="w-3.5 h-3.5" />
          <span className="font-medium">{salon.location}</span>
        </div>
        
        <div className="w-full pt-4 border-t border-gray-50 flex flex-col items-center">
          <div className="bg-[#FF2D55]/5 px-4 py-2 rounded-2xl flex flex-col items-center">
            <span className="text-[10px] text-[#FF2D55] font-black uppercase tracking-widest mb-0.5">Total Orders</span>
            <span className="text-lg font-black text-[#FF2D55]">{salon.orders}+</span>
          </div>
          <div className="mt-3 flex items-center gap-2 text-[10px] text-gray-400 font-bold uppercase tracking-wider">
            <Clock className="w-3 h-3" />
            <span>{salon.distance} • Open Now</span>
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
