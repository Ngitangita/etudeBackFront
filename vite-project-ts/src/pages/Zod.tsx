import { ChangeEvent, FormEvent, useState } from "react"
import { z } from "zod"


const ClientSchema = z.object({
  id: z.number().optional(),
  firstName: z.string().min(5, { message: "Min 5 caractere" }),
  lastName: z.string().min(5, { message: "Min 5 caractere" }),
  address: z.string().min(5, { message: "Ce champ est obligatoir" }),
  phoneNumber: z.string().max(13, { message: "Le numero  doit etre 13 max" }).min(10, { message: "Le numero  doit etre 10 min" }),
  email: z.string().email().min(5, { message: "min 1" })
})


type ClientType = z.infer<typeof ClientSchema>;

export default function Zod() {

  const [client, setClient] = useState<ClientType>({
    firstName: "",
    lastName: "",
    address: "",
    phoneNumber: "",
    email: ""
  })

  const [errors, setErrors] = useState<Record<string, string[]>>({})

  const onChangeData = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setClient((prev) => ({
      ...prev,
      [name]: value
    }))
  }

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const validate = ClientSchema.safeParse(client);

    const formValidateError = {} as Record<string, string[]>;

    if (validate.success) {
      console.log(validate.data);
      setErrors({})
    } else {

      validate.error.issues.forEach(msg => {
        formValidateError[msg.path[0]] = [msg.message]
      })
      setErrors(formValidateError)
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
          {errors.firstName && <div> {errors.firstName[0]}</div> }
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
          {errors.lastName && <div> {errors.lastName[0]}</div> }
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
          {errors.address && <div> {errors.address[0]}</div> }
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
          {errors.email && <div> {errors.email[0]}</div> }
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
          {errors.phoneNumber && <div> {errors.phoneNumber[0]}</div> }
        </div>
        <button className="w-32 bg-orange-300 relative left-1/3 p-2 hover:scale-110 transition">Envoyez</button>
      </form>
    </div>
  )
}
