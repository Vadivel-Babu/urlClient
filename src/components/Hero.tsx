import Container from "./Container";
import Linkform from "./Linkform";

const Hero = () => {
  return (
    <Container>
      <div className="flex flex-col-reverse md:flex-row items-center p-2 justify-between mt-10">
        <div className="flex flex-col justify-center items-center md:block">
          <h1 className="text-center md:text-left text-lightblack text-[35px] mt-5 md:mt-0 md:text-[40px] max-w-[500px] lg:text-[60px] font-bold leading-tight">
            More than just shorter links
          </h1>
          <p className="text-center md:text-left text-grey max-w-[400px] mt-4">
            Build your brand’s recognition and get detailed insights on how your
            links are performing.
          </p>
          <button className="max-w-max bg-cyen mt-4 text-customWhite px-4 py-2 rounded-3xl hover:bg-[#9AE3E3]">
            Get Started
          </button>
        </div>
        <div>
          <img src="/computer.png" alt="" />
        </div>
      </div>
      <Linkform />
    </Container>
  );
};

export default Hero;
