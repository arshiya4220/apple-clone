import Header from './Components/Nav/Header';
import HeaderLine from './Components/Header/Headline';
import UnitWrapper from './Components/Header/UnitWrapper';
import Carousel from './Components/Carousel';
import Footer from './Components/Footer/Footer';
function Home() {
  return (
    <div className="h-screen bg-black">
        <Header />
        <HeaderLine/>
        <UnitWrapper/>
        <Carousel/>
        <Footer/>
    </div>
  );
}
export default Home;