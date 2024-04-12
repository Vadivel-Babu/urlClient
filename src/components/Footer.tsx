import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaPinterest,
} from "react-icons/fa";
const Footer = () => {
  return (
    <footer className="bg-black p-4 flex justify-between items-center">
      <h1 className="text-2xl text-white font-bold">Shortly</h1>
      <div className="text-white flex gap-3">
        <FaFacebookF className="hover:text-cyen cursor-pointer" />
        <FaTwitter className="hover:text-cyen cursor-pointer" />
        <FaInstagram className="hover:text-cyen cursor-pointer" />
        <FaPinterest className="hover:text-cyen cursor-pointer" />
      </div>
    </footer>
  );
};

export default Footer;
