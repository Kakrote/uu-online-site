export function OurScope() {
  return (
    <section className="py-12 px-6 container mx-auto">
      {/* Green italic heading */}
      <h2 className="text-4xl md:text-6xl font-bold  text-[#6bc533] mb-2">OUR SCOPE</h2>

      {/* Bold black subheading */}
      <h3 className="text-xl md:text-2xl font-bold text-foreground mb-4">
        UNIVERSITY STUDENT GRIEVANCE REDRESSAL CELL (SGRC)
      </h3>

      {/* Description paragraph */}
      <p className="text-muted-foreground leading-relaxed mb-6">
        Uttaranchal University took advantage of ICT enhancements and came up with the "Online Grievance Registering and
        Monitoring System". It is a digital platform for Students to identify and apply for grievances/queries. This
        platform ensures a time-bound mechanism for redressal of the grievance(s).
      </p>

      {/* Highlighted quote box with green left border */}
      <div className="bg-[#f5f5f5] border-l-4 border-[#4CAF50] rounded-r-lg py-4 px-6">
        <p className="text-foreground">
          The SGRC will address the complaint(s) made by an aggrieved student(s) which were not resolved at
          Department/College level.
        </p>
      </div>
    </section>
  )
}
