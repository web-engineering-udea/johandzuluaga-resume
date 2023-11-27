interface EducationCardProps {
  Institution: string;
  Period: string;
  Title: string;
  Description: string;
}

const EducationCard = ({
  Institution,
  Period,
  Title,
  Description,
}: EducationCardProps) => {
  return (
    <div className='flex flex-row py-12'>
      <div className='flex flex-col w-[42%] gap-7'>
        <span className='text-lg font-medium'>{Institution}</span>
        <div className='flex flex-row gap-5'>
          <span>Student</span>
          <span className='bg-hv_yellow px-1 py-[1.5px] text-black text-xs font-medium my-auto'>
            {Period}
          </span>
        </div>
      </div>
      <div className='flex flex-col w-[58%] gap-7'>
        <span className='text-lg font-medium'>{Title}</span>
        <span>{Description}</span>
      </div>
    </div>
  );
};

export { EducationCard };
