import { title } from "process";
import Card from "./Cards";
import { url } from "inspector";

const affililation_Data = [
    {
        image: "/images/icons/ugc.png",
        title: "UGC Entitled",
        desc: "as per University Grants Commission (Open and Distance Learning Progeammes and Online Progeammes) Regulations, 2020 and its amendments.",
        link: [
            {
                title: "July 2024 Session Onwards",
                url: "#"
            },
            {
                title: "January 2024 Session",
                url: "#"
            },
            {
                title:"July 2023 Session Onwards",
                url:"#"
            },
            {
                title:"January 2023 Session",
                url:"#"
            },

        ],
        showButton: false
    },
    {
        image: "/images/icons/naac.png",
        title: "NAAC ‘A+’ Accredited University",
        desc: "Uttaranchal University has become the first university in the State of Uttarakhand to receive NAAC A+ Grade in the first cycle of Accreditation and thus created a history.",
        link: [
           

        ],
        showButton: true
    },
    {
        image: "/images/icons/aicte.png",
        title: "All India Council for Technical Education",
        desc: "Accredited with the prestigious A+ Grade by the National Assessment and Accreditation Council (NAAC). Uttaranchal University has become the ",
        link: [
           

        ],
        showButton: true
    },
    {
        image: "/images/icons/ugc.png",
        title: "UGC Entitled",
        desc: "as per University Grants Commission (Open and Distance Learning Progeammes and Online Progeammes) Regulations, 2020 and its amendments.",
        link: [
            {
                title: "July 2024 Session Onwards",
                url: "#"
            },
            {
                title: "January 2024 Session",
                url: "#"
            },
            {
                title:"July 2023 Session Onwards",
                url:"#"
            },
            {
                title:"January 2023 Session",
                url:"#"
            },

        ],
        showButton: false
    },
]

const Ranking_Affliation = () => {
    return (
        <main className="container mx-auto px-3 py-3 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {affililation_Data.map((item, index) => (
                <Card key={index} {...item} />   // passing all props at once
            ))}
        </main>
    );
};

export default Ranking_Affliation;
