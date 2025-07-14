import { Fragment, PropsWithChildren } from "react";
import { ThemeProvider } from "./theme-provider";

export default function BaseProviders({ children }: PropsWithChildren) {
  return (
    <Fragment>
      <ThemeProvider>{children}</ThemeProvider>
    </Fragment>
  );
}
