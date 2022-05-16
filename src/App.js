import './App.scss';
import Header from "./Components/Header/Header";
import Showcase from './Components/Showcase/Showcase';
import Highlights from './Components/Highlights/Highlights';
import Footer from './Components/Footer/Footer';

export default function App() {
  return (
    <>
      <Header />
      <Showcase />
      <Highlights />
      <Footer />
    </>
  );
}