interface AttributeProps {
  Key: string;
  Value: string;
}

const Attribute = ({ Key, Value }: AttributeProps) => {
  return (
    <div className='flex flex-row justify-between'>
      <span>{Key}</span>
      <span>{Value}</span>
    </div>
  );
};

export { Attribute };
