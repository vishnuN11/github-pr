import { GoCopy } from "react-icons/go";


const CommitHistoryTab = () => {
  return (
   <>
    <p className="text-xs">Commits on Mar 14, 2025</p>
    <div className="border border-[#d8dee4] rounded-md overflow-hidden mt-3 text-xs">
      <div className="p-4 border-b border-[#d8dee4] last:border-b-0">
        <h2 className="text-md font-semibold text-[#24292f] mb-1">
          docs: fix typo in CSS selector
        </h2>
        <div className="flex items-center text-sm text-[#57606a] justify-between">
          <div>
          <span className="font-semibold text-[#24292f] text-xs">Yordanline:2020</span>
          <span className="mx-1 text-xs">committed on Mar 14</span>
          </div>
          <div className="flex items-center gap-1">
          <button className="hover:bg-gray-200 rounded-md"><span className="">
            5a72857
          </span></button>
          <button className="hover:bg-gray-200 rounded-md"><GoCopy /></button>
        <button className="hover:bg-gray-200 rounded-md">  <span>{"<>"}</span></button>
          </div>
        </div>
      </div>
    </div>
   </>
  );
};

export default CommitHistoryTab;