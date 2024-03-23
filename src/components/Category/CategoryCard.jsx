import PropTypes from "prop-types";

const CategoryCard = ({ card }) => {
  const { logo, category_name, availability } = card;

  return (
    <div className="bg-white rounded-lg p-10 space-y-4">
      <img src={logo} alt={category_name} />
      <h2 className="text-[#474747] font-extrabold text-xl">{category_name}</h2>
      <p className="text-[#A3A3A3] font-base">{availability}</p>
    </div>
  );
};

CategoryCard.propTypes = {
  card: PropTypes.object.isRequired,
};

export default CategoryCard;
