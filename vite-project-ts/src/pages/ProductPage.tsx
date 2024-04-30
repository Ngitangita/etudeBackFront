import { Link } from "react-router-dom";


export default function ProductPage() {
  return (
    <>
      <div className="w-1/4 height border border-black 
      flex flex-col items-center justify-center text-white bg-slate-950 gap-3">
        <figure>
          <img src="../../public/product-1.png" alt="product" />
        </figure>
        <h3 className="font-bold size">Fresh Coffee</h3>
        <h4 className="size">$15.99 <span className="sizeSpan line-through">$20.99</span></h4>
        <Link to="/stock">
          <button className="w-32 bg-orange-300 relative p-2 hover:scale-110 transition">
            Voir Plus
          </button>
        </Link>
      </div>
    </>
  )
}
