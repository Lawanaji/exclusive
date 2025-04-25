export type buttonProps = {
  text: string;
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
  variant?: "primary" | "secondary" | "tertiary" | "ghost" | "link";
  size?: "sm" | "md" | "lg" | "xl" | "2xl";
};
