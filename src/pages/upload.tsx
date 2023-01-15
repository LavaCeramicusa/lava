import Button from 'components/comon/Button';
import React, { useRef } from 'react';
import { uploadInfo } from 'services/cardService';

const Upload = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleUpload = async (e: React.MouseEvent<HTMLButtonElement>) => {
    try {
      e.preventDefault();
      const files = inputRef?.current?.files;

      if (files) {
        console.log('file', files[0]);
        const formData = new FormData();
        formData.append('file', files[0], files[0].name);
        // uploadInfo(formData);
        await fetch('http://localhost:8000/cards/upload', {
          method: 'post',
          body: formData,
        });
      }
    } catch (err) {}
  };

  const handleDownload = () => {};

  return (
    <div className='min-h-screen bg-red-100 px-5 flex items-center justify-center bg-gradient-to-r from-sky-500 to-indigo-500 bg-[url("../assets/bg-login.jpg")] bg-cover bg-no-repeat'>
      <form
        method='POST'
        encType='multipart/form-data'
        className='mx-auto w-80 bg-white py-8 px-5 rounded-xl'
      >
        <input type='file' name='file' ref={inputRef} className='pb-5' />

        <div className='flex items-center justify-between'>
          <Button
            type='button'
            className='justify-center capitalize tracking-wide'
            onClick={handleUpload}
          >
            Upload
          </Button>
          <Button
            type='button'
            className='justify-center capitalize tracking-wide'
            onClick={handleDownload}
          >
            Download
          </Button>
        </div>
      </form>
    </div>
  );
};

export default Upload;
