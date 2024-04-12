import Container from "./Container";

const Statistics = () => {
  const card = [
    {
      img: "/brand.png",
      title: "Brand Recognition",
      para: "Boost your brand recognition with each click. Generic links don't mean a thing. Branded links help instil confidence in your content.",
    },
    {
      img: "/clock.png",
      title: "Detailed Records",
      para: "Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.",
    },
    {
      img: "/Shape.png",
      title: "Fully Customizable",
      para: "Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.",
    },
  ];
  return (
    <div className="bg-customWhite">
      <Container>
        <div className="py-[50px]">
          <h1 className="text-lightblack text-xl my-5 md:text-5xl font-bold text-center">
            Advanced Statistics
          </h1>
          <p className="text-grey text-lg text-center max-w-[300px] mx-auto">
            Track how your links are performing across the web with our advanced
            statistics dashboard.
          </p>
          <div className="flex flex-col md:flex-row items-center gap-3 mt-5">
            {card.map((c, i) => (
              <div
                key={i}
                className="bg-white flex flex-col items-center mt-10  max-w-[400px] relative p-4 rounded-lg"
              >
                <p className="w-[75px] h-[75px] absolute top-[-40px] flex items-center justify-center bg-deepblue rounded-full">
                  <img src={c.img} alt="brand" />
                </p>
                <h1 className="text-lightblack mt-7 text-lg font-bold">
                  {c.title}
                </h1>
                <p className="text-grey">{c.para}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Statistics;
