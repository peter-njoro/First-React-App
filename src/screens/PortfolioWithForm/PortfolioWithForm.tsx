import React from "react";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";

// Data for projects
const projects = [
  {
    title: "Facetrack-Lite",
    description:
      "An app that recognizes students, logs unidentified faces, and manages attendance sessions. Dockerized for easy deployment.",
    image:
      "https://c.animaapp.com/mftog3eawa0jbJ/img/pexels-elly-fairytale-3823207-1.png",
    imagePosition: "right",
  },
  {
    title: "Task & Project Management Tool",
    description:
      "Role-based access, notifications, and real-time search. Optimized queries for faster task management.",
    image: "https://c.animaapp.com/mftog3eawa0jbJ/img/rectangle-7.png",
    imagePosition: "left",
  },
  {
    title: "Django REST APIs, Role-Based Access, and AJAX Search Projects.",
    description:
      "REST APIs, AJAX search, and role-based access experiments. More on my GitHub.",
    image: "https://c.animaapp.com/mftog3eawa0jbJ/img/rectangle-7-1.png",
    imagePosition: "right",
  },
];

// Data for experience items
const experiences = [
  {
    title: "ALX Africa – Data Science Fellow 2025–Present",
    description:
      "Collaborated on real-world projects, practiced data cleaning (aka, dealing with digital garbage), and mastered version control — in both GitHub and team morale.",
    circlePosition: "top-[3040px] left-[259px]",
    cardPosition: "top-[3024px] left-[401px]",
    titlePosition: "top-[3040px] left-[459px]",
    descPosition: "top-[3152px] left-[465px]",
    iconPosition: "top-[3190px] left-[273px]",
    iconSrc: "https://c.animaapp.com/mftog3eawa0jbJ/img/rectangle-21.svg",
  },
  {
    title: "SafetyPlus Consulting – Intern 2025",
    description:
      "Assisted with software dev and IT support. Helped fix workflows, troubleshoot issues, and occasionally pretended to look very busy while code compiled.",
    circlePosition: "top-[3666px] left-[314px]",
    cardPosition: "top-[3389px] left-[396px]",
    titlePosition: "top-[3407px] left-[465px]",
    descPosition: "top-[3532px] left-[465px]",
    iconPosition: "top-[3816px] left-[328px]",
    iconSrc: "https://c.animaapp.com/mftog3eawa0jbJ/img/rectangle-23.svg",
  },
  {
    title: "Other Personal Projects as showcased on my github profile",
    description: "",
    circlePosition: "top-[3485px] left-[798px]",
    cardPosition: "top-[3766px] left-[410px]",
    titlePosition: "top-[3797px] left-[465px]",
    descPosition: "",
    iconPosition: "top-[3635px] left-[812px]",
    iconSrc: "https://c.animaapp.com/mftog3eawa0jbJ/img/rectangle-24.svg",
  },
];

// Data for skills
const skills = [
  {
    name: "Python",
    icon: "https://c.animaapp.com/mftog3eawa0jbJ/img/material-icon-theme-python-1.svg",
    position: "top-[4320px] left-[371px]",
    labelPosition: "top-[4519px] left-[439px]",
  },
  {
    name: "django",
    icon: "https://c.animaapp.com/mftog3eawa0jbJ/img/material-icon-theme-django.svg",
    position: "top-[4320px] left-[616px]",
    labelPosition: "top-[4523px] left-[704px]",
  },
  {
    name: "Postgres",
    icon: "https://c.animaapp.com/mftog3eawa0jbJ/img/devicon-postgresql.svg",
    position: "top-[4320px] left-[913px]",
    labelPosition: "top-[4519px] left-[999px]",
  },
  {
    name: "Git",
    icon: "https://c.animaapp.com/mftog3eawa0jbJ/img/material-icon-theme-git.svg",
    position: "top-[4586px] left-[371px]",
    labelPosition: "top-[4783px] left-[442px]",
  },
  {
    name: "Data Analysis",
    icon: "https://c.animaapp.com/mftog3eawa0jbJ/img/streamline-money-graph-analytics-business-product-graph-data-cha.svg",
    position: "top-[4586px] left-[616px]",
    labelPosition: "top-[4797px] left-[673px]",
  },
];

// Data for contact icons
const contactIcons = [
  {
    icon: "https://c.animaapp.com/mftog3eawa0jbJ/img/ic-outline-email.svg",
    position: "top-[5262px] left-[267px]",
  },
  {
    icon: "https://c.animaapp.com/mftog3eawa0jbJ/img/mdi-github.svg",
    position: "top-[5262px] left-[578px]",
  },
  {
    icon: "https://c.animaapp.com/mftog3eawa0jbJ/img/mdi-linkedin.svg",
    position: "top-[5260px] left-[889px]",
  },
];

// Data for navigation items
const navItems = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Contacts", href: "#contacts" },
];

export const PortfolioWithForm = (): JSX.Element => {
  return (
    <div
      className="bg-bg-gray overflow-hidden w-full min-w-[1440px] min-h-[7332px] relative"
      data-model-id="1:62"
    >
      {/* Hero background image */}
      <img
        className="absolute top-0 right-0 w-[720px] h-[629px] translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:0ms]"
        alt="Image"
        src="https://c.animaapp.com/mftog3eawa0jbJ/img/image.svg"
      />

      {/* Header */}
      <header className="absolute w-full top-0 left-0 h-14 flex justify-between bg-transparent translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms]">
        <div className="mt-3 w-[115px] h-8 ml-[120px] [font-family:'Comfortaa',Helvetica] font-bold text-font-high-emphasis text-lg tracking-[0] leading-[32.4px] whitespace-nowrap">
          Peter Chege
        </div>

        <nav className="inline-flex mt-3.5 w-[292px] h-7 relative mr-[120px] items-start gap-12">
          {navItems.map((item, index) => (
            <div
              key={item.label}
              className="inline-flex flex-col items-start gap-0.5 relative flex-[0_0_auto]"
            >
              <a
                href={item.href}
                className="relative w-fit mt-[-1.00px] font-body-18px font-[number:var(--body-18px-font-weight)] text-font-high-emphasis text-[length:var(--body-18px-font-size)] tracking-[var(--body-18px-letter-spacing)] leading-[var(--body-18px-line-height)] whitespace-nowrap [font-style:var(--body-18px-font-style)] hover:text-brand-yellow transition-colors cursor-pointer"
              >
                {item.label}
              </a>
            </div>
          ))}
        </nav>
      </header>

      {/* Hero intro image */}
      <img
        className="absolute top-[111px] left-[120px] w-[486px] h-[372px] translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:400ms]"
        alt="Intro"
        src="https://c.animaapp.com/mftog3eawa0jbJ/img/intro.png"
      />

      {/* Projects Section */}
      <section className="inline-flex flex-col items-center justify-center gap-20 absolute top-[773px] left-[calc(50.00%_-_498px)] translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:600ms]">
        <div className="inline-flex flex-col items-center justify-center gap-1 relative flex-[0_0_auto]">
          <h2 className="relative w-fit mt-[-1.00px] font-title-h2 font-[number:var(--title-h2-font-weight)] text-font-high-emphasis text-[length:var(--title-h2-font-size)] text-center tracking-[var(--title-h2-letter-spacing)] leading-[var(--title-h2-line-height)] whitespace-nowrap [font-style:var(--title-h2-font-style)]">
            Projects
          </h2>
          <div className="relative w-[100px] h-1 bg-[#fdc435] rounded-sm" />
        </div>

        {projects.map((project, index) => (
          <Card
            key={index}
            className="flex w-[992px] h-[524px] items-start relative rounded-3xl overflow-hidden shadow-[0px_6px_64px_#7090b01a] translate-y-[-1rem] animate-fade-in opacity-0"
            style={{ "--animation-delay": `${800 + index * 200}ms` }}
          >
            <CardContent className="p-0 flex w-full h-full">
              {project.imagePosition === "left" ? (
                <>
                  <img
                    className="relative w-[496px] h-[524px] object-cover"
                    alt="Project"
                    src={project.image}
                  />
                  <div className="relative w-[496px] h-[524px] bg-bg-white">
                    <div className="flex flex-col w-[81.99%] items-start gap-6 relative h-[44.27%] top-[27.96%] left-[10.17%]">
                      <h3 className="self-stretch mt-[-1.00px] [font-family:'Playfair_Display',Helvetica] font-bold text-font-high-emphasis text-[40px] leading-[60px] relative tracking-[0]">
                        {project.title}
                      </h3>
                      <p className="self-stretch [font-family:'Nunito',Helvetica] font-normal text-font-medium-emphasis text-lg leading-[27px] relative tracking-[0]">
                        {project.description}
                      </p>
                      <Button
                        variant="outline"
                        className="inline-flex items-start px-6 py-2 relative flex-[0_0_auto] rounded-3xl border border-solid border-[#25282b] h-auto hover:bg-brand-yellow hover:border-brand-yellow transition-colors"
                      >
                        <span className="w-fit mt-[-1.00px] [font-family:'Roboto',Helvetica] font-medium text-font-high-emphasis text-lg leading-[27px] whitespace-nowrap relative tracking-[0]">
                          View Project
                        </span>
                      </Button>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <div className="relative w-[496px] h-[524px] bg-bg-white">
                    <div className="flex flex-col w-[81.99%] items-start gap-6 relative h-[44.27%] top-[27.96%] left-[10.17%]">
                      <h3 className="self-stretch mt-[-1.00px] [font-family:'Playfair_Display',Helvetica] font-bold text-font-high-emphasis text-[40px] leading-[60px] relative tracking-[0]">
                        {project.title}
                      </h3>
                      <p className="self-stretch [font-family:'Nunito',Helvetica] font-normal text-font-medium-emphasis text-lg leading-[27px] relative tracking-[0]">
                        {project.description}
                      </p>
                      <Button
                        variant="outline"
                        className="inline-flex items-start px-6 py-2 relative flex-[0_0_auto] rounded-3xl border border-solid border-[#25282b] h-auto hover:bg-brand-yellow hover:border-brand-yellow transition-colors"
                      >
                        <span className="w-fit mt-[-1.00px] [font-family:'Roboto',Helvetica] font-medium text-font-high-emphasis text-lg leading-[27px] whitespace-nowrap relative tracking-[0]">
                          View Project
                        </span>
                      </Button>
                    </div>
                  </div>
                  <img
                    className="relative w-[496px] h-[524px] object-cover"
                    alt="Project"
                    src={project.image}
                  />
                </>
              )}
            </CardContent>
          </Card>
        ))}
      </section>

      {/* Experience Section Header */}
      <div className="inline-flex flex-col items-center justify-center gap-20 absolute top-[2867px] left-[calc(50.00%_-_126px)] translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:1400ms]">
        <div className="inline-flex flex-col items-center justify-center gap-1 relative flex-[0_0_auto]">
          <h2 className="relative w-fit mt-[-1.00px] font-title-h2 font-[number:var(--title-h2-font-weight)] text-font-high-emphasis text-[length:var(--title-h2-font-size)] text-center tracking-[var(--title-h2-letter-spacing)] leading-[var(--title-h2-line-height)] whitespace-nowrap [font-style:var(--title-h2-font-style)]">
            Experience
          </h2>
          <div className="relative w-[100px] h-1 bg-[#fdc435] rounded-sm" />
        </div>
      </div>

      {/* Experience Background Card */}
      <Card className="absolute top-[2989px] left-[218px] w-[992px] h-[1048px] bg-white rounded-3xl shadow-[0px_6px_64px_#7090b01a] translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:1600ms]">
        <CardContent className="p-0 w-full h-full relative">
          {/* Experience Items */}
          {experiences.map((exp, index) => (
            <div
              key={index}
              className={`translate-y-[-1rem] animate-fade-in opacity-0`}
              style={{ "--animation-delay": `${1800 + index * 200}ms` }}
            >
              {/* Yellow Circle */}
              <div
                className={`absolute w-[200px] h-[200px] rounded-[100px] [background:radial-gradient(50%_50%_at_28%_31%,rgba(255,255,255,1)_0%,rgba(255,255,255,0)_100%),linear-gradient(180deg,rgba(254,188,47,1)_0%,rgba(152,113,28,1)_100%)] ${exp.circlePosition}`}
              />

              {/* Icon */}
              <img
                className={`absolute w-[274px] h-[155px] ${exp.iconPosition}`}
                alt="Rectangle"
                src={exp.iconSrc}
              />

              {/* Glass Card */}
              <div
                className={`absolute w-[667px] h-[228px] bg-[#d9d9d91a] rounded-[35px] border-[none] backdrop-blur-[17.5px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(17.5px)_brightness(100%)] before:content-[''] before:absolute before:inset-0 before:p-px before:rounded-[35px] before:[background:linear-gradient(263deg,rgba(255,255,255,0.1)_0%,rgba(255,255,255,0.1)_100%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none ${exp.cardPosition}`}
              />

              {/* Title */}
              <h3
                className={`absolute w-[588px] [font-family:'Playfair_Display',Helvetica] font-bold text-black text-[40px] tracking-[0] leading-[normal] ${exp.titlePosition}`}
              >
                {exp.title}
              </h3>

              {/* Description */}
              {exp.description && (
                <p
                  className={`absolute w-[575px] [font-family:'Nunito',Helvetica] font-normal text-black text-lg tracking-[0] leading-[normal] ${exp.descPosition}`}
                >
                  {exp.description}
                </p>
              )}
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Skills Section Header */}
      <div className="top-[4139px] left-[calc(50.00%_-_66px)] inline-flex flex-col items-center justify-center gap-20 absolute translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:2400ms]">
        <div className="inline-flex flex-col items-center justify-center gap-1 relative flex-[0_0_auto]">
          <h2 className="relative w-fit mt-[-1.00px] font-title-h2 font-[number:var(--title-h2-font-weight)] text-font-high-emphasis text-[length:var(--title-h2-font-size)] text-center tracking-[var(--title-h2-letter-spacing)] leading-[var(--title-h2-line-height)] whitespace-nowrap [font-style:var(--title-h2-font-style)]">
            Skills
          </h2>
          <div className="relative w-[100px] h-1 bg-[#fdc435] rounded-sm" />
        </div>
      </div>

      {/* Skills Background Card */}
      <Card className="absolute top-[4288px] left-[218px] w-[992px] h-[542px] bg-white rounded-3xl shadow-[0px_6px_64px_#7090b01a] translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:2600ms]">
        <CardContent className="p-0 w-full h-full relative">
          {/* Skills Icons */}
          {skills.map((skill, index) => (
            <div
              key={skill.name}
              className={`translate-y-[-1rem] animate-fade-in opacity-0`}
              style={{ "--animation-delay": `${2800 + index * 100}ms` }}
            >
              <img
                className={`absolute w-[200px] h-[200px] ${skill.position}`}
                alt={skill.name}
                src={skill.icon}
              />
              <div
                className={`absolute w-fit [font-family:'Nunito',Helvetica] font-normal text-font-medium-emphasis text-lg tracking-[0] leading-[27px] ${skill.labelPosition} ${skill.name === "Postgres" || skill.name === "Data Analysis" ? "whitespace-nowrap" : ""}`}
              >
                {skill.name}
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Contact Section Header */}
      <div className="top-[4926px] left-[calc(50.00%_-_87px)] inline-flex flex-col items-center justify-center gap-20 absolute translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:3300ms]">
        <div className="inline-flex flex-col items-center justify-center gap-1 relative flex-[0_0_auto]">
          <h2 className="relative w-fit mt-[-1.00px] font-title-h2 font-[number:var(--title-h2-font-weight)] text-font-high-emphasis text-[length:var(--title-h2-font-size)] text-center tracking-[var(--title-h2-letter-spacing)] leading-[var(--title-h2-line-height)] whitespace-nowrap [font-style:var(--title-h2-font-style)]">
            Contact
          </h2>
          <div className="relative w-[100px] h-1 bg-[#fdc435] rounded-sm" />
        </div>
      </div>

      {/* Contact Background Card */}
      <Card className="absolute top-[5102px] left-[218px] w-[992px] h-[542px] bg-white rounded-3xl shadow-[0px_6px_64px_#7090b01a] translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:3500ms]">
        <CardContent className="p-0 w-full h-full relative">
          {/* Contact Icons */}
          {contactIcons.map((contact, index) => (
            <img
              key={index}
              className={`absolute w-[200px] h-[200px] ${contact.position} translate-y-[-1rem] animate-fade-in opacity-0 hover:scale-110 transition-transform cursor-pointer`}
              style={{ "--animation-delay": `${3700 + index * 100}ms` }}
              alt="Contact"
              src={contact.icon}
            />
          ))}
        </CardContent>
      </Card>

      {/* Footer Wave */}
      <div className="absolute top-[6259px] left-[41px] w-[1440px] h-[1073px] translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:4000ms]">
        <img
          className="absolute w-full h-[34.26%] top-[65.73%] left-0"
          alt="Vector"
          src="https://c.animaapp.com/mftog3eawa0jbJ/img/vector.svg"
        />

        <img
          className="absolute top-[113px] left-[340px] w-6 h-6"
          alt="Material icon theme"
          src="https://c.animaapp.com/mftog3eawa0jbJ/img/material-icon-theme-python.svg"
        />
      </div>
    </div>
  );
};
