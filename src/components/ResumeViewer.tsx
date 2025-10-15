import React, { useState, Suspense, lazy } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { ResumeContext } from "@/components/resume-context";
const LazyResumeViewer = lazy(() => import("./LazyResumeViewer"));
import { Document, Page, pdfjs } from "react-pdf";

// Point pdfjs to the worker
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

export const ResumeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [numPages, setNumPages] = useState<number | null>(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [scale, setScale] = useState(1.0);

  const open = () => {
    setIsOpen(true);
    setPageNumber(1);
  };
  const close = () => setIsOpen(false);

  function onDocumentLoadSuccess({ numPages: nextNumPages }: { numPages: number }) {
    setNumPages(nextNumPages);
  }

  return (
    <ResumeContext.Provider value={{ open, close, isOpen }}>
      {children}

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="max-w-6xl w-[95vw] h-[90vh] p-0 overflow-hidden">
          <DialogHeader>
            <DialogTitle>Your Resume</DialogTitle>
            <DialogDescription>Preview of the resume — close when finished.</DialogDescription>
          </DialogHeader>

          <div className="flex items-center gap-2 p-3 bg-muted">
            <button
              className="px-3 py-1 rounded bg-background"
              onClick={() => setPageNumber((n) => Math.max(1, (n || 1) - 1))}
              disabled={pageNumber <= 1}
            >
              Prev
            </button>
            <div className="text-sm">{pageNumber} / {numPages ?? "?"}</div>
            <button
              className="px-3 py-1 rounded bg-background"
              onClick={() => setPageNumber((n) => Math.min((numPages || 1), (n || 1) + 1))}
              disabled={numPages ? pageNumber >= numPages : false}
            >
              Next
            </button>
            <div className="ml-auto flex items-center gap-2">
              <button className="px-2 py-1 rounded bg-background" onClick={() => setScale((s) => Math.max(0.5, s - 0.1))}>-</button>
              <div className="text-sm">{Math.round(scale * 100)}%</div>
              <button className="px-2 py-1 rounded bg-background" onClick={() => setScale((s) => Math.min(2, s + 0.1))}>+</button>
            </div>
          </div>

          <Suspense fallback={<div className="w-full h-[calc(100%-4.25rem)] flex items-center justify-center">Loading viewer...</div>}>
            <LazyResumeViewer initialPage={pageNumber} initialScale={scale} />
          </Suspense>
        </DialogContent>
      </Dialog>
    </ResumeContext.Provider>
  );
};

export default ResumeProvider;
