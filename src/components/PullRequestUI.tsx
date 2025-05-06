import { useState } from "react";
import { FiCopy } from "react-icons/fi";
import ConversationTab from "./Tabs/ConversationTab";
import CommitHistoryTab from "./Tabs/CommitHistoryTab";
import FileChangesTab from "./Tabs/FileChangesTab";
import { IoIosGitMerge } from "react-icons/io";
import "../App.css"
import { BiConversation } from "react-icons/bi";
import { IoGitCommitOutline } from "react-icons/io5";
import { PiCheckSquareOffsetBold } from "react-icons/pi";
import { LuFileSliders } from "react-icons/lu";
const PullRequestUI = () => {
  const [activeTab, setActiveTab] = useState('Conversation');

  // Tab configuration
  const tabs = [
    { id: 'conversation', label: <div className="flex items-center"><BiConversation className="mr-1" /> <span>Conversation</span></div> },
    { id: 'commits', label: <div className="flex items-center"><IoGitCommitOutline className="mr-1" /> <span>Commits</span></div> },
    { id: 'checks', label: <div className="flex items-center"><PiCheckSquareOffsetBold className="mr-1" /><span>Checks</span></div>  },
    { id: 'files', label: <div className="flex items-center"><LuFileSliders className="mr-1" /> <span>Files changed</span></div> }
  ];

  return (
    <div className="max-w-7xl py-6">
      {/* PR Title and Status */}
      <div className="mb-6">
        <div className='flex justify-between pr-header'>
          <div>
            <span className="text-2xl font-semibold text-gray-900 mb-2">
              docs: fix typo in CSS selector 
            </span>
            <span className=''> #6928</span>
          </div>
          <button className='border bg-green-600 text-white px-2 rounded-md new-issue'>New issue</button>
        </div>

        <div className="flex items-center text-sm text-gray-600 space-x-4 pr-header">
          <button className='mt-2 text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-full text-sm px-4 py-1 text-center me-2 mb-2'>
            <div className="flex items-center">
          <IoIosGitMerge /> <span>merged</span>
            </div></button>
         <div>
         <span>kodiakhq merged 1 commit info <button className="text-blue-400 bg-blue-100 rounded-md">shadcn-ui:main</button> from <button className="text-blue-400 bg-blue-100 rounded-md">yardanIlive2002:main</button> </span>
         <span className="inline-block"><FiCopy /></span> <span>On Mer 17</span>
         </div>
        </div>
      </div>

      {/* PR Navigation Tabs */}
      <div className="border-b border-gray-200 mb-6">
        <nav className="flex -mb-px space-x-8">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === tab.id
                  ? 'border-blue-600 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </nav>
      </div>

      {/* Tab Content */}
      {activeTab === 'conversation' && <ConversationTab />}
      {activeTab === 'commits' && <CommitHistoryTab />}
      {activeTab === 'checks' && <div>Checks content goes here</div>}
      {activeTab === 'files' && <FileChangesTab/>}
    </div>
  );
};

export default PullRequestUI;