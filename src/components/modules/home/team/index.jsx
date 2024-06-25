import { memo } from 'react';

import Heading from '@/components/ui/heading';
import TeamCard from '@/components/ui/team-card';

const Team = ({ data }) =>
  <div className="container px-8 py-24">

    {/* Heading */}
    <Heading heading="Meet the team" label="Culture" subHeading="Powerful, self-serve product and growth analytics to help you convert, engage, and retain more users. Trusted by over 4,000 startups." />

    {/* Team Members Cards */}
    <div className="grid grid-cols-4 gap-x-8 gap-y-16 mt-24">
      {data.results.map((item) => <TeamCard item={item} key={item.picture.large} />)}
    </div>

  </div>;

export default memo(Team);
