/* eslint-disable jsx-a11y/alt-text */
import React from 'react';

const Hero = ({ keyword, keywordSearchChange }) => {
  return (
    <div
      className="hero min-h-[60vh] lg:min-h-screen shadow-xl"
      style={{
        backgroundImage: `url("https://placeimg.com/1000/800/tech/grayscale?t=1674017793635")`,
      }}
    >
      <div className="hero-overlay bg-opacity-60 backdrop-blur-sm"></div>
      <div className="hero-content text-center text-neutral-content mt-10">
        <div className="max-w-xs lg:max-w-sm">
          <h1 className="text-3xl lg:text-5xl font-bold">
            Your dream job is here
          </h1>
          <p className="my-5">
            The simplest way to career opportunities starts here
          </p>
          <input
            type="text"
            placeholder="Find your best job!"
            className="input input-bordered input-primary w-full max-w-xs text-black"
            value={keyword}
            onChange={(event) => keywordSearchChange(event.target.value)}
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
