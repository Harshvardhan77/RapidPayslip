import React from 'react'

function SalarySlip({name,empCode,bankName,BranchName,employeeCode,payslipNumber,accountNumber,branchName,payDays,location,employeeGroup,panNumber}) {
  return (
    <>
<div className="salary-slip">
      <table className="empDetail">
        <tr height="100px" style={{ backgroundColor: '#ADD8E6' }}>
          <td colSpan="4">
            <img src='' height="90px" alt="Company Logo" />
          </td>
          
          <td colSpan="4" className="companyName">SES IT Global Solutions</td>
        </tr>
        <tr>
          <th>Name</th>
          <td>{name}</td>
          <td></td>
          <th>Employee Code</th>
          <td>ABC123</td>
          <td></td>
          <th>Branch Name</th>
          <td>ABC123</td>
        </tr>
        <tr>
          <th>Employee Code</th>
          <td>{empCode}</td>
          <td></td>
          <th>Bank Name</th>
          <td>{bankName}</td>
          <td></td>
          <th>Payslip No.</th>
          <td>{payslipNumber}</td>
        </tr>
        <tr>
          <th>Bank A/C Number</th>
          <td>{accountNumber}</td>
          <td></td>
          <th>Bank Branch</th>
          <td>{branchName}</td>
          <td></td>
          <th>Pay Days</th>
          <td>{payDays}</td>
        </tr>
        <tr>
          <th>Location</th>
          <td>{location}</td>
          <td></td>
          <th>Employee Group</th>
          <td>{employeeGroup}</td>
          <td></td>
          <th>PAN No.</th>
          <td>{panNumber}</td>
        </tr>
        <tr className='myBackground'>
          <th colSpan="2">
            Payments
          </th>
          <th>
            Particular
          </th>
          <th className='table-border-right'>
          Amount (Rs).
          </th>
          <th colspan="2">
            Deductions
          </th>
           <th >
            Particular
         </th>
            <th >
            Amount (Rs.)
      </th>
    </tr>
    <tr>
        <th colspan="2">
            Basic Salary
      </th>
        <td></td>
        <td class="myAlign">
            4935.00
      </td>
        <th colspan="2" >
            Employee Contribution to PF
      </th >
                <td></td>
        <td class="myAlign">
                  00.00
        </td>
              </tr >
              <tr>
        <th colspan="2">
            House Rent Allowance
      </th>
            <td></td>

        <td class="myAlign">
            00.00
      </td>
            <th colspan="2" >
            Employee Contribution to ESIC
      </th >
            <td></td>
           <td class="myAlign">
            00.00
      </td>
              </tr >
              <tr>
                <th colspan="2">
                Statutory Bonus
      </th>
                <td></td>
              <td class="myAlign">
                00.00
      </td>
                <th colspan="2" >
                  Professsional Tax
      </th >
                <td></td>
               <td class="myAlign">
                  00.00
      </td>
              </tr >
              <tr>
                <th colspan="2">
                  Special Allowance
      </th>
                <td></td>
              <td class="myAlign">
                  00.00
      </td>
                <th colspan="2" >
                  Income Tax
      </th >
                <td></td>

                <td class="myAlign">
                  00.00
      </td>
              </tr >
              <tr class="myBackground">
                <th colspan="3">
                  Total Payments
      </th>
                <td class="myAlign">
                  10000
      </td>
                <th colspan="3" >
                  Total Deductions
      </th >
                <td class="myAlign">
                  1000
      </td>
              </tr >
              <tr height="40px">
                <th colspan="2">
                  Gross Salary:
                </th>
                <th>
                </th>
                <td class="table-border-right">
                </td>
                <th colspan="2" class="table-border-bottom" >
                  Net Salary
                </th >
                <td >
                </td>
                <td >
                  XXXX
                </td>
              </tr >
              <tr>
                <td colspan="2">
                  Gross Salary
                </td> <td></td>
                <td class="myAlign">
                  00.00
      </td><td colspan="4"></td>
              </tr >
              <tr>
                <td colspan="2">
                  Aggr of Chapter "PF"
      </td> <td></td>
                <td class="myAlign">
                  00.00
      </td><td colspan="4"></td>
              </tr >
              <tr>
                <td colspan="2">
                  Total Income
      </td> <td></td>
                <td class="myAlign">
                  00.00
      </td>
                <td colspan="4"></td>
              </tr >
              
        
      </table>
    </div>


      
    </>
  )
}

export default SalarySlip
