import React, { useState } from 'react';
import { cn } from '../lib/utils';
import { useParams, useNavigate } from 'react-router-dom';
import { useAppContext } from '../context/AppContext';
import { ServiceCard } from '../components/ui/Cards';
import { Button } from '../components/ui/Inputs';
import { ChevronLeft, Star, MapPin, Share2, Heart } from 'lucide-react';
import { motion } from 'motion/react';

export const SalonDetailScreen: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { salons } = useAppContext();
  const salon = salons.find(s => s.id === id);
  const [selectedServiceId, setSelectedServiceId] = useState<string | null>(null);

  if (!salon) return <div>Salon not found</div>;

  return (
    <div className="relative h-full flex flex-col">
      <div className="relative h-80">
        <img 
          src={salon.image} 
          alt={salon.name} 
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute top-6 left-6 right-6 flex justify-between items-center">
          <button 
            onClick={() => navigate(-1)}
            className="w-10 h-10 bg-white/90 backdrop-blur-sm rounded-xl flex items-center justify-center shadow-sm"
          >
            <ChevronLeft className="w-6 h-6 text-gray-900" />
          </button>
          <div className="flex gap-2">
            <button className="w-10 h-10 bg-white/90 backdrop-blur-sm rounded-xl flex items-center justify-center shadow-sm">
              <Share2 className="w-5 h-5 text-gray-900" />
            </button>
            <button className="w-10 h-10 bg-white/90 backdrop-blur-sm rounded-xl flex items-center justify-center shadow-sm">
              <Heart className="w-5 h-5 text-[#FF2D55]" />
            </button>
          </div>
        </div>
      </div>

      <div className="flex-1 bg-[#FAFAFA] -mt-8 rounded-t-[40px] p-8 space-y-6 overflow-y-auto">
        <div className="space-y-2">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-black text-gray-900">{salon.name}</h1>
            <div className="flex items-center gap-1 bg-yellow-50 px-2 py-1 rounded-lg">
              <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
              <span className="text-sm font-bold text-yellow-700">{salon.rating}</span>
            </div>
          </div>
          <div className="flex items-center gap-1 text-gray-500 text-sm">
            <MapPin className="w-4 h-4" />
            <span>{salon.location}</span>
          </div>
        </div>

        <div className="flex gap-4 overflow-x-auto pb-2 no-scrollbar">
          <div className="bg-white px-4 py-2 rounded-2xl border border-gray-100 shadow-sm flex-shrink-0">
            <span className="text-[10px] uppercase font-bold text-gray-400 block">Experience</span>
            <span className="text-sm font-bold text-gray-900">10+ Years</span>
          </div>
          <div className="bg-white px-4 py-2 rounded-2xl border border-gray-100 shadow-sm flex-shrink-0">
            <span className="text-[10px] uppercase font-bold text-gray-400 block">Reviews</span>
            <span className="text-sm font-bold text-gray-900">{salon.reviewCount} Happy Clients</span>
          </div>
        </div>

        <section className="space-y-4">
          <h3 className="font-black text-lg text-gray-900">Services</h3>
          <div className="grid gap-3">
            {salon.services.map((service) => (
              <ServiceCard 
                key={service.id} 
                service={service}
                selected={selectedServiceId === service.id}
                onClick={() => setSelectedServiceId(service.id)}
              />
            ))}
          </div>
        </section>

        {salon.reviews.length > 0 && (
          <section className="space-y-4">
            <h3 className="font-black text-lg text-gray-900">Reviews</h3>
            <div className="space-y-4">
              {salon.reviews.map((review) => (
                <div key={review.id} className="bg-white p-4 rounded-2xl border border-gray-100">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-bold text-sm">{review.userName}</span>
                    <div className="flex items-center gap-0.5">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className={cn("w-3 h-3", i < review.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-200")} />
                      ))}
                    </div>
                  </div>
                  <p className="text-xs text-gray-600 leading-relaxed">{review.comment}</p>
                </div>
              ))}
            </div>
          </section>
        )}
      </div>

      <div className="p-6 bg-white border-t border-gray-100">
        <Button 
          size="full" 
          disabled={!selectedServiceId}
          onClick={() => navigate(`/book/${salon.id}/${selectedServiceId}`)}
        >
          Book Appointment
        </Button>
      </div>
    </div>
  );
};
