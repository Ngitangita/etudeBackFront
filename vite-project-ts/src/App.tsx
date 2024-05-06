import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/HomePage";
import ClientPage from "./pages/ClientPage";
import StockPage from "./pages/StockPage";
import ProductPage from "./pages/ProductPage";
import CreateClientForm from "./pages/CreateClientPage";
import EditClientPage from "./pages/EditClientPage";
import Zod from "./pages/Zod";
import ReactHookForm from "./pages/ReactHookForm";

export default function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<ProductPage />} />
      <Route path="/clients/create" element={<CreateClientForm />} />
      <Route path="/clients/edit/:id" element={<EditClientPage />} />
      <Route path="/clients" element={<ClientPage/>} />
      <Route path="/stock" element={<StockPage />} />
      <Route path="/zod" element={<Zod />} />
      <Route path="/reactHookForm" element={<ReactHookForm />} />
      <Route path="/*" element={<h1>Route not found!</h1>} />
    </Routes>
  </BrowserRouter>
  )
}