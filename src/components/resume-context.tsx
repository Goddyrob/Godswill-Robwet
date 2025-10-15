import { createContext, useContext } from "react";

type ResumeContextType = {
  open: () => void;
  close: () => void;
  isOpen: boolean;
};

export const ResumeContext = createContext<ResumeContextType | undefined>(undefined);

export const useResume = (): ResumeContextType => {
  const ctx = useContext(ResumeContext);
  if (!ctx) throw new Error("useResume must be used within a ResumeProvider");
  return ctx;
};

export default null;
