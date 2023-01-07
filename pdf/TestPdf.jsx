import React from "react";
import { useRef } from "react";
import ReactPrint from "react-to-print";

const TestPdf = () => {
  const ref = useRef();

  const a = ["a", "b", "c"];

  return (
    <div>
      <div style={{ display: "none" }}>
        <h1 ref={ref}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam
          consectetur deleniti distinctio, sunt iure vitae praesentium,
          consequatur voluptatem ullam error esse dolor, quae aspernatur hic!
          Earum tempore culpa ullam ut.
          <div>
            {a.map((item) => (
              <div>{item}</div>
            ))}
          </div>
        </h1>
      </div>
      <ReactPrint
        trigger={() => <button>Print</button>}
        content={() => ref.current}
      />
    </div>
  );
};

export default TestPdf;
