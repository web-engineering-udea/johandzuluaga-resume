interface KnowledgeCardProps {
  Svg: React.FC;
  Title: string;
  Description: string;
}

const KnowledgeCard = ({ Svg, Title, Description }: KnowledgeCardProps) => {
  return (
    <div className='bg-black flex flex-col items-center p-7 gap-5'>
      <div className='w-[80px] h-[80px] fill-hv_yellow'>
        <Svg />
      </div>
      <div className='flex flex-col items-center gap-2'>
        <span className='text-lg font-medium'>{Title}</span>
        <span>{Description}</span>
      </div>
    </div>
  );
};

export { KnowledgeCard };
