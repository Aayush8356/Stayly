import { Link } from "react-router-dom";
import { Button } from "./ui/button";

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
    <div className="flex flex-col gap-2 items-center">
      <img className={className} alt="hotel" src={imageURL} />
      <h4>{title}</h4>
      <Link to={link}>
        <Button className="self-center">Book Now</Button>
      </Link>
    </div>
  );
};

export default MenuCard;
