import type { GlobalProvider } from "@ladle/react";
import "../src/styles/reset.css"

export const Provider: GlobalProvider = ({ children }) => <>{children}</>;
