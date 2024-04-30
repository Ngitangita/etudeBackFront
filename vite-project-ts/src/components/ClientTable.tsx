
// import { setUp } from "../axios/Axios"
import { useEffect, useState } from "react"
import { ClientType } from "../types/type"
import { useNavigate } from "react-router-dom"

interface ClientTableProps {
  clients: ClientType[]
}

export const ClientTable = ({ clients }: ClientTableProps) => {

  const [data, setData] = useState<ClientType[]>([])

  useEffect(() => {
       setData(clients)
  }, [clients])

  const navigate = useNavigate()

  const updateClient = (id : number) => {
   navigate(`/clients/edit/${id}`)
  }

  const deleteClient = async(id?:number) =>{
    try {
      const res = await fetch(`http://localhost:8086/clients/delete/${id}`,{
        method: "DELETE"
      })
      const json = (await res.json()) as ClientType;
      if(json.id){
        setData(d => d.filter(r => r.id != json.id))
      }
    } catch (error) {
      console.error(error);
      
    }
  }

  // const deleteClient = async (id?: number) => {
  //   try {
  //     const res = await setUp().delete(`/clients/delete/${id}`);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // }

  const handleDelete = (id?: number) => {
    void deleteClient(id);
  }

  return (
    <div className="w-screen flex justify-center">
      <table className="w-11/12 text-center ">
        <thead className="w-full bg-slate-500">
          <tr className="w-full border-b border-collapse border-black">
            <th className="w-auto">Id</th>
            <th className="w-auto">First Name</th>
            <th className="w-auto">Last Name</th>
            <th className="w-auto">Address</th>
            <th className="w-auto">E-mail</th>
            <th className="w-auto">Phone Number</th>
            <th className="w-auto">button</th>
          </tr>
        </thead>
        <tbody className="w-auto">
          {data.map((client) => (
            <tr key={client.id} className="w-auto border-b border-collapse border-black">
              <td className="w-auto bg-gray-400">{client.id}</td>
              <td className="w-auto bg-slate-200">{client.firstName}</td>
              <td className="w-auto bg-zinc-400">{client.lastName}</td>
              <td className="w-auto bg-neutral-500">{client.address}</td>
              <td className="w-auto bg-stone-500">{client.email}</td>
              <td className="w-auto bg-red-300">{client.phoneNumber}</td>
              <td className="w-auto">
                {client.id !== undefined && (
                  <button className="px-2 py-1 bg-green-500 rounded"
                    onClick={() => updateClient(client.id as number)}
                  >Update</button>
                )}
              </td>
              <td className="w-auto">
                {client.id !== undefined && (
                  <button className="px-2 py-1 bg-red-500 rounded"
                    onDoubleClick={() => handleDelete(client.id)}
                  >Delete</button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
