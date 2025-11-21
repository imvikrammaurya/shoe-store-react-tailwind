import "./App.css";
import Card from "./components/Card";
import { SHOE_LIST } from "./constant";

export default function App() {
  return (
    <div className="animate-fadeIn p-10 xl:px-24">
      {/* <Nav />
      <ShoeDetail /> */}
      <Card item={SHOE_LIST[0]} />
    </div>
  );
}
