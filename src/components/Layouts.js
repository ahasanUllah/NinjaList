import Footer from './Footer';
import Navbar from './Navbar';

const Layouts = ({ children }) => {
   return (
      <div className="content">
         <Navbar></Navbar>
         {children}
         <Footer></Footer>
      </div>
   );
};

export default Layouts;
