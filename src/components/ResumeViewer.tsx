import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { ResumeContext } from "@/components/resume-context";

export const ResumeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const open = () => setIsOpen(true);
  const close = () => setIsOpen(false);

  return (
    <ResumeContext.Provider value={{ open, close, isOpen }}>
      {children}

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="max-w-4xl w-[95vw] h-[85vh] p-0 overflow-hidden">
          <DialogHeader>
            <DialogTitle>Your Resume</DialogTitle>
            <DialogDescription>Preview of the resume — close when finished.</DialogDescription>
          </DialogHeader>
          <div className="w-full h-[calc(100%-4rem)]">
            <iframe src="/resume.pdf" title="Resume" className="w-full h-full" />
          </div>
        </DialogContent>
      </Dialog>
    </ResumeContext.Provider>
  );
};

export default ResumeProvider;
