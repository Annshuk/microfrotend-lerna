import { PDFViewer } from '@react-pdf/renderer';

import Button from "./Button";
import { ReactPdf } from './ReactPdf/ReactPdf'

const App = () =>
  <>
    <Button />
    <PDFViewer>
      <ReactPdf />
    </PDFViewer>
  </>;


export default App;
