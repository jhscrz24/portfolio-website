export default function SkillsCarousel() {
  const skills = [
    { src: "/icons/vscode.png", alt: "VScode" },
    { src: "/icons/html.png", alt: "HTML" },
    { src: "/icons/css.png", alt: "CSS" },
    { src: "/icons/javascript.png", alt: "JS" },
    { src: "/icons/react.png", alt: "React" },
    { src: "/icons/mongodb.png", alt: "MongoDB" },
    { src: "/icons/nodejs.png", alt: "Nodejs" },
    { src: "/icons/mysql.png", alt: "MySQL" },
    { src: "/icons/xxamp.png", alt: "Xamp" },
    { src: "/icons/tailwind.png", alt: "Tailwind" },
    { src: "/icons/bootstrap.png", alt: "Bootstrap" },
    { src: "/icons/github.png", alt: "Github" },
    { src: "/icons/microsoft.png", alt: "MS" },
  ];

  return (
    <div className="overflow-hidden py-6">
      <div className="flex gap-10 animate-scroll">
        {/* First Set */}
        {skills.map((skill, index) => (
          <img key={index} src={skill.src} alt={skill.alt} className="h-15 md:h-25" />
        ))}
        {/* Duplicate Set for Seamless Loop */}
        {skills.map((skill, index) => (
          <img key={`duplicate-${index}`} src={skill.src} alt={skill.alt} className="h-15 md:h-25" />
        ))}
      </div>
    </div>
  );
}
