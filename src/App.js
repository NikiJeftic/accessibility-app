import "./App.css";
import AboutUs from "./components/AboutUs/AboutUs";
import Footer from "./components/Footer/Footer";
import Form from "./components/Form/Form";
import Header from "./components/Header/Header";
import Navigation from "./components/Navigation/Navigation";

function App() {
  return (
    <>
      <Navigation />
      <Header />
      <AboutUs />
      <Form />
      <Footer />
    </>
  );
}

export default App;
