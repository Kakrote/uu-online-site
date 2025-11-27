import Image from "next/image"

export interface FacultyMember {
  id: string
  name: string
  designation: string
//   image: string
  isColorImage?: boolean
}

interface FacultyCardProps {
  member: FacultyMember
}

export function FacultyCard({ member }: FacultyCardProps) {
  return (
    <div className="flex flex-col border py-2 rounded-2xl shadow-xl px-4">
      {/* <div className="relative min-h-[300px] w-full overflow-hidden rounded-lg bg-gray-100">
        <Image
          src={member.image || "/placeholder.svg"}
          alt={member.name}
          fill
          className={`object-cover object-top `}
        //   className={`object-cover object-top ${!member.isColorImage ? "grayscale" : ""}`}
        />
      </div> */}
      <h3 className=" text-lg font-bold text-foreground">{member.name}</h3>
      <p className="text-sm text-muted-foreground">{member.designation}</p>
    </div>
  )
}
