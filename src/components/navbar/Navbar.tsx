import { useState } from "react";
import { FiMenu, FiX, FiSearch, FiChevronDown } from "react-icons/fi";
import ProductDropdown from "./ProductDropdown";
import SolutionsDropdown from "./SolutionsDropdown";
import ResourcesDropdown from "./ResourcesDropdown";
import OpenSourceDropdown from "./OpenSourceDropdown";
import EnterpriseDropdown from "./EnterpriseDropdown";
import { FaGithub } from "react-icons/fa6";


const Navbar = () => {
  // Mobile menu state
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  // Desktop dropdown states
  const [isProductOpen, setIsProductOpen] = useState(false);
  const [isSolutionsOpen, setIsSolutionsOpen] = useState(false);
  const [isResourcesOpen, setIsResourcesOpen] = useState(false);
  const [isOpenSourceOpen, setIsOpenSourceOpen] = useState(false);
  const [isEnterpriseOpen, setIsEnterpriseOpen] = useState(false);
  
  // Mobile dropdown states
  const [mobileProductOpen, setMobileProductOpen] = useState(false);
  const [mobileSolutionsOpen, setMobileSolutionsOpen] = useState(false);
  const [mobileResourcesOpen, setMobileResourcesOpen] = useState(false);
  const [mobileOpenSourceOpen, setMobileOpenSourceOpen] = useState(false);
  const [mobileEnterpriseOpen, setMobileEnterpriseOpen] = useState(false);
  const [mobilePricingOpen, setMobilePricingOpen] = useState(false);

  // Close all dropdowns
  const closeAllDropdowns = () => {
    setIsProductOpen(false);
    setIsSolutionsOpen(false);
    setIsResourcesOpen(false);
    setIsOpenSourceOpen(false);
    setIsEnterpriseOpen(false);
  };

  return (
    <nav className="bg-gray-900 text-white">
      {/* Desktop Navbar */}
      <div className="hidden md:flex px-6 py-3">
        <ul className="flex space-x-6 items-center text-sm w-full">
          {/* Product Dropdown */}
          <li className="relative"
              onMouseEnter={() => setIsProductOpen(true)}
              onMouseLeave={() => setIsProductOpen(false)}>
            <button className="hover:text-gray-300 flex items-center">
            <FaGithub className="mr-2" />   Product <FiChevronDown className="ml-1" size={14} />
            </button>
            {isProductOpen && (
              <div className="absolute left-0 top-full z-50"
                   onMouseEnter={() => setIsProductOpen(true)}
                   onMouseLeave={() => setIsProductOpen(false)}>
                <ProductDropdown />
              </div>
            )}
          </li>

          {/* Solutions Dropdown */}
          <li className="relative"
              onMouseEnter={() => setIsSolutionsOpen(true)}
              onMouseLeave={() => setIsSolutionsOpen(false)}>
            <button className="hover:text-gray-300 flex items-center">
              Solutions <FiChevronDown className="ml-1" size={14} />
            </button>
            {isSolutionsOpen && (
              <div className="absolute left-0 top-full z-50"
                   onMouseEnter={() => setIsSolutionsOpen(true)}
                   onMouseLeave={() => setIsSolutionsOpen(false)}>
                <SolutionsDropdown />
              </div>
            )}
          </li>

          {/* Resources Dropdown */}
          <li className="relative"
              onMouseEnter={() => setIsResourcesOpen(true)}
              onMouseLeave={() => setIsResourcesOpen(false)}>
            <button className="hover:text-gray-300 flex items-center">
              Resources <FiChevronDown className="ml-1" size={14} />
            </button>
            {isResourcesOpen && (
              <div className="absolute left-0 top-full z-50"
                   onMouseEnter={() => setIsResourcesOpen(true)}
                   onMouseLeave={() => setIsResourcesOpen(false)}>
                <ResourcesDropdown />
              </div>
            )}
          </li>

          {/* Open Source Dropdown */}
          <li className="relative"
              onMouseEnter={() => setIsOpenSourceOpen(true)}
              onMouseLeave={() => setIsOpenSourceOpen(false)}>
            <button className="hover:text-gray-300 flex items-center">
              Open Source <FiChevronDown className="ml-1" size={14} />
            </button>
            {isOpenSourceOpen && (
              <div className="absolute left-0 top-full z-50"
                   onMouseEnter={() => setIsOpenSourceOpen(true)}
                   onMouseLeave={() => setIsOpenSourceOpen(false)}>
                <OpenSourceDropdown />
              </div>
            )}
          </li>

          {/* Enterprise Dropdown */}
          <li className="relative"
              onMouseEnter={() => setIsEnterpriseOpen(true)}
              onMouseLeave={() => setIsEnterpriseOpen(false)}>
            <button className="hover:text-gray-300 flex items-center">
              Enterprise <FiChevronDown className="ml-1" size={14} />
            </button>
            {isEnterpriseOpen && (
              <div className="absolute left-0 top-full z-50"
                   onMouseEnter={() => setIsEnterpriseOpen(true)}
                   onMouseLeave={() => setIsEnterpriseOpen(false)}>
                <EnterpriseDropdown />
              </div>
            )}
          </li>

          {/* Pricing Dropdown */}
          <li className="relative">
            <button className="hover:text-gray-300 flex items-center">
              Pricing 
              {/* <FiChevronDown className="ml-1" size={14} /> */}
            </button>
            
          </li>

          {/* Search */}
         <div className="flex items-center gap-2 md:w-1/2 lg:w-1/2 xl:w-1/2">
         <li className="ml-auto hidden lg:block">
            <div className="relative">
              <input
                type="text"
                placeholder="Search or jump to..."
                className="px-2 py-1 rounded bg-gray-800 text-sm text-white placeholder-gray-400 focus:outline-none w-64"
              />
              <FiSearch className="absolute right-2 top-2 text-gray-400" />
            </div>
          </li>
          
          {/* Auth Buttons */}
          <li><button className="hover:text-gray-300">Sign in</button></li>
          <li>
            <button className="border px-3 py-1 rounded hover:bg-white hover:text-gray-900">
              Sign up
            </button>
          </li>
         </div>
        </ul>
      </div>

      {/* Mobile Navbar */}
      <div className="md:hidden flex items-center justify-between px-4 py-3">
        <button 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="text-white focus:outline-none"
        >
          {mobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
        
        <div className="relative flex-1 mx-4">
          <input
            type="text"
            placeholder="Search or jump to..."
            className="px-2 py-1 rounded bg-gray-800 text-sm text-white placeholder-gray-400 focus:outline-none w-full"
          />
          <FiSearch className="absolute right-2 top-2 text-gray-400" />
        </div>
        
        <button className="border px-3 py-1 rounded hover:bg-white hover:text-gray-900 text-sm">
          Sign up
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-gray-800 px-4 py-2">
          {/* Product Mobile Dropdown */}
          <div className="border-b border-gray-700">
            <button 
              className="w-full flex justify-between items-center py-3 hover:text-gray-300"
              onClick={() => setMobileProductOpen(!mobileProductOpen)}
            >
              <span>Product</span>
              <FiChevronDown className={`transition-transform ${mobileProductOpen ? 'rotate-180' : ''}`} />
            </button>
            {mobileProductOpen && (
              <div className="pl-4 pb-2">
                <ProductDropdown  />
              </div>
            )}
          </div>
          
          {/* Solutions Mobile Dropdown */}
          <div className="border-b border-gray-700">
            <button 
              className="w-full flex justify-between items-center py-3 hover:text-gray-300"
              onClick={() => setMobileSolutionsOpen(!mobileSolutionsOpen)}
            >
              <span>Solutions</span>
              <FiChevronDown className={`transition-transform ${mobileSolutionsOpen ? 'rotate-180' : ''}`} />
            </button>
            {mobileSolutionsOpen && (
              <div className="pl-4 pb-2">
                <SolutionsDropdown  />
              </div>
            )}
          </div>
          
          {/* Resources Mobile Dropdown */}
          <div className="border-b border-gray-700">
            <button 
              className="w-full flex justify-between items-center py-3 hover:text-gray-300"
              onClick={() => setMobileResourcesOpen(!mobileResourcesOpen)}
            >
              <span>Resources</span>
              <FiChevronDown className={`transition-transform ${mobileResourcesOpen ? 'rotate-180' : ''}`} />
            </button>
            {mobileResourcesOpen && (
              <div className="pl-4 pb-2">
                <ResourcesDropdown  />
              </div>
            )}
          </div>

          {/* Open Source Mobile Dropdown */}
          <div className="border-b border-gray-700">
            <button 
              className="w-full flex justify-between items-center py-3 hover:text-gray-300"
              onClick={() => setMobileOpenSourceOpen(!mobileOpenSourceOpen)}
            >
              <span>Open Source</span>
              <FiChevronDown className={`transition-transform ${mobileOpenSourceOpen ? 'rotate-180' : ''}`} />
            </button>
            {mobileOpenSourceOpen && (
              <div className="pl-4 pb-2">
                <OpenSourceDropdown  />
              </div>
            )}
          </div>

          {/* Enterprise Mobile Dropdown */}
          <div className="border-b border-gray-700">
            <button 
              className="w-full flex justify-between items-center py-3 hover:text-gray-300"
              onClick={() => setMobileEnterpriseOpen(!mobileEnterpriseOpen)}
            >
              <span>Enterprise</span>
              <FiChevronDown className={`transition-transform ${mobileEnterpriseOpen ? 'rotate-180' : ''}`} />
            </button>
            {mobileEnterpriseOpen && (
              <div className="pl-4 pb-2">
                <EnterpriseDropdown  />
              </div>
            )}
          </div>

          {/* Pricing Mobile Dropdown */}
          <div className="border-b border-gray-700">
            <button 
              className="w-full flex justify-between items-center py-3 hover:text-gray-300"
              onClick={() => setMobilePricingOpen(!mobilePricingOpen)}
            >
              <span>Pricing</span>
              {/* <FiChevronDown className={`transition-transform ${mobilePricingOpen ? 'rotate-180' : ''}`} /> */}
            </button>
            {mobilePricingOpen && (
              <div className="pl-4 pb-2">
               
              </div>
            )}
          </div>

          {/* Sign In (mobile only) */}
          <button 
            className="block w-full text-left py-3 hover:text-gray-300"
            onClick={closeAllDropdowns}
          >
            Sign in
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;