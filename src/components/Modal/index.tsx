import React from 'react';
import Button from '../comon/Button';

interface Props {
  content: string;
  handleSuccess: () => void;
}

const Modal = ({ content, handleSuccess }: Props) => {
  return (
    <div className='w-screen h-screen fixed bg-slate-300 top-0 left-0 flex items-center justify-center'>
      <div className='w-52 bg-white rounded-xl flex flex-col items-center pt-3 pb-4 shadow'>
        <p>{content}</p>
        <Button
          onClick={handleSuccess}
          size='small'
          className='justify-center mt-3 h-8'
        >
          OK
        </Button>
      </div>
    </div>
  );
};

export default Modal;
