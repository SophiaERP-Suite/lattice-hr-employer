// import { Clock, DollarSign } from "lucide-react";
// import { Timesheet } from "../types/timesheet";
// import { fmtNaira, fmt } from "../helpers/formatter";

// export const PayBreakdown = ({ ts }: { ts: Timesheet }) => {
//   if (ts.monthlySalary == null) return null;

//   // Calculate hourly rates if needed (based on monthly salary)
//   // const hourlyRate = ts.dailyRate && ts.standardDays
//   //   ? (ts.monthlySalary / (ts.standardDays * 8))
//   //   : null;

//   return (
//     <div className="card border mt-4" style={{ display: "none" }} >
//       <div className="card-header py-2">
//         <h6 className="mb-0 d-flex align-items-center gap-2">
//           <DollarSign size={16} className="text-success" />
//           Payroll Calculation
//           <span className="badge bg-label-info ms-2 fw-normal">
//             Based on {ts.standardDays ?? "—"} scheduled days
//           </span>
//         </h6>
//       </div>
//       <div className="card-body p-0">
//         {/* Hourly Rate Information */}
//         {hourlyRate && (
//           <div className="px-3 pt-3 pb-2 border-bottom bg-opacity-25">
//             <div className="row align-items-center">
//               <div className="col-md-6">
//                 <small className="text-muted d-block">HOURLY RATE (Regular)</small>
//                 <span className="fw-medium fs-5">{fmtNaira(hourlyRate)}</span>
//               </div>
//               {/* <div className="col-md-6">
//                 <small className="text-muted d-block">OVERTIME RATE</small>
//                 <span className="fw-medium fs-5 text-warning">{fmtNaira(hourlyRate * 1.5)}</span>
//                 <small className="text-muted ms-2">(1.5x)</small>
//               </div> */}
//             </div>
//           </div>
//         )}

//         {/* Detailed Pay Calculation Table - Matching Excel Format */}
//         <table className="table table-sm mb-0">
//           <thead className="table-light">
//             <tr>
//               <th className="ps-3">Category</th>
//               <th className="text-center">Hours</th>
//               <th className="text-center">Rate</th>
//               <th className="text-end pe-3">Amount</th>
//             </tr>
//           </thead>
//           <tbody>
//             {/* Regular Hours */}
//             <tr>
//               <td className="ps-3">Regular Hours</td>
//               <td className="text-center">
//                 <span className="badge bg-label-primary">{ts.totalRegularHrs.toFixed(1)}h</span>
//               </td>
//               <td className="text-center">{fmtNaira(ts.dailyRate ? ts.dailyRate / 8 : 0)}</td>
//               <td className="text-end pe-3 fw-medium">
//                 {/* {fmtNaira(ts.regularPay || 0)} */}

//               </td>
//             </tr>

//             {/* Overtime Hours */}
//             {/* {ts.totalOvertimeHrs > 0 && (
//               <tr>
//                 <td className="ps-3">Overtime Hours</td>
//                 <td className="text-center">
//                   <span className="badge bg-label-warning">{ts.totalOvertimeHrs.toFixed(1)}h</span>
//                 </td>
//                 <td className="text-center">{fmtNaira((ts.dailyRate ? ts.dailyRate / 8 : 0) * 1.5)}</td>
//                 <td className="text-end pe-3 fw-medium text-warning">
//                   {fmtNaira(ts.overtimePay || 0)}
//                 </td>
//               </tr>
//             )} */}

//             {/* Monthly Salary Base */}
//             <tr className="border-top">
//               <td className="ps-3 fw-medium">Monthly Base Salary</td>
//               <td className="text-center">—</td>
//               <td className="text-center">—</td>
//               <td className="text-end pe-3 fw-medium">{fmtNaira(ts.monthlySalary)}</td>
//             </tr>

//             {/* Daily Rate Breakdown */}
//             <tr>
//               <td className="ps-3 text-muted">
//                 Daily Rate
//                 <small className="ms-1">(÷ {ts.standardDays} days)</small>
//               </td>
//               <td className="text-center text-muted">—</td>
//               <td className="text-center text-muted">{fmtNaira(ts.dailyRate)}</td>
//               <td className="text-end pe-3 text-muted">—</td>
//             </tr>

//             {/* Absent Deduction */}
//             {(ts.absentDays ?? 0) > 0 && (
//               <tr>
//                 <td className="ps-3 text-danger">
//                   Absent Deduction
//                   <small className="ms-1">
//                     ({ts.absentDays} day{ts.absentDays !== 1 ? "s" : ""})
//                   </small>
//                 </td>
//                 <td className="text-center text-danger">—</td>
//                 <td className="text-center text-danger">{fmtNaira(ts.dailyRate)}</td>
//                 <td className="text-end pe-3 text-danger">
//                   − {fmtNaira(ts.absentDeduction || 0)}
//                 </td>
//               </tr>
//             )}

//             {/* Final Amount Due */}
//             <tr className="table-success border-top border-2">
//               <td className="ps-3 fw-bold fs-6">AMOUNT DUE THIS PERIOD</td>
//               <td className="text-center">—</td>
//               <td className="text-center">—</td>
//               <td className="text-end pe-3 fw-bold fs-5 text-success">
//                 {fmtNaira(ts.amountDue)}
//               </td>
//             </tr>
//           </tbody>
//         </table>
//       </div>

//       {/* Employee Signature Section - Matching Excel */}
//       {(ts.status === "Approved" || ts.status === "Submitted") && (
//         <div className="card-footer bg-white">
//           <div className="row g-3 align-items-end">
//             <div className="col-md-6">
//               <div className="border-top pt-2 mt-2" style={{ width: "200px" }}>
//                 <small className="text-muted d-block">EMPLOYEE SIGNATURE</small>
//               </div>
//             </div>
//             <div className="col-md-3">
//               <div className="border-top pt-2 mt-2">
//                 <small className="text-muted d-block">DATE</small>
//               </div>
//             </div>
//             <div className="col-md-3">
//               <div className="text-end">
//                 <small className="text-muted d-block">TOTAL PAY</small>
//                 <span className="fw-bold fs-5 text-success">{fmtNaira(ts.amountDue)}</span>
//               </div>
//             </div>
//           </div>

//           {ts.status === "Approved" && ts.approverName && (
//             <div className="row g-3 mt-3">
//               <div className="col-md-6">
//                 <div className="border-top pt-2">
//                   <small className="text-muted d-block">SUPERVISOR SIGNATURE</small>
//                   <span className="fw-medium">{ts.approverName}</span>
//                 </div>
//               </div>
//               <div className="col-md-3">
//                 <div className="border-top pt-2">
//                   <small className="text-muted d-block">DATE</small>
//                   <span>{ts.dateApproved ? fmt(ts.dateApproved) : "—"}</span>
//                 </div>
//               </div>
//               <div className="col-md-3">
//                 <div className="text-end pt-2">
//                   <small className="text-muted d-block">TOTAL HOURS</small>
//                   <span className="fw-medium">{ts.totalHours.toFixed(1)}h</span>
//                 </div>
//               </div>
//             </div>
//           )}
//         </div>
//       )}

//       {/* Footer Note - Matching Excel */}
//       <div className="card-footer py-2">
//         <small className="text-muted d-flex align-items-center gap-1">
//           <Clock size={12} />
//           Regular hours are used to calculate Overtime hours. Cells with non-white background are automatically calculated.
//         </small>
//       </div>
//     </div>
//   );
// };