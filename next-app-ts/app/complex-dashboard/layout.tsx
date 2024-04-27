
export default function dashboardlayout({
  children,
  users,
  revenue,
  notification
}: {
  children: React.ReactNode;
  users: React.ReactNode;
  revenue: React.ReactNode;
  notification: React.ReactNode
}) {
  return (
    <div>
      <div>{children}</div>
      <div className="flex flex-row gap-3">
        <div className="flex gap-1 flex-col">
          <div className="p-10 text-center shadow shadow-slate-400">{users}</div>
          <div className="p-10 text-center shadow shadow-slate-400">{revenue}</div>
        </div>
        <div className="p-20 shadow shadow-slate-400">{notification}</div>
      </div>
    </div>
  )
}
