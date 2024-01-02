// components/BoatCard.tsx
import React from 'react';

interface BoatCardProps {
    image: string;
    description: string;
}

const BoatCard: React.FC<BoatCardProps> = ({ image, description }) => {
    return (
        <div className="w-64 h-64 perspective">
            <div className="card">
                <div className="card-face card-front">
                    <img src={image} alt="Boat" className="w-full h-full object-cover" />
                </div>
                <div className="card-face card-back bg-white">
                    <p className="text-blue-50">{description}</p>
                </div>
            </div>
        </div>
    );
};

export default BoatCard;
