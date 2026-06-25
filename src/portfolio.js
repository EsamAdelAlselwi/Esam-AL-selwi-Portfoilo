/* =========================================================
   Esam Al-Selwi — Personal Portfolio Configuration
   Data Analyst · AI Practitioner · Software Developer
   ========================================================= */

// Website related settings
const settings = {
  isSplash: false,
};

// SEO Related settings
const seo = {
  title: "Esam Al-Selwi Portfolio",
  description:
    "Data Analyst and AI Practitioner specializing in predictive modeling, business intelligence, and AI-augmented data solutions. Proficient in Python, SQL, Power BI, and machine learning with proven project experience across finance, retail, and energy sectors.",
  og: {
    title: "Esam Al-Selwi | Portfolio",
    type: "website",
    url: "https://github.com/EsamAdelAlselwi",
  },
};

// ─── Hero / Greeting ─────────────────────────────────────
const greeting = {
  title: "Esam Al-Selwi",
  logo_name: "EsamAlSelwi",
  nickname: "Data Analyst & AI Practitioner",
  subTitle:
    "I build intelligent, data-driven solutions — from end-to-end predictive models and NLP pipelines to interactive business dashboards and full-stack applications. My work sits at the intersection of analytical rigor and AI-augmented engineering.",
  resumeLink:
    "https://drive.google.com/file/d/1Dhku5szlh4eQK0nIcHFDJJcb5sPdlqy_/view?usp=drivesdk",
  portfolio_repository: "https://github.com/EsamAdelAlselwi",
  githubProfile: "https://github.com/EsamAdelAlselwi",
};

// ─── Social Media Links ───────────────────────────────────
const socialMediaLinks = [
  {
    name: "Github",
    link: "https://github.com/EsamAdelAlselwi",
    fontAwesomeIcon: "fa-github",
    backgroundColor: "#181717",
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/esam-al-selwi-866077374",
    fontAwesomeIcon: "fa-linkedin-in",
    backgroundColor: "#0077B5",
  },
  {
    name: "YouTube",
    link: "https://youtube.com/@curiosityactually",
    fontAwesomeIcon: "fa-youtube",
    backgroundColor: "#FF0000",
  },
  {
    name: "Gmail",
    link: "mailto:esam.alselwi.tech@gmail.com",
    fontAwesomeIcon: "fa-google",
    backgroundColor: "#D14836",
  },
  {
    name: "X-Twitter",
    link: "https://x.com/Peek_Speak",
    fontAwesomeIcon: "fa-x-twitter",
    backgroundColor: "#000000",
  },
  {
    name: "Facebook",
    link: "https://www.facebook.com/share/1Cx17EkS4Q/",
    fontAwesomeIcon: "fa-facebook-f",
    backgroundColor: "#1877F2",
  },
];

const skills = {
  data: [
    {
      title: "Data Analysis & Visualization",
      fileName: "DataAnlImg",
     skills: [
        "⚡ Cleaning, transforming, and extracting insights from complex business datasets",
        "⚡ Designing interactive BI dashboards in Power BI and Tableau for C‑suite decision making",
        "⚡ Creating compelling visualizations with Matplotlib, Seaborn, Plotly, and Excel",
        "⚡ Working across finance, retail, aviation, and energy sectors to solve real business problems",
      ],
     softwareSkills: [
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: { backgroundColor: "transparent", color: "#3776AB" },
        },
        {
          skillName: "Pandas",
          fontAwesomeClassname: "simple-icons:pandas",
          style: { color: "#150458", backgroundColor: "white" },
        },
        {
          skillName: "NumPy",
          fontAwesomeClassname: "simple-icons:numpy",
          style: { color: "#013243", backgroundColor: "white" },
        },
        {
          skillName: "Power BI",
          fontAwesomeClassname: "simple-icons:powerbi",
          style: { color: "#F2C811" },
        },
        {
          skillName: "Tableau",
          fontAwesomeClassname: "simple-icons:tableau",
          style: { color: "#E97627" },
        },
        {
          skillName: "Plotly",
          fontAwesomeClassname: "simple-icons:plotly",
          style: { color: "#3F4F75", backgroundColor: "white" },
        },
       
        {
          skillName: "Excel",
          fontAwesomeClassname: "simple-icons:microsoftexcel",
          style: { color: "#217346" },
        },
      ],
    },
    {
      title: "Machine Learning & Predictive Modeling",
      fileName: "CloudInfraImg",
   skills: [
        "⚡ Building end‑to‑end ML pipelines: EDA → feature engineering → modeling → business insights",
        "⚡ Training ensemble models (Random Forest, Gradient Boosting) for classification and churn prediction",
        "⚡ Applying Natural Language Processing (NLP) to extract insights from customer reviews and textual data",
        "⚡ Performing statistical hypothesis testing and A/B testing using SciPy",
      ],
      softwareSkills: [
        {
          skillName: "Scikit-learn",
          fontAwesomeClassname: "simple-icons:scikitlearn",
          style: { color: "#F7931E" },
        },
        {
          skillName: "NLP",
          fontAwesomeClassname: "simple-icons:spacy",
          style: { color: "#09A3D5" },
        },
        {
          skillName: "Jupyter",
          fontAwesomeClassname: "simple-icons:jupyter",
          style: { backgroundColor: "transparent", color: "#F37626" },
        },
        {
          skillName: "SciPy",
          fontAwesomeClassname: "simple-icons:scipy",
          style: { color: "#8CAAE6" },
        },
      ],
    },
    {
      title: "AI Engineering & GenAI",
      fileName: "Ai",
      skills: [
        "⚡ Designing and deploying Agentic AI workflows and Subagents",
        "⚡ Applying prompt engineering, RAG pipelines, and MCP integrations using Anthropic Claude",
        "⚡ Leveraging AWS Cloud for MLOps, Bedrock, and production‑grade AI system deployments",
        "⚡ Building LLM‑powered applications with OpenAI and Claude APIs",
      ],
      softwareSkills: [
       {
          skillName: "Anthropic Claude",
          fontAwesomeClassname: "simple-icons:anthropic",
          style: { color: "#FF9900" },
        },
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: { color: "#FF9900" },
        },
        {
          skillName: "Azure",
          fontAwesomeClassname: "simple-icons:microsoftazure",
          style: { color: "#0089D6" },
        },
        {
          skillName: "OpenAI",
          fontAwesomeClassname: "simple-icons:openai",
          style: { color: "#412991" },
        },
      ],
    },
    {
      title: "Software & Web Development",
      fileName: "DesignImg",
       skills: [
        "⚡ Building full‑stack applications with PHP, MVC architecture, and user authentication",
        "⚡ Developing desktop management systems and graphical interfaces using JavaFX",
        "⚡ Creating responsive front‑end layouts with HTML5, CSS3, and modern JavaScript",
        "⚡ Programming in Java, C++, C#, and Python with OOP and design patterns",
      ],
      softwareSkills: [
        {
          skillName: "PHP",
          fontAwesomeClassname: "simple-icons:php",
          style: { color: "#777BB4" },
        },
        {
          skillName: "Java",
          fontAwesomeClassname: "devicon-plain:java",
          style: { color: "#ED8B00" },
        },
        {
          skillName: "C++",
          fontAwesomeClassname: "simple-icons:cplusplus",
          style: { color: "#00599C" },
        },
        {
          skillName: "C#",
          fontAwesomeClassname: "simple-icons:csharp",
          style: { color: "#512BD4" },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: { backgroundColor: "#000000", color: "#F7DF1E" },
        },
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: { color: "#E34F26" },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: { color: "#1572B6" },
        },
        {
          skillName: "Git",
          fontAwesomeClassname: "simple-icons:git",
          style: { color: "#F05032" },
        },
      ],
    },
    {
      title: "Database Administration & Security",
      fileName: "Database",
      skills: [
        "⚡ Designing, querying, and administering relational databases at a DBA level",
        "⚡ Writing complex SQL queries (JOINs, subqueries, window functions) and PL/SQL stored procedures",
        "⚡ Developing secure encryption applications implementing AES, 3DES, RSA, and modern cryptographic standards",
        "⚡ Managing database schemas, performance tuning, and user access control",
      ],
      softwareSkills: [
        {
          skillName: "MySQL",
          fontAwesomeClassname: "simple-icons:mysql",
          style: { color: "#4479A1" },
        },
        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "simple-icons:postgresql",
          style: { color: "#336791" },
        },
        {
          skillName: "Oracle DBA",
          fontAwesomeClassname: "simple-icons:oracle",
          style: { color: "#F80000" },
        },
        {
          skillName: "SQL Server",
          fontAwesomeClassname: "simple-icons:microsoftsqlserver",
          style: { color: "#CC2927" },
        },
      ],
    
    },
     {
      title: "Networking & Systems Infrastructure",
      fileName: "Net",
      skills: [
        "⚡ Understanding advanced networking concepts: protocols, routing, VLANs, and security",
        "⚡ Working with Linux and Windows operating systems for development and deployment",
        "⚡ Applying data security principles and cyber‑security best practices",
        "⚡ Managing version control with Git and GitHub for collaborative development",
      ],
      softwareSkills: [
         {
          skillName: "Cicso",
          fontAwesomeClassname: "simple-icons:cisco",
          style: { color: "#45d9fa" },
        },
        {
          skillName: "Linux",
          fontAwesomeClassname: "simple-icons:linux",
          style: { color: "#FCC624" },
        },
        {
          skillName: "Windows",
          fontAwesomeClassname: "simple-icons:windows",
          style: { color: "#0078D4" },
        },
         {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: { color: "#2496ED" },
        },
        {
          skillName: "Git",
          fontAwesomeClassname: "simple-icons:git",
          style: { color: "#F05032" },
        },
        {
          skillName: "GitHub",
          fontAwesomeClassname: "simple-icons:github",
          style: { color: "#181717" },
        },
      ],
    },

  ],
};

// ─── Education Page ───────────────────────────────────────
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "GitHub",
      iconifyClassname: "simple-icons:github",
      style: {
        color: "#181717",
      },
      profileLink: "https://github.com/EsamAdelAlselwi",
    },
    
    {
      siteName: "LinkedIn",
      iconifyClassname: "simple-icons:linkedin",
      style: {
        color: "#0077B5",
      },
      profileLink: "https://www.linkedin.com/in/esam-al-selwi-866077374",
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "National University — Yemen",
      subtitle: "B.Sc. in Information Technology (4th Year)",
      logo_path: "watania_university_logo.jpg",
      alt_name: "National University",
      duration: "2023 – Present (Expected 2027)",
      descriptions: [
        "⚡ Core curriculum: Artificial Intelligence, Machine Learning, Database Management, Computer Networks, Software Engineering, and Operating Systems.",
        "⚡ Advanced coursework includes: OOP with Java and C++, UML system design, Oracle DBA administration (PL/SQL, Tablespace, Audit), and Network Architecture (VLANs, Routing Protocols).",
        "⚡ Supplemented formal education with intensive external training in data analytics (AlexTheAnalyst Bootcamp), AI engineering (Anthropic Academy — 15 courses), and AWS AI Practitioner Challenge.",
        "⚡ Applied academic knowledge to 10+ independent GitHub projects spanning financial analytics, predictive modeling, NLP, and full-stack development.",
      ],
      website_link: "https://national-univ.net",
    },
  ],
};

// ─── Certifications ───────────────────────────────────────
const certifications = {
  certifications: [
    {
      title: "AWS AI & ML Challenge",
      subtitle: "AI Practitioner Foundations",
      logo_path: "aws_logo.png",
      certificate_link:
        "https://confirm.udacity.com/e/b2a8b2a2-35f9-11f1-ac9e-c310ac023065",
      alt_name: "AWS & Udacity",
      color_code: "#857272c7",
    },
    {
      title: "Claude API Development",
      subtitle: "Anthropic Academy",
      logo_path: "anthropic_logo.png",
      certificate_link:
       "http://verify.skilljar.com/c/omy7bv8cxjnx",
      alt_name: "Anthropic",
      color_code: "#CC9B0099",
    },
    {
      title: "Claude 101",
      subtitle: "Anthropic Academy",
      logo_path: "anthropic_logo.png",
      certificate_link:
        "http://verify.skilljar.com/c/bxqfd2rtjsgr",
      alt_name: "Anthropic",
      color_code: "#CC9B0099",
    },
    {
      title: "MCP Protocol (Advanced)",
      subtitle: "Anthropic Academy",
      logo_path: "anthropic_logo.png",
      certificate_link:
        "http://verify.skilljar.com/c/u29nyg5qggoj",
      alt_name: "Anthropic",
      color_code: "#1D3A4099",
    },
    {
      title: "Claude with Google Cloud's Vertex AI ",
      subtitle: "Anthropic Academy",
      logo_path: "anthropic_logo.png",
      certificate_link:
        "https://verify.skilljar.com/c/j7h9qk68z49j",
      alt_name: "Anthropic",
      color_code: "#2D2D2D99",
    },
    {
      title: "British Airways — Data Science",
      subtitle: "Forage Job Simulation",
      logo_path: "british_airways_logo.png",
      certificate_link:
        "https://www.theforage.com/completion-certificates/tMjbs76F526fF5v3G/NjynCWzGSaWXQCxSX_tMjbs76F526fF5v3G_69e3ef319bee8f600f96af54_1780854841471_co",
      alt_name: "British Airways",
      color_code: "#ffff",
    },
    {
      title: "BCG X — Data Science",
      subtitle: "Forage Job Simulation",
      logo_path: "bcg_logo.png",
      certificate_link:
        "https://www.theforage.com/completion-certificates/SKZxezskWgmFjRvj9/Tcz8gTtprzAS4xSoK_SKZxezskWgmFjRvj9_69e3ef319bee8f600f96af54_1780594939191_co",
      alt_name: "BCG X",
      color_code: "#ffff"

      
    },
    {
      title: "Quantium — Data Analytics",
      subtitle: "Forage Job Simulation",
      logo_path: "quantium_logo.jpg",
      certificate_link:
        "https://www.theforage.com/completion-certificates/32A6DqtsbF7LbKdcq/NkaC7knWtjSbi6aYv_32A6DqtsbF7LbKdcq_69e3ef319bee8f600f96af54_1778616408566_co",
      alt_name: "Quantium",
      color_code: "#ffff",
    },
    {
      title: "BCG X — Generative AI",
      subtitle: "Forage Job Simulation",
      logo_path: "bcg_logo.png",
      certificate_link:
        "https://www.theforage.com/completion-certificates/SKZxezskWgmFjRvj9/gabev3vXhuACr48eb_SKZxezskWgmFjRvj9_69e3ef319bee8f600f96af54_1779735733427_co",
      alt_name: "BCG X",
       color_code: "#fffdfdff"

    },
    {
      title: "Tata — Data Visualization",
      subtitle: "Forage Job Simulation",
      logo_path: "tata_logo.png",
      certificate_link:
       "https://www.theforage.com/completion-certificates/ifobHAoMjQs9s6bKS/MyXvBcppsW2FkNYCX_ifobHAoMjQs9s6bKS_69e3ef319bee8f600f96af54_1778952527842_co",
      alt_name: "Tata Group",
      color_code: "#ffff",
    },
    {
      title: "Deloitte — Data Analytics",
      subtitle: "Forage Job Simulation",
      logo_path: "deloitte_logo.jpg",
      certificate_link:
        "https://www.theforage.com/completion-certificates/9PBTqmSxAf6zZTseP/io9DzWKe3PTsiS6GG_9PBTqmSxAf6zZTseP_69e3ef319bee8f600f96af54_1778696682195_co",
      color_code: "#ffffffff",
    },
    {
      title: "Datacom — Automation AI",
      subtitle: "Forage Job Simulation",
      logo_path: "datacom_logo.png",
      certificate_link:
       "https://www.theforage.com/completion-certificates/gCW7Xki5Y3vNpBmnn/Nw3MzxF2wjmki7Qor_gCW7Xki5Y3vNpBmnn_69e3ef319bee8f600f96af54_1779823685185_co",
      alt_name: "Datacom",
      color_code: "#ffff",
    },
  ],
};

// ─── Experience Page ──────────────────────────────────────
const experience = {
  title: "Experience",
  subtitle: "Industry Training & Simulations",
  description:
    "I have completed nine professional job simulations on the Forage platform — each modeled after real analyst and data science workflows at top global firms including BCG X, British Airways, Deloitte, Quantium, and Tata. In parallel, I completed 15 AI engineering courses at Anthropic Academy and trained intensively through the AWS AI Practitioner Challenge. These programs have sharpened my ability to translate business problems into data solutions.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "AI Engineering Training",
      work: true,
      experiences: [
        {
          title: "AI Engineering Program — 15 Courses Completed",
          company: "Anthropic Academy",
          company_url: "https://www.anthropic.com/",
          logo_path: "anthropic_logo.png",
          duration: "2025 – 2026",
          location: "Remote",
          description:
            "Completed the full Anthropic AI curriculum: Claude API development, advanced prompt engineering, RAG pipeline design, MCP protocol (intro & advanced), agentic AI and subagent orchestration, AI workflow automation, and Claude integration with Google and AWS. Also completed AI fluency programs for educators and organizations.",
          color_code: "#CC9B00",
        },
        {
          title: "AWS AI & ML Scholarship Challenge",
          company: "AWS × Udacity",
          company_url: "https://www.udacity.com/",
          logo_path: "aws_logo.png",
          duration: "2025 - 2026",
          location: "Remote",
          description:
            "Completed the AWS AI Practitioner challenge covering MLOps lifecycle management, model fine-tuning, RAG implementation from an AWS-native perspective, and designing production-grade AI systems on cloud infrastructure using AWS SDK and Bedrock services.",
          color: "#FF9900",
        },
      ],
    },
    {
      title: "Forage Industry Simulations",
      experiences: [
        {
          title: "Data Scientist — Customer Analytics",
          company: "British Airways (via Forage)",
          company_url:
            "https://www.theforage.com/simulations/british-airways/data-science-yqoz",
          logo_path: "british_airways_logo.png",
          duration: "2026",
          location: "Remote Simulation",
          description:
            "Web-scraped and analyzed 1,000+ Skytrax customer reviews using BeautifulSoup. Performed sentiment analysis and built a Random Forest classifier to predict customer booking behavior. Delivered executive-ready slides with actionable business insights.",
          color: "#003C88",
        },
        {
          title: "Data Scientist — Churn Prediction",
          company: "BCG X (via Forage)",
          company_url:
            "https://www.theforage.com/simulations/bcg/data-science-ccb2",
          logo_path: "bcg_logo.png",
          duration: "2026",
          location: "Remote Simulation",
          description:
            "Analyzed 14,606 client records and 193,002 price entries for PowerCo's SME churn problem. Performed full EDA, feature engineering, and built a Random Forest churn classifier. Translated findings into strategic client retention recommendations for senior stakeholders.",
          color: "#006646",
        },
        {
          title: "Data Analyst — Retail Analytics",
          company: "Quantium (via Forage)",
          company_url:
            "https://www.theforage.com/simulations/quantium/data-analytics-rqkb",
          logo_path: "quantium_logo.jpg",
          duration: "2026",
          location: "Remote Simulation",
          description:
            "Served as a data analyst in Quantium's Analytics & Strategy team. Cleaned transactional data, ran uplift testing using SciPy to evaluate new store layouts, and produced commercial-ready reports for a category manager with clear go/no-go recommendations.",
          color: "#E52111",
        },
        {
          title: "GenAI Consultant — Financial Chatbot",
          company: "BCG X GenAI (via Forage)",
          company_url:
            "https://www.theforage.com/simulations/bcg/generative-ai-interim",
          logo_path: "bcg_logo.png",
          duration: "2026",
          location: "Remote Simulation",
          description:
            "Developed an AI-powered financial chatbot prototype for a BCG consulting engagement. Extracted and processed financial data from SEC 10-K and 10-Q filings, integrated it into an NLP-driven chatbot, and delivered interactive financial insights to analysts.",
          color: "#006646",
        },
        {
          title: "BI Analyst — Executive Dashboards",
          company: "Tata Group (via Forage)",
          company_url:
            "https://www.theforage.com/simulations/tata/data-visualization-e9gq",
          logo_path: "tata_logo.png",
          duration: "2026",
          location: "Remote Simulation",
          description:
            "Designed and delivered four executive-level Power BI dashboards for Tata's CEO and CMO: monthly revenue trends, top-10 market performance, customer revenue segmentation, and international demand analysis. Presented findings as a 5-minute executive narrative.",
          color: "#1A1A80",
        },
        {
          title: "Data Analyst — Gender Pay Equity",
          company: "Deloitte Australia (via Forage)",
          company_url:
            "https://www.theforage.com/simulations/deloitte/data-analytics-w6rw",
          logo_path: "deloitte_logo.jpg",
          duration: "2026",
          location: "Remote Simulation",
          description:
            "Supported a telecom client (SmartBridge) by cleaning gender equality datasets in Excel and building an interactive Tableau dashboard visualizing device health metrics by factory location and job function. Delivered a compliance-ready equality analysis.",
          color: "#86BC25",
        },
        {
          title: "AI Automation Strategist",
          company: "Datacom (via Forage)",
          company_url:
            "https://www.theforage.com/simulations/datacom/automation-zn3l",
          logo_path: "datacom_logo.png",
          duration: "2026",
          location: "Remote Simulation",
          description:
            "Progressed through three simulation tiers — AI Pilot, AI Architect, and Business Strategist. Designed an autonomous AI agent to fully automate a timesheet-to-invoice workflow for a staffing firm, applying spec-driven development and agentic AI design principles.",
          color: "#0055A4",
        },
        {
          title: "GenAI Data Analyst — Credit Risk",
          company: "Tata iQ Financial Services (via Forage)",
          company_url:
            "https://www.theforage.com/simulations/tata/data-analytics-t3zr",
          logo_path: "tata_logo.png",
          duration: "2026",
          location: "Remote Simulation",
          description:
            "Used GenAI tools to perform EDA on customer credit risk data. Built a no-code predictive default framework and designed an Agentic AI-powered collection strategy incorporating ethical AI principles, bias mitigation, and regulatory compliance requirements.",
          color: "#1A1A80",
        },
      ],
    },
  ],
};

// ─── Projects Page ────────────────────────────────────────
const projectsHeader = {
  title: "Projects",
  description:
    "A selection of data engineering, machine learning, and software development projects — each solving a real-world business problem using rigorous analytical methodology and clean, production-structured code.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Publications",
  description: "Technical articles and analytical writing.",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [],
};

// ─── Contact Page ─────────────────────────────────────────
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "esam_profile.jpg",
    description:
      "I am open to data analyst roles, AI engineering projects, and research collaborations. Feel free to reach out — I respond within 24 hours. I can assist with data analysis, ML modeling, Python development, and AI system design.",
  },
  blogSection: {
    // title: "YouTube",
    // subtitle:
    //   "I document technology insights, data science concepts, and AI experiments on my YouTube channel — Curiosity Actually.",
    // link: "https://youtube.com/@curiosityactually",
    // avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Location",
    subtitle: "Khawlan Street, Sana'a, Yemen",
    locality: "Sana'a",
    country: "YE",
    region: "Sana'a",
    postalCode: "",
    streetAddress: "Khawlan Street",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://maps.app.goo.gl/YgFrXcnmRAtdvwoG7",
  },
  phoneSection: {
    title: "Phone Number",
    subtitle: "+967 770 729 906",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
};
