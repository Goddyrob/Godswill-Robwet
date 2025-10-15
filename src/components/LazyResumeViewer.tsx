import React, { useState, useEffect } from "react";
import { Document, Page, pdfjs } from "react-pdf";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

export const LazyResumeViewer: React.FC<{
  file?: string | null;
  initialPage?: number;
  initialScale?: number;
  onReady?: () => void;
}> = ({ file, initialPage = 1, initialScale = 1, onReady }) => {
  const [numPages, setNumPages] = useState<number | null>(null);
  const [pageNumber, setPageNumber] = useState(initialPage);
  const [scale, setScale] = useState(initialScale);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setPageNumber(initialPage);
    setScale(initialScale);
  }, [initialPage, initialScale]);

  function onDocumentLoadSuccess({ numPages: nextNumPages }: { numPages: number }) {
    setNumPages(nextNumPages);
    setError(null);
    if (onReady) onReady();
  }

  function onDocumentLoadError(err: any) {
    console.error("Failed to load PDF", err);
    setError("Failed to load PDF file.");
  }

  if (!file) {
    return <div className="w-full h-[calc(100%-4.25rem)] flex items-center justify-center">No file provided.</div>;
  }

  return (
    <div className="w-full h-[calc(100%-4.25rem)] overflow-auto flex justify-center items-start p-4 bg-[#0b1220]">
      {error ? (
        <div className="text-center p-8">{error}</div>
      ) : (
        <Document file={file} onLoadSuccess={onDocumentLoadSuccess} onLoadError={onDocumentLoadError} loading={<div className="text-center p-8">Loading...</div>}>
          <Page pageNumber={pageNumber} scale={scale} width={800} />
        </Document>
      )}
    </div>
  );
};

export default LazyResumeViewer;
