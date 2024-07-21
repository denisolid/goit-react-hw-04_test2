import ImageCard from "./ImageCard/ImageCard";

const ImageGallery = ({ images, openModal, closeModal }) => {
  return (
    <div>
      <ul>
        {images.map((image) => (
          <li key={image.id}>
            <ImageCard
              image={image}
              openModal={openModal}
              closeModal={closeModal}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ImageGallery;
