type Props = {
  text: string;
  variant: 'primary' | 'secondary';
  style?: string;
};

export const Button = ({ ...props }: Props) => {
  return (
    <div>
      <button className={`btn-${props.variant} px-[16px] py-[14px] rounded-xl text-base font-semibold ${props.style}`}>
        {props.text}
      </button>
    </div>
  );
};
