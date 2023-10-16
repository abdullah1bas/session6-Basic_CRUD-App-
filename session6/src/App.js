import { Outlet, Route, Routes } from "react-router-dom";
import "./App.css";
import "./components/Navbar";

import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Home from "./Pages/Home";
import Products from "./Pages/Products";
import Categories from "./Pages/Categories";
import AddProduct from "./Pages/AddProduct";
import ProductDetails from "./Pages/ProductDetails";
import ProductEdit from "./Pages/ProductEdit";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="row">
        <div className="col-2 sidebar">
          <Sidebar />
        </div>
        <div className="col-10">
          <Routes>
            <Route path="/" element={<Home />} />
            {/* Outlet => da byb2a parent le al nested route byt7t feha kda ana 3rfto 2n products da al 2ab
            le group route we lazem n3mel path="" 3shan de htb2a al products */}
            <Route path="products" element={<Outlet />} >
              <Route path="" element={<Products showTitlePage={true} showButton={true} />} />
              <Route path="add" element={<AddProduct />} />
              <Route path=":productID" element={<ProductDetails />} />
              <Route path="edit/:editIDdddddddddddddd" element={<ProductEdit />} />
            </Route>
            <Route path="categories" element={<Categories />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
