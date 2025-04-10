import React from 'react';
import { Hero } from '../components/sections/forHome/Hero';
import WhoUs from '../components/sections/forHome/WhoUs';
import PopularPlaces from '../components/sections/forHome/PopularPlaces';
import CallForLandlords from '../components/sections/forHome/CallForLandlords';


export default function HomePage() {
  
    return (
      <div className="min-h-screen bg-gray-50">
    
          <Hero />
          <WhoUs/>
          <PopularPlaces/>
          <CallForLandlords/>
    
      </div>
    );
  }