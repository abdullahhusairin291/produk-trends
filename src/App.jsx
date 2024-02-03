import { useEffect, useState } from "react";
import "./App.css";
import { getProduct } from "./api";
import { data } from "autoprefixer";
// import { data } from "autoprefixer";

const App = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProduct((data) => {
      setProducts(data);
    });
  }, []);

  // console.log(products);

  const ListProduct = () => {
    return products.map((data, i) => {
      return (
        <div
          key={i}
          className="bg-slate-100 w-[450px] h-96 text-black text-center rounded-lg"
        >
          <div className="p-2 font-bold text-lg">{data.title}</div>
          <img
            src={data.image}
            alt="img"
            className="h-40 m-auto"
          />
          <div className="text-start text-sm py-2 px-5">{data.description}</div>
          <div>{data.price.toLocaleString("id-ID", { style: "currency", currency: "USD" })}</div>
        </div>
      );
    });
  };

  const search = (q) => {
    console.log({ q });
  };

  return (
    <>
      <div>
        <header className="min-h-[100vh] bg-[#282c34] flex flex-col items-center justify-center">
          <h1 className="text-white text-5xl font-bold text-center py-5">FASION TRENDS</h1>
          <input
            type="text"
            placeholder="Cari produk..."
            className="h-12 p-5 mb-7 rounded-lg font-semibold w-80"
            onChange={({ target }) => search(target.value)}
          />
          <div className="container w-100 flex flex-wrap items-center justify-center gap-5 py-5">
            <ListProduct />
          </div>
        </header>
      </div>
    </>
  );
};

export default App;
