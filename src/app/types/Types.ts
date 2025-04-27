export type buttonProps = {
  text: string;
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
  variant?: "primary" | "secondary" | "tertiary" | "ghost" | "link";
  size?: "sm" | "md" | "lg" | "xl" | "2xl";
};

export type cardProps = {
  title: string;
  description: string;
  image: string;
  price: number;
  discountPrice?: number;
  rating?: number;
  onClick?: () => void;
  className?: string;
  discount?: number;
};

export type HeaderProps = {
  title: string;
  className?: string;
  children?: React.ReactNode;
};
