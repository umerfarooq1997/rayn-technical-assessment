import Footer from '../ui/footer';
import Navbar from '../ui/navbar';

const Layout = ({ children }) =>
  <>
    <div className="border-b border-secondary">
      <div className="container">
        <Navbar />
      </div>
    </div>

    {children}

    <div className="bg-[#1D2939]">
      <div className="container">
        <Footer />
      </div>
    </div>
  </>;

export default Layout;
