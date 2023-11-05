import React, { useState } from 'react';

const Carousel: React.FC<{ items: { imageSrc: string; text: string }[] }> = ({ items }) => {
  const [currentItem, setCurrentItem] = useState(0);

  const goToItem = (index: number) => {
    setCurrentItem(index);
  };

  return (
      <div className="flex flex-col items-center justify-center">
        <div className="w-full max-w-xl p-4 flex">
          <div className="w-1/2">
            <img src={items[currentItem].imageSrc} alt="Carousel Image" className="w-full h-auto" />
          </div>
          <div className="w-1/2">
            <div className="p-4">
              <p>{items[currentItem].text}</p>
            </div>
          </div>
        </div>
        <div className="mt-2 flex justify-center space-x-4">
          {items.map((_, index) => (
              <button
                  key={index}
                  onClick={() => goToItem(index)}
                  className={`${
                      currentItem === index
                          ? 'border-b-2 border-blue-500'
                          : 'border-b border-transparent hover:border-blue-500'
                  } py-2 px-4 transition-colors duration-300`}
              />
          ))}
        </div>
      </div>
  );
};

export default Carousel;
