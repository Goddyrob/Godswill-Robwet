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

// Use local bundled pdf.worker (copied to /public by postinstall)
pdfjs.GlobalWorkerOptions.workerSrc = '/pdf.worker.min.js';

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
  const [fileUrl, setFileUrl] = useState<string | null>(null);
  const [fileLoading, setFileLoading] = useState(false);
  const [fileError, setFileError] = useState<string | null>(null);
  const [viewerReady, setViewerReady] = useState(false);

  // Fetch blob URL when opening
  async function fetchFile() {
    setFileLoading(true);
    setFileError(null);
    try {
      const res = await fetch("/resume.pdf");
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const blob = await res.blob();
      const url = window.URL.createObjectURL(blob);
      setFileUrl(url);
    } catch (e: unknown) {
      console.error("Failed to fetch resume.pdf", e);
      setFileUrl(null);
      setFileError("Failed to fetch resume.pdf");
    } finally {
      setFileLoading(false);
    }
  }

  // when viewer opens, fetch file; when closed, revoke URL
  React.useEffect(() => {
    setViewerReady(false);
    if (isOpen) fetchFile();
    return () => {
      if (fileUrl) {
        window.URL.revokeObjectURL(fileUrl);
        setFileUrl(null);
      }
    };
  }, [isOpen, fileUrl]);

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

              {/* Toolbar actions: Open, Download, Print */}
              <button
                title="Open in new tab"
                className="px-3 py-1 rounded bg-background"
                onClick={() => window.open('/resume.pdf', '_blank')}
              >
                Open
              </button>

              <button
                title="Download"
                className="px-3 py-1 rounded bg-background"
                onClick={async () => {
                  try {
                    const res = await fetch('/resume.pdf');
                    const blob = await res.blob();
                    const url = window.URL.createObjectURL(blob);
                    const a = document.createElement('a');
                    a.href = url;
                    a.download = 'resume.pdf';
                    document.body.appendChild(a);
                    a.click();
                    a.remove();
                    window.URL.revokeObjectURL(url);
                  } catch (err) {
                    console.error('Download failed', err);
                  }
                }}
              >
                Download
              </button>

              <button
                title="Print"
                className="px-3 py-1 rounded bg-background"
                onClick={() => {
                  const w = window.open('/resume.pdf');
                  if (w) {
                    w.focus();
                    // try to print after load
                    setTimeout(() => {
                      try {
                        w.print();
                      } catch (e) {
                        console.warn('Print not available');
                      }
                    }, 500);
                  }
                }}
              >
                Print
              </button>
            </div>
          </div>

          {fileLoading ? (
            <div className="w-full h-[calc(100%-4.25rem)] flex items-center justify-center">Loading file...</div>
          ) : fileError ? (
            <div className="w-full h-[calc(100%-4.25rem)] flex flex-col items-center justify-center gap-4">
              <div className="text-center">{fileError}</div>
              <div className="flex gap-2">
                <button className="px-4 py-2 rounded bg-background" onClick={() => window.open('/resume.pdf', '_blank')}>Open raw PDF</button>
                <button className="px-4 py-2 rounded bg-background" onClick={() => { fetchFile(); }}>Retry</button>
              </div>
            </div>
          ) : (
            <div className="w-full h-[calc(100%-4.25rem)] flex items-center justify-center">
              {/* Skeleton placeholder to avoid layout shifts */}
              {!viewerReady && (
                <div className="w-[800px] h-[1100px] bg-[#0f1724] rounded shadow-inner animate-pulse"></div>
              )}
              <div className={`absolute inset-0 transition-opacity duration-500 ${viewerReady ? 'opacity-100' : 'opacity-0'}`}>
                <Suspense fallback={<div className="w-full h-full flex items-center justify-center">Loading viewer...</div>}>
                  <LazyResumeViewer file={fileUrl} initialPage={pageNumber} initialScale={scale} onReady={() => setViewerReady(true)} />
                </Suspense>
              </div>

              {/* Loader overlay to hide blinking while loading */}
              {(!viewerReady || fileLoading) && (
                <div className="absolute inset-0 z-50 flex flex-col items-center justify-center bg-gradient-to-b from-black/40 to-black/40">
                  <div className="w-16 h-16 border-4 border-primary rounded-full border-t-transparent animate-spin mb-4" />
                  <div className="text-sm text-muted-foreground">Loading resume…</div>
                </div>
              )}
            </div>
          )}
        </DialogContent>
      </Dialog>
    </ResumeContext.Provider>
  );
};

export default ResumeProvider;
