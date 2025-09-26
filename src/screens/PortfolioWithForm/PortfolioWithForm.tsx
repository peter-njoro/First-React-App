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
            style={{ "--animation-delay": `${800 + index * 200}ms` } as React.CSSProperties}
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

      {/* Experience Section */}
      <section className="absolute top-[2867px] w-full">
        {/* Experience Header */}
        <div className="flex flex-col items-center justify-center gap-1 mb-20">
          <h2 className="font-title-h2 font-[number:var(--title-h2-font-weight)] text-font-high-emphasis text-[length:var(--title-h2-font-size)] text-center tracking-[var(--title-h2-letter-spacing)] leading-[var(--title-h2-line-height)] whitespace-nowrap [font-style:var(--title-h2-font-style)]">
            Experience
          </h2>
          <div className="w-[100px] h-1 bg-[#fdc435] rounded-sm" />
        </div>

        {/* Experience Background Card */}
        <div className="flex justify-center">
          <Card className="w-[992px] h-[1048px] bg-white rounded-3xl shadow-[0px_6px_64px_#7090b01a] translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:1600ms]">
            <CardContent className="p-8 w-full h-full relative">
              {experiences.map((exp, index) => (
                <div
                  key={index}
                  className={`relative mb-16 last:mb-0 translate-y-[-1rem] animate-fade-in opacity-0`}
                  style={{ "--animation-delay": `${1800 + index * 200}ms` } as React.CSSProperties}
                >
                  <div className="flex items-start gap-8">
                    {/* Left side - Timeline */}
                    <div className="flex flex-col items-center w-32 flex-shrink-0">
                      {/* Yellow Circle */}
                      <div className="w-16 h-16 rounded-full bg-gradient-to-b from-[#febc2f] to-[#98711c] mb-4" />
                      
                      {/* Icon */}
                      <img
                        className="w-48 h-24 object-contain"
                        alt="Experience"
                        src={exp.iconSrc}
                      />
                    </div>

                    {/* Right side - Content */}
                    <div className="flex-1">
                      {/* Glass Card */}
                      <div className="w-full bg-[#d9d9d91a] rounded-[35px] border border-white/20 backdrop-blur-[17.5px] p-8 mb-4 relative before:content-[''] before:absolute before:inset-0 before:p-px before:rounded-[35px] before:bg-gradient-to-r before:from-white/10 before:to-white/10 before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude]">
                        
                        {/* Title */}
                        <h3 className="[font-family:'Playfair_Display',Helvetica] font-bold text-black text-2xl mb-4 leading-tight">
                          {exp.title}
                        </h3>

                        {/* Description */}
                        {exp.description && (
                          <p className="[font-family:'Nunito',Helvetica] font-normal text-black text-lg leading-relaxed">
                            {exp.description}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </section>


      {/* Skills Section */}
      <section className="absolute top-[4139px] w-full">
        {/* Skills Header */}
        <div className="flex flex-col items-center justify-center gap-1 mb-20">
          <h2 className="font-title-h2 font-[number:var(--title-h2-font-weight)] text-font-high-emphasis text-[length:var(--title-h2-font-size)] text-center tracking-[var(--title-h2-letter-spacing)] leading-[var(--title-h2-line-height)] whitespace-nowrap [font-style:var(--title-h2-font-style)]">
            Skills
          </h2>
          <div className="w-[100px] h-1 bg-[#fdc435] rounded-sm" />
        </div>

        {/* Skills Background Card */}
        <div className="flex justify-center">
          <Card className="w-[992px] h-[542px] bg-white rounded-3xl shadow-[0px_6px_64px_#7090b01a] translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:2600ms]">
            <CardContent className="p-8 w-full h-full">
              <div className="grid grid-cols-3 gap-8 h-full items-center justify-items-center">
                {skills.map((skill, index) => (
                  <div
                    key={skill.name}
                    className="flex flex-col items-center gap-4 translate-y-[-1rem] animate-fade-in opacity-0"
                    style={{ "--animation-delay": `${2800 + index * 200}ms` } as React.CSSProperties}
                  >
                    <img
                      className="w-32 h-32 object-contain hover:scale-110 transition-transform duration-300"
                      alt={skill.name}
                      src={skill.icon}
                    />
                    <div className="[font-family:'Nunito',Helvetica] font-normal text-font-medium-emphasis text-lg text-center">
                      {skill.name}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

       {/* Contact Section */}
      <section className="absolute top-[4926px] w-full">
        {/* Contact Header */}
        <div className="flex flex-col items-center justify-center gap-1 mb-20">
          <h2 className="font-title-h2 font-[number:var(--title-h2-font-weight)] text-font-high-emphasis text-[length:var(--title-h2-font-size)] text-center tracking-[var(--title-h2-letter-spacing)] leading-[var(--title-h2-line-height)] whitespace-nowrap [font-style:var(--title-h2-font-style)]">
            Contact
          </h2>
          <div className="w-[100px] h-1 bg-[#fdc435] rounded-sm" />
        </div>

        {/* Contact Background Card */}
        <div className="flex justify-center">
          <Card className="w-[992px] h-[542px] bg-white rounded-3xl shadow-[0px_6px_64px_#7090b01a] translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:3500ms]">
            <CardContent className="p-8 w-full h-full">
              <div className="flex justify-around items-center h-full">
                {contactIcons.map((contact, index) => (
                  <div
                    key={index}
                    className="flex flex-col items-center gap-6 translate-y-[-1rem] animate-fade-in opacity-0"
                    style={{ "--animation-delay": `${3700 + index * 200}ms` } as React.CSSProperties}
                  >
                    <img
                      className="w-24 h-24 object-contain hover:scale-110 transition-transform duration-300 cursor-pointer"
                      alt="Contact"
                      src={contact.icon}
                    />
                    <div className="[font-family:'Nunito',Helvetica] font-normal text-font-medium-emphasis text-lg">
                      {index === 0 ? 'Email' : index === 1 ? 'GitHub' : 'LinkedIn'}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>


      {/* Footer Wave */}
      <div className="absolute top-[6259px] left-0 w-full h-[1073px] translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:4000ms]">
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