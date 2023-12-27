import React, { useRef, useMemo, useEffect, useCallback } from "react";
import "./styles.css";

export default function ChessPage() {
//   let [gridValues, setGridValues] = useState([]);
  let gridValues = useRef([]);
  const gridNumber = 8;
  const gridVal = useMemo(() => {
    return gridValues.current;
  }, [gridValues]);
  const boxClick = (val, i, j) => {
    console.log({ val, i, j });
    let cpyGridVal = [...gridValues.current];
    console.log("before cpyGridVal", { cpyGridVal, gridValues });
    const rowCells = cpyGridVal.filter((item) => {
      return item.props["data-row"] === i;
    });
    const columnCells = cpyGridVal.filter((item) => {
      return item.props["data-column"] === j;
    });
    console.log("rows and colmns", { rowCells, columnCells });

    let updatedGrid = cpyGridVal.map(({...item}) => {
      if (
        item.props.className?.indexOf("active") >= 0 &&
        (item.props["data-column"] !== j || item.props["data-row"] !== i)
      ) {
        item.props = {...item.props, className: item.props.className?.slice(0, -7)};
        console.log("sliced active class");
      } else if (
        item.props["data-column"] === j ||
        item.props["data-row"] === i
      ) {
        item.props = {...item.props, className: item.props.className + " active"};
        console.log("applied active to", item.props);
      }
      return item;
    });

    //   cpyGridVal.forEach((item) => {
    //       if (
    //           item.props.className?.indexOf("active") < 0 &&
    //           item.props["data-column"] == j
    //       ) {
    //           console.log("applied j active class");
    //           item.props.className += " active";
    //       } else {
    //           console.log("reset to original blacks value");
    //           item.props.className = "blacks";
    //       }
    //       if (
    //           item.props.className?.indexOf("active") < 0 &&
    //           item.props["data-row"] == i
    //       ) {
    //           console.log("applied i active class");
    //           item.props.className += " active";
    //       } else {
    //           console.log("reset to original whites value");
    //           item.props.className = "whites";
    //       }
    //       console.log("item", item);
    //       return item;
    //   });
    console.log("updatedGrid", updatedGrid);
    return gridValues.current = updatedGrid; //setGridValues(cpyGridVal);
  };
  const renderEightSizeGrid = useCallback(() => {
    console.log("called grid func");
    let line = [];
    for (let i = 0; i < gridNumber; i++) {
      for (let j = 0; j < gridNumber; j++) {
        if ((i + j) % 2) {
          line.push(
            <span
              className="whites"
              data-row={i}
              data-column={j}
              onClick={(e) => boxClick("whites", i, j)}
            >
              whites
            </span>
          );
        } else {
          line.push(
            <span
              className="blacks"
              data-row={i}
              data-column={j}
              onClick={(e) => boxClick("blacks", i, j)}
            >
              blacks
            </span>
          );
        }
      }
      line.push(<br />);
    }
    return gridValues.current = line;
    // return line;
    // return setGridValues(line);
  }, [gridValues]);
  useEffect(() => {
    renderEightSizeGrid();
  }, [renderEightSizeGrid]);
  
  
  return (
    <div>
      <div className="chess-eight-grid">{gridVal.map((item, index) => <React.Fragment key={index}>{item}</React.Fragment>)}</div>
    </div>
  );
}
