import { IconSets } from "../assets/icons/icons";

interface IconProps {
  content: string;
  className?: string;
}

export const Icon = ({ content, className }: IconProps) => {
  return <img src={IconSets[content]} className={className} alt="" />;
};
