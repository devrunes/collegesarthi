import dynamic from "next/dynamic";

const DynamicComponentWithNoSSR = dynamic(
  () => import("../../../components/PdfViewer/PdfViewer"),
  {
    ssr: false,
  }
);

const comp = () => <DynamicComponentWithNoSSR />;
export default comp;
