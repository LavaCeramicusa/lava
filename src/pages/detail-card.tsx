import React, { useEffect, useRef, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { fetchCard } from 'services/cardService';
import { useNavigate } from 'react-router-dom';

const CardDetail = () => {
  const [code, setCode] = useState('');
  const [card, setCard] = useState('');

  const navigate = useNavigate();
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    document.addEventListener('keydown', handleEnter);

    return () => {
      document.removeEventListener('keydown', handleEnter);
    };
  }, []);

  const {
    isLoading,
    data,
    refetch: getCard,
  } = useQuery({
    queryKey: ['card', code],
    queryFn: () => fetchCard(inputRef.current?.value || ''),
    enabled: false,
    // {
    //   enabled: false,
    //   retry: true,
    //   onSuccess: (res) => {
    //     console.log('a');
    //   },
    //   onError: (err) => {},
    // }
  });

  console.log('data', data);

  const handleSearch = () => {
    getCard();
  };

  const handleEnter = (e: KeyboardEvent) => {
    const code = inputRef.current?.value || '';
    // getCard();
    // if (e.key === 'Enter' && !!code) {
    //   console.log('hi');
    //   navigate(`/cards/${code}`);
    // }
  };

  return (
    <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 text-center'>
      <h2 className='mb-4 text-5xl font-bold uppercase text-indigo-600'>
        insurance card information
      </h2>

      <form className='inline-flex my-11'>
        <input
          type='text'
          className='bg-gray-100 rounded border border-gray-200 py-1 font-semibold text-gray-600 px-4 focus:outline-none'
        />

        <button className='ml-2 middle none font-sans font-bold center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-blue-500 text-white shadow-md shadow-blue-500/20 hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none'>
          Search
        </button>
      </form>

      <span className='block m-auto w-full h-0 border-b-2 border-slate-400 border-dashed' />

      <div className='flex mt-10'>
        <div className='w-1/2 pr-10 border-r-2 border-slate-400 border-solid'>
          <h3 className='mb-4 text-xl font-bold text-red-500'>
            Card Information
          </h3>

          <div className='text-left'>
            <div>
              <span>Code: </span>
              <span>0948KA</span>
            </div>

            <div>
              <span>Type: </span>
              <span>0948KA</span>
            </div>
            <div>
              <span>Period Time: </span>
              <span>0948KA</span>
            </div>
            <div>
              <span>Start Time: </span>
              <span>09/07/2022</span>
            </div>
            <div>
              <span>End Time: </span>
              <span>09/07/2023</span>
            </div>
          </div>
        </div>

        <div className='w-1/2 pl-10'>
          <h3 className='mb-4 text-xl font-bold text-red-500'>
            User Information
          </h3>

          <div className='text-left'>
            <div>
              <span>Full Name: </span>
              <span>Duong Ngoc Bich</span>
            </div>

            <div>
              <span>Birth of Date: </span>
              <span>09/07/1994</span>
            </div>
            <div>
              <span>Gender: </span>
              <span>Male</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardDetail;
//  <div className='inline-flex rounded-md shadow'>
//               <a
//                 href='#'
//                 className='inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-5 py-3 text-base font-medium text-white hover:bg-indigo-700'
//               >
//                 Get started
//               </a>
//             </div>
//             <div className='ml-3 inline-flex rounded-md shadow'>
//               <a
//                 href='#'
//                 className='inline-flex items-center justify-center rounded-md border border-transparent bg-white px-5 py-3 text-base font-medium text-indigo-600 hover:bg-indigo-50'
//               >
//                 Learn more
//               </a>
//             </div>
