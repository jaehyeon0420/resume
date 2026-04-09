import React from 'react';
import { portfolioData } from './data';
import { AboutSection, ExperienceItem, ProjectItem, ContactItem, SkillCategory, EducationItem } from './types';

// Icons using simple SVG - Sizes increased slightly
const ExternalLinkIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="inline-block ml-1 opacity-60">
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
    <polyline points="15 3 21 3 21 9"></polyline>
    <line x1="10" y1="14" x2="21" y2="3"></line>
  </svg>
);

const LogoIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-gray-800">
    <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
    <polyline points="2 17 12 22 22 17"></polyline>
    <polyline points="2 12 12 17 22 12"></polyline>
  </svg>
);

const HeaderIcons = () => (
  <div className="flex gap-4 text-gray print:hidden">
    <button 
      className="hover:text-gray-900 transition-colors" 
      style={{ width : "40px", height : "40px"}}
      title="Print" 
      onClick={() => window.print()}
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 6 2 18 2 18 9"></polyline><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"></path><rect x="6" y="14" width="12" height="8"></rect></svg>
    </button>
  </div>
);

// --- Components ---

const SectionTitle = ({ children }: { children: React.ReactNode }) => (
  <h2 className="text-2xl font-bold text-gray-800 border-t border-b border-gray-600 pb-3 pt-3 mb-8">
    {children}
  </h2>
);

const AboutBlock = ({ data }: { data: AboutSection }) => (
  <div className="mb-8 last:mb-0">
    <h3 className="text-lg font-bold text-gray-900 mb-2">{data.title}</h3>
    <p className="text-base text-gray-700 leading-relaxed whitespace-pre-line">{data.content}</p>
  </div>
);

const ExperienceBlock = ({ item }: { item: ExperienceItem }) => (
  <div className="mb-10 last:mb-0 break-inside-avoid">
    <div className="flex flex-col md:flex-row md:justify-between md:items-baseline mb-2">
      <h3 className="text-lg font-bold text-gray-900">
        {item.company}
      </h3>
      <div className="text-sm text-gray-500 font-medium md:text-right shrink-0">
        {item.period}
      </div>
    </div>
    
    <div className="text-base text-gray-600 mb-3 font-medium">{item.role}</div>
    
    <ul className="list-disc list-outside ml-4 space-y-1.5">
      {item.description.map((desc, idx) => (
        <li key={idx} className="text-base text-gray-700 leading-relaxed pl-1">
          {desc}
        </li>
      ))}
    </ul>
  </div>
);

const ProjectBlock = ({ item }: { item: ProjectItem }) => (
  <div className="mb-10 last:mb-0 break-inside-avoid">
    <div className="flex flex-col md:flex-row md:justify-between md:items-baseline mb-2">
      <h3 className="font-bold text-gray-900 text-lg md:text-xl pr-4">
        {item.title}
      </h3>
      <div className="text-sm text-gray-500 font-medium shrink-0 md:text-right flex flex-col items-end">
        <span>{item.company}</span>
        <span>{item.period}</span>
      </div>
    </div>

    {item.description.length > 0 && (
       <div className="mt-2 font-bold text-gray-600 mb-3">{item.description[0]}</div>
    )}

   <ul className="list-disc list-outside ml-4 space-y-1.5">
      {item.description.slice(1).map((desc, idx) => (
        <li key={idx} className="text-base text-gray-700 leading-relaxed pl-1">
          {desc.split(/(\*\*.*?\*\*|##.*?##|--.*?--|\^\^.*?\^\^)/).map((part, j) => {
            // **텍스트** 패턴 매칭 및 렌더링
            if (part.startsWith('**') && part.endsWith('**')) {
              return (
                <strong key={j} className="font-bold text-slate-900 rounded mx-0.5">
                  {part.slice(2, -2)}
                </strong>
              );
            }
            // TODO: 필요 시 ##, --, ^^ 패턴에 대한 처리 로직 추가 가능
            
            // 일반 텍스트 렌더링
            return <span key={j}>{part}</span>;
          })}
        </li>
      ))}
      
      {/* Conditionally render the blog link as a clickable item */}
      {item.blogLink && (
        <li className="text-base leading-relaxed pl-1 mt-1.5">
            <a 
                href={item.blogLink} 
                target="_blank" 
                rel="noopener noreferrer"
                className="font-bold text-gray-800 hover:text-blue-600 hover:underline inline-flex items-center transition-colors cursor-pointer"
            >
                GitHub
                <ExternalLinkIcon />
            </a>
        </li>
      )}
    </ul>
  </div>
);

const EducationBlock = ({ item }: { item: EducationItem }) => (
  <div className="mb-8 last:mb-0 break-inside-avoid">
    <div className="flex flex-col md:flex-row md:justify-between md:items-baseline mb-1">
      <h3 className="font-bold text-gray-900 text-lg">{item.institution}</h3>
      <div className="text-sm text-gray-500 font-medium">{item.period}</div>
    </div>
    <ul className="list-disc list-outside ml-4 space-y-1.5">
      {item.degrees.map((degree, idx) => (
      <li key={idx} className="text-base text-gray-700 leading-relaxed pl-1">{degree}</li>
      ))}
    </ul>
  </div>
);

const SkillBlock = ({ item }: { item: SkillCategory }) => (
  <div className="mb-8 last:mb-0 break-inside-avoid">
    <h3 className="font-bold text-gray-900 text-lg mb-2">{item.category}</h3>
    <ul className="list-disc list-outside ml-4 space-y-1.5">
      {item.items.map((skill, idx) => (
        <li key={idx} className="text-base text-gray-700 pl-1">{skill}</li>
      ))}
    </ul>
  </div>
);

const CertificationBlock = ({ item }: { item: { name: string; issuer: string; date: string } }) => (
  <div className="mb-6 last:mb-0 flex flex-col md:flex-row md:justify-between md:items-baseline break-inside-avoid">
    <div>
      <h3 className="font-bold text-gray-900 text-lg">{item.name}</h3>
      <div className="text-base text-gray-600">{item.issuer}</div>
    </div>
    <div className="text-sm text-gray-500 font-medium mt-1 md:mt-0">{item.date}</div>
  </div>
);

const AwardBlock = ({ item }: { item: { name: string; issuer: string; date: string } }) => (
  <div className="mb-6 last:mb-0 flex flex-col md:flex-row md:justify-between md:items-baseline break-inside-avoid">
    <div>
      <h3 className="font-bold text-gray-900 text-lg">{item.name}</h3>
      <div className="text-base text-gray-600">{item.issuer}</div>
    </div>
    <div className="text-sm text-gray-500 font-medium mt-1 md:mt-0">{item.date}</div>
  </div>
);

const ContactBlock = ({ item }: { item: ContactItem }) => (
  <div className="mb-6 last:mb-0 break-inside-avoid">
    <h3 className="font-bold text-gray-900 text-lg mb-1">{item.type}</h3>
    <a 
      href={item.url} 
      target="_blank" 
      rel="noopener noreferrer" 
      className="text-base text-gray-700 hover:text-blue-600 hover:underline flex items-center gap-1 transition-colors"
    >
      • {item.value} <ExternalLinkIcon />
    </a>
  </div>
);

const MainContactBlock = ({ item }: { item: ContactItem }) => (
  <div className="mb-6 last:mb-0 break-inside-avoid">
    <a 
      href={item.url} 
      target="_blank" 
      rel="noopener noreferrer" 
      className="text-base text-gray-700 hover:text-blue-600 hover:underline flex items-center gap-1 transition-colors"
    >
      • {item.value} <ExternalLinkIcon />
    </a>
  </div>
);

function App() {
  const { profile, about, experience, education, skills, projects, certifications, awards, contacts } = portfolioData;

  return (
    <div className="min-h-screen bg-white flex justify-center py-16 px-4 md:px-12">
      <div className="w-full max-w-[900px]">
        {/* Top Navigation / Actions */}
        <div className="flex justify-between items-start mb-20">
          <div className="text-gray-800">
            <LogoIcon />
          </div>
          <HeaderIcons />
        </div>

        {/* Profile Header */}
        <header className="mb-20">
          <h1 className="text-4xl font-bold text-gray-900 mb-3">{profile.name}</h1>
          <p className="text-xl text-gray-600 mb-2">{profile.role}</p>
          <a href={profile.github} 
             target="_blank" 
             rel="noopener noreferrer" 
             className="text-base text-gray-700 hover:text-blue-600 hover:underline items-center transition-colors">
             GitHub <ExternalLinkIcon />
          </a>&nbsp;|&nbsp;
          <a href={profile.email} 
             target="_blank" 
             rel="noopener noreferrer" 
             className="text-base text-gray-700 hover:text-blue-600 hover:underline items-center transition-colors">
             Email <ExternalLinkIcon />
          </a>&nbsp;|&nbsp;
          <a href={profile.linkedin} 
             target="_blank" 
             rel="noopener noreferrer" 
             className="text-base text-gray-700 hover:text-blue-600 hover:underline items-center transition-colors">
             LinkedIn <ExternalLinkIcon />
          </a>
        </header>

        {/* About Section */}
        <section className="mb-24 break-inside-avoid">
          <SectionTitle>About</SectionTitle>
          <h3 className="text-2xl font-bold text-gray-900 mb-8 leading-snug">{about.mainTitle}</h3>
          
          <div className="space-y-8">
            {about.sections.map((section, idx) => (
              <AboutBlock key={idx} data={section} />
            ))}
          </div>
        </section>
        
        {/* Skills */}
        <section className="mb-24 print:break-before-page">
          <SectionTitle>Skills</SectionTitle>
          <div>
            {skills.map((item, idx) => (
              <SkillBlock key={idx} item={item} />
            ))}
          </div>
        </section>
        
        {/* Work Experience */}
        <section className="mb-24 print:break-before-page">
          <SectionTitle>Work Experience</SectionTitle>
          <div>
            {experience.map((item, idx) => (
              <ExperienceBlock key={idx} item={item} />
            ))}
          </div>
        </section>
        
        
        {/* Projects */}
        <section className="mb-24 print:break-before-page">
          <SectionTitle>Projects</SectionTitle>
          <div>
            {projects.map((item, idx) => (
              <ProjectBlock key={idx} item={item} />
            ))}
          </div>
        </section>

        {/* Education */}
        <section className="mb-24">
          <SectionTitle>Education</SectionTitle>
          <div>
            {education.map((item, idx) => (
              <EducationBlock key={idx} item={item} />
            ))}
          </div>
        </section>
                
        {/* Certifications */}
        <section className="mb-24">
          <SectionTitle>Certifications</SectionTitle>
          <div>
            {certifications.map((item, idx) => (
              <CertificationBlock key={idx} item={item} />
            ))}
          </div>
        </section>

        {/* Awards */}
        <section className="mb-24 print:break-before-page">
          <SectionTitle>Awards</SectionTitle>
          <div>
            {awards.map((item, idx) => (
              <AwardBlock key={idx} item={item} />
            ))}
          </div>
        </section>

        {/* Contacts */}
        <section className="pb-20 print:pb-0">
          <SectionTitle>Contacts</SectionTitle>
          <div>
            {contacts.map((item, idx) => (
              <ContactBlock key={idx} item={item} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;