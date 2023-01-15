import React from 'react';

const items = ['Facebook', 'Instagram', 'Twitter'];

const Footer = () => {
  return (
    <div className='relative bg-blue-900 px-5 md:px-20 py-10 md:py-24 text-white'>
      <div className='flex items-center justify-between md:space-x-10'>
        <span>&copy; 2020 DE, Inc. All rights reserved.</span>
      </div>
    </div>
  );
};

export default Footer;
