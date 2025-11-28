import {
  RiFacebookFill,
  RiInstagramFill,
  RiTwitterFill,
} from "@remixicon/react";

const Footer = () => {
  return (
    <footer className="max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-center border-t-2 py-4">
        <div className="flex space-x-6 mb-2">
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit our Facebook page"
            className="hover:text-slate-500 duration-300"
          >
            <RiFacebookFill />
          </a>

          <a
            href="https://www.twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit our Twitter page"
            className="hover:text-slate-500 duration-300"
          >
            <RiTwitterFill />
          </a>

          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit our Instagram page"
            className="hover:text-slate-500 duration-300"
          >
            <RiInstagramFill />
          </a>
        </div>
        <p className="text-sm">&copy; 2025 VastuSpaze. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
