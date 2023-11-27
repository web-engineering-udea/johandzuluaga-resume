interface SkillCardProps {
  Skill: string;
  Progress: string;
}

const SkillCard = ({ Skill, Progress }: SkillCardProps) => {
  const progressBarClass = `bg-hv_yellow w-[${Progress}%] h-[3px] rounded-full debug`;
  return (
    <div className='flex flex-col'>
      <div className='flex flex-row justify-between'>
        <span>{Skill}</span>
        <span>{Progress}%</span>
      </div>
      <div className='w-[220px] h-[8px] rounded-full border-hv_yellow border flex items-center px-[1px]'>
        <div
          className={progressBarClass}
          style={{ width: `${Progress}%` }}
        ></div>
      </div>
    </div>
  );
};

export { SkillCard };
