import { useState } from 'react';
import PullRequestUI from '../PullRequestUI';
import { SiGithubsponsors } from 'react-icons/si';
import { IoIosNotificationsOutline, IoMdPlayCircle } from 'react-icons/io';
import { FaCodeFork } from 'react-icons/fa6';
import { CiStar } from 'react-icons/ci';
import { IoCodeOutline, IoGitPullRequestOutline } from 'react-icons/io5';
import { VscIssues } from 'react-icons/vsc';
import { GoCommentDiscussion } from 'react-icons/go';
import { AiOutlineSecurityScan } from 'react-icons/ai';
import { MdInsights } from 'react-icons/md';

const Header = () => {
  const [activeTab, setActiveTab] = useState('Code');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const tabs = [
    { id: 'Code', name: <><IoCodeOutline className="mr-1" /> Code</>, count: null },
    { id: 'Issues', name: <><VscIssues className="mr-1" /> Issues</>, count: 555 },
    { id: 'PullRequests', name: <><IoGitPullRequestOutline className="mr-1" /> Pull requests</>, count: 808 },
    { id: 'Discussions', name: <><GoCommentDiscussion className="mr-1" /> Discussions</>, count: null },
    { id: 'Actions', name: <><IoMdPlayCircle className="mr-1" /> Actions</>, count: null },
    { id: 'Security', name: <><AiOutlineSecurityScan className="mr-1" /> Security</>, count: null },
    { id: 'Insights', name: <><MdInsights className="mr-1" /> Insights</>, count: null },
  ];
  

  const handleTabClick = (tabId: string) => {
    setActiveTab(tabId);
    setIsMobileMenuOpen(false);
  };

  return (
    <div className="bg-gray-50 border-b border-gray-200">
      {/* Desktop View */}
      <div className="hidden md:block">
        <div className="max-w-7xl mx-auto px-4 py-3">
          {/* Top Row */}
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-2">
              <span className="text-lg font-semibold text-gray-900">shadcn-ui/ui</span>
              <span className="px-2 py-0.5 text-xs font-medium text-gray-600 bg-gray-100 rounded-full">
                Public
              </span>
            </div>
            <div className="flex items-center space-x-4">
              <button className="border px-3 py-1 rounded hover:text-gray-900">
            <div className='flex items-center gap-1'>
            <SiGithubsponsors className='text-rose-400 text-xs'/> <span className='text-xs'>Sponsor</span>
            </div>
              </button>
              <button className="border px-3 py-1 rounded hover:text-gray-900">
              <div className='flex items-center gap-1'>
              <IoIosNotificationsOutline /> <span className='text-xs'>Notifications</span>
              </div>
              </button>
              <button className="border px-3 py-1 rounded hover:text-gray-900">
              <div className='flex items-center gap-1 text-xs'>
              <FaCodeFork /> <span className='text-xs'>Fork</span> <span className="text-gray-500 text-xs">5.8k</span>
              </div>
              </button>
              <button className="border px-3 py-1 rounded hover:text-gray-900">
              <div className='flex items-center gap-1 text-xs'>
              <CiStar />  <span className='text-xs'>Star</span> <span className="text-gray-500">33.3k</span>
              </div>
              </button>
            </div>
          </div>

          {/* Tabs */}
          <nav className="flex gap-3">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => handleTabClick(tab.id)}
                className={`inline-flex items-center px-1 py-2 text-sm font-medium ${
                  activeTab === tab.id
                    ? 'text-blue-600 border-b-2 border-orange-400'
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                {tab.name}
                {tab.count !== null && (
                  <span className="ml-1 text-gray-400">{tab.count}</span>
                )}
              </button>
            ))}
          </nav>
        </div>
      </div>

      {/* Mobile View */}
      <div className="md:hidden">
        <div className="px-4 py-3">
          {/* Top Row */}
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center space-x-2">
              <span className="text-lg font-semibold text-gray-900">shadcn-ui/ui</span>
              <span className="px-2 py-0.5 text-xs font-medium text-gray-600 bg-gray-100 rounded-full">
                Public
              </span>
            </div>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-500 hover:text-gray-700"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="mb-3 space-y-2">
              <button className="block w-full text-left px-2 py-1 text-sm font-medium text-gray-600 hover:text-gray-900">
                Sponsor
              </button>
              <button className="block w-full text-left px-2 py-1 text-sm font-medium text-gray-600 hover:text-gray-900">
                Notifications
              </button>
              <button className="block w-full text-left px-2 py-1 text-sm font-medium text-gray-600 hover:text-gray-900">
                Fork (5.8k)
              </button>
              <button className="block w-full text-left px-2 py-1 text-sm font-medium text-gray-600 hover:text-gray-900">
                Star (33.3k)
              </button>
            </div>
          )}

          {/* Tabs - Scrollable */}
          <div className="overflow-x-auto  hide-scrollbar">
            <div className="flex space-x-6">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => handleTabClick(tab.id)}
                  className={`flex-shrink-0 inline-flex items-center px-1 py-2 text-sm font-medium ${
                    activeTab === tab.id
                      ? 'text-blue-600 border-b-2 border-blue-600'
                      : 'text-gray-500 hover:text-gray-700'
                  }`}
                >
                  {tab.name}
                  {tab.count !== null && (
                    <span className="ml-1 text-gray-400">{tab.count}</span>
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Content Area */}
      <div className="max-w-7xl md:mx-[200px] lg:mx-[200px] sm:mx-[20px]">
        {activeTab === 'PullRequests' ? (
          <div className=" text-gray-600"> <PullRequestUI/></div>
        ) : (
          <div className="text-center text-gray-400">
            Click on "Pull requests" tab to see content
          </div>
        )}
      </div>

      {/* Hide scrollbar CSS */}
      <style>{`
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
};

export default Header;