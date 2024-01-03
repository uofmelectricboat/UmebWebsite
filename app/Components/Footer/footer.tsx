// components/Footer.tsx
import React from 'react';
import Button from '../buttons';

const Footer: React.FC = () => {
    return (
        <footer className="bg-white text-gray-800 text-center p-4 pt-20">
            <div className="flex">
                <div className="w-1/3">
                    <p className="font-bold text-2xl items-center text-center justify-center"> Join us towards the Electric Future! </p>
                </div>
                <div className="w-2/3 flex justify-center mt-2">
                    <div className="px-5">
                        <Button buttonText="Donate" Ref="/Donate"></Button>
                    </div>
                    <div className="px-5">
                        <Button buttonText="Sponsor Us" Ref="/Donate"></Button>
                    </div>
                    <div className="px-5">
                        <Button buttonText="Join Us" Ref="/Donate"></Button>
                    </div>
                </div>
                <div className="container mx-auto">
                    <p>
                        Hello World!
                    </p>
                </div>
            </div>


        </footer>
    );
};

export default Footer;
