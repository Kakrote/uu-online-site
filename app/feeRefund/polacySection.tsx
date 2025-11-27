import { Target } from "lucide-react"

interface PolicyItem {
  id: number
  text: string
  highlight?: {
    text: string
    href?: string
  }
}

interface PolicySectionProps {
  title: string
  policies: PolicyItem[]
}

export function PolicySection({ title, policies }: PolicySectionProps) {
  return (
    <div className="w-full bg-card rounded-lg  shadow-xl overflow-hidden">
      {/* Header with ribbon effect */}
      <div className="relative">
        <div className="inline-block">
          <div className="relative">
            <div className="bg-[#6bc533] text-white font-bold text-lg mt-5 px-6 py-3 pr-12 uppercase tracking-wide">
              {title}
            </div>
            {/* Ribbon tail */}
            <div
              className="absolute right-0 top-0 h-full w-8"
              style={{
                background: "linear-gradient(to right bottom, #7CB342 50%, transparent 50%)",
              }}
            />
          </div>
        </div>
      </div>

      {/* Policy items */}
      <div className="p-6 space-y-5">
        {policies.map((policy) => (
          <div key={policy.id} className="flex items-start gap-4">
            {/* Target icon */}
            <div className="flex-shrink-0 w-7 h-7 rounded-full border-2 border-[#7CB342] flex items-center justify-center">
              <Target className="w-4 h-4 text-[#7CB342]" strokeWidth={2.5} />
            </div>

            {/* Policy text */}
            <p className="text-foreground text-base leading-relaxed pt-0.5">
              {policy.highlight ? (
                <>
                  {policy.text.split(policy.highlight.text)[0]}
                  {policy.highlight.href ? (
                    <a
                      href={policy.highlight.href}
                      className="text-[#7CB342] underline hover:text-[#689F38] transition-colors"
                    >
                      {policy.highlight.text}
                    </a>
                  ) : (
                    <span className="text-[#7CB342]">{policy.highlight.text}</span>
                  )}
                  {policy.text.split(policy.highlight.text)[1]}
                </>
              ) : (
                policy.text
              )}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}
