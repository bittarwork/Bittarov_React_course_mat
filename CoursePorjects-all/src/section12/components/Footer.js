import React from 'react';

const Footer = ({ theme }) => {
    return (
        <footer className={`text-center py-4 mt-auto ${theme === 'light' ? 'bg-[#3AAFA9] text-[#17252A]' : 'bg-[#2B7A78] text-[#FEFFFF]'}`}>
            <p>© 2024 Library Management. All Rights Reserved.</p>
            <div className="flex justify-center space-x-4 mt-2">
                <a href="/privacy-policy" className={`hover:underline ${theme === 'light' ? 'text-[#17252A]' : 'text-[#FEFFFF]'}`}>Privacy Policy</a>
                <a href="/contact" className={`hover:underline ${theme === 'light' ? 'text-[#17252A]' : 'text-[#FEFFFF]'}`}>Contact Us</a>
            </div>
        </footer>
    );
};

export default Footer;
