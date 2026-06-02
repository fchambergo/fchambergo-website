import { useState } from "react";
import { motion } from "framer-motion";
import { Briefcase, GraduationCap, BookOpen, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

type Category = "all" | "engineering" | "education" | "curriculum";

interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  category: Exclude<Category, "all">;
  highlights: string[];
}

const experiences: ExperienceItem[] = [
  // Resume order (most recent first)
  {
    company: "Udacity",
    role: "Frontend Content Maintenance Mentor | The School of Programming & Development",
    period: "Feb 2026 – Present",
    category: "curriculum",
    highlights: [
      "Analyze lesson ratings and learner feedback at scale to prioritize content needing updates, ensuring high student satisfaction.",
      "Update React, C++, Python, and API development course material including code examples, starter projects, and written instructions to reflect the latest framework and versions."
    ],
  },
  {
    company: "Flatiron School",
    role: "AI Engineering Apprentice",
    period: "Feb 2026 – Present",
    category: "engineering",
    highlights: [
      "AI Engineering Immersive",
      "Expanding expertise in AI/ML engineering and modern AI tooling",
    ],
  },
  {
    company: "Coursera",
    role: "Content Curator & Subject Matter Expert | Software Development",
    period: "Oct 2025 – Mar 2026",
    category: "curriculum",
    highlights: [
      "Curated and selected existing Coursera courses and modules to develop comprehensive Junior and Intermediate Software Developer learning pathways aligned with industry competency standards.",
      "Facilitated cross-functional handoff sessions with assessment developers to ensure seamless translation of curated content into meaningful skill verification assessments.",
      "Partnered with assessment developers, instructional designers, learning design consultants, solution engineers, and content production managers to deliver cohesive learning experiences."
    ],
  },
  {
    company: "ClydeBank Media LLC",
    role: "Course Creator & Technical Editor | QuickStart Guide Academy",
    period: "Aug 2025 – Feb 2026",
    category: "curriculum",
    highlights: [
      "Designed and built the Introduction to GitHub Copilot course from concept to completion, including curriculum architecture, lesson planning, and instructional materials.",
      "Authored detailed course outlines for Introduction to GitHub Copilot and Introduction to Generative AI, structuring content flow and learning objectives in Notion.",
      "Reviewed and refined tasks, projects, and course content for HTML, CSS, and JavaScript courses, ensuring technical accuracy and pedagogical effectiveness.",
      "Created presentation slides in SharePoint and produced video demonstrations showcasing GitHub Copilot workflows and best practices.",
      "Recorded and edited professional lesson videos with voiceovers and screen walkthroughs using Tella, delivering polished instructional content."
    ],
  },
  {
    company: "Shop Online New York",
    role: "Technical Writer",
    period: "Feb 2025 – May 2025",
    category: "",
    highlights: [
      "Documentation Standardization: Reviewed and updated user manuals to ensure consistent adherence to company style guidelines, improving document quality and user experience across all technical materials.",
      "Technical Content Development: Authored and revised specialized documentation covering Flutter development frameworks, cybersecurity protocols, and system architecture principles, translating complex technical concepts into accessible guidance for development teams.",
      "Developer-Focused Communication: Created targeted documentation for both experienced developers and new team members, facilitating smoother onboarding processes and enhanced technical understanding across skill levels."
    ],
  },
  {
    company: "TripleTen",
    role: "Curriculum Developer — Software Engineering",
    period: "Jul 2024 – Dec 2025",
    category: "curriculum",
    highlights: [
      "Pioneered TripleTen's inaugural AI in Web Development chapter, architecting comprehensive content on AI integration in development workflows including code completion, debugging, error handling, and code review processes.",
      "Designed innovative curriculum modules covering ethical AI practices and vibe coding methodologies, establishing industry-leading educational standards for AI-assisted development.",
      "Produced high-impact instructional content and video tutorials + walkthroughs for using GitHub Copilot, enabling students to master cutting-edge development tools.",
      "Developed and quality-assured extensive training materials spanning the full-stack development ecosystem: HTML, CSS, JavaScript, Node.js, Express, React, MongoDB, Mongoose, deployment strategies, and AI integration tools.",
      "Collaborated cross-functionally with design teams and curriculum authors to establish measurable learning objectives and optimize student outcomes.",
      "Integrated current industry standards and best practices into program architecture, ensuring curriculum alignment with market demands and professional development requirements.",
      "Reviewing lesson drafts in Notion and providing feedback.",
      "Creating quizzes and tasks to enforce software engineering principles for learners."
    ],
  },
  {
    company: "Upright Education",
    role: "Lead Instructor — Software Development Bootcamp",
    period: "Mar 2024 – Aug 2024",
    category: "education",
    highlights: [
      "Review and facilitate lesson retrospectives on Mondays and Wednesdays, helping learners reinforce their understanding of the curriculum and coding concepts.",
      "Lead Thursday workshop-style sessions, guiding learners through coding projects, exercises, pair programming, and collaborative coding challenges.",
      "Provide personalized feedback and guidance to learners on their coding projects, problem-solving techniques, and coding best practices.",
      "Collaborate with the curriculum development team to enhance the bootcamp curriculum based on industry trends and learner feedback.",
      "Stay updated with the latest programming languages, tools, and software development practices to ensure high-quality instruction.",
      "Mentor and support learners in their career development, helping them prepare for success in the software development field."
    ],
  },
  {
    company: "SEO (Sponsors for Educational Opportunity)",
    role: "Teaching Assistant — Software Engineer, Tech Developer Program",
    period: "Jun 2024 – Jul 2024",
    category: "education",
    highlights: [
      "Mentored students through the web application development process using Python Flask framework, HTML, CSS, JavaScript and SQLite on Codio.",
      "Prepared and facilitated demos of my student group on the related topics of everyday lessons.",
      "Hosted office hours and provided on-call support; Ensured students have the guidance and support they need to overcome challenges and excel in their group projects.",
      "Guided student groups in the creation of professional, portfolio-worthy programming projects, and forming professional project presentations leading to group awards per student.",
      "Lead a smooth transitional flow from student project presentation to another on presentation days.",
      "Connected individually with each learner in my student group to understand their goals within the tech space during and post the tech developer program."
    ],
  },
  {
    company: "Work-Based Learning Alliance",
    role: "Mentor — Web Development",
    period: "Feb 2024 – Feb 2024",
    category: "education",
    highlights: [
      "Provided hours of feedback and mentorship every week to 3 high school student groups working to develop a functional web application.",
      "Overviewed project source code providing suggestions on how to improve code quality, organization and performance.",
      "Provided feedback on practice presentations to help prepare for their final presentation."
    ],
  },
  {
    company: "Chegg Inc.",
    role: "Mentor — Software Engineering Course",
    period: "Aug 2023 – Feb 2024",
    category: "education",
    highlights: [
      "Engaged with students in weekly 1-on-1 mentoring sessions bringing industry knowledge and technical expertise to provide them with support and guidance as they progress through the curriculum.",
      "Provided 1-on-1 support by answering curriculum related questions, helping debug coding issues and review curriculum material."
    ],
  },
  {
    company: "W3Schools",
    role: "Lead Instructor — Web Development Bootcamp",
    period: "May 2023 – Oct 2023",
    category: "education",
    highlights: [
      "Preparing and delivering lessons on the following curriculum topics: HTML, CSS, JavaScript, Git, React, Node.js and SQL",
      "Giving constructive feedback on weekly assignments.",
      "Guiding and supporting students during stand hands on projects when ended.",
      "Sharing personal experiences and giving expectations of a real world software development role.",
      "Reviewing and brainstorming ideas on how to improve the bootcamp's curriculum."
    ],
  },
  {
    company: "Montgomery College",
    role: "Lead Instructor — Montgomery Can Code",
    period: "Jul 2023 – Aug 2023",
    category: "education",
    highlights: [
      "Delivering instruction of the Everyone Can Code Apple curriculum to rising 6th - 8th graders (remote and in-person) using Swift Playgrounds on the provided iPads in 1 week camps. Within each weekly camp, the following concepts were explained in a child friendly manner: Commands, Functions, For Loops, While Loops, Conditionals,  Logical Operators, Variables",
      "Managing classroom time effectively by implementing discipline, time management, and organization consistent with the program policy."
    ],
  },
  {
    company: "Fullstack Academy",
    role: "Mentor — Web Development Bootcamp (Amazon Career Choice)",
    period: "Feb 2023 – Oct 2023",
    category: "education",
    highlights: [
      "Supported students through exercises designed to build knowledge and skills and promote grit, problem-solving and a collaborative learning community.",
      "Graded student assignments & projects.",
      "Answered curriculum related questions through Zoom chat.",
      "Helped students troubleshoot code & solve setup related issues.",
      "Provided 1-on-1 support during office hours and after lecture when students had time to work on their assignments.",
      "Shared advice and expertise when setting up and splitting group project work.",
      "Technical support for the following curriculum related topics: HTML/CSS - Flexbox, Media Queries, CSS Selectors; JavaScript - ES6, DOM manipulations, Data Structures; Postgres - SQL commands, pg library, DB adapters; Express - RESTful Routing, JWT tokens, User Auth, Bcrypt; React - Hooks, React Router, Controlled Forms, HTTP requests; Node - NPM packages, Modules, Async, Importing/Exporting; Git/Github - Commits, Merges, Pull Requests"
    ],
  },
  {
    company: "Demonstrated Success, LLC",
    role: "Software Developer — Full Stack",
    period: "Jul 2022 – Aug 2025",
    category: "engineering",
    highlights: [
      "Supported the Educator Success Platform that gives educators ready access to editable templates and customizable school forms for school-wide communication.",
      "Working through frontend and backend components to create new features in user created customizable forms regarding form functionality, improving form completion experience and providing form data & statistics.",
      "Conducted code reviews for fellow developers",
    ],
  },
  {
    company: "OpenClassrooms",
    role: "Mentor — Software Engineering",
    period: "Jun 2022 – Aug 2024",
    category: "education",
    highlights: [
      "Mentor for the following OpenClassrooms paths: Web Developer, Application Developer - Skills Bootcamp, Application Developer Apprenticeship, Database Querying with SQL, Back-End .NET Developer",
      "Connected with assigned learners on a weekly 1 on 1 basis to assist them as they progress through their development paths by answering curriculum related questions, providing guidance on completing the course projects, and providing career related advice."
    ],
  },
  {
    company: "Capital One",
    role: "Instructor — Capital One Developer Academy",
    period: "May 2022 – Feb 2023",
    category: "education",
    highlights: [
      "Instruction and instructional support in full stack software development to a cohort of 130+ recent college graduates: Git, GitHub, HTML, CSS, JavaScript, Node.js, Express, PostgreSQL, MongoDB, TypeScript, Angular, React",
      "Answered curriculum related questions through Zoom and Slack.",
      "Delivered 1 on 1 tutoring sessions on curriculum material",
      "Prepared for and facilitated React coding workshops for a group of 10 students",
      "Led daily stand-ups for a team of 7 students.",
      "Graded weekly + unit project assignments through Google Classroom. Facilitated 1 on 1 and/or group review sessions on those projects.",
      "Provided project support to a team of 5 summiteers by answering technical questions of our chosen technologies (React & Python), explaining how to use the technologies, and providing solution suggestions.",
      "Put together the first day of instructional curriculum content utilizing JavaScript and Node.js that introduces the following material: Data Types, Variables, Conditionals, Functions, Loops",
      "Created individualized & group coding activities and exercises with regards to the first day of material."
    ],
  },
  {
    company: "GEICO",
    role: "Software Engineer III — Full Stack",
    period: "Nov 2020 – Apr 2022",
    category: "engineering",
    highlights: [
      "GEICO’s Self Service Claim web and mobile application. Helped finalize, prepare and develop certain aspects of the Telematics project of GEICO's DriveEasy mobile application.",
      "Software Engineering Technology Development Program Mentor.",
    ],
  },
  {
    company: "GEICO",
    role: "Software Engineer II — Full Stack",
    period: "Jan 2020 – Oct 2020",
    category: "engineering",
    highlights: [
      "Developed the initial frontend for the Underwriting System Department's API application. This is the frontend to the department's backend application, Generic API to create a company visible full stack application that can view/handle customer data and determine a price that is fair for both the customer and the company.",
      "Developed new features and added several restful endpoints to the existing Underwriting System's Generic API.",
      "Utilized GEICO's Design Kit for UI components."
    ],
  },
  {
    company: "Altamira Technologies Corporation",
    role: "Software Engineer",
    period: "Jun 2019 – Aug 2019",
    category: "engineering",
    highlights: [
      "Developed a Java program that constructs a MongoDB database replica of a PostgreSQL database that supports the backend of a web application for speed comparisons in storing and querying Geographic Information System data.",
    ],
  },
];

const categories: { value: Category; label: string; icon: typeof Briefcase }[] = [
  { value: "all", label: "All Experience", icon: Briefcase },
  { value: "engineering", label: "Engineering", icon: Briefcase },
  { value: "education", label: "Education", icon: GraduationCap },
  { value: "curriculum", label: "Curriculum Development", icon: BookOpen },
];

const iconMap = {
  engineering: Briefcase,
  education: GraduationCap,
  curriculum: BookOpen,
};

const ExperiencePage = () => {
  const [filter, setFilter] = useState<Category>("all");

  const filtered = filter === "all"
    ? experiences
    : experiences.filter((e) => e.category === filter);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-24 pb-24 md:pb-32">
        <div className="max-w-6xl mx-auto px-6">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-8"
          >
            <ArrowLeft size={16} />
            Back to Home
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-10"
          >
            <p className="text-primary font-display font-semibold text-sm tracking-widest uppercase mb-2">
              Career
            </p>
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-6">
              Experience
            </h1>
          </motion.div>

          <div className="flex flex-wrap gap-3 mb-10">
            {categories.map((cat) => (
              <button
                key={cat.value}
                onClick={() => setFilter(cat.value)}
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-display font-medium border transition-colors ${
                  filter === cat.value
                    ? "bg-primary text-primary-foreground border-primary"
                    : "border-border text-muted-foreground hover:border-primary hover:text-primary"
                }`}
              >
                <cat.icon size={14} />
                {cat.label}
              </button>
            ))}
          </div>

          <div className="grid gap-6">
            {filtered.map((exp, i) => {
              const Icon = iconMap[exp.category] || Briefcase;
              return (
                <motion.div
                  key={`${exp.company}-${exp.role}`}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05, duration: 0.4 }}
                  className="group relative rounded-xl border border-border bg-card p-6 md:p-8 hover:border-primary/40 transition-colors"
                >
                  <div className="flex flex-col md:flex-row md:items-start gap-4">
                    <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-secondary shrink-0">
                      <Icon size={18} className="text-primary" />
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-3">
                        <div>
                          <h3 className="font-display font-semibold text-lg text-foreground">
                            {exp.role}
                          </h3>
                          <p className="text-primary text-sm font-medium">{exp.company}</p>
                        </div>
                        <span className="text-xs text-muted-foreground font-medium whitespace-nowrap">
                          {exp.period}
                        </span>
                      </div>
                      <ul className="space-y-2">
                        {exp.highlights.map((h, idx) => (
                          <li key={idx} className="text-sm text-muted-foreground leading-relaxed flex items-baseline gap-2">
                            <span className="text-primary shrink-0">▸</span>
                            <span>{h}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ExperiencePage;
