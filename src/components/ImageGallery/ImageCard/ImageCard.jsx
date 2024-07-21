const ImageCard = ({ item, openModal }) => {
  return (
    <div>
      <img
        src={item.urls.small}
        alt={item.alt_description}
        onClick={() => openModal(item.alt_description, item.urls.regular)}
        height={"240px"}
      />
    </div>
  );
};

export default ImageCard;
