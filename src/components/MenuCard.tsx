interface MenuType {
  title?: string;
  imageURL: string;
  className?: string;
}

const MenuCard = ({ title, imageURL, className }: MenuType) => {
  return (
    <div className="flex flex-col text-centers">
      <img className={className} alt="hotel" src={imageURL} />
      <h4>{title}</h4>
    </div>
  );
};

export default MenuCard;
