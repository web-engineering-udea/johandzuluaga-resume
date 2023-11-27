import { SkillCard } from './SkillCard';

interface SkillContainerProps {
  Title: string;
  Skills: {
    Id: string;
    Skill: string;
    Progress: string;
  }[];
}

const SkillContainer = ({ Title, Skills }: SkillContainerProps) => {
  return (
    <div className='flex flex-col gap-2 py-3'>
      <span className='font-medium'>{Title}</span>
      {Skills.map((item) => {
        return (
          <SkillCard
            key={item.Id}
            Skill={item.Skill}
            Progress={item.Progress}
          />
        );
      })}
    </div>
  );
};

export { SkillContainer };
