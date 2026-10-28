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
    title:
      "Smart Fermentation Control System (SFCS-IoT): IoT-Based Air Quality and Humidity Control for Soy Sauce Fermentation Rooms",
    kind: "Freelance Project",
    period: "May 2025",
    org: "Client case study: small-scale (UMKM) soy sauce industry",
    band: "IoT · Automation",
    summary:
      "A prototype IoT monitoring and automatic control system that keeps soy sauce fermentation rooms within safe environmental limits, reading conditions in real time and exposing a remote dashboard.",
    points: [
      "Reads temperature, humidity (DHT22), and CO₂ level (MQ-135) every 2 seconds",
      "Automatically runs the humidifier below 60% humidity and the exhaust fan above 500 ppm CO₂",
      "Local 16x2 I2C LCD display plus a Blynk dashboard with live gauges and actuator status, powered by a portable 18650 battery",
    ],
    photoLayout: "wide",
    photos: [
      {
        src: "/assets/project-sfcs-wiring.png",
        alt: "Fritzing wiring diagram of the SFCS-IoT prototype: NodeMCU ESP8266, DHT22, MQ-135, 2-channel relay, LCD I2C, 18650 battery, fan, and humidifier",
        width: 826,
        height: 384,
      },
      {
        src: "/assets/project-sfcs-dashboard.png",
        alt: "Blynk dashboard showing live temperature, humidity, and CO2 gauges with humidifier and exhaust fan toggle controls",
        width: 826,
        height: 356,
      },
    ],
  },
  {
    title: "Smart Farming System (SFS-IoT): Automatic Soil Moisture and Grow-Light Control",
    kind: "Freelance Project",
    period: "May 2025",
    org: "Client case study: indoor farming / nursery growing media",
    band: "IoT · Automation",
    summary:
      "A prototype IoT system that automates watering and grow lighting for planting media, reading soil moisture and light intensity in real time and driving a water pump and grow LEDs to match plant needs, with remote monitoring via a Blynk dashboard.",
    points: [
      "Reads soil status (Normal/Dry) from a soil moisture sensor and light level (0–600 lux) from an LDR every 2 seconds",
      "Runs a 5V DC water pump automatically when the soil is dry, and a 5V grow LED strip when light drops below 300 lux",
      "Local 16x2 I2C LCD display plus a Blynk dashboard with live gauges and pump/LED status, all packed into a compact, portable enclosure",
    ],
    photoLayout: "trio",
    photos: [
      {
        src: "/assets/project-sfs-overview.jpg",
        alt: "Open view of the Smart Farming System enclosure showing the NodeMCU, relay module, soil moisture sensor, and LDR wiring",
        width: 1050,
        height: 1400,
      },
      {
        src: "/assets/project-sfs-wiring.png",
        alt: "Fritzing wiring diagram of the SFS-IoT prototype: NodeMCU ESP8266, LCD I2C, 2-channel relay, soil moisture sensor, LDR, pump, and LED strip",
        width: 588,
        height: 487,
      },
      {
        src: "/assets/project-sfs-dashboard.png",
        alt: "Blynk dashboard showing soil status, a lux gauge, and pump/grow LED toggle controls",
        width: 916,
        height: 427,
      },
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
