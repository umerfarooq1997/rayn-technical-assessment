import Image from 'next/image';

import { macBookImg, play } from '../../../../../utilities/static-images-imports';

const HomeHeader = () =>
  <div className="bg-[#f9fafb] py-[86px]">
    <div className="container">

      {/* Top Content */}
      <div className="text-center">
        <h1 className="font-semibold text-[60px] leading-[72px] text-secondary">{'Beautiful analytics to grow smarter'}</h1>
        <p className="w-[768px] leading-[30px] mx-auto text-xl text-primary font-light mt-6">
          {'Powerful, self-serve product and growth analytics to help you convert, engage, and retain more users. Trusted by over 4,000 startups.'}
        </p>

        <div className="flex gap-2 justify-center mt-12">
          <button className="flex gap-3 items-center font-medium h-[60px] px-[30px] text-lg rounded-lg text-primary border border-primary bg-white" type="button">
            <Image alt="Play Icon" src={play} />
            {'Demo'}
          </button>
          <button className="font-medium h-[60px] text-lg px-7 rounded-lg bg-primary text-white" type="button">{'Sign up'}</button>
        </div>
      </div>

      {/* Laptop Image */}
      <span className="block mx-auto mt-16 relative w-[768px] h-[448px]">
        <Image alt="Laptop Image" layout="fill" src={macBookImg} />
      </span>
    </div>
  </div>;

export default HomeHeader;
