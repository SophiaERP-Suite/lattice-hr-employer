import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { useState } from "react";

dayjs.extend(relativeTime);



const BillingCard = () => {
  const [details, setDetails] = useState({
    paypal: false,
    visa: false,
    master: false,
    amex: false,
  });

  return (
    <div className="row">
      <div className="col-xl-6 col-lg-6 col-md-6">
        <div className="card">
          <div className="d-flex-items gap-10">
            <div className="payment-icon">
              <img
                src="/Employer/assets/images/payment/paypal.png"
                alt="image not found"
              />
            </div>
            <div className="payment-info">
              <h5 className="mb-5">PayPal</h5>
              <p>Global digital wallet (US)</p>
            </div>
            <label className="payment-switch">
              <input type="checkbox" />
              <span className="slider"></span>
            </label>
          </div>
          <div className="card-body pt-15">
            <button
              className="btn btn-sm btn-outline-primary toggle-details"
              onClick={() =>
                setDetails((prev) => ({
                  ...prev,
                  paypal: !prev.paypal,
                }))
              }
            >
              See Details
            </button>
            <div
              className={`payment-details ${details.paypal ? "show-details" : ""
                }`}
            >
              <table className="table table-borderless text-nowrap w-100">
                <tbody>
                  <tr>
                    <td className="w-50">Name</td>
                    <td className="fw-5 text-heading">
                      John Smith
                    </td>
                  </tr>
                  <tr>
                    <td>Number</td>
                    <td className="fw-5 text-heading">**** 9032</td>
                  </tr>
                  <tr>
                    <td>Expires</td>
                    <td className="fw-5 text-heading">09/2026</td>
                  </tr>
                  <tr>
                    <td>Type</td>
                    <td className="fw-5 text-heading">
                      Mastercard debit card
                    </td>
                  </tr>
                  <tr>
                    <td>Issuer</td>
                    <td className="fw-5 text-heading">
                      GlobalBank
                    </td>
                  </tr>
                  <tr>
                    <td>ID</td>
                    <td className="fw-5 text-heading">
                      id_k9m44xdp723
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <div className="col-xl-6 col-lg-6 col-md-6">
        <div className="card">
          <div className="d-flex-items flex-wrap gap-10">
            <div className="payment-icon">
              <img
                src="/Employer/assets/images/payment/visa.png"
                alt="image not found"
              />
            </div>
            <div className="payment-info">
              <h5 className="mb-5">Visa</h5>
              <p>Credit/Debit Cards (US)</p>
            </div>
            <label className="payment-switch">
              <input type="checkbox" />
              <span className="slider"></span>
            </label>
          </div>
          <div className="card-body pt-15">
            <button
              className="btn btn-sm btn-outline-primary toggle-details"
              onClick={() =>
                setDetails((prev) => ({
                  ...prev,
                  visa: !prev.visa,
                }))
              }
            >
              See Details
            </button>
            <div
              className={`payment-details ${details.visa ? "show-details" : ""
                }`}
            >
              <table className="table table-borderless text-nowrap w-100">
                <tbody>
                  <tr>
                    <td className="w-50">Name</td>
                    <td className="fw-5 text-heading">
                      John Smith
                    </td>
                  </tr>
                  <tr>
                    <td>Number</td>
                    <td className="fw-5 text-heading">**** 6254</td>
                  </tr>
                  <tr>
                    <td>Expires</td>
                    <td className="fw-5 text-heading">08/2026</td>
                  </tr>
                  <tr>
                    <td>Type</td>
                    <td className="fw-5 text-heading">
                      Visa Debit Card
                    </td>
                  </tr>
                  <tr>
                    <td>Issuer</td>
                    <td className="fw-5 text-heading">BANKONE</td>
                  </tr>
                  <tr>
                    <td>ID</td>
                    <td className="fw-5 text-heading">
                      id_k39slg8wq44
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <div className="col-xl-6 col-lg-6 col-md-6">
        <div className="card">
          <div className="d-flex-items flex-wrap gap-10">
            <div className="payment-icon">
              <img
                src="/Employer/assets/images/payment/mastercard.png"
                alt="image not found"
              />
            </div>
            <div className="payment-info">
              <h5 className="mb-5">Mastercard</h5>
              <p>Credit/Debit Cards (US)</p>
            </div>
            <label className="payment-switch">
              <input className="form-check-input" type="checkbox" />
              <span className="slider"></span>
            </label>
          </div>
          <div className="card-body pt-15">
            <button
              className="btn btn-sm btn-outline-primary toggle-details"
              onClick={() =>
                setDetails((prev) => ({
                  ...prev,
                  master: !prev.master,
                }))
              }
            >
              See Details
            </button>
            <div
              className={`payment-details ${details.master ? "show-details" : ""
                }`}
            >
              <table className="table table-borderless text-nowrap w-100">
                <tbody>
                  <tr>
                    <td className="w-50">Name</td>
                    <td className="fw-5 text-heading">
                      John Smith
                    </td>
                  </tr>
                  <tr>
                    <td>Number</td>
                    <td className="fw-5 text-heading">**** 9871</td>
                  </tr>
                  <tr>
                    <td>Expires</td>
                    <td className="fw-5 text-heading">02/2027</td>
                  </tr>
                  <tr>
                    <td>Type</td>
                    <td className="fw-5 text-heading">
                      Mastercard Credit Card
                    </td>
                  </tr>
                  <tr>
                    <td>Issuer</td>
                    <td className="fw-5 text-heading">TRUSTBANK</td>
                  </tr>
                  <tr>
                    <td>ID</td>
                    <td className="fw-5 text-heading">
                      id_g93z7ue1921
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <div className="col-xl-6 col-lg-6 col-md-6">
        <div className="card">
          <div className="d-flex-items flex-wrap gap-10">
            <div className="payment-icon">
              <img
                src="/Employer/assets/images/payment/amex.png"
                alt="image not found"
              />
            </div>
            <div className="payment-info">
              <h5 className="mb-5">American Express</h5>
              <p>Premium Cards (US)</p>
            </div>
            <label className="payment-switch">
              <input type="checkbox" />
              <span className="slider"></span>
            </label>
          </div>
          <div className="card-body pt-15">
            <button
              className="btn btn-sm btn-outline-primary toggle-details"
              onClick={() =>
                setDetails((prev) => ({
                  ...prev,
                  amex: !prev.amex,
                }))
              }
            >
              See Details
            </button>
            <div
              className={`payment-details ${details.amex ? "show-details" : ""
                }`}
            >
              <table className="table table-borderless text-nowrap w-100">
                <tbody>
                  <tr>
                    <td className="w-50">Name</td>
                    <td className="fw-5 text-heading">
                      John Smith
                    </td>
                  </tr>
                  <tr>
                    <td>Number</td>
                    <td className="fw-5 text-heading">**** 3344</td>
                  </tr>
                  <tr>
                    <td>Expires</td>
                    <td className="fw-5 text-heading">11/2029</td>
                  </tr>
                  <tr>
                    <td>Type</td>
                    <td className="fw-5 text-heading">
                      American Express Platinum
                    </td>
                  </tr>
                  <tr>
                    <td>Issuer</td>
                    <td className="fw-5 text-heading">AMEX BANK</td>
                  </tr>
                  <tr>
                    <td>ID</td>
                    <td className="fw-5 text-heading">
                      id_amz8pqe18x3
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
};

export default BillingCard;
