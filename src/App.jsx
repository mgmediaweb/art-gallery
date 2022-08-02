import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import VirtualGalleryScreen from './routes/VirtualGallery';
import HomeScreen from './routes/Home';

function App() {
  console.log('app');

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route element={<VirtualGalleryScreen />} path="/gallery" />
        <Route index element={<HomeScreen />} />
        <Route
          element={
            <section className="flex-center"><div className="container text-center">404 Page not found</div></section>
          }
          path="*"
        />
      </Routes>
    </Router>
  );
}

export default App;
