import { useState } from 'react';
import { BiSolidChevronRight } from 'react-icons/bi';
import { LearnMoreDialog } from './LearnMoreDialog';
import Image from 'next/image';

interface ProjectCardProps {
  PicPath: string;
  Title: string;
  Description: string;
  Article?: string;
  Code?: string;
}

const ProjectCard = ({
  PicPath,
  Title,
  Description,
  Article = '',
  Code = '',
}: ProjectCardProps) => {
  const [dialogOpen, setDialogOpen] = useState<boolean>(false);
  return (
    <div className='flex flex-col w-[310px] h-[474px] bg-black border-r border-b'>
      <div className='w-[310px] h-[300px]'>
        <Image src={PicPath} alt='Graphic ilustration of the project' />
      </div>
      <div className='flex flex-col p-6 gap-3'>
        <span className='text-lg font-medium'>{Title}</span>
        <span>{Description}</span>
        <button
          className='flex flex-row w-fit items-center text-hv_yellow cursor-pointer'
          onClick={() => {
            setDialogOpen(true);
          }}
        >
          <span className='text-lg font-medium'>Learn More</span>
          <BiSolidChevronRight />
        </button>
      </div>
      <LearnMoreDialog
        open={dialogOpen}
        setOpen={setDialogOpen}
        Title={Title}
        Article={Article}
        Code={Code}
      />
    </div>
  );
};

export { ProjectCard };
