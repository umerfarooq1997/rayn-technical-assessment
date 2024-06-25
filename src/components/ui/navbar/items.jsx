import Link from 'next/link';
import Image from 'next/image';

import { NavbarItems } from '../../../../utilities/static-data';
import { navArrowDown } from '../../../../utilities/static-images-imports';

const Items = () =>
  <div className="flex gap-8">
    {
      NavbarItems.map((item) =>
        <Link className="font-medium flex gap-[13px] items-center text-base text-primary" href="/" key={item.name}>
          {item.name}

          {
            item.dropDown ?
              <Image alt="arrow Down" src={navArrowDown} />
              : undefined
          }
        </Link>,
      )
    }

  </div>;

export default Items;
