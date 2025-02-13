import React from 'react';

const NewsletterBox = () => {
  const onSubmitHandler = (event) => {
    event.preventDefault();
  };

  return (
    <div className='text-center bg-orange-500 pb-2 mb-3 rounded-lg flex flex-col items-center pl-10 p-4 '>
      <p className='text-2xl font-medium text-black mt-4'>
        Sign Up to Get Updates & News About Us.
      </p>
      <form
        onSubmit={onSubmitHandler}
        className=' w-full rounded-md md:flex-row sm:flex-col items-center gap-3 mx-auto mt-5 my-6   pl-3'
      >
        <input
          className='  outline-none py-4 md:px-10  sm:px-5 rounded-md'
          type='email'
          placeholder='Enter your email'
          required
        />
        <button
          type='submit'
          className='bg-black text-white text-xs px-10 py-4 rounded-md sm:ml-3 mt-3 sm:mt-0'
        >
          SUBSCRIBE
        </button>
      </form>
    </div>
  );
};

export default NewsletterBox;
