import hero1 from "../assets/hero1.png";

function Hero() {
  return (
    <div className="relative min-h-[60vh] flex items-center rounded-b-2xl rounded-t-2xl overflow-hidden">

      {/* Full Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${hero1})` }}
      ></div>

      {/* Dark to Transparent Overlay */}
      <div className="absolute inset-0 bg-linear-to-r from-[#0A1A2F]/95 via-[#0A1A2F]/80 to-transparent"></div>

      {/* Left Content */}
      <div className="relative z-10 max-w-3xl px-12 py-20">
        <h1 className="text-white text-5xl md:text-6xl font-extrabold leading-tight">
          LIFE LINE: Bridging the Gap <br /> in Blood Management
        </h1>

        <p className="text-gray-200 text-lg mt-6 max-w-md">
          A comprehensive platform for a healthier tomorrow.
        </p>

        {/* Buttons */}
        <div className="flex gap-4 mt-8">
          <button className="bg-white text-[#0A1A2F] font-semibold px-6 py-3 rounded-md hover:bg-gray-200 transition">
            Learn More
          </button>

          <button className="border border-white text-white font-semibold px-6 py-3 rounded-md hover:bg-white hover:text-[#0A1A2F] transition">
            See it in Action
          </button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
