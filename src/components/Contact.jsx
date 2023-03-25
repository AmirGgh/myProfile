import React from "react";

const Contact = () => {
  return (
    <div
      name='contact'
      className='w-full xl:h-screen  flex justify-center items-center p-4'
    >
      <form
        method='POST'
        action='https://getform.io/f/fbea8dd6-626f-4e8f-86f1-b45a3e9725b8'
        className='flex flex-col max-w-[600px] w-full h-full'
      >
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300'>
            Contact
          </p>

          <p className='text-gray-300 py-3'>// Phone number: 052-870-3824</p>
          <p className='text-gray-300 py-3'>
            // Submit the form below or shoot me an email to
            amir.gez.p@gmail.com
          </p>
        </div>
        <input
          className='bg-[#e1e8ff] p-2'
          type='text'
          placeholder='Name'
          name='name'
        />
        <input
          className='my-4 p-2 bg-[#e1e8ff]'
          type='email'
          placeholder='Email'
          name='email'
        />
        <textarea
          className='bg-[#e1e8ff] p-2'
          name='message'
          rows='10'
          placeholder='Message'
        ></textarea>
        <button className='text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center'>
          Let's Collaborate
        </button>
      </form>
    </div>
  );
};

export default Contact;
