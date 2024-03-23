import PropTypes from "prop-types";

const OtherBanner = ({ title }) => {
  return (
    <section className="relative text-center py-28">
      <img
        className="absolute bottom-0 left-0 size-48"
        src="https://i.postimg.cc/vHjp4vkc/bg1.png"
      />
      <img
        className="absolute top-0 right-0 size-48"
        src="https://i.postimg.cc/jjT3f3Xd/bg2.png"
      />
      <h1 className="text-[#1A1919] text-3xl font-extrabold">{title}</h1>
    </section>
  );
};

OtherBanner.propTypes = {
  title: PropTypes.string.isRequired,
};

export default OtherBanner;
