import { Icon } from '@/assets';

type Props = {
  label: string;
  beforeIcon?: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
};

export const Dropdown = ({ ...props }: Props) => {
  return (
    <div className="relative">
      <div className="cursor-pointer">
        <div className="relative grid grid-cols-dropdown p-base box-border rounded-xl dropdown-anime bg-primary-gray primary-hover">
          <div className="flex items-center pr-2">
            <Icon.DropdownLocation />
          </div>
          <span className="select-none overflow-hidden whitespace-nowrap text-ellipsis pr-2 text-base">
            {props.label}
          </span>
          <div className="transition-transform duration-500 flex items-center grid-cols-3 col-span-3">
            <Icon.DropdownChevron />
          </div>
        </div>
      </div>
    </div>
  );
};
