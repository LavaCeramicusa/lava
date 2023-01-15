import React, { Fragment, useState } from 'react';
import { Listbox, Transition } from '@headlessui/react';
import {
  ChevronUpDownIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  ChevronDoubleLeftIcon,
  ChevronDoubleRightIcon,
} from '@heroicons/react/20/solid';

const page = ['10', '25', '50', '100'];

const Pagination = () => {
  const [selected, setSelected] = useState(page[0]);

  return (
    <div className='flex items-center justify-end'>
      <p className='mr-2'>Rows per page:</p>
      <Listbox value={selected} onChange={setSelected}>
        <div className='relative mt-1'>
          <Listbox.Button className='relative w-20 cursor-default rounded-lg bg-white py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm'>
            <span className='block truncate'>{selected}</span>
            <span className='pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2'>
              <ChevronUpDownIcon
                className='h-5 w-5 text-gray-400'
                aria-hidden='true'
              />
            </span>
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave='transition ease-in duration-100'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
          >
            <Listbox.Options className='absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm'>
              {page.map((p, idx) => (
                <Listbox.Option
                  key={idx}
                  className={({ active }) =>
                    `relative cursor-default select-none py-2 px-4 ${
                      active ? 'bg-amber-100 text-amber-900' : 'text-gray-900'
                    }`
                  }
                  value={p}
                >
                  {({ selected }) => (
                    <>
                      <span
                        className={`block text-left ${
                          selected ? 'font-medium text-blue-600' : 'font-normal'
                        }`}
                      >
                        {p}
                      </span>
                    </>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
      <p className='mx-4'>21-30 of 100</p>
      <button className='hover:bg-gray-300 rounded-full p-[3px]'>
        <ChevronDoubleLeftIcon className='w-6 h-6 text-black ' />
      </button>
      <button className='hover:bg-gray-300 rounded-full p-[3px]'>
        <ChevronLeftIcon className='w-6 h-6 text-black' />
      </button>
      <span className='w-8 h-8 flex items-center justify-center text-sm rounded-full bg-slate-200'>
        4
      </span>
      <button className='hover:bg-gray-300 rounded-full p-[3px]'>
        <ChevronRightIcon className='w-6 h-6 text-black' />
      </button>
      <button className='hover:bg-gray-300 rounded-full p-[3px]'>
        <ChevronDoubleRightIcon className='w-6 h-6 text-black' />
      </button>
    </div>
  );
};

export default Pagination;
