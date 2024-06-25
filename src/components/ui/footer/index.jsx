import Image from 'next/image';
import { useState } from 'react';

import { footerLogo } from '../../../../utilities/static-images-imports';

const Footer = () => {
  const [email, setEmail] = useState('');

  const onSubmit = () => {
    // API Call here
    if (email) {
      // eslint-disable-next-line no-console
      console.log(email);
    }
    else {
      // validation Message
    }
  };

  return (
    <div className="py-12">
      <div className="flex justify-between">
        <Image alt="Footer Logo" src={footerLogo} />

        <div className="flex gap-4">
          <input className="border-0 h-11 rounded-lg pl-[14px] outline-none" onChange={({ target: { value } }) => setEmail(value)} placeholder="Enter your email" type="text" value={email} />
          <button className="text-white bg-tertiary px-[18px] rounded-lg" onClick={() => onSubmit()} type="button">{'Subscribe'}</button>
        </div>
      </div>

      <p className="text-right mt-16 text-[#D0D5DD]">{'© 2077 Untitled UI. All rights reserved.'}</p>
    </div>
  );
};

export default Footer;
