import { ReactNode } from "react";

export interface RootProps {
  children: ReactNode
}

export interface ContainerProps extends RootProps {
  className?: string
}
