import { useEffect, useState } from "react";
import { BiMoon, BiSun } from "react-icons/bi";
import "./App.css";
import Cart from "./components/Cart";
import Nav from "./components/Nav";
import NewArrivalsSection from "./components/NewArrivalsSection";
import Sidebar from "./components/Sidebar";
import { SHOE_LIST } from "./constant";
import ShoeDetail from "./ShoeDetail";

export default function App() {
  const [isSidebarOpen, setSideBarOpen] = useState(false);
  const [currentShoe, setCurrentShoe] = useState(SHOE_LIST[0]);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const isDarkMode = localStorage.getItem("isDarkMode");
    if (isDarkMode === "true") {
      window.document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleDarkMode = () => {
    window.document.documentElement.classList.toggle("dark");

    localStorage.setItem(
      "isDarkMode",
      window.document.documentElement.classList.contains("dark"),
    );
  };
  const removeFormCart = (productId) => {
    const updateCartItems = [...cartItems];
    const existingItemIndex = cartItems.findIndex(
      (item) => item.product.id === productId,
    );
    updateCartItems.splice(existingItemIndex, 1);
    setCartItems(updateCartItems);
  };
  const addToCart = (product, qty, size) => {
    if (qty && size) {
      const updateCartItems = [...cartItems];
      const existingItemIndex = cartItems.findIndex(
        (item) => item.product.id === product.id,
      );
      if (existingItemIndex > -1) {
        updateCartItems[existingItemIndex].qty = qty;
        updateCartItems[existingItemIndex].size = size;
      } else {
        updateCartItems.push({ product: product, qty, size });
      }
      setCartItems(updateCartItems);
    }
  };

  return (
    <div className="animate-fadeIn dark:bg-night p-10 xl:px-24">
      <Nav onClickShoppingBtn={() => setSideBarOpen(true)} />
      <ShoeDetail shoe={currentShoe} onClickAdd={addToCart} />
      <NewArrivalsSection item={SHOE_LIST} onClickCard={setCurrentShoe} />
      <Sidebar
        isOpen={isSidebarOpen}
        onClickClose={() => setSideBarOpen(false)}
      >
        <Cart cartItem={cartItems} onClickTrash={removeFormCart} />
      </Sidebar>

      <div className="fixed right-4 bottom-4">
        <button
          onClick={toggleDarkMode}
          className="bg-night-50 dark:text-night rounded-full px-4 py-2 text-white shadow-lg dark:bg-white"
        >
          <BiSun className="hidden dark:block" />
          <BiMoon className="dark:hidden" />
        </button>
      </div>
    </div>
  );
}
