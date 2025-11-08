import Header from "./components/layout/Header";
import Hero from "./sections/Hero";
import About from "./sections/About"; // import the About section
import NewInStore from "./sections/NewInStore"; //import NewInStore section
import InfoSection from "./sections/InfoSection"; //import InfoSection
import AllProducts from "./sections/AllProducts"; //import AllProducts

function App() {
  return (
    <div className="w-full h-full">
      <Header />
      <Hero />
      <About /> {/* added here */}
      <NewInStore />
      <InfoSection />
      <AllProducts />
    </div>
  );
}

export default App;
