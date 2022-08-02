import { useParams } from 'react-router-dom';
import bgdemo from '../assets/scenarios/demo.jpg';

const VirtualGalleryScreen = () => {
  const { id } = useParams();
  console.log(id);

  return (
    <section style={{ backgroundImage: `url(${bgdemo})` }}>
      <h1>Virtual Gallery Here</h1>
    </section>
  );
};

export default VirtualGalleryScreen;
