import { ComponentProps } from "react";

interface ButtonProps extends ComponentProps<"button"> {}

export function Button(props: ButtonProps) {
  return (
    <button
      type="button"
      {...props}
    />
  );
}
