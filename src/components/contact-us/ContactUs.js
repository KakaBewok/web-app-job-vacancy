import React from 'react';

const ContactUs = () => {
  return (
    <form className="mx-auto flex w-full max-w-xs md:max-w-xl space-x-3">
      <div className="w-full max-w-2xl px-6 py-10 m-auto mt-10 bg-white rounded-lg shadow-lg dark:bg-gray-800">
        {/* Title */}
        <div className="mb-6 text-2xl font-normal text-center text-gray-800 dark:text-white">
          Contact us !
        </div>
        <div className="grid max-w-xl grid-cols-2 gap-4 m-auto">
          {/* Name */}
          <div className="col-span-2 lg:col-span-1">
            <div>
              <input
                type="text"
                id="contact-form-name"
                className=" rounded-lg  flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                placeholder="Name"
                required
              />
            </div>
          </div>
          {/* Email */}
          <div className="col-span-2 lg:col-span-1">
            <div>
              <input
                type="text"
                id="contact-form-email"
                className=" rounded-lg  flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                placeholder="email"
                required
              />
            </div>
          </div>
          {/* Message */}
          <div className="col-span-2">
            <label className="text-gray-700" htmlFor="name">
              <textarea
                className="max-h-40 min-h-16 flex-1 w-full px-4 py-2 text-base text-gray-700 placeholder-gray-400 bg-white border border-gray-300 rounded-lg appearance-none focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                id="comment"
                placeholder="Enter your comment"
                name="comment"
                rows={5}
                cols={40}
                required
              />
            </label>
          </div>
          {/* Button */}
          <div className="col-span-2 text-right">
            <button
              data-tip="Under maintenance"
              type="submit"
              className="tooltip tooltip-top py-2 px-4  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
            >
              Send
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default ContactUs;
