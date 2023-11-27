import { IconType } from 'react-icons';

interface LinkLogoProps {
  Icon: IconType;
  Link: string;
}

const LinkLogo = ({ Icon, Link }: LinkLogoProps) => {
  return (
    <a
      className='inline-block w-auto bg-hv_yellow rounded-full text-black text-2xl p-2 hover:scale-105 cursor-pointer'
      href={Link}
    >
      <Icon />
    </a>
  );
};

export { LinkLogo };
