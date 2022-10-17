import HeroComponent from '../components/hero/HeroComponent';
import { NextPageWithLayout } from './page';

const Demo: NextPageWithLayout = () => {
  return (
    <main className="min-h-screen bg-gray-200">
      {/* Navbar */}
      <nav className="container relative p-6 mx-auto">
        {/* Flex container */}
        <div className="flex items-center justify-between p-2 bg-green-100">
          {/* logo */}
          <div className="pt-2 bg-red-100"> Logo</div>
          {/* Menu Items which will disappear on smaller screens*/}
          <div className="hidden space-x-6 bg-blue-100 md:flex">
            {/* Space-x is space between items */}
            {/* this will hide in small screens*/}
            <a href="#" className="hover:text-red-600">
              Pricing
            </a>
            <a href="#" className="hover:text-red-600">
              Product
            </a>
            <a href="#" className="hover:text-red-600">
              {' '}
              About us{' '}
            </a>
            <a href="#" className="hover:text-red-600">
              {' '}
              Community{' '}
            </a>
          </div>
          {/* Button */}
          <a
            href="#"
            className="hidden p-3 px-6 pt-2 font-bold text-white bg-red-500 rounded-full md:block hover:bg-red-600 "
          >
            Get Started
          </a>
        </div>
      </nav>
      {/* Hero Section */}
      <div className="flex content-center bg-red-200">
        <HeroComponent sampleTextProp="Hero on Demo Page" />
        <div> Hello</div>
      </div>
    </main>
  );
};

export default Demo;

// Demo.getLayout = (page) => {
//   return (
//     <PrimaryLayout>
//       {/* <SidebarLayout /> */}
//       {page}
//     </PrimaryLayout>
//   );
// };
