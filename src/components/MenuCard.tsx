import { Link } from "react-router-dom";

interface MenuType {
  title?: string;
  imageURL: string;
  className?: string;
  link?: string;
}

const MenuCard = ({
  title,
  imageURL,
  className = "rounded-lg max-w-75 max-h-55",
  link = "hotels/:id",
}: MenuType) => {
  return (
    <div className="flex flex-col text-centers">
      <img className={className} alt="hotel" src={imageURL} />
      <Link to={link}>
        <h4>{title}</h4>
      </Link>
    </div>
  );
};

export default MenuCard;
