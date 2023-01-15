import useOnClickOutside from 'hooks/useOnClickOutside';
import React, { useCallback, useMemo, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

import { ReactComponent as Loading } from 'assets/spinner.svg';
import { Card } from 'types/card';
import { fetchCard } from 'services/cardService';

const Header = () => {
  const [card, setCard] = useState<Card>();
  const [code, setCode] = useState('');
  const [openNav, setOpenNav] = useState(false);
  const [openSearch, setOpenSearch] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const searchContainerRef = useRef<HTMLDivElement>(null);

  const handleToggleSearch = useCallback(() => {
    setOpenSearch((prev) => !prev);
    setCard(undefined);
    setError('');
    setCode('');
  }, []);

  useOnClickOutside(searchContainerRef, handleToggleSearch);

  const onSearchChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setCode(e.target.value);
      setError('');
    },
    []
  );

  const onOpenSearch = useCallback(() => {
    setOpenSearch(true);
    setOpenNav(false);
  }, []);

  const handleSearch = async () => {
    if (loading) return;

    try {
      if (code) {
        setLoading(true);
        const res = await fetchCard(code);
        setLoading(false);
        if (res.length === 0) {
          setError('Card not exists.');
          return;
        }
        setCard(res[0].attributes);
      }
    } catch (err) {
      setLoading(false);
    }
  };

  const renderPeriod = useMemo(() => {
    if (!card || !card.code) return '';

    switch (card.type) {
      case 'Lava Smile':
        return '10 years';
      case 'Lava Gold':
        return '15 years';
      case 'Lava Platinum':
        return '20 years';
      default:
        return 'Unlimited';
    }
  }, [card]);

  const renderDate = useMemo(() => {
    if (!card || !card.activeDate) return '';

    const date = new Date(card.activeDate);

    return `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`;
  }, [card]);

  return (
    <div className='relative bg-white'>
      <div className='mx-auto'>
        <div className='flex items-center justify-between px-6 border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10'>
          <div className='flex justify-start lg:w-0 lg:flex-1'>
            <Link to='/'>
              <span className='text-2xl uppercase tracking-wider italic text-red-500 font-black'>
                us ceramic
              </span>
            </Link>
          </div>
          <div className='-my-2 -mr-2 md:hidden'>
            <button
              type='button'
              className='inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500'
              aria-expanded='false'
              onClick={() => setOpenNav((prev) => !prev)}
            >
              <span className='sr-only'>Open menu</span>
              <svg
                className='h-6 w-6'
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth='1.5'
                stroke='currentColor'
                aria-hidden='true'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5'
                />
              </svg>
            </button>
          </div>

          <div className='hidden items-center justify-end md:flex md:flex-1 lg:w-0'>
            <button
              className='inline-flex items-center justify-center whitespace-nowrap rounded-md border border-transparent bg-indigo-600 px-4 py-1 text-base font-medium text-white shadow-sm hover:bg-indigo-700'
              onClick={() => setOpenSearch(true)}
            >
              <span className='mb-1'>Search</span>
            </button>
          </div>
        </div>
      </div>

      <div
        className={`absolute inset-x-0 top-0 origin-top-right transform p-2 transition md:hidden ${
          openNav ? '' : 'hidden'
        }`}
      >
        <div className='divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5'>
          <div className='px-5 pt-5 pb-6'>
            <div className='flex items-center justify-between'>
              <div>
                <Link to='/'>
                  <span className='text-2xl uppercase tracking-wider italic text-red-500 font-black'>
                    us ceramic
                  </span>
                </Link>
              </div>
              <div className='-mr-2'>
                <button
                  type='button'
                  className='inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500'
                  onClick={() => setOpenNav((prev) => !prev)}
                >
                  <span className='sr-only'>Close menu</span>
                  <svg
                    className='h-6 w-6'
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    strokeWidth='1.5'
                    stroke='currentColor'
                    aria-hidden='true'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      d='M6 18L18 6M6 6l12 12'
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <div className='space-y-6 py-6 px-5'>
            <div className='flex flex-col'>
              <button
                className='inline-flex items-center justify-center py-1 whitespace-nowrap rounded-md border border-transparent bg-indigo-600 px-4 text-base font-medium text-white shadow-sm hover:bg-indigo-700'
                onClick={onOpenSearch}
              >
                <span className='mb-1'>Search</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {openSearch && (
        <div
          className='relative z-10'
          aria-labelledby='modal-title'
          role='dialog'
          aria-modal='true'
        >
          <div className='fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity'></div>

          <div className='fixed inset-0 z-10 overflow-y-auto'>
            <div className='flex w-full justify-center text-center'>
              <div className='relative w-full transform overflow-hidden bg-white text-left shadow-xl transition-all'>
                <div ref={searchContainerRef} className='bg-white px-4 py-8'>
                  <div className='flex flex-col md:items-center'>
                    <h3
                      className='mb-4 text-lg text-center font-medium leading-6 text-gray-900 uppercase'
                      id='modal-title'
                    >
                      Search Card Information
                    </h3>
                    <div className='flex gap-2 justify-center'>
                      <div className='flex flex-col'>
                        <input
                          type='text'
                          className='inline-block h-10 relative px-3 border outline-none rounded-md'
                          value={code}
                          onChange={onSearchChange}
                          autoFocus
                        />
                        {error && (
                          <span className='text-red-600 text-sm'>{error}</span>
                        )}
                      </div>
                      <button
                        className={`
                        w-20 h-[40px] inline-flex items-center justify-center whitespace-nowrap rounded-md border border-transparent px-4 text-base font-medium text-white shadow-sm ${
                          loading
                            ? 'bg-indigo-400 cursor-default'
                            : 'bg-indigo-600 hover:bg-indigo-700'
                        }
                        `}
                        onClick={handleSearch}
                      >
                        {loading ? (
                          <Loading className='w-7 h-7' />
                        ) : (
                          <span className='mb-1'>Search</span>
                        )}
                      </button>
                    </div>

                    {card && (
                      <div className='mt-8 text-left md:min-w-[450px]'>
                        <div className='flex items-end min-h-[24px] my-1'>
                          <h6 className='text-sm tracking-wider text-gray-400 uppercase mr-5'>
                            Code:
                          </h6>
                          <p>{card.code}</p>
                        </div>
                        <div className='flex items-end min-h-[24px] my-1'>
                          <h6 className='text-sm tracking-wider text-gray-400 uppercase mr-5'>
                            Type:
                          </h6>
                          <p>{card.type}</p>
                        </div>
                        <div className='flex items-end min-h-[24px] my-1'>
                          <h6 className='tracking-wider text-sm text-gray-400 uppercase mr-5'>
                            Period active:
                          </h6>
                          <p>{renderPeriod}</p>
                        </div>
                        <div className='flex items-end min-h-[24px] my-1'>
                          <h6 className='tracking-wider text-sm text-gray-400 uppercase mr-5'>
                            Active date:
                          </h6>
                          <p>{card.activeDate}</p>
                        </div>
                        <div className='flex items-end min-h-[24px] my-1'>
                          <h6 className='shrink-0 text-sm tracking-wider text-gray-400 uppercase mr-5'>
                            Customer name:
                          </h6>
                          <p className='break-word'>{card.customerName}</p>
                        </div>
                        <div className='flex items-end min-h-[24px] my-1'>
                          <h6 className='tracking-wider text-sm text-gray-400 uppercase mr-5'>
                            Customer Phone Number:
                          </h6>
                          <p>{card.customerPhoneNumber}</p>
                        </div>
                        <div className='flex items-end min-h-[24px] my-1'>
                          <h6 className='shrink-0 text-sm tracking-wider text-gray-400 uppercase mr-5'>
                            Customer Email:
                          </h6>
                          <p className='break-word'>{card.customerEmail}</p>
                        </div>
                        <div className='flex items-end min-h-[24px] my-1'>
                          <h6 className='shrink-0 text-sm tracking-wider text-gray-400 uppercase mr-5'>
                            Customer Address:
                          </h6>
                          <p className='break-word'>{card.customerAddress}</p>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
