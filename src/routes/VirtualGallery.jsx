import { useParams } from 'react-router-dom';

const VirtualGalleryScreen = () => {
  const { id } = useParams();
  console.log(id);

  return (
    <section>
      <h1>Virtual Gallery Here</h1>
    </section>
  );
};

export default VirtualGalleryScreen;
