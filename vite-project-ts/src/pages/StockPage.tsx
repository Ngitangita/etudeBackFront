import { useState } from "react";
import { Link } from "react-router-dom";

export default function StockPage() {
  const [stocks, ] = useState([
    {
      img: "product-1.png",
      desciption: "Fresh Coffee",
      newPrice: "$15.99",
      lastPrice: "$20.99",
    },
    {
      img: "product-2.png",
      desciption: "Fresh Coffee",
      newPrice: "$15.99",
      lastPrice: "$20.99",
    },
    {
      img: "product-3.png",
      desciption: "Fresh Coffee",
      newPrice: "$15.99",
      lastPrice: "$20.99",
    }
  ])

  return (
    <div className="w-screen h-screen bg-zinc-950 
   flex flex-row items-center justify-center gap-3">
      {
        stocks.map((stock, i) => (
          <div className="w-1/4 height border border-slate-500
        flex flex-col items-center justify-center text-white bg-zinc-950 gap-3 "
            key={i}
          >
            <figure>
              <img src={stock.img} alt="product" />
            </figure>
            <h3 className="font-bold size">{stock.desciption}</h3>
            <h4 className="size">{stock.newPrice} <span className="sizeSpan line-through">{stock.lastPrice}</span></h4>
            <Link to="/products">
              <button className="w-32 bg-orange-300 relative p-2 hover:scale-110 transition">
                Voir Moin
              </button>
            </Link>
          </div>
        ))
      }
    </div>
  )
}