type Props = {
  text: string;
  variant: 'primary' | 'secondary';
  style?: string;
  disabled?: boolean;
};

export const Button = ({ ...props }: Props) => {
  return (
    <button
      className={`btn-${props.variant} px-[16px] py-[14px] rounded-xl text-base font-semibold ${props.style}`}
      disabled={props.disabled}
    >
      {props.text}
    </button>
  );
};
