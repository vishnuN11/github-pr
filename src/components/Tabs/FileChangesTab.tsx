import { BsThreeDots } from "react-icons/bs";
import { CiFileOn } from "react-icons/ci";


const FileChangesTab = () => {
  return (
    <div className="border border-gray-200 rounded-md overflow-hidden my-4">
      {/* File header */}
      <div className="bg-gray-100 px-4 py-2 flex items-center justify-between border-b border-gray-200">
        <div className="text-sm font-mono text-gray-800">
          apps/an/content/docs/themeing.ade
        </div>
        <div className="flex space-x-2">
          <button className="text-xs bg-gray-200 hover:bg-gray-300 px-2 py-1 rounded">
            {"<>"}
          </button>
          <button className="text-xs bg-gray-200 hover:bg-gray-300 px-2 py-1 rounded"><CiFileOn /></button>
          <button className="text-xs bg-gray-200 hover:bg-gray-300 px-2 py-1 rounded"><BsThreeDots /></button>
        </div>
      </div>

      {/* Code diff */}
      <div className="font-mono text-sm">
        {/* Line numbers and code */}
        <div className="flex">
          {/* Line numbers */}
          <div className="w-10 flex-shrink-0 text-right pr-2 bg-gray-50 text-gray-500 select-none border-r border-gray-200">
            <div className="py-1">1</div>
            <div className="py-1">2</div>
            <div className="py-1">3</div>
            <div className="py-1">4</div>
          </div>
          
          {/* Code content */}
          <div className="flex-grow overflow-x-auto">
            {/* Unchanged line */}
            <div className="flex">
              <div className="py-1 px-2 w-full">// Original theme configuration</div>
            </div>
            
            {/* Deleted line (red) */}
            <div className="flex bg-red-50">
              <div className="py-1 px-2 w-full text-red-700">
                <span className="bg-red-100">- const primaryColor = "purple";</span>
              </div>
            </div>
            
            {/* Added line (green) */}
            <div className="flex bg-green-50">
              <div className="py-1 px-2 w-full text-green-700">
                <span className="bg-green-100">+ const primaryColor = "blue";</span>
              </div>
            </div>
            
            {/* Highlighted line (sky blue) */}
            <div className="flex bg-blue-50">
              <div className="py-1 px-2 w-full">
                <span className="bg-blue-100 text-gray-800">  // This change improves accessibility</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Comment button */}
      <div className="bg-gray-50 px-4 py-2 border-t border-gray-200 text-right">
        <button className="text-xs text-gray-600 hover:text-blue-600">
          Add single comment
        </button>
      </div>
    </div>
  );
};

export default FileChangesTab;