import { memo } from 'react';

const Heading = ({ heading, subHeading, label }) =>
  <div className="text-center">
    {label ? <p className="text-base text-tertiary font-semibold mb-3 leading-[24px]">{label}</p> : undefined}

    {heading ? <h2 className="text-[36px] leading-[44px] font-semibold mb-5 text-secondary">{heading}</h2> : undefined}

    {subHeading ? <p className="text-[20px] leading-[30px] w-[768px] mx-auto font-light text-primary">{subHeading}</p> : undefined}
  </div>;

export default memo(Heading);
