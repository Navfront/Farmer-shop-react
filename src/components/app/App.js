import { BrowserRouter, Route, Routes } from "react-router-dom";
import IndexPage from "../pages/index-page";
import ProductPage from "../pages/product-page";
import GlobalStyles from "./globalStyles";

function App() {
  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<IndexPage />} />
          <Route path="/order" element={<ProductPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
