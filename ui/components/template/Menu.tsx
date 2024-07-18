import Link from "next/link"

export default function Menu(){
  return(
    <div className="w-full flex flex-col max-w-[300px] h-screen bg-blue-500">
      Menu
      <Link href="/">Home</Link>
      <Link href="/conquest">Conquest</Link>
    </div>
  )
}