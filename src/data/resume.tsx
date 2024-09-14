import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Akhmad Fauzi",
  initials: "AF",
  url: "https://codegiggles.vercel.app/",
  location: "Bekasi, Jawabarat",
  locationLink: "#",
  description:
    "Software Engineer turned Entrepreneur. I love building things and helping people. Very active on Twitter.",
  summary:
    "Although I have an educational background in automotive studies from vocational school, I successfully developed a strong interest and skills in technology, particularly in Android development and backend service systems. With the ability to learn quickly and apply technical skills across various fields, I am now focused on creating innovative technology solutions.",
  avatarUrl: "/me.png",
  skills: [
    "Kotlin",
    "Next.js",
    "Typescript",
    "Node.js",
    "Mongodb",
    "Express.js",
    "Mysql"
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "akhmadfauzi0101@gmail.com",
    tel: "+6282112966360",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/A-fauzi",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/afauzi97?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/feelemptyz?t=2hQva7Bxohxd7lgL8jjM-Q&s=09",
        icon: Icons.x,

        navbar: true,
      },
      Youtube: {
        name: "Youtube",
        url: "https://youtube.com/@codegigles?si=hjasHtt4sweEiHb-",
        icon: Icons.youtube,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
  {
    company: "",
    href: "",
    badges: [],
    location: "",
    title: "",
    logoUrl: "",
    start: "",
    end: "",
    description: "",
  },
],
education: [
  {
    school: "",
    href: "",
    degree: "",
    logoUrl: "",
    start: "",
    end: "",
  },
],
projects: [
  {
    title: "",
    href: "",
    dates: "",
    active: false,
    description: "",
    technologies: [],
    links: [
      {
        type: "",
        href: "",
        icon: null,
      },
    ],
    image: "",
    video: "",
  },
],
hackathons: [
  {
    title: "",
    dates: "",
    location: "",
    description: "",
    image: "",
    mlh: "",
    links: [],
  },
],
} as const;
