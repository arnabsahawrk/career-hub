import PropTypes from "prop-types";

const ShareHeadTitle = ({ headTitle }) => {
  const { head, title } = headTitle;
  return (
    <div className="text-center space-y-4">
      <h1 className="text-[#1A1919] font-extrabold text-3xl md:text-4xl lg:text-5xl">
        {head}
      </h1>
      <p className="text-[#757575] font-medium text-lg">{title}</p>
    </div>
  );
};

ShareHeadTitle.propTypes = {
  headTitle: PropTypes.object.isRequired,
};

export default ShareHeadTitle;
