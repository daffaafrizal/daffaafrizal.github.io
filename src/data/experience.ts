// Newest first. `photo` is optional; `photoPosition` adjusts the crop (CSS object-position).
export const experience = [
  {
    role: "Academic Assistant",
    company: "State Polytechnic of Malang",
    logo: { src: "/assets/polinema.png", alt: "State Polytechnic of Malang", width: 160, height: 160 },
    type: "Part-time",
    period: "Aug 2024 – Present",
    location: "Malang, East Java · On-site",
    description:
      "Actively involved in supporting a range of faculty-led research and community service projects, particularly in the areas of renewable energy, biogas technology, the Internet of Things (IoT), and Artificial Intelligence.",
    tags: ["Research and Development (R&D)", "Academic Administration"],
  },
  {
    role: "Electrical and Mechanical Engineer",
    company: "PT. Enha Bena Nusantara",
    logo: { src: "/assets/enha.png", alt: "Enha", width: 350, height: 80 },
    type: "Apprenticeship",
    period: "Jan 2026 – Feb 2026",
    location: "Batu, East Java · On-site",
    description:
      "Designed PCB layouts in Autodesk Eagle for electrical systems and created a catalog of mechanical and electrical equipment designs, including machines, frames, racks, and electrical panels. Assembled and installed industrial machinery such as conveyors, and operated a laser welding machine and a Baison steel laser cutting machine. Assembled and programmed IoT devices for automation and monitoring, assisted with wiring single-phase and three-phase electrical panels, and prepared technical drawings and assembly procedures as production references.",
    tags: ["Autodesk Eagle", "PCB Design", "Electrical Panels", "Industrial Machinery", "Laser Welding", "Laser Cutting", "IoT", "Technical Drawing"],
    photo: {
      src: "/assets/experience-enha.jpg",
      alt: "Daffa operating a handheld laser welder on a fixture table in the workshop at PT. Enha Bena Nusantara",
      width: 722,
      height: 1280,
    },
  },
  {
    role: "Network Operations Center",
    company: "PT. Urban Teknologi Nusantara",
    logo: { src: "/assets/infly-networks.png", alt: "Infly Networks", width: 480, height: 218 },
    type: "Internship",
    period: "Jul 2024 – Nov 2024",
    location: "Probolinggo, East Java · On-site",
    description:
      "Monitored FTTH network quality and performance for approximately 2,800 customers using Winbox, identifying outages and connectivity issues from monitoring data. Reported outages to field technicians and took part in troubleshooting and service restoration. Registered Optical Network Terminal serial numbers for new customers, and recorded network incidents, maintenance activities, and daily operational reports.",
    tags: ["OLT", "MikroTik", "Winbox", "FTTH", "ONT Registration", "Troubleshooting"],
    photo: {
      src: "/assets/experience-noc.jpg",
      alt: "Daffa standing next to the OLT and network equipment rack at PT. Urban Teknologi Nusantara",
      width: 449,
      height: 800,
      position: "center 80%",
    },
  },
];
