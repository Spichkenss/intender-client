import { ComponentProps } from "react";
import { Link } from "@tanstack/react-router";
import { RoutePath } from "@/app/providers";

interface Props extends Omit<ComponentProps<typeof Link>, "to"> {
  to: RoutePath;
}

export const NavLink = (props: Props) => {
  return <Link {...props} />;
};
