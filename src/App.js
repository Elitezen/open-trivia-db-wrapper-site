import Header from "./Components/Header/Header";
import './App.scss';
import Showcase from "./Components/Showcase/Showcase";
import Details from "./Components/Details/Details";
import Footer from "./Components/Footer/Footer";
import Examples from "./Components/Examples/Examples";

export default function App() {
  return (
    <>
      <Header />
      <Showcase />
      <Examples />
      <Details />
      <Footer />
    </>
  );
}