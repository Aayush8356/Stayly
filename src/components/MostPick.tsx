interface MenuType {
  imageURL: string;
  className?: string;
}
const MostPick = ({ className, imageURL }: MenuType) => {
  return (
    <div>
      <img className={className} alt="hotel" src={imageURL} />
    </div>
  );
};

export default MostPick;
