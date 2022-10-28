import React from "react";
import Pdf from "react-to-pdf";

const ref = React.createRef();
const PdfFile = ({ course }) => {
  return (
    <div>
      <div>
        <Pdf targetRef={ref} filename="course-details.pdf">
          {({ toPdf }) => <button onClick={toPdf}>Generate Pdf</button>}
        </Pdf>
      </div>
      <div ref={ref}>
        <h1>Hello CodeSandbox</h1>
        <h2>Start editing to see some magic happen!</h2>
      </div>
    </div>
  );
};

export default PdfFile;
