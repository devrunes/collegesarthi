import React, { useEffect, useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import {useRouter} from 'next/router'
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
import firebase from "firebase";
export default function PdfViewer() {
  // const [numPages, setNumPages] = useState(null);
  // const [pageNumber, setPageNumber] = useState(1);
     const [fileUrl,setFileUrl]=useState();
     const [fileData,setFileData]=useState();
     const router = useRouter();
     const {id}=router.query
     console.log(id)
  // function onDocumentLoadSuccess({ numPages }) {
  //   setNumPages(numPages);
  // }
  // const storage = firebase.storage();
  // storage
  //   .refFromURL(
  //     "gs://collegesarthi-54ff1.appspot.com/Papers/CAT/CAT-2017-Question-Paper-with-Solution-SLOT-1.pdf"
  //   )
  //   .getDownloadURL()
  //   .then((res) => console.log(res));
  // // console.log();
  const storage = firebase.storage();
  const db=firebase.firestore();
  useEffect(()=>{
    const url = db.collection('papers').doc(id).get().then(doc=>{
      setFileData({id:doc.id,...doc.data()})
    })
  },[id])
  
  console.log(fileData?.link)
  // console.log(fileData)
  useEffect(()=>{
    if(fileData){
      storage
      .refFromURL(
        fileData?.link
      )
      .getDownloadURL()
      .then((res) =>{
        console.log(res)
        setFileUrl(res);
      });
    }
   
  },[fileData])
 

  // return (
  //   <div>
  //     <Document
  //       file="https://firebasestorage.googleapis.com/v0/b/collegesarthi-54ff1.appspot.com/o/Papers%2FCAT%2FCAT-2017-Question-Paper-with-Solution-SLOT-1.pdf?alt=media&token=2ef48bb9-8465-4a32-b826-79db684c587d"
  //       onLoadSuccess={onDocumentLoadSuccess}
  //     >
  //       <Page pageNumber={pageNumber} />
  //     </Document>
  //     <p>
  //       Page {pageNumber} of {numPages}
  //     </p>
  //   </div>
  // );

  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
    setPageNumber(1);
  }

  function changePage(offset) {
    setPageNumber((prevPageNumber) => prevPageNumber + offset);
  }

  function previousPage() {
    changePage(-1);
  }

  function nextPage() {
    changePage(1);
  }

  //"https://firebasestorage.googleapis.com/v0/b/collegesarthi-54ff1.appspot.com/o/Papers%2FCAT%2FCAT-2017-Question-Paper-with-Solution-SLOT-1.pdf?alt=media&token=2ef48bb9-8465-4a32-b826-79db684c587d"
  return (
    <>
      <Document
        file={fileUrl&&fileUrl}
        onLoadSuccess={onDocumentLoadSuccess}
      >
        <Page pageNumber={pageNumber} />
      </Document>
      <div>
        <p>
          Page {pageNumber || (numPages ? 1 : "--")} of {numPages || "--"}
        </p>
        <button type="button" disabled={pageNumber <= 1} onClick={previousPage}>
          Previous
        </button>
        <button
          type="button"
          disabled={pageNumber >= numPages}
          onClick={nextPage}
        >
          Next
        </button>
      </div>
    </>
  );
}
