interface HeaderProps {
  Title: string;
  Description: string;
}

const Header = ({ Title, Description }: HeaderProps) => {
  return (
    <div className='flex flex-col py-11 gap-6 items-center'>
      <span className='font-bold text-3xl'>{Title}</span>
      <span>{Description}</span>
    </div>
  );
};

export { Header };
