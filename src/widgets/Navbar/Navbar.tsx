import {
  SignedIn, SignedOut, SignInButton, SignOutButton,
} from "@/features/auth";
import { NavLink } from "@/shared/components/NavLink";

export const Navbar = () => {
  return (
    <header>
      <NavLink to="/">Home</NavLink>
      &nbsp;
      <NavLink to="/account">Account</NavLink>
      &nbsp;
      <NavLink to="/auth/sign-in">Sign in</NavLink>
      &nbsp;
      <NavLink to="/auth/sign-up">Sign up</NavLink>
      &nbsp;
      <SignedOut>
        <SignInButton />
      </SignedOut>
      <SignedIn>
        <SignOutButton />
      </SignedIn>
    </header>
  );
};
