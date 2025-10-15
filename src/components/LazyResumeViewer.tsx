import React, { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

export const LazyResumeViewer: React.FC<{ initialPage?: number; initialScale?: number }> = ({ initialPage = 1, initialScale = 1 }) => {
  const [numPages, setNumPages] = useState<number | null>(null);
  const [pageNumber, setPageNumber] = useState(initialPage);
  const [scale, setScale] = useState(initialScale);

  function onDocumentLoadSuccess({ numPages: nextNumPages }: { numPages: number }) {
    setNumPages(nextNumPages);
  }

  return (
    <div className="w-full h-[calc(100%-4.25rem)] overflow-auto flex justify-center items-start p-4 bg-[#0b1220]">
      <Document file="/resume.pdf" onLoadSuccess={onDocumentLoadSuccess} loading={<div className="text-center p-8">Loading...</div>}>
        <Page pageNumber={pageNumber} scale={scale} width={800} />
      </Document>
    </div>
  );
};

export default LazyResumeViewer;
