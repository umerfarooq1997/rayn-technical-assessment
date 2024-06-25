import Image from 'next/image';

import { logo } from '../../../../utilities/static-images-imports';

import Items from './items';
import NavbarAuthButtons from './navbar-auth-buttons';

const Navbar = () =>
  <div className="flex justify-between">

    <div className="flex gap-10 items-center py-6">
      <span className="relative w-[142px] h-[32px]">
        <Image alt="Logo" layout="fill" src={logo} />
      </span>

      <Items />
    </div>

    <NavbarAuthButtons />
  </div>;

export default Navbar;
