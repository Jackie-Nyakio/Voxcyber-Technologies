import Header from "./components/layout/Header";
import Hero from "./sections/Hero";
import About from "./sections/About"; // import the About section
import NewInStore from "./sections/NewInStore"; //import NewInStore section

function App() {
  return (
    <div className="w-full h-full">
      <Header />
      <Hero />
      <About /> {/* added here */}
      <NewInStore />
    </div>
  );
}

export default App;
