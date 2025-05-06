const ResourcesDropdown = () => {
    return (
      <div className="absolute left-0 mt-2 w-full md:w-[600px] bg-white text-black rounded-md shadow-lg p-4 md:p-6 z-50">
        <div className="flex flex-col md:flex-row md:gap-6">
          {/* Topics Section */}
          <div className="md:flex-1 mb-4 md:mb-0">
            <h4 className="font-semibold text-sm mb-3">Topics</h4>
            <ul className="space-y-2 text-sm">
              <li className="hover:text-blue-600 hover:underline cursor-pointer py-1">AI</li>
              <li className="hover:text-blue-600 hover:underline cursor-pointer py-1">DevOps</li>
              <li className="hover:text-blue-600 hover:underline cursor-pointer py-1">Security</li>
              <li className="hover:text-blue-600 hover:underline cursor-pointer py-1">Software Development</li>
              <li className="hover:text-blue-600 hover:underline cursor-pointer py-1">View all</li>
            </ul>
          </div>
  
          {/* Divider */}
          <div className="hidden md:block w-px bg-gray-200"></div>
  
          {/* Explore Section */}
          <div className="md:flex-1">
            <h4 className="font-semibold text-sm mb-3">Explore</h4>
            <ul className="space-y-2 text-sm">
              <li className="hover:text-blue-600 hover:underline cursor-pointer py-1 flex items-center">
                Learning Pathways
                <svg className="ml-1 w-3 h-3 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M12.293 2.293a1 1 0 011.414 0L18 6.586a1 1 0 010 1.414l-4.293 4.293a1 1 0 01-1.414-1.414L15.586 8H4a1 1 0 110-2h11.586l-3.293-3.293a1 1 0 010-1.414z" />
                </svg>
              </li>
              <li className="hover:text-blue-600 hover:underline cursor-pointer py-1">Events & Webinars</li>
              <li className="hover:text-blue-600 hover:underline cursor-pointer py-1">Ebooks & Whitepapers</li>
              <li className="hover:text-blue-600 hover:underline cursor-pointer py-1">Customer Stories</li>
              <li className="hover:text-blue-600 hover:underline cursor-pointer py-1">Partners</li>
              <li className="hover:text-blue-600 hover:underline cursor-pointer py-1">Executive Insights</li>
            </ul>
          </div>
        </div>
      </div>
    );
  };
  
  export default ResourcesDropdown;
  