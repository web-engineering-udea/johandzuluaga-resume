import { PiIntersectSquareDuotone } from 'react-icons/pi';

interface ExtraSkillProps {
  Skill: string;
}

const ExtraSkill = ({ Skill }: ExtraSkillProps) => {
  return (
    <div className='flex flex-item'>
      <span className='text-hv_yellow text-[14px]'>
        <PiIntersectSquareDuotone />
      </span>
      <span className='mx-1'>{Skill}</span>
    </div>
  );
};

export { ExtraSkill };
