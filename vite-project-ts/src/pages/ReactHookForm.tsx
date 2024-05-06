
import { useForm } from "react-hook-form"

export default function ReactHookForm() {
  const{register, handleSubmit, formState: {errors}} = useForm()
  const onSubmit = (data: any)=>{
    console.log(data);
  }

  return (
    <div className="w-full h-full bg-zinc-950 flex justify-center items-center py-5">
      <form
      onSubmit={handleSubmit(onSubmit)}
        className="w-2/5 h-auto p-4 text-white flex justify-around 
      flex-col bg-zinc-900 gap-3 font-bold">
        <h1 className="text-center text-3xl">Contactez-nous</h1>
        <div className="flex flex-col gap-2">
          <label htmlFor="firstName" className="text-slate-500">
            FirstName
          </label>
          <input type="text" id='firstName' autoComplete="firstName"
            placeholder='your firstName'
            className="p-2 outline-none bg-zinc-950 border border-slate-500"
            {...register("firstName", {required: true, minLength: 2})}
          />
          {errors.firstName && <span>min length 2</span>}
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="lastName" className="text-slate-500">
            LastName
          </label>
          <input type="text" placeholder='your lastName' autoComplete='lastName' id='lastName'
            className="p-2 outline-none bg-zinc-950 border border-slate-500"
            {...register("lastName", {required: true, minLength: 2})}
          />
           {errors.lastName && <span>min length 2</span>}
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="address" className="text-slate-500">
            Address
          </label>
          <input type="text" id='address' autoComplete='address' placeholder='your address'
            className="p-2 outline-none bg-zinc-950 border border-slate-500"
             {...register("address", {required: true, minLength: 2})}
          />
           {errors.address && <span>min length 2</span>}
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="email" className="text-slate-500">
            E-mail
          </label>
          <input type="email" autoComplete="email" id="email" placeholder='your e-mail'
            className="p-2 outline-none bg-zinc-950 border border-slate-500"
            {...register("email", {required: true})}
          />
          {errors.email && <span>champs obligatoir</span>}
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="phoneNumber" className="text-slate-500">
            Phone Number
          </label>
          <input type="text" autoComplete="phoneNumber" id="phoneNumber" placeholder="Numero telephone"
            className="p-2 outline-none bg-zinc-950 border border-slate-500"
            {...register("phoneNumber", {required: true, minLength: 10})}
          />
          {errors.phoneNumber && <span>min 10 number</span>}
        </div>
        <button className="w-32 bg-orange-300 relative left-1/3 p-2 hover:scale-110 transition">Envoyez</button>
      </form>
    </div>
  )
}
