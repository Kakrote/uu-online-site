import { CommitteeTable } from "@/components/ui/committe-tabel"

const committeeMembers = [
  {
    slNo: 1,
    name: "Dr. Kartikey Gaur",
    designation: "Director, Uttaranchal College of Online & Distance Education",
    status: "Chairperson",
  },
  {
    slNo: 2,
    name: "Mr. Farman Ali",
    designation: "Associate Professor, Uttaranchal College of Online & Distance Education",
    status: "Member Secretary",
  },
  {
    slNo: 3,
    name: "Dr. Monisha Awasthi",
    designation: "Associate Professor, Uttaranchal College of Online & Distance Education",
    status: "Member",
  },
  {
    slNo: 4,
    name: "Dr. Vijaylakshmi Sajwan",
    designation: "Assistant Professor, Uttaranchal College of Online & Distance Education",
    status: "Member",
  },
  {
    slNo: 5,
    name: "Dr. Shailesh Chamola",
    designation: "Assistant Professor, Uttaranchal College of Online & Distance Education",
    status: "Member",
  },
  {
    slNo: 6,
    name: "Mr. Himanshu Dhall",
    designation: "Student-MBA, Learner ID: 2225010196",
    status: "Special Invitee",
  },
  {
    slNo: 7,
    name: "Mr. Kamal Kishore",
    designation: "Student-MBA, Learner ID: 2225010197",
    status: "Special Invitee",
  },
  {
    slNo: 15,
    name: "Ms. Tanya Kukreti",
    designation: "Student-MBA, Learner ID: 2225010254",
    status: "Special Invitee",
  },
]

export default function Commite() {
  return (
    <main className="min-h-screen bg-background py-10">
      <CommitteeTable members={committeeMembers} />
    </main>
  )
}
