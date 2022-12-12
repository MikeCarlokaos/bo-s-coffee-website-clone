import "./App.css";
import "./page.css";
import Home from "./pages/Home";
import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import CoffeeSubscription from "./pages/CoffeeSubscription";
import CoffeeBeans from "./pages/CofffeeBeans";
import BottledBeverages from "./pages/BottledBeverages";
import BakedGoods from "./pages/BakedGoods";
import Dressing from "./pages/Dressing";
import Snacks from "./pages/Snacks";
import GiftSets from "./pages/GiftSets";
import Merchandise from "./pages/Merchandise";
import PageNotFound from "./pages/PageNotFound";
import Login from "./pages/Login";
import CreateAccount from "./pages/CreateAccount";
import InStoreMenu from "./pages/InstoreMenu";
import Franchising from "./pages/Franchising";
import OrderAhead from "./pages/OrderAhead";
import StoreLocator from "./pages/StoreLocator";
import EgiftCertificate from "./pages/EgiftCertificate";

function App() {
  const [openMenu, setOpenMenu] = useState(false);
  const [openCart, setOpenCart] = useState(false);

  const toggleCart = () => {
    setOpenCart(!openCart);
  };

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/coffee-subscription" element={<CoffeeSubscription />} />
      <Route path="/coffee-beans" element={<CoffeeBeans />} />
      <Route path="/bottled-beverages" element={<BottledBeverages />} />
      <Route path="/baked-goods" element={<BakedGoods />} />
      <Route path="/dressing" element={<Dressing />} />
      <Route path="/snacks" element={<Snacks />} />
      <Route path="/gift-sets" element={<GiftSets />} />
      <Route path="/merchandise" element={<Merchandise />} />
      <Route path="*" element={<PageNotFound />} />
      <Route path="/login" element={<Login />} />
      <Route path="/create-account" element={<CreateAccount />} />
      <Route path="/in-store-menu" element={<InStoreMenu />} />
      <Route path="/order-ahead" element={<OrderAhead />} />
      <Route path="/store-locator" element={<StoreLocator />} />
      <Route path="/egift-certificates" element={<EgiftCertificate />} />
      <Route path="/franchising" element={<Franchising />} />
    </Routes>
  );
}

export default App;
