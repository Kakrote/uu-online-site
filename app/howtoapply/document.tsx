import { Circle } from "lucide-react"

interface DocumentItem {
  id: string | number
  text: string
}

interface DocumentsRequiredProps {
  title?: string
  subtitle?: string
  documents: DocumentItem[]
  note?: {
    prefix?: string
    message: string
  }
}

export function DocumentsRequired({
  title = "DOCUMENTS REQUIRED",
  subtitle = "TO COMPLETE YOUR ADMISSION",
  documents,
  note,
}: DocumentsRequiredProps) {
  return (
    <div className="w-full container mx-auto p-6 md:p-8">
      {/* Title */}
      <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold  text-[#6bc533] tracking-wide">{title}</h1>

      {/* Subtitle */}
      <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-foreground mt-1 text-gray-800 tracking-wide">{subtitle}</h2>

      {/* Documents List */}
      <ul className="mt-8 space-y-5">
        {documents.map((doc) => (
          <li key={doc.id} className="flex items-start gap-4">
            {/* Target/Bullseye Icon */}
            <div className="flex-shrink-0 mt-0.5">
              <div className="relative w-6 h-6 flex items-center justify-center">
                <Circle className="w-6 h-6 text-[#6bc533] stroke-[1.5]" />
                <Circle className="w-3 h-3 text-[#6bc533] stroke-[1.5] absolute" fill="currentColor" />
              </div>
            </div>
            <span className="text-foreground text-base md:text-lg leading-relaxed">{doc.text}</span>
          </li>
        ))}
      </ul>

      {/* Note Section */}
      {note && (
        <div className="mt-8  bg-gray-100 w-fit rounded-lg py-4 px-5">
          <p className="text-base md:text-lg">
            {note.prefix && <span className="text-foreground font-bold">{note.prefix} </span>}
            <span className="text-[#EE495C] font-bold uppercase tracking-wide">{note.message}</span>
          </p>
        </div>
      )}
    </div>
  )
}
