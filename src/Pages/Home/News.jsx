import React, { useEffect } from 'react';
import { FaNewspaper } from 'react-icons/fa'; // Importing an icon from react-icons
import './News.css';

const News = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate');
          }
        });
      },
      { threshold: 0.1 }
    );

    const timelineItems = document.querySelectorAll('.timeline-item');
    timelineItems.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="bg-gray-100 min-h-screen py-10">
      <div className="container mx-auto">
        <div className="text-center mb-10 flex items-center justify-center">
          <FaNewspaper className="text-orange-500 text-4xl mr-4" />
          <h1 className="text-5xl font-bold text-orange-500">News Update</h1>
        </div>
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute inset-0 flex justify-center">
            <div className="w-1 bg-orange-500"></div>
          </div>

          {/* Timeline Items */}
          <div className="space-y-12">
          <div className="timeline-item flex justify-end opacity-0 transform transition-transform duration-500 slide-in-right">
              <div className="bg-white p-6 rounded-lg shadow-lg relative w-[40vw] max-w-[40vw]">
                <h2 className="text-xl font-semibold text-orange-500">
                Gabion Gravity Wall work with Bi-axial Reinforcement
                </h2>
                
              </div>
            </div>  
          <div className="timeline-item flex justify-start opacity-0 transform transition-transform duration-500 slide-in-left">
              <div className="bg-white p-6 rounded-lg shadow-lg relative w-[40vw] max-w-[40vw]">
                <h2 className="text-xl font-semibold text-orange-500">
                Gabion Wall work in Mining Area - Assam
                </h2>
                
              </div>
            </div>

            <div className="timeline-item flex justify-end opacity-0 transform transition-transform duration-500 slide-in-right">
              <div className="bg-white p-6 rounded-lg shadow-lg relative w-[40vw] max-w-[40vw]">
                <h2 className="text-xl font-semibold text-orange-500">
                RS Wall Work in Indore-Ujjain Road Project
                </h2>
                
              </div>
            </div>   
            
            {/* First Item (Right) */}
            

            {/* Second Item (Left) */}
            <div className="timeline-item flex justify-start opacity-0 transform transition-transform duration-500 slide-in-left">
              <div className="bg-white p-6 rounded-lg shadow-lg relative w-[40vw] max-w-[40vw]">
                <h2 className="text-xl font-semibold text-orange-500">
                  ESIPL bags “Shored Mechanically Stabilized Earth Wall” project from APCO Infratech Pvt. Ltd. in Doda, Jammu & Kashmir.
                </h2>
                
              </div>
            </div>

            {/* Third Item (Right) */}
            <div className="timeline-item flex justify-end opacity-0 transform transition-transform duration-500 slide-in-right">
              <div className="bg-white p-6 rounded-lg shadow-lg relative w-[40vw] max-w-[40vw]">
                <h2 className="text-xl font-semibold text-orange-500">
                  ESIPL bags “RS Wall work at Cement factory in Assam” from Dalmia Group.
                </h2>
                
              </div>
            </div>

            {/* Fourth Item (Left) */}
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;