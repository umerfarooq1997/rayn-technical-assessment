import { memo } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { envelopeIcon, lcoationIcon, phoneIcon } from '../../../../utilities/static-images-imports';

const TeamCard = ({ item }) =>
  <div>
    <span className="flex relative w-full h-[296px]">
      <Image alt={`${item.name.first} Image`} layout="fill" src={item.picture.large} />
    </span>

    {/* Content Area */}
    <p className="text-secondary font-semibold text-[20px] leading-[30px] mt-6 mb-4 capitalize">{item.name.first}</p>
    <p className="text-primary text-base leading-[24px] font-light truncate">
      {`${item.location?.state}, ${item.location?.city}, ${item.location?.country}`}
    </p>

    {/* Icon Area */}
    <div className="flex gap-5 mt-6 items-center">
      <Link href={`tel:${item.cell}`} passHref>
        <span>
          <Image alt="phone Icon" src={phoneIcon} />
        </span>
      </Link>

      <Link href={`mailto:${item.email}`} passHref>
        <span>
          <Image alt="phone Icon" src={envelopeIcon} />
        </span>
      </Link>

      <Link href={`https://www.google.com/maps?q=${item.location.coordinates.latitude},${item.location.coordinates.longitude}`} passHref target="blank">
        <span>
          <Image alt="phone Icon" src={lcoationIcon} />
        </span>
      </Link>
    </div>

  </div>;

export default memo(TeamCard);
