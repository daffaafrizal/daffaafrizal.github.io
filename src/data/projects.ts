// Newest first. `photoLayout`: "wide" (4:3, default) or "duo" (two tall images side by side).
export const projects = [
  {
    title:
      "Green Energy Self-Sufficiency Innovations at the Gadingkulon 3R Solid Waste Management Facility as a Model for Energy and Environmental Self-Reliance",
    kind: "Community Service",
    period: "Mar 2026 – Oct 2026",
    org: "State Polytechnic of Malang",
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
    title: "IoT-Based Air Quality Monitoring System Integrated with Solar Panels for Energy Efficiency",
    kind: "Final Project (D3)",
    period: "2024 – 2025",
    org: "State Polytechnic of Malang",
    band: "IoT · Solar Power",
    summary:
      "An air quality monitoring station built around an ESP32 that measures pollutant levels and reports them as the Indonesian Air Pollutant Standard Index (ISPU), powered by a solar panel and battery so it can run on its own energy.",
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
];
