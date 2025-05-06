
const EnterpriseDropdown = () => {
  return (
    <div className="absolute left-0 mt-2 w-[300px] bg-white text-black rounded-md shadow-lg p-4 z-50">
      <div className="space-y-4">
        {/* Main Platform */}
        <div className="group flex items-start space-x-3 p-2 hover:bg-gray-50 rounded-md">
          <div className="flex-1">
            <p className="font-medium group-hover:text-blue-600">Enterprise platform</p>
            <p className="text-gray-500 text-sm">AI-powered developer platform</p>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-200 my-2"></div>

        {/* Available Add-ons Heading */}
        <h4 className="font-semibold text-sm px-2">Available add-ons</h4>

        {/* GitHub Advanced Security */}
        <div className="group flex items-start space-x-3 p-2 hover:bg-gray-50 rounded-md">
          <div className="flex-1">
            <p className="font-medium group-hover:text-blue-600">GitHub Advanced Security</p>
            <p className="text-gray-500 text-sm">Enterprise-grade security features</p>
          </div>
        </div>

        {/* Copilot for business */}
        <div className="group flex items-start space-x-3 p-2 hover:bg-gray-50 rounded-md">
          <div className="flex-1">
            <p className="font-medium group-hover:text-blue-600">Copilot for business</p>
            <p className="text-gray-500 text-sm">Enterprise-grade AI features</p>
          </div>
        </div>

        {/* Premium Support */}
        <div className="group flex items-start space-x-3 p-2 hover:bg-gray-50 rounded-md">
          <div className="flex-1">
            <p className="font-medium group-hover:text-blue-600">Premium Support</p>
            <p className="text-gray-500 text-sm">Enterprise-grade 24/7 support</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default EnterpriseDropdown