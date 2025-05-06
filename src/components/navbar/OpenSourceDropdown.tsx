
const OpenSourceDropdown = () => {
  return (
    <div className="absolute left-0 mt-2 w-[300px] bg-white text-black rounded-md shadow-lg p-4 z-50">
      <div className="space-y-4">
        {/* GitHub Sponsors */}
        <div className="group flex items-start space-x-3 p-2 hover:bg-gray-50 rounded-md">
          <div className="flex-1">
            <p className="font-medium group-hover:text-blue-600">GitHub Sponsors</p>
            <p className="text-gray-500 text-sm">Fund open source developers</p>
          </div>
        </div>

        {/* The ReadME Project */}
        <div className="group flex items-start space-x-3 p-2 hover:bg-gray-50 rounded-md">
          <div className="flex-1">
            <p className="font-medium group-hover:text-blue-600">The ReadME Project</p>
            <p className="text-gray-500 text-sm">GitHub community articles</p>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-200 my-2"></div>

        {/* Simple Links */}
        <div className="space-y-2">
          <p className="hover:text-blue-600 hover:underline cursor-pointer p-2">Repositories</p>
          <p className="hover:text-blue-600 hover:underline cursor-pointer p-2">Topics</p>
          <p className="hover:text-blue-600 hover:underline cursor-pointer p-2">Trending</p>
          <p className="hover:text-blue-600 hover:underline cursor-pointer p-2">Collections</p>
        </div>
      </div>
    </div>
  );
};
export default OpenSourceDropdown