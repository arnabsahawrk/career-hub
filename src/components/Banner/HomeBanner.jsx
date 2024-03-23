const HomeBanner = () => {
  return (
    <section className="hero">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div>
          <img
            src="https://i.postimg.cc/bYS40Srn/user.png"
            className="object-cover w-full"
          />
        </div>
        <div className="space-y-4 lg:space-y-6">
          <h1 className="text-3xl md:text-4xl lg:text-7xl font-extrabold text-[#1A1919]">
            One Step Closer To Your{" "}
            <span className="bg-gradient-to-r from-orange-700 via-sky-500 to-green-400 text-transparent bg-clip-text bg-300% animate-gradient">
              Dream Job
            </span>
          </h1>
          <p className="text-lg font-medium text-[#757575]">
            Explore thousands of job opportunities with all the information you
            need. Its your future. Come find it. Manage all your job application
            from start to finish.
          </p>
          <button className="btn btn-info text-white">Get Started</button>
        </div>
      </div>
    </section>
  );
};

export default HomeBanner;
