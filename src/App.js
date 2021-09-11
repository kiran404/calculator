import "./styles.css";
import React, { useState, useEffect } from "react";

export default function App() {
  const [fnum, setfNum] = useState("");
  const [operator, setOperator] = useState("");
  const [snum, setSnum] = useState("");
  const [displayedNum, setDisplayedNum] = useState("");
  let dispItem = [7, 8, 9, "Del", 4, 5, 6, "+", 1, 2, 3, "-", ".", 0, "/", "x", "Reset", "="];

  useEffect(() => {
    // let dNum = fnum + operator + snum;
    let dNum = `${fnum}${operator}${snum}`
    setDisplayedNum(dNum);
  }, [fnum, snum, operator]);

  const numberPressed = (e) => {
    let val = e.target.value;

    if (!isNaN(val) && !operator) {
      let n = fnum + val;
      setfNum(n);
      // setDisplayedNum(n);
    } else {
      if (!isNaN(val)) {
        let n = snum + val;
        setSnum(n);
      } else {
        let res;
        if (val === "=") {
          switch (operator) {
            case "+":
              res = +fnum + +snum;

              break;
            case "-":
              res = +fnum - +snum;

              break;
            case "x":
              res = +fnum * +snum;

              break;
            case "/":
              res = +fnum / +snum;
              break;
            default:
              res = 0;
          }
          // setfNum('');
          setfNum(`${res}`);
          setSnum("");
          setOperator("");
          setDisplayedNum(res);
        } else {
          if (val === "Reset") {
            setfNum("");
            setSnum("");
            setOperator("");
          } else if (val === "Del") {
            if (operator) {
              if (snum) {
                let x = snum.split("");
                x.pop();
                setSnum(x.join(""));
              } else {
                setOperator("");
              }
            } else {
              let x = fnum.split("");
              x.pop();
              setfNum(x.join(""));
            }
          } else if (val === ".") {
            if (operator) {
              if (snum) {
                setSnum(snum + val);
              } else {
                setSnum("0.");
              }
            } else {
              if (fnum) {
                setfNum(fnum + val);
              } else {
                setfNum("0.");
              }
            }
          } else {
            setOperator(val);
          }
        }
      }
    }
  };

  return (
    <div className="container">
      <h2 className="text">calc</h2>

      <div className="inner1">{displayedNum}</div>
      <div className="inner2">
        <div className="buttons">
          {dispItem.map((item) => {
            return (
              <button
                key={item}
                value={item}
                className={`nums  ${(item === "Del" || item === "Reset") && "espNum"
                  }`}
                onClick={numberPressed}
              >
                {item}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}








































// import "./styles.css";
// import React, { useState, useEffect } from "react";

// export default function App() {
//   const [fnum, setfNum] = useState("");
//   const [snum, setSnum] = useState("");
//   const [operator, setOperator] = useState("");
//   const [displayedNum, setDisplayedNum] = useState("");
//   let dispItem = [7, 8, 9, 4, 5, 6, 1, 2, 3, "+", 0, "-", "*", "/", "=", "Clear"];

//   useEffect(() => {
//     let dNum = fnum + operator + snum;
//     setDisplayedNum(dNum);
//   }, [fnum, snum, operator]);

//   const numberPressed = (e) => {
//     let val = e.target.value;

//     if (!isNaN(val) && !operator) {
//       let n = fnum + val;
//       setfNum(n);
//       setDisplayedNum(n);
//     } else {
//       if (!isNaN(val)) {
//         let n = snum + val;
//         setSnum(n);
//       } else {
//         let res;
//         if (val === "=") {
//           switch (operator) {
//             case "+":
//               res = +fnum + +snum;
//               setfNum(res);
//               setSnum("");
//               setOperator("");
//               setDisplayedNum(res);
//               break;
//             case "-":
//               res = +fnum - +snum;
//               setfNum(res);
//               setSnum("");
//               setOperator("");
//               setDisplayedNum(res);
//               break;
//             case "*":
//               res = +fnum * +snum;
//               setfNum(res);
//               setSnum("");
//               setOperator("");
//               setDisplayedNum(res);
//               break;
//             case "/":
//               res = +fnum / +snum;
//               setfNum(res);
//               setSnum("");
//               setOperator("");
//               setDisplayedNum(res);
//               break;
//             default:
//               res = 0;
//           }
//         } else {
//           if (val === "Clear") {
//             setfNum("");
//             setSnum("");
//             setOperator("");
//           } else {
//             setOperator(val);
//           }
//         }
//       }
//     }
//   };

//   return (
//     <div className="container">
//       <div className="inner1">{displayedNum}</div>
//       <div className="inner2">
//         <div className="buttons">
//           {dispItem.map((item) => {
//             return (
//               <button
//                 key={item}
//                 value={item}
//                 className="nums"
//                 onClick={numberPressed}
//               >
//                 {item}
//               </button>
//             );
//           })}
//         </div>
//       </div>
//     </div>
//   );
// }
