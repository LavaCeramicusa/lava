import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from 'components/comon/Button';
import TextField from 'components/comon/TextField';
import Pagination from 'components/Pagination';

type Key = keyof typeof tabKey;

const tabKey = {
  code: 'Code',
  type: 'Type',
  period: 'Time Effective',
  name: 'Guest Name',
  phone: 'Phone',
  start: 'Time Active',
  end: 'Time InActive',
};

const keys = Object.keys(tabKey) as Key[];

const data = [
  {
    code: '03AFJ0',
    type: 'GOLD',
    period: '5 Years',
    name: '',
    phone: '',
    start: '',
    end: '',
  },
  {
    code: '03BFJ0',
    type: 'GOLD',
    period: '5 Years',
    name: 'MAsin Yelo',
    phone: '0394830593',
    start: '03/04/2023',
    end: '03/04/2028',
  },
  {
    code: '33AFJ0',
    type: 'GOLD',
    period: '5 Years',
    name: 'MAsin Yelo',
    phone: '0394830593',
    start: '03/04/2023',
    end: '03/04/2028',
  },
  {
    code: 'A3AFJ0',
    type: 'GOLD',
    period: '5 Years',
    name: 'MAsin Yelo',
    phone: '0394830593',
    start: '03/04/2023',
    end: '03/04/2028',
  },
];

const Cards = () => {
  const navigate = useNavigate();
  const [cards, setCards] = useState([...data]);

  return (
    <div className='min-h-screen p-5 lg:px-20 bg-[#F3F4F6]'>
      <div className='flex'>
        <input
          type='text'
          className='inline-block h-10 relative px-3 pb-0.5 outline-none rounded-md border border-solid border-gray-400'
          placeholder='Search card by code'
        />

        <Button className='ml-auto' onClick={() => navigate('/edit')}>
          Add Card
        </Button>
      </div>

      <div>
        <table className='relative bg-white my-10 w-full border-separate rounded-lg border border-solid border-slate-300 shadow'>
          <thead className='border-b border-solid border-red-400'>
            <tr>
              {keys.map((key) => (
                <th className='text-center py-4'>{tabKey[key]}</th>
              ))}
            </tr>
          </thead>

          <hr className='w-full absolute top-[55px]' />

          <tbody>
            {cards.map((card, index) => (
              <tr
                className={`border-solid border-gray-300 ${
                  index === 0 ? 'border-t-2' : 'border-t'
                }`}
              >
                {keys.map((key) => (
                  <td
                    className={`px-5 py-2 ${
                      key === 'code'
                        ? 'text-blue-600 cursor-pointer'
                        : 'text-gray-500'
                    }`}
                  >
                    {card[key] || 'N/A'}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>

        <div>
          <Pagination />
        </div>
      </div>
    </div>
  );
};

export default Cards;
