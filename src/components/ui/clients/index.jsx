import Image from 'next/image';
import { memo } from 'react';

import { boltImg, featherImg, globalImg, lightBoxImg, nethzImg, spheruleImg } from '../../../../utilities/static-images-imports';

const Clients = () =>
  <div className="container px-8">
    <div className="py-24 border-b border-[#EAECF0]">
      <p className="text-primary text-center">{'Join 4,000+ companies already growing'}</p>

      <div className="grid grid-cols-6 mt-8 group">
        <div className="relative w-[170px] cursor-pointer h-[48px] group-hover:grayscale hover:!grayscale-0 transition-all">
          <Image alt="client Image" layout="fill" src={boltImg} />
        </div>

        <div className="relative w-[170px] cursor-pointer h-[48px] group-hover:grayscale hover:!grayscale-0 transition-all">
          <Image alt="client Image" layout="fill" src={lightBoxImg} />
        </div>

        <div className="relative w-[170px] cursor-pointer h-[48px] group-hover:grayscale hover:!grayscale-0 transition-all">
          <Image alt="client Image" layout="fill" src={featherImg} />
        </div>

        <div className="relative w-[170px] cursor-pointer h-[48px] group-hover:grayscale hover:!grayscale-0 transition-all">
          <Image alt="client Image" layout="fill" src={spheruleImg} />
        </div>

        <div className="relative w-[170px] cursor-pointer h-[48px] group-hover:grayscale hover:!grayscale-0 transition-all">
          <Image alt="client Image" layout="fill" src={globalImg} />
        </div>

        <div className="relative w-[170px] cursor-pointer h-[48px] group-hover:grayscale hover:!grayscale-0 transition-all">
          <Image alt="client Image" layout="fill" src={nethzImg} />
        </div>
      </div>
    </div>
  </div>;

export default memo(Clients);
