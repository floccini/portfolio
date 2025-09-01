import { ProjectSection } from '../../components/Project';
import { projects } from '../projects';
import { experiences } from '../experiences';
import { hobbies } from '../hobbies';
import { HobbiesSection } from './hobbies.section';
import { TimelineSection } from './timeline-section';

export const sections = [
  {
    title: 'Timeline',
    content: (
      <div className="space-y-4 mb-8">
        {experiences.map((item) => (
          <TimelineSection key={item.title + item.date} experience={item} />
        ))}
      </div>
    ),
  },
  {
    title: 'Projects',
    content: (
      <div className="space-y-4">
        {projects.map((project) => (
          <ProjectSection key={project.title} project={project} />
        ))}
      </div>
    ),
  },
  {
    title: 'Hobbies',
    content: (
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
        {hobbies.map((hobby) => (
          <HobbiesSection key={hobby.title} hobby={hobby} />
        ))}
      </div>
    ),
  },
];
