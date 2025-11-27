import { FacultyCard, type FacultyMember } from "./faculty-card"

interface FacultySectionProps {
  departmentPrefix?: string
  departmentName: string
  members: FacultyMember[]
}

export function FacultySection({ departmentPrefix = "FACULTY OF", departmentName, members }: FacultySectionProps) {
  return (
    <section className="w-full py-8">
      <div className="mb-6">
        <p className="text-2xl md:text-4xl  font-bold uppercase  text-foreground">{departmentPrefix}</p>
        <h2 className="text-3xl  lg:text-7xl font-bold text-[#6bc533] md:text-4xl">{departmentName}</h2>
      </div>

      <div className="mb-8 h-px w-full bg-border" />

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {members.map((member) => (
          <FacultyCard key={member.id} member={member} />
        ))}
      </div>
    </section>
  )
}
