import { Navbar } from "@/Components/Navbar";
import { Globe } from "@/Components/ui/globe";
import Image from "next/image";

export default function Home() {
  const menuItems = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    {
      label: "Projects",
      subItems: [
        { label: "React", href: "/projects/react" },
        { label: "Next.js", href: "/projects/nextjs" },
      ],
    },
    { label: "Blog", href: "/blog" },
  ];

  const buttons = [
    {
      label: "Resume",
      href: "/resume.pdf",
      className: "bg-primary text-white",
    },
  ];

  return (
    <Navbar
      logo={<span className="text-2xl font-bold text-primary">RK</span>}
      items={menuItems}
      buttons={buttons}
      className="shadow-lg"
      mobileClassName="bg-white"
    />
  );
}
