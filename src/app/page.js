import Image from "next/image";
import Header from "../components/Header";
import ProposalDetails from "../components/ProposalDetails";
import Milestones from "../components/Milestones";
import Team from "../components/Team";
import ContactForm from "../components/ContactForm";

export default function Home() {
  return (
     <>
     <ProposalDetails />
     <Milestones />
     <Team />
     <ContactForm />
     </>
  );
}
