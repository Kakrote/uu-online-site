import { CircleDot } from "lucide-react"

interface ImportantInstructionsProps {
  title?: string
  instructions: string[]
}

export function ImportantInstructions({ title = "IMPORTANT INSTRUCTIONS", instructions }: ImportantInstructionsProps) {
  return (
    <div className="container mx-auto ">
      {/* Container with rounded top corners */}
      <div className="shadow-[0px_0px_10px_0px] shadow-black/10 rounded-[40px] pt-4 pb-6 px-8">
        {/* Ribbon Banner */}
        <div className="relative inline-flex mb-6">
          <div className="bg-[#e94b5a] text-white font-bold text-lg tracking-wide px-8 py-3 uppercase">{title}</div>
          {/* Ribbon fold effect */}
        
          {/* Shadow under ribbon fold */}
          <div
            className="absolute -bottom-2 right-0 w-5 h-2 bg-[#b83a47]"
            style={{ clipPath: "polygon(0 0, 100% 100%, 100% 0)" }}
          />
        </div>

        {/* Instructions List */}
        <ul className="space-y-4">
          {instructions.map((instruction, index) => (
            <li key={index} className="flex items-start gap-3">
              <div className="flex-shrink-0 mt-0.5">
                <CircleDot className="w-5 h-5 text-[#7cb342]" strokeWidth={2.5} />
              </div>
              <p className="text-gray-700 text-[15px] leading-relaxed">{instruction}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
