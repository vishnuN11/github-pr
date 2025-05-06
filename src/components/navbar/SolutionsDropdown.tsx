
const SolutionsDropdown = () => {
  return (
    <div className="absolute left-0 mt-2 w-full sm:w-[550px] bg-white text-black rounded-md shadow-lg p-6 z-50">
      <div className="flex flex-col sm:flex-row">
        {/* Left Column - Company Size + Use Case */}
        <div className="sm:w-1/2 sm:pr-6 mb-6 sm:mb-0">
          <div className="mb-6">
            <h4 className="font-semibold text-sm mb-3">By company size</h4>
            <ul className="space-y-2 text-sm">
              <li className="hover:text-blue-600 hover:underline cursor-pointer py-1">Enterprises</li>
              <li className="hover:text-blue-600 hover:underline cursor-pointer py-1">Small and medium teams</li>
              <li className="hover:text-blue-600 hover:underline cursor-pointer py-1">Startups</li>
              <li className="hover:text-blue-600 hover:underline cursor-pointer py-1">Nonprofits</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-sm mb-3">By use case</h4>
            <ul className="space-y-2 text-sm">
              <li className="hover:text-blue-600 hover:underline cursor-pointer py-1">DevSecOps</li>
              <li className="hover:text-blue-600 hover:underline cursor-pointer py-1">DevOps</li>
              <li className="hover:text-blue-600 hover:underline cursor-pointer py-1">CI/CD</li>
              <li className="hover:text-blue-600 hover:underline cursor-pointer py-1">View all use cases</li>
            </ul>
          </div>
        </div>

        {/* Vertical divider for desktop only */}
        <div className="hidden sm:block border-r border-gray-200 mx-3"></div>

        {/* Right Column - By industry */}
        <div className="sm:w-1/2 sm:pl-6">
          <h4 className="font-semibold text-sm mb-3">By industry</h4>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-blue-600 hover:underline cursor-pointer py-1">Healthcare</li>
            <li className="hover:text-blue-600 hover:underline cursor-pointer py-1">Financial services</li>
            <li className="hover:text-blue-600 hover:underline cursor-pointer py-1">Manufacturing</li>
            <li className="hover:text-blue-600 hover:underline cursor-pointer py-1">Government</li>
            <li className="hover:text-blue-600 hover:underline cursor-pointer py-1">View all industries</li>
          </ul>
        </div>
      </div>

      {/* Horizontal divider and bottom link */}
      <div className="border-t border-gray-200 mt-4 pt-4">
        <a href="#" className="text-blue-600 hover:underline font-medium text-sm">
          View all solutions &gt;
        </a>
      </div>
    </div>
  );
};

export default SolutionsDropdown;
