import { useState, React } from "react";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";
import Products from "./Components/Products/Products";
import Data from "../src/Data";
function App() {
  const [count, setcount] = useState(0);
  return (
    <>
      <Navbar count={count} />
      <Header />
      <Products data={Data} setcount={setcount} count={count} />
      <Footer />
    </>
  );
}

export default App;
