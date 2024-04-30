import { ChangeEvent, FormEvent, useState } from "react"
import { ClientType } from "../types/type"
// import { setUp } from "../axios/Axios";
import { useNavigate } from "react-router-dom";

export default function CreateClientForm() {
  const navigate = useNavigate()

  const [client, setClient] = useState<ClientType>({
    firstName: "",
    lastName: "",
    address: "",
    phoneNumber: 0,
    email: ""
  })

  const onChangeData = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setClient((prev) => ({
      ...prev,
      [name]: value
    }))
  }


  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // void postClient()
      try {
        const res = await fetch("http://localhost:8086/clients/add", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(client)
      })
      const data = await res.json()
      navigate("/orders")
      return data
      } catch (error) {
        console.error(error);
        
      }
  }

  // const postClient = async () => {
  //   try {
  //     const res = await setUp()
  //       .post("/clients/add", client)
  //       navigate('/orders')
  //   } catch (error) {
  //     console.error(error);
  //   }
  // }


  return (
    <div className="w-full h-full bg-zinc-950 flex justify-center items-center py-5">
      <form
        onSubmit={onSubmit}
        className="w-2/5 h-auto p-4 text-white flex justify-around 
      flex-col bg-zinc-900 gap-3 font-bold">
        <h1 className="text-center text-3xl">Contactez-nous</h1>
        <div className="flex flex-col gap-2">
          <label htmlFor="firstName" className="text-slate-500">
            FirstName
          </label>
          <input type="text" id='firstName' name='firstName'
            placeholder='your firstName'
            className="p-2 outline-none bg-zinc-950 border border-slate-500"
            onChange={onChangeData}
            value={client.firstName}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="lastName" className="text-slate-500">
            LastName
          </label>
          <input type="text" placeholder='your lastName' name='lastName' id='lastName'
            className="p-2 outline-none bg-zinc-950 border border-slate-500"
            onChange={onChangeData}
            value={client.lastName}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="address" className="text-slate-500">
            Address
          </label>
          <input type="text" id='address' name='address' placeholder='your address'
            className="p-2 outline-none bg-zinc-950 border border-slate-500"
            onChange={onChangeData}
            value={client.address}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="email" className="text-slate-500">
            E-mail
          </label>
          <input type="email" name="email" id="email" placeholder='your e-mail'
            className="p-2 outline-none bg-zinc-950 border border-slate-500"
            onChange={onChangeData}
            value={client.email}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="phoneNumber" className="text-slate-500">
            Phone Number
          </label>
          <input type="text" name="phoneNumber" id="phoneNumber" placeholder="Numero telephone"
            className="p-2 outline-none bg-zinc-950 border border-slate-500"
            onChange={onChangeData}
            value={client.phoneNumber}
          />
        </div>
        <button className="w-32 bg-orange-300 relative left-1/3 p-2 hover:scale-110 transition">Envoyez</button>
      </form>
    </div>
  )
}
