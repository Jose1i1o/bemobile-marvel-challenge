export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <div className="overflow-y-scroll w-screen h-screen antialiased text-slate-300 selection:bg-blue-600 selection:text-white">
        <div className="flex">
          <div className="w-full px-6 py-10 text-slate-800">{children}</div>
        </div>
      </div>
    </>
  )
}
