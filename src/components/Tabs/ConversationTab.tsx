
import { FiMoreHorizontal, FiCheck, FiEdit2 } from 'react-icons/fi';
import yordan from "../../assets/yordan.jpg"
import vercel from "../../assets/vercel.png"
import shadcn from "../../assets/review-shadcn.jpg"
import jack from "../../assets/review-jem.jpg"
import mat from "../../assets/review-mat.jpg"
import { IoIosGitCommit } from 'react-icons/io';
import { MdOutlineEventNote } from 'react-icons/md';
const ConversationTab = () => {
    const data = [
        {
            name: "ui",
            status: "Ready (Inspect)",
            preview: "Visit Preview",
            updated: "Mar 17, 2025 10:54am",
        },
        {
            name: "v4",
            status: "Ready (Inspect)",
            preview: "Visit Preview",
            updated: "Mar 17, 2025 10:54am",
        },
    ];
    return (
        <>
            <div className='flex md:flex-row lg:flex-row xl:flex-row gap-1  conv-mobile-v'>
                <div>
                    <div className='flex'>
                        <div > <img src={yordan} alt="" className='w-10 h-10 rounded-full' /></div>
                        <div className="flex items-start space-x-2 px-4 py-2 w-full">
                            <div className="flex-1 bg-gray-50 rounded-md border text-sm">
                                {/* Card Header */}
                                <div className="flex justify-between items-center px-4 py-2 border-b">
                                    <div className="flex space-x-2 items-center">
                                        <span className="font-medium text-gray-800">YordanIliev2002</span>
                                        <span className="text-gray-500 text-xs">commented on Mar 14</span>
                                        <span className="text-gray-500 text-xs border border-gray-300 px-1 rounded">
                                            Contributor
                                        </span>
                                    </div>
                                    <FiMoreHorizontal className="text-gray-500 cursor-pointer" />
                                </div>

                                {/* Card Body */}
                                <div className="px-4 py-2">
                                    <p className="text-gray-700">There was a typo</p>
                                </div>
                            </div>
                        </div>

                    </div>

                    {/* Vercel Bot Comment */}
                    <div className='flex'>
                        <div > <img src={vercel} alt="" className='w-10 h-10 rounded-full' /></div>
                        <div className="flex items-start space-x-2 px-4 py-2 w-full">
                            <div className="flex-1 bg-gray-50 rounded-md border text-sm">
                                {/* Card Header */}
                                <div className="flex justify-between items-center px-4 py-2 border-b">
                                    <div className="flex space-x-2 items-center">
                                        <span className="font-medium text-gray-800">Varcel</span>
                                        <span className="text-gray-500 text-xs">commented on Mar 14</span>

                                    </div>
                                    <FiMoreHorizontal className="text-gray-500 cursor-pointer" />
                                </div>

                                {/* Card Body */}
                                <div className="px-4 py-2">
                                    <p className="mt-1 text-gray-700">
                                        <span className="text-blue-600 font-medium">@YordanIliev2002</span> is attempting to
                                        deploy a commit to the shadcn-pro Team on{" "}
                                        <a href="#" className="text-blue-600 underline">Vercel</a>. <br />
                                        A member of the Team first needs to{" "}
                                        <a href="#" className="text-blue-600 underline w-10">authorize it</a>.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="h-4 w-px bg-gray-300 ml-16"></div>
                    <div>
                        <div className="flex items-center ml-14">
                            <FiEdit2 /> <div className='flex gap-1 ml-1 items-center'>
                                <img src={yordan} className='w-3 h-3 rounded-full' alt="" />
                                <a href="" className='text-xs text-blue-500'>YordanIliev2002</a>
                                <span className='text-xs mt-3'>changed the title Fix css selector for Zinc theme in website docs: typo in CSS selector on Mar 14</span>
                            </div>
                        </div>
                        <div className="h-4 w-px bg-gray-300 ml-16"></div>
                        <div className="flex items-center ml-14">
                            <IoIosGitCommit /> <div className='flex gap-1 ml-1 items-center'>
                                <img src={yordan} className='w-3 h-3 rounded-full' alt="" />
                                <span className='text-xs'>docs fix type in css selector</span>
                            </div>
                        </div>
                        <div className="h-4 w-px bg-gray-300 ml-16"></div>
                        <div className="flex items-center ml-14">
                            <FiEdit2 /> <div className='flex gap-1 ml-1 items-center'>
                                <img src={yordan} className='w-3 h-3 rounded-full' alt="" />
                                <a href="" className='text-xs text-blue-500'>YordanIliev2002</a>
                                <span className='text-xs'>changed the title docs: typo in CSS selector docs: fix typo in CSS selector on Mar 14</span>
                            </div>
                        </div>
                        <div className="h-4 w-px bg-gray-300 ml-16"></div>
                        <div className="flex items-center ml-14">
                            <MdOutlineEventNote /> <div className='flex gap-1 ml-1 items-center'>
                                <img src={yordan} className='w-3 h-3 rounded-full' alt="" />
                                <a href="" className='text-xs text-blue-500'>YordanIliev2002</a>

                                <span className='text-xs mt-3'> <a href="" className='text-xs text-blue-500 underline'>force pushed</a> changed the title docs: typo in CSS selector docs: fix typo in CSS selector on Mar 14</span>
                            </div>
                        </div>
                        <div className="h-4 w-px bg-gray-300 ml-16"></div>
                        <div className='flex'>
                            <img src={jack} className='w-7 h-7 rounded-full' alt="" />
                            <div className="flex items-center ml-7">
                                <FiCheck /> <div className='flex gap-1 ml-1 items-center'>
                                    <img src={jack} className='w-3 h-3 rounded-full' alt="" />
                                    <a href="" className='text-xs hover:text-blue-500'>Jacksonmills</a>
                                    <span className='text-xs'>approved these changes on Mar 15</span>
                                </div>
                            </div>
                        </div>
                        <div className="h-4 w-px bg-gray-300 ml-16"></div>
                        <div className='flex'>
                            <img src={jack} className='w-7 h-7 rounded-full' alt="" />
                            <div className="flex items-center ml-7">
                                <FiCheck /> <div className='flex gap-1 ml-1 items-center'>
                                    <img src={mat} className='w-3 h-3 rounded-full' alt="" />
                                    <a href="" className='text-xs hover:text-blue-500'>matevegh</a>
                                    <span className='text-xs'>approved these changes on Mar 16</span>
                                </div>
                            </div>
                        </div>
                        <div className="h-4 w-px bg-gray-300 ml-16"></div>
                        <div className='flex'>
                            <img src={shadcn} className='w-7 h-7 rounded-full' alt="" />
                            <div className="flex items-center ml-7">
                                <FiCheck /> <div className='flex gap-1 ml-1 items-center'>
                                    <img src={shadcn} className='w-3 h-3 rounded-full' alt="" />
                                    <a href="" className='text-xs hover:text-blue-500'>shadcn</a>
                                    <span className='text-xs'>approved these changes on Mar 17</span>
                                </div>
                            </div>
                        </div>
                        <div className="h-4 w-px bg-gray-300 ml-16"></div>
                        <div className="flex items-start space-x-2 px-4 py-2 w-full">
                            <div className="flex-1 bg-gray-50 rounded-md border text-sm">
                                {/* Card Header */}
                                <div className="flex justify-between items-center px-4 py-2 border-b">
                                    <div className="flex space-x-2 items-center">
                                        <span className="font-medium text-gray-800">shadcn</span>
                                        <span className="text-gray-500 text-xs">left a comment</span>
                                        <span className="text-gray-500 text-xs border border-gray-300 px-1 rounded">
                                            Contributor
                                        </span>
                                    </div>
                                    <FiMoreHorizontal className="text-gray-500 cursor-pointer" />
                                </div>

                                {/* Card Body */}
                                <div className="px-4 py-2">
                                    <p className="text-gray-700">Thank You</p>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col items-start space-y-2 px-2 py-2 sm:px-4 sm:py-2">
                            <div className="w-full bg-gray-50 rounded-md border text-sm">

                                {/* Card Header */}
                                <div className="flex justify-between items-center px-3 py-2 border-b">
                                    <div className="flex space-x-2 items-center">
                                        <span className="font-medium text-gray-800">Vercel</span>
                                        <span className="text-gray-500 text-xs">commented on March 17. edited</span>
                                    </div>
                                    <FiMoreHorizontal className="text-gray-500 cursor-pointer" />
                                </div>

                                {/* Card Body */}
                                <div className="px-3 py-2">
                                    <p className="text-gray-700 text-sm">
                                        The latest updates on your projects. Learn more about{" "}
                                        <a href="#" className="text-blue-500 underline">Vercel for Git</a>
                                    </p>

                                    {/* Responsive Table */}
                                    <div className="mt-4 overflow-x-auto">
                                        <table className="min-w-full text-sm border border-gray-200 divide-y divide-gray-200">
                                            <thead className="bg-gray-50">
                                                <tr>
                                                    <th className="border-r border-gray-200 px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                                                    <th className="border-r border-gray-200 px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                                                    <th className="border-r border-gray-200 px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Preview</th>
                                                    <th className="border-r border-gray-200 px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Updated (UTC)</th>
                                                </tr>
                                            </thead>
                                            <tbody className="bg-white divide-y divide-gray-200">
                                                {data.map((row, index) => (
                                                    <tr key={index}>
                                                        <td className="border-r border-gray-200 px-4 py-2 whitespace-nowrap text-gray-900">{row.name}</td>
                                                        <td className="border-r border-gray-200 px-4 py-2 whitespace-nowrap text-gray-500">{row.status}</td>
                                                        <td className="border-r border-gray-200 px-4 py-2 whitespace-nowrap text-blue-600 hover:text-blue-800">
                                                            <a href="#" className="hover:underline">{row.preview}</a>
                                                        </td>
                                                        <td className="border-r border-gray-200 px-4 py-2 whitespace-nowrap text-gray-500">{row.updated}</td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="h-4 w-px bg-gray-300 ml-16"></div>
                        <div className='flex justify-between items-center'>

                            <div className="flex items-center ml-14">
                                <FiCheck /> <div className='flex gap-1 ml-1 items-center'>
                                    <img src={vercel} className='w-3 h-3 rounded-full' alt="" />
                                    <a href="" className='text-xs hover:text-blue-500'>varcel</a>
                                    <span className='text-xs'>deployed to <a href="" className='font-bold text-xs hover:text-blue-500'>Preview-ui</a>  2month ago</span>
                                </div>
                            </div>
                            <button className='border text-xs rounded-md px-1 py-1'>View deployment</button>
                        </div>
                        <div className="h-4 w-px bg-gray-300 ml-16"></div>
                        <div className=''>

                            <div className="flex items-center ml-14">
                                <FiCheck /> <div className='flex gap-1 ml-1 items-center'>
                                    <img src={shadcn} className='w-3 h-3 rounded-full' alt="" />
                                    <a href="" className='text-xs hover:text-blue-500'>shadcn</a>
                                    <span className='text-xs'>added the <button className='border px-1  bg-green-500 text-white text-xs rounded-md'>automerge</button> Preview-ui 2month ago</span>
                                </div>
                            </div>

                        </div>
                        <div className="h-4 w-px bg-gray-300 ml-16"></div>
                        <div className='flex justify-between items-center'>

                            <div className="flex items-center ml-14">
                                <FiCheck /> <div className='flex gap-1 ml-1 items-center'>
                                    <img src={vercel} className='w-3 h-3 rounded-full' alt="" />
                                    <a href="" className='text-xs hover:text-blue-500 sm-font-size'>varcel</a>
                                    <span className='text-xs sm-font-size'>deployed to <a href="" className='font-bold text-xs hover:text-blue-500 sm-font-size'>Preview-v4</a>  2month ago</span>
                                </div>
                            </div>
                            <button className='border text-xs rounded-md px-1 py-1 sm-font-size'>View deployment</button>
                        </div>
                        <div className="h-4 w-px bg-gray-300 ml-16"></div>
                        <div className='flex justify-between items-center'>

                            <div className="flex items-center ml-14">
                                <FiCheck /> <div className='flex gap-1 ml-1 items-center'>
                                    <img src={vercel} className='w-3 h-3 rounded-full' alt="" />
                                    <a href="" className='text-xs font-bold hover:text-blue-500'>kodiakhq </a>
                                    <span className='text-xs'>merged commite <a href="" className='font-bold text-xs hover:text-blue-500'>61e21e</a>  on march 17</span>
                                </div>
                            </div>
                            <button className='border text-xs rounded-md px-1 py-1'>View details</button>
                        </div>
                        <div className="rounded-md p-4 mt-5 border bg-yellow-100 border-[#d8dee4] text-sm text-[#24292f] text-center sm:text-left">
  <div className="flex flex-col sm:flex-row sm:items-center sm:gap-2">
    <div className="mb-2 sm:mb-0">
      <button className="bg-[#2da44e] hover:bg-[#2c974b] text-white font-medium py-1.5 px-3 rounded-md text-sm whitespace-nowrap">
        Sign up for free
      </button>
    </div>
    <span className="text-sm">to join this conversation on GitHub. Already have an account?</span>
    <a
      href="#"
      className="text-[#0969da] hover:text-[#1168d3] hover:underline text-sm whitespace-nowrap"
    >
      Sign in to comment
    </a>
  </div>
</div>


                    </div>
                </div>

                {/* vertical part */}
                <div className='w-1/3 ml-2 review'>
                    <p className='text-xs mt-3'>Reviewers</p>
                    <div className='flex justify-between items-center '>
                        <div className='flex items-center gap-1'>
                            <img src={shadcn} className='w-4 h-4 rounded-full' alt="" />
                            <span className='text-xs'> shadcn</span>
                        </div>
                        <FiCheck className="text-green-600" />

                    </div>
                    <div className='flex justify-between items-center mt-1'>
                        <div className='flex items-center gap-1'>
                            <img src={jack} className='w-4 h-4 rounded-full' alt="" />
                            <span className='text-xs'> Jacksonmills</span>
                        </div>
                        <FiCheck className="text-green-600" />

                    </div>
                    <div className='flex justify-between items-center mt-1'>
                        <div className='flex items-center gap-1'>
                            <img src={mat} className='w-4 h-4 rounded-full' alt="" />
                            <span className='text-xs'>matevegh</span>
                        </div>
                        <FiCheck className="text-green-600" />

                    </div>
                    <hr className="my-2 border-gray-300" />
                    <p className='text-xs'>Assignees</p>
                    <p className='text-xs'>No one assigned</p>
                    <hr className="my-2 border-gray-300" />
                    <p className='text-xs'>Lables</p>
                    <button className='rounded-md text-white bg-green-600 text-xs px-2 pb-1'>automerge</button>
                    <hr className="my-2 border-gray-300" />
                    <p className='text-xs'>Projects</p>
                    <p className='text-xs'>None yet</p>
                    <hr className="my-2 border-gray-300" />
                    <p className='text-xs'>Milestone</p>
                    <p className='text-xs'>No milestone</p>
                    <hr className="my-2 border-gray-300" />
                    <p className='text-xs'>Development</p>
                    <p className='text-xs'>Successfully merging this pull request may close these issues.</p>
                    <p className='text-xs'>None yet</p>
                    <hr className="my-2 border-gray-300" />
                    <p className='text-xs'>4 participants</p>
                    <div className='flex gap-1'>
                        <img src={yordan} className='w-4 h-4 rounded-full' alt="" />
                        <img src={shadcn} className='w-4 h-4 rounded-full' alt="" />
                        <img src={jack} className='w-4 h-4 rounded-full' alt="" />
                        <img src={mat} className='w-4 h-4 rounded-full' alt="" />
                    </div>
                </div>

            </div>

        </>
    );
};

export default ConversationTab;