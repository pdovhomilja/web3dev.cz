type Props = {};

function Banner({}: Props) {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center bg-yellow-400 border-y border-black py-10 lg:p-0">
      <div className="m-5 md:m-20">
        <h1 className="text-6xl max-w-xl font-serif">
          veškeré <span className="font-bold">know-how</span> o vývoji
          <span className="px-3 underline decoration-black decoration-4">
            Web3
          </span>
          na jednom místě
        </h1>
        <h2 className="pt-5">
          rady a tipy pro začátečníky ale i pokročilé. Vše popasané tak jak jsme
          sami studovali. Veškeré dosupené know-how na jednom místě.
        </h2>
      </div>
      <p className="hidden md:flex text-8xl font-bold p-20 pr-22">W3D</p>
    </div>
  );
}

export default Banner;
