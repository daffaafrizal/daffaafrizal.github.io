// Newest first. `photoLayout`: "wide" (4:3, default), "duo" (two tall images side by side), or "trio" (one big image + two stacked beside it).
export const projects = [
  {
    title: "Secure Smart Parking System: IoT-Based License Plate Recognition with AES Data Encryption",
    kind: "Final Project – Image Processing",
    period: "Feb 2026 – Jun 2026",
    org: "State Polytechnic of Malang",
    band: "IoT · OCR",
    summary:
      "A prototype smart parking system that automatically identifies vehicles by their license plates, logs entry and exit in real time, and secures vehicle data during transmission.",
    points: [
      "Detects the plate area and reads the characters with OCR in real time",
      "Encrypts vehicle data with AES before sending it to the Firebase Realtime Database",
      "Web dashboard showing system status, vehicle counts, and the entry/exit activity log",
    ],
    photoLayout: "trio",
    photos: [
      {
        src: "/assets/project-smartparking.jpg",
        alt: "Miniature two-lane smart parking prototype with toy vehicles, QR-coded plates, and servo-driven entry/exit barriers",
        width: 563,
        height: 563,
      },
      {
        src: "/assets/project-smartparking-plate.png",
        alt: "License plate reading N 5173 VC with a green OCR detection outline",
        width: 167,
        height: 126,
      },
      {
        src: "/assets/project-smartparking-dashboard.png",
        alt: "Real-time parking monitoring dashboard showing vehicle counts and an entry/exit activity log",
        width: 1185,
        height: 547,
      },
    ],
  },
  {
    title:
      "Green Energy Self-Sufficiency Innovations at the Gadingkulon 3R Solid Waste Management Facility as a Model for Energy and Environmental Self-Reliance",
    kind: "Community Service",
    period: "Mar 2026 – Oct 2026",
    org: "Funded by State Polytechnic of Malang",
    band: "Biogas · Renewable Energy",
    summary:
      "A community service initiative to develop a green energy-based waste management model through the implementation of biodigester technology at the Gadingkulon 3R Waste Treatment Facility.",
    points: [
      "Utilizing organic waste as feedstock for biogas and organic fertilizer",
      "Optimizing the 3R principles (Reduce, Reuse, Recycle)",
      "Building community capacity in community-based renewable energy management",
    ],
    photoLayout: "wide",
    photos: [
      {
        src: "/assets/project-gadingkulon.jpg",
        alt: "Community service team in front of the green energy innovation banner at TPST 3R Gadingkulon",
        width: 1280,
        height: 960,
      },
    ],
  },
  {
    title: "Optimizing the Conversion of Energy from Biodegradable Waste",
    kind: "Community Service",
    period: "Aug 2025 – Nov 2025",
    org: "Funded by Hibah BIMA Pengabdian Masyarakat 2025",
    band: "Waste-to-Energy",
    summary:
      "A community service program focused on optimizing biodegradable waste management at TPST 3R Mulyoagung through technology implementation, community training, and stakeholder collaboration.",
    points: [
      "Converting organic waste into value-added products, including compost and biogas",
      "Promoting sustainable waste management practices",
      "Strengthening community capacity and environmental awareness",
    ],
    photoLayout: "wide",
    photos: [
      { src: "/assets/project-mulyoagung.jpg", alt: "Students measuring the site at TPST 3R Mulyoagung", width: 1280, height: 960 },
    ],
  },
  {
    title: "IoT-Based Air Quality Monitoring System Integrated with Solar Panel for Energy Efficiency",
    kind: "Final Project (D3)",
    period: "Jan 2024 – Jun 2024",
    org: "State Polytechnic of Malang",
    band: "IoT · Solar Power",
    summary:
      "Final project (Diploma III, Telecommunication Engineering) developing a solar-powered IoT air quality monitoring system that can run autonomously in locations without conventional power supply.",
    points: [
      "Monitors PM10, PM2.5, CO, O₃, and HC, plus temperature and humidity",
      "Custom ESP32 PCB with sensor connectors, powered by a solar charge controller, battery, and DC-DC converter",
      "Mobile app showing the ISPU score, critical parameter, and per-pollutant category chart",
    ],
    photoLayout: "duo",
    photos: [
      {
        src: "/assets/project-airquality-hardware.jpg",
        alt: "Control panel with solar charge controller, ESP32 board, DC-DC converter, and battery",
        width: 720,
        height: 1279,
      },
      {
        src: "/assets/project-airquality-app.jpg",
        alt: "Mobile app screen showing an ISPU score of 90 and a pollutant index chart",
        width: 375,
        height: 812,
      },
    ],
  },
  {
    title: "IP CCTV & Access Point Installation – Community Service at Bukit Cemara Tujuh Housing, Malang",
    kind: "Community Service",
    period: "Jun 2024 – Jun 2024",
    org: "Funded by State Polytechnic of Malang",
    band: "CCTV · Networking",
    summary:
      "Participated in a community service program at Bukit Cemara Tujuh Housing, Mulyoagung, Dau, Malang Regency, to improve neighborhood security by deploying an IP CCTV network.",
    points: [
      "Installed an outdoor PTZ IP camera and access point for live coverage of the street",
      "Set up outdoor wireless links to extend network coverage to the camera",
      "Configured remote live viewing through a mobile app",
    ],
    photoLayout: "wide",
    photos: [
      {
        src: "/assets/project-cctv.png",
        alt: "Outdoor PTZ IP camera mounted on a pole, with a phone showing the live street-view feed",
        width: 480,
        height: 640,
      },
    ],
  },
];
