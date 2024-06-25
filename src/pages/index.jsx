import HomeHeader from '@/components/modules/home/home-header';
import Team from '@/components/modules/home/team';
import Clients from '@/components/ui/clients';

const Home = ({ data }) =>
  <div>
    <HomeHeader />

    <Clients />

    <Team data={data} />
  </div>;

// Export the getServerSideProps function
export const getServerSideProps = async () => {
  let init = {
    info: undefined,
    results: [],
  };

  const res = await fetch('https://randomuser.me/api/?results=8');

  init = await res.json();

  // Return the fetched data as props
  return {
    props: {
      data: init,
    },
  };
};

export default Home;
