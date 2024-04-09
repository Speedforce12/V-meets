import CurrentDate from "./current-date";

const Banner = () => {
  return (
    <section className='rounded shadow-md relative  bg-[url("/icons/hero-background.png")]  h-72 bg-center bg-no-repeat bg-cover p-4'>
      <div className='flex flex-col'>
        <div className='rounded-sm bg-[#ffffff1c] flex items-center w-60 p-2'>
          <p className='text-sm font-bold text-white'>Upcoming Meeting at:</p>
          <span className='text-white text-sm font-bold ml-1'>12:30PM</span>
        </div>

        <CurrentDate />
      </div>
    </section>
  );
};

export default Banner;
