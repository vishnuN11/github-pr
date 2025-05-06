import { FaMagic, FaShieldAlt, FaRobot, FaLaptopCode, FaTasks, FaCodeBranch, FaComments, FaSearch } from "react-icons/fa";

const ProductDropdown = () => {
  return (
    <div className="absolute left-0 mt-2 w-full max-w-[650px] bg-white text-black rounded-md shadow-lg p-6 flex flex-col md:flex-row gap-6 z-50">
      {/* Left Column */}
      <div className="md:w-2/3 space-y-4 text-sm">
        {[
          { Icon: FaMagic, title: "GitHub Copilot", desc: "Write better code with AI" },
          { Icon: FaShieldAlt, title: "GitHub Advanced Security", desc: "Find and fix vulnerabilities" },
          { Icon: FaRobot, title: "Actions", desc: "Automate any workflow" },
          { Icon: FaLaptopCode, title: "Codespaces", desc: "Instant dev environments" },
          { Icon: FaTasks, title: "Issues", desc: "Plan and track work" },
          { Icon: FaCodeBranch, title: "Code Review", desc: "Manage code changes" },
          { Icon: FaComments, title: "Discussions", desc: "Collaborate outside of code" },
          { Icon: FaSearch, title: "Code Search", desc: "Find more, search less" },
        ].map(({ Icon, title, desc }, i) => (
          <div key={i} className="group flex items-start space-x-3 p-2 hover:bg-gray-50 rounded-md">
            <Icon className="text-lg mt-1 text-gray-600 group-hover:text-blue-600" />
            <div>
              <p className="font-medium group-hover:text-blue-600">{title}</p>
              <p className="text-gray-500 text-sm">{desc}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Right Column */}
      <div className="md:w-1/3 text-sm text-gray-800 space-y-3 border-t md:border-t-0 md:border-l md:pl-6 border-gray-200 pt-4 md:pt-0">
        <h4 className="font-semibold text-black">Explore</h4>
        {["Why GitHub", "All features", "Documentation", "GitHub Skills", "Blog"].map((item, i) => (
          <p key={i} className="hover:text-blue-600 hover:underline cursor-pointer p-1">
            {item}
          </p>
        ))}
      </div>
    </div>
  );
};

export default ProductDropdown;
