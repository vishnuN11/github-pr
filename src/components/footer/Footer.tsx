import { FaGithub } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-[#f6f8fa] border-t border-[#d8dee4] py-6 px-4 w-full mt-auto">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-xs text-[#57606a]">
          <div className="flex items-center">
            <FaGithub className="mr-2 text-[#24292f]" size={16} />
            <span className="mr-2">© 2025 GitHub, Inc.</span>
          </div>
          <a href="#" className="hover:text-[#0969da] hover:underline">Terms</a>
          <a href="#" className="hover:text-[#0969da] hover:underline">Privacy</a>
          <a href="#" className="hover:text-[#0969da] hover:underline">Security</a>
          <a href="#" className="hover:text-[#0969da] hover:underline">Status</a>
          <a href="#" className="hover:text-[#0969da] hover:underline">Docs</a>
          <a href="#" className="hover:text-[#0969da] hover:underline">Contact</a>
          <a href="#" className="hover:text-[#0969da] hover:underline">Manage cookies</a>
          <a href="#" className="hover:text-[#0969da] hover:underline">Do not share my personal information</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;