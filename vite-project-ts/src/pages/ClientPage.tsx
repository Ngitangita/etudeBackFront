import { useEffect, useState } from "react";
import { ClientTable } from "../components/ClientTable";
// import { setUp } from "../axios/Axios";

export default function ClientPage() {
  const [clients, setClients] = useState([])

  // useEffect(()=>{
  //   void getOrder()
  // },[])

  // const getOrder = async ()=>{
  //   try {
  //     const res = await setUp()
  //     .get("/clients/")
  //     setClients(res.data)
  //   } catch (error) {
  //     console.error(error);

  //   }
  // }

  useEffect(() => {
    const getOrder = async () => {
      try {
        const res = await fetch("http://localhost:8086/clients/")
        const data = await res.json()
        setClients(data)
      } catch (error) {
        console.error(error);

      }
    }
    getOrder()
  }, [])

  return (
    <div>
      <ClientTable clients={clients} />
    </div>
  )
}