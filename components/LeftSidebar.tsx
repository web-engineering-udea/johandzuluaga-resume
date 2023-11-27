import { Attribute } from './LeftSidebar/Attribute';
import { ExtraSkill } from './LeftSidebar/ExtraSkill';
import { SkillContainer } from './LeftSidebar/SkillContainer';
import Image from 'next/image';

const LeftSidebar = () => {
  return (
    <aside className='bg-black w-[305px] fixed left-0 flex flex-col px-10 text-[12px]'>
      <section className='flex flex-col items-center gap-2 py-3'>
        <Image
          className='rounded-full'
          src='/images/propic.jpg'
          height={130}
          width={130}
          alt='Profile Picture'
        />
        <div className='flex flex-col items-center'>
          <span className='font-medium text-lg'>Johan Zuluaga</span>
          <span>Data Scientist</span>
        </div>
      </section>
      <div className='bg-white w-[220px] h-[1.5px] mx-auto'></div>
      <section className='flex flex-col gap-1 py-3'>
        <Attribute Key='Age:' Value='22' />
        <Attribute Key='Residence:' Value='CO' />
        <Attribute Key='Freelance:' Value='Available' />
        <Attribute Key='City:' Value='Medellín' />
      </section>
      <div className='bg-white w-[220px] h-[1.5px] mx-auto'></div>
      <section>
        <SkillContainer
          Title='Languages'
          Skills={[
            {
              Id: '0',
              Skill: 'Spanish',
              Progress: '100',
            },
            {
              Id: '1',
              Skill: 'English',
              Progress: '90',
            },
          ]}
        />
      </section>
      <div className='bg-white w-[220px] h-[1.5px] mx-auto'></div>
      <section>
        <SkillContainer
          Title='Programming Languages'
          Skills={[
            {
              Id: '0',
              Skill: 'Python',
              Progress: '100',
            },
            {
              Id: '1',
              Skill: 'SQL',
              Progress: '90',
            },
            {
              Id: '2',
              Skill: 'JavaScript',
              Progress: '80',
            },
            {
              Id: '3',
              Skill: 'Haskell',
              Progress: '70',
            },
          ]}
        />
      </section>
      <div className='bg-white w-[220px] h-[1.5px] mx-auto'></div>
      <section className='flex flex-col gap-1 py-3'>
        <span className='font-medium'>Extra skills</span>
        <ExtraSkill Skill='Data Visualization' />
        <ExtraSkill Skill='Deep Learning' />
      </section>
    </aside>
  );
};

export { LeftSidebar };
