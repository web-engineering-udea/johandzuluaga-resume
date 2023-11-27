interface ButtonProps {
  text: string;
  OnClick?: () => void;
}

const Button = ({ text, OnClick }: ButtonProps) => {
  return (
    <button
      className='bg-hv_yellow px-3 py-1 rounded-lg hover:scale-105'
      onClick={OnClick}
    >
      <span className='text-black text-sm font-semibold'>{text}</span>
    </button>
  );
};

export { Button };
