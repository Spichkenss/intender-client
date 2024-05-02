import {
  ComponentProps, createContext, PropsWithChildren, useContext, useMemo,
} from "react";

interface IButtonContext {
  isLoading?: boolean;
}

const ButtonContext = createContext<IButtonContext>({
  isLoading: false,
});

interface ButtonProps extends ComponentProps<"button">, IButtonContext {}

function Root({ children, isLoading, ...rest }: ButtonProps) {
  const memoizedContextValue: IButtonContext = useMemo(() => ({ isLoading }), [isLoading]);

  return (
    <ButtonContext.Provider value={memoizedContextValue}>
      <button
        type="button"
        {...rest}
      >
        {children}
      </button>
    </ButtonContext.Provider>
  );
}

function ButtonLoader({ children }: PropsWithChildren) {
  const { isLoading } = useContext(ButtonContext);

  return isLoading
    ? children
    : null;
}

function ButtonLabel({ children }: PropsWithChildren) {
  const { isLoading } = useContext(ButtonContext);

  return isLoading
    ? null
    : children;
}

/**
 * This component renders a button.
 *
 * @param {boolean} isLoading.
 * @requires ```Button.Loader``` child if ```isLoading``` passed.
 * @requires ```Button.Label``` child to render body of button.
 * @returns {ReactNode} A React element that renders a button.
 */
export const Button = {
  Root,
  Label: ButtonLabel,
  Loader: ButtonLoader,
};
