import { ChangeEvent, FormEvent, useState } from "react"
import { useNavigate } from "react-router-dom";
import { z } from "zod";
import { setUp } from "../axios/axios";

const ClientSchema = z.object({
  id: z.number().optional(),
  firstName: z.string().min(2).max(150),
  lastName: z.string().min(2).max(150),
  address: z.string().min(2),
  phoneNumber: z.string().min(10).max(13),
  email: z.string().email()
})

type ClientType = z.infer<typeof ClientSchema>;

export default function CreateClientForm() {
  const navigate = useNavigate()
  const [errors, setErrors] = useState<Record<string, string[]>>({});

  const [client, setClient] = useState<ClientType>({
    firstName: "",
    lastName: "",
    address: "",
    phoneNumber: "",
    email: "",
  });

  const onChangeData = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setClient((prev) => ({
      ...prev,
      [name]: value
    }))
  }


  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()


    const validate = ClientSchema.safeParse(client);
    if (validate.success) {
      setErrors({});
      // try {
      //   const res = await fetch("http://localhost:8086/clients/add", {
      //     method: "POST",
      //     headers: { "Content-Type": "application/json" },
      //     body: JSON.stringify(client),
      //   });
      //   if (!res.ok) {
      //     throw new Error("Failed to add client");
      //   }
      //   navigate("/clients");
      // } catch (error) {
      //   console.error(error);
      // }
      void postClient()
    } else {
      setErrors(validate.error.flatten().fieldErrors);
    }
  }

  const postClient = async () => {
    try {
      const res = await setUp()
        .post("/clients/add", client)
        navigate("/clients");
    } catch (error) {
      console.error(error);
    }
  }


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
          {errors.firstName && <span>{errors.firstName[0]}</span>}
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
          {errors.lastName && <span>{errors.lastName[0]}</span>}
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
          {errors.address && <span>{errors.address[0]}</span>}
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
          {errors.email && <span>{errors.email[0]}</span>}
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
          {errors.phoneNumber && <span>{errors.phoneNumber[0]}</span>}
        </div>
        <button className="w-32 bg-orange-300 relative left-1/3 p-2 hover:scale-110 transition">Envoyez</button>
      </form>
    </div>
  )
}

