import React, { useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import { AiOutlineDelete } from "react-icons/ai";
import { useState } from "react";

function SalaryDetailsDeductions({
  deductionTitle,
  setDeductionTitle,
  setDeductionAmount,
  deductionAmount,
  setDeductionHeaderTitle,
  deductionList,
  deductionHeaderTitle,
  setDeductionList,
  setDeductionHeaderAmount,
  totalDeductionAmount,
  setTotalDeductionAmount,
  setTotalDeductionTitle,
}) {
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = {};
    const specialCharactersRegex = /^[!@#$%^&*()?`/~]+$/;
    const numericCharactersRegex = /\d/;

    // deduction title
    if (!deductionTitle.trim()) {
      validationErrors.deductionTitle = "Required";
    }
    if (numericCharactersRegex.test(deductionTitle)) {
      validationErrors.deductionTitle = "Only characters allowed!";
    }

    // deduction amount
    if (!deductionAmount.trim()) {
      validationErrors.deductionAmount = "Required";
    }
    if (isNaN(deductionAmount)) {
      validationErrors.deductionAmount = "Enter numbers";
    }

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      console.log(errors);
      return;
    } else {
      addItem();
      setErrors({});
    }
  };

  // Add item function
  const addItem = () => {
    const newItems = {
      id: uuidv4(),
      deductionTitle,
      deductionAmount,
    };

    setDeductionTitle("");
    setDeductionAmount("");
    setDeductionList([...deductionList, newItems]);
    setErrors({});
  };

  // Total Function
  useEffect(() => {
    let rows = document.querySelectorAll(".deductionAmount1");
    let sum = 0;

    for (let i = 0; i < rows.length; i++) {
      if (rows[i].className === "deductionAmount1") {
        sum += isNaN(rows[i].innerHTML) ? 0 : parseInt(rows[i].innerHTML);
      }
    }
    setTotalDeductionAmount(sum);
  }, [deductionList]);

  // handleEmpIdKeyDown Function
  const handleEmpIdKeyDown = (e, fieldValue) => {
    const keyPressed = e.key;

    if (!isNaN(keyPressed) && keyPressed !== " ") {
      setErrors({
        ...errors,
        [fieldValue]: "Invalid input: Numbers not allowed",
      });
    }

    const specialCharactersRegex = /[!@#$%^&*()?`]/;
    if (specialCharactersRegex.test(keyPressed)) {
      setErrors({
        ...errors,
        [fieldValue]: "Invalid input: Special characters not allowed",
      });
    }
  };

  // handleEmpIdKeyUp
  const handleEmpIdKeyUp = (e, fieldValue) => {
    const keyPressed = e.key;

    const isNumber = /^[0-9]$/.test(keyPressed);
    if (!isNumber) {
      setErrors({
        ...errors,
        [fieldValue]: "Invalid input: Only numbers allowed",
      });
    }
  };

  // Delete Function
  const deleteRow = (id) =>
    setDeductionList(deductionList.filter((row) => row.id !== id));

  return (
    <div>
      <div className=" h-12">
        <h2 className="font-bold text-xl ml-2">Deductions </h2>
      </div>
      {/* Dynamic Header started */}
      <table width="100%">
        <thead className="bg-gray-200">
          <tr>
            <td className="font-bold"></td>
            <td className="font-bold">
              <h3 style={{ marginLeft: "17px" }}>Header title</h3>
            </td>
            <td className="font-bold">
              <h3 style={{ marginLeft: "17px" }}>Header amount</h3>
            </td>
            <td className="font-bold"></td>
          </tr>
          <tr>
            <td className="font-bold"></td>
            <td className="font-bold">
              <input
                type="text"
                id="deductionHeaderTitle"
                className="outline-none rounded mb-2 b"
                defaultValue="Deductions"
                onChange={(e) => setDeductionHeaderTitle(e.target.value)}
                style={{ marginLeft: "17px" }}
                onKeyDown={(e) => handleEmpIdKeyDown(e, "deductionHeaderTitle")}
              />
              {errors.deductionHeaderAmount && (
                <p className="error">{errors.deductionHeaderAmount}</p>
              )}
            </td>
            <td className="font-bold">
              <input
                type="text"
                id="deductionHeaderAmount"
                className="outline-none rounded mb-2"
                defaultValue="Amount"
                onChange={(e) => setDeductionHeaderAmount(e.target.value)}
                onKeyDown={(e) =>
                  handleEmpIdKeyDown(e, "deductionHeaderAmount")
                }
                style={{ marginLeft: "17px" }}
              />
              {errors.deductionHeaderAmount && (
                <p className="error">{errors.deductionHeaderAmount}</p>
              )}
            </td>
            <td className="font-bold"></td>
          </tr>
        </thead>
      </table>
      {/* Dynamic Header Ended */}
      <table width="100%">
        <tbody>
          <tr>
            <td></td>
            <td>
              <input
                type="text"
                id="deductionTitle"
                className="overflow-ellipsis overflow-hidden outline-none"
                value={deductionTitle}
                onChange={(e) => setDeductionTitle(e.target.value)}
                placeholder="Enter title"
                style={{ marginLeft: "17px" }}
                onKeyDown={(e) => handleEmpIdKeyDown(e, "deductionTitle")}
                onFocus={(e) => handleSubmit(e)}
              />
              {errors.deductionTitle && (
                <p className="error">{errors.deductionTitle}</p>
              )}
            </td>

            <td>
              <input
                type="text"
                id="deductionAmount"
                className="overflow-ellipsis overflow-hidden outline-none"
                value={deductionAmount}
                onChange={(e) => setDeductionAmount(e.target.value)}
                placeholder="Enter Amount"
                style={{ marginLeft: "17px" }}
                onKeyDown={(e) => handleEmpIdKeyUp(e, "deductionAmount")}
                onFocus={(e) => handleSubmit(e)}
              />
              {errors.deductionAmount && (
                <p className="error">{errors.deductionAmount}</p>
              )}
            </td>
            <td></td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <td colSpan="4"></td>
          </tr>
        </tfoot>
      </table>
      <button
        className="bg-blue-500 m-5 py-1 text-white px-6 rounded shadow font-bold border-2 border-blue-500 hover:bg-transparent 
                hover:text-blue-500 transition-all duration-300"
        onClick={(e) => {
          handleSubmit(e);
        }}
      >
        Add Item
      </button>

      {/* Table items */}
      <table width="100%">
        {deductionList.map(({ id, deductionTitle, deductionAmount }) => (
          <React.Fragment key={id}>
            <tbody>
              <tr>
                <td>
                  <span style={{ marginLeft: "17px" }}>{deductionTitle}</span>
                </td>
                <td className="deductionAmount1">{deductionAmount}</td>
                <td>
                  <button
                    className="text-red-400 text-xl"
                    onClick={() => deleteRow(id)}
                  >
                    <AiOutlineDelete />
                  </button>
                </td>
              </tr>
            </tbody>
          </React.Fragment>
        ))}
      </table>
      <table width="100%">
        <tbody>
          <tr>
            <td></td>
            <td>
              <input
                type="text"
                id="totalDeductionTitle"
                className="overflow-ellipsis overflow-hidden outline-none"
                onChange={(e) => setTotalDeductionTitle(e.target.value)}
                defaultValue="Total Deductions"
                placeholder="Total deductions"
                style={{ marginLeft: "16px" }}
              />
            </td>

            <td>
              <input
                type="number"
                id="totalDeductionAmount"
                className="overflow-ellipsis overflow-hidden outline-none"
                value={totalDeductionAmount}
                placeholder="Total Amount"
                style={{ marginLeft: "17px" }}
                readOnly
              />
            </td>
            <td>
              <a></a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default SalaryDetailsDeductions;
