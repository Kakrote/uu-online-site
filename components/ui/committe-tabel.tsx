"use client"

interface CommitteeMember {
  slNo: number | string
  name: string
  designation: string
  status: string
}

interface CommitteeTableProps {
  title?: string
  subtitle?: string
  members: CommitteeMember[]
}

export function CommitteeTable({
  title = "COMMITTEE COMPOSTION",
  subtitle = "OF UNIVERSITY STUDENT GRIEVANCE REDRESSAL CELL (USGRC)",
  members,
}: CommitteeTableProps) {
  return (
    <div className="w-full container mx-auto p-6">
      {/* Title Section */}
      <div className="mb-6">
        <h1 className="text-4xl md:text-5xl font-bold text-[#4CD137] tracking-wide">{title}</h1>
        <h2 className="text-lg md:text-xl font-bold text-foreground mt-1">{subtitle}</h2>
      </div>

      {/* Table */}
      <div className="w-full overflow-x-auto">
        <table className="w-full border-collapse">
          {/* Header */}
          <thead>
            <tr className="bg-[#4A5FCF]">
              <th className="py-4 px-6 text-left text-white font-semibold w-24 rounded-tl-md">SI No.</th>
              <th className="py-4 px-6 text-left text-white font-semibold w-1/4">Name</th>
              <th className="py-4 px-6 text-left text-white font-semibold">Name</th>
              <th className="py-4 px-6 text-left text-white font-semibold w-44 rounded-tr-md">Status</th>
            </tr>
          </thead>

          {/* Body */}
          <tbody>
            {members.map((member, index) => (
              <tr key={index} className="border-b border-gray-200 hover:bg-gray-50 transition-colors">
                <td className="py-6 px-6 text-foreground font-semibold">{member.slNo}.</td>
                <td className="py-6 px-6 text-foreground">{member.name}</td>
                <td className="py-6 px-6 text-foreground">{member.designation}</td>
                <td className="py-6 px-6 text-foreground">{member.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
