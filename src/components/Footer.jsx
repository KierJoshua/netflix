import React from "react";
import facebook from "../assets/facebook_icon.png";
import instagram from "../assets/instagram_icon.png";
import twitter from "../assets/twitter_icon.png";
import youtube from "../assets/youtube_icon.png";

function Footer() {

    const currentYear = new Date().getFullYear();

  return (
    <div className="w-full pt-20 flex px-[23%] py-5 bg-[#141414] text-white">
      <div className="flex flex-col w-full gap-4">
        <div className="flex gap-7">
          <img src={facebook} alt="" className="w-6" />
          <img src={instagram} alt="" className="w-6" />
          <img src={twitter} alt="" className="w-6" />
          <img src={youtube} alt="" className="w-6" />
        </div>
        <ul className="grid grid-cols-[auto_auto_auto_auto] gap-8 w-full cursor-pointer">
          <li className="text-xs md:text-sm hover:underline">Audio Description</li>
          <li className="text-xs md:text-sm hover:underline">investor relations</li>
          <li className="text-xs md:text-sm hover:underline">Legal Notices</li>
          <li className="text-xs md:text-sm hover:underline">Help Center</li>
          <li className="text-xs md:text-sm hover:underline">Jobs</li>
          <li className="text-xs md:text-sm hover:underline">Cookie Preferences</li>
          <li className="text-xs md:text-sm hover:underline">Gift Cards</li>
          <li className="text-xs md:text-sm hover:underline">Terms of Use</li>
          <li className="text-xs md:text-sm hover:underline">Corporate Information</li>
          <li className="text-xs md:text-sm hover:underline">Media Center</li>
          <li className="text-xs md:text-sm hover:underline">Privacy</li>
          <li className="text-xs md:text-sm hover:underline">Contact Us</li>
        </ul>
        <button className=" bg-transparent border border-white w-32 rounded-none text-white py-1 hover:font-bold my-5">Service Code</button>
        <p className="text-xs">&copy; 1997-{currentYear} Netflix, Inc.</p>
      </div>
    </div>
  );
}

export default Footer;
