"use client"
import React from "react"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"

const schema = z.object({
  name: z.string().min(2, "Please enter your full name"),
  email: z.string().email("Enter a valid email"),
  countryCode: z.string().min(1, "Code required"),
  phone: z
    .string()
    .min(7, "Phone seems too short")
    .max(15, "Phone seems too long")
    .regex(/^[0-9]+$/, "Digits only"),
  state: z.string().min(1, "Select a state"),
  level: z.string().min(1, "Select level"),
  discipline: z.string().min(1, "Select discipline"),
  program: z.string().min(1, "Select program"),
})

export type EnquiryFormValues = z.infer<typeof schema>

type Option = { id?: string; name: string; code?: string }

export default function EnquiryForm({ onSuccess }: { onSuccess?: () => void }) {
  const [loading, setLoading] = React.useState(false)
  const [options, setOptions] = React.useState<{
    countryCodes: Array<{ code: string; name: string }>
    states: string[]
    levels: Array<{ id: string; name: string }>
    disciplines: Array<{ id: string; name: string }>
    programsByDisciplineLevel: Record<string, Record<string, Array<{ id: string; name: string }>>>
  } | null>(null)

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<EnquiryFormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      countryCode: "+91",
    },
  })

  const watchLevel = watch("level")
  const watchDiscipline = watch("discipline")

  React.useEffect(() => {
    let cancelled = false
    ;(async () => {
      try {
        const res = await fetch("/api/enquiry/options", { cache: "no-store" })
        const json = await res.json()
        if (!cancelled) setOptions(json)
      } catch (e) {
        console.error("Failed to load enquiry options", e)
      }
    })()
    return () => {
      cancelled = true
    }
  }, [])

  const programs: Option[] = React.useMemo(() => {
    if (!options || !watchDiscipline || !watchLevel) return []
    return options.programsByDisciplineLevel?.[watchDiscipline]?.[watchLevel] ?? []
  }, [options, watchDiscipline, watchLevel])

  const onSubmit = async (data: EnquiryFormValues) => {
    setLoading(true)
    try {
      const res = await fetch("/api/enquiry/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })
      const json = await res.json()
      if (json.ok) {
        reset({ name: "", email: "", countryCode: "+91", phone: "", state: "", level: "", discipline: "", program: "" })
        onSuccess?.()
      } else {
        console.error("Submit failed", json)
      }
    } catch (e) {
      console.error("Submit error", e)
    } finally {
      setLoading(false)
    }
  }

  if (!options) {
    return (
      <div className="p-6 text-sm text-gray-600">Loading options…</div>
    )
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 text-black">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium">Full name</label>
          <input
            type="text"
            className="mt-1 w-full rounded-md border px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#6bc533]"
            placeholder="Your name"
            {...register("name")}
          />
          {errors.name && <p className="mt-1 text-xs text-red-600">{errors.name.message}</p>}
        </div>
        <div>
          <label className="block text-sm font-medium">Email</label>
          <input
            type="email"
            className="mt-1 w-full rounded-md border px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#6bc533]"
            placeholder="you@example.com"
            {...register("email")}
          />
          {errors.email && <p className="mt-1 text-xs text-red-600">{errors.email.message}</p>}
        </div>
      </div>

      <div className="grid grid-cols-3 gap-2 sm:gap-4 items-end">
        <div>
          <label className="block text-sm font-medium">Code</label>
          <select
            className="mt-1 w-full rounded-md border px-2 py-2 text-sm focus:outline-none focus:ring-2 text-black focus:ring-[#6bc533]"
            {...register("countryCode")}
          >
            {options.countryCodes.map((c) => (
              <option key={c.code} value={c.code}>
                {c.name} ({c.code})
              </option>
            ))}
          </select>
          {errors.countryCode && <p className="mt-1 text-xs text-red-600">{errors.countryCode.message}</p>}
        </div>
        <div className="col-span-2">
          <label className="block text-sm font-medium">Phone</label>
          <input
            type="tel"
            className="mt-1 w-full rounded-md border px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#6bc533]"
            placeholder="9876543210"
            {...register("phone")}
          />
          {errors.phone && <p className="mt-1 text-xs text-red-600">{errors.phone.message}</p>}
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium">State</label>
        <select
          className="mt-1 w-full rounded-md text-black border px-2 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#6bc533]"
          {...register("state")}
        >
          <option value="">Select your state</option>
          {options.states.map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </select>
        {errors.state && <p className="mt-1 text-xs text-red-600">{errors.state.message}</p>}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-1 gap-4">
        <div>
          <label className="block text-sm font-medium">Level</label>
          <select
            className="mt-1 w-full rounded-md border px-2 py-2 text-black text-sm focus:outline-none focus:ring-2 focus:ring-[#6bc533]"
            {...register("level")}
          >
            <option value="">Select level</option>
            {options.levels.map((l) => (
              <option key={l.id} value={l.id}>
                {l.name}
              </option>
            ))}
          </select>
          {errors.level && <p className="mt-1 text-xs text-red-600">{errors.level.message}</p>}
        </div>
        <div>
          <label className="block text-sm font-medium">Discipline</label>
          <select
            className="mt-1 w-full rounded-md border px-2 py-2 text-black text-sm focus:outline-none focus:ring-2 focus:ring-[#6bc533]"
            {...register("discipline")}
          >
            <option value="">Select discipline</option>
            {options.disciplines.map((d) => (
              <option key={d.id} value={d.id}>
                {d.name}
              </option>
            ))}
          </select>
          {errors.discipline && <p className="mt-1 text-xs text-red-600">{errors.discipline.message}</p>}
        </div>
        <div>
          <label className="block text-sm font-medium">Program</label>
          <select
            disabled={!watchLevel || !watchDiscipline}
            className="mt-1 w-full rounded-md border text-black px-2 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#6bc533] disabled:opacity-60"
            {...register("program")}
          >
            <option value="">{!watchLevel || !watchDiscipline ? "Select level & discipline first" : "Select program"}</option>
            {programs.map((p) => (
              <option key={p.id} value={p.id}>
                {p.name}
              </option>
            ))}
          </select>
          {errors.program && <p className="mt-1 text-xs text-red-600">{errors.program.message}</p>}
        </div>
      </div>

      <button
        type="submit"
        className="w-full rounded-md bg-[#6bc533] text-white py-2.5 text-sm font-semibold hover:bg-[#5ab22c] transition-colors disabled:opacity-70"
        disabled={isSubmitting || loading}
      >
        {isSubmitting || loading ? "Submitting…" : "Submit Enquiry"}
      </button>
    </form>
  )
}
