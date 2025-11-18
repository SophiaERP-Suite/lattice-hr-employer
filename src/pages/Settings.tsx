import { useContext, useEffect, useState } from "react";
import { SettingsContext } from "../Contexts";

const Settings = () => {
  const { category, setCategory } = useContext(SettingsContext);
  const [details, setDetails] = useState({
    paypal: false,
    visa: false,
    master: false,
    amex: false,
  });

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  return (
    <div className="app-content-area">
      <div className="app-content-wrap">
        <div className="container-fluid">
          <div className="row">
            <div className="col-xl-12">
              <div className="page-title-box d-flex-between flex-wrap gap-15">
                <h1 className="page-title fs-18 lh-1">Settings</h1>
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb breadcrumb-example1 mb-0">
                    <li className="breadcrumb-item">
                      <a href="/settings">
                        Settings
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="15"
                          height="15"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          className="lucide lucide-chevron-right"
                          aria-hidden="true"
                        >
                          <path d="m9 18 6-6-6-6"></path>
                        </svg>
                      </a>
                    </li>

                    <li className="breadcrumb-item">
                      <a href="/dashboard">Home</a>
                    </li>
                  </ol>
                </nav>
              </div>
            </div>
            <div className="col-xl-12">
              <div className="customer-nav mb-25 mobile-nav">
                <ul className="d-flex-items gap-10">
                  <li onClick={() => setCategory("account")}>
                    <a
                      className={`btn ${
                        category === "account" ? "btn-primary" : "btn-light"
                      }`}
                    >
                      Account
                    </a>
                  </li>
                  <li onClick={() => setCategory("officer")}>
                    <a
                      className={`btn ${
                        category === "officer" ? "btn-primary" : "btn-light"
                      }`}
                    >
                      Officer
                    </a>
                  </li>
                  <li onClick={() => setCategory("notifications")}>
                    <a
                      className={`btn ${
                        category === "notifications"
                          ? "btn-primary"
                          : "btn-light"
                      }`}
                    >
                      Notifications
                    </a>
                  </li>
                  <li onClick={() => setCategory("plans")}>
                    <a
                      className={`btn ${
                        category === "plans" ? "btn-primary" : "btn-light"
                      }`}
                    >
                      Plans & Billing
                    </a>
                  </li>

                  <li onClick={() => setCategory("password")}>
                    <a
                      className={`btn ${
                        category === "password" ? "btn-primary" : "btn-light"
                      }`}
                    >
                      Password
                    </a>
                  </li>
                  <li onClick={() => setCategory("security")}>
                    <a
                      className={`btn ${
                        category === "security" ? "btn-primary" : "btn-light"
                      }`}
                    >
                      Security & Privacy
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            {category === "account" && (
              <div className="col-12">
                <div className="card">
                  <div className="card-header">
                    <h5 className="mb-0">Account Settings</h5>
                  </div>
                  <div className="card-body pt-15">
                    <div>
                      <div className="row">
                        <div className="col-12 mb-30 mt-10">
                          <div className="text-center">
                            <div className="avatar avatar-xxl radius-100">
                              <img
                                src="/Employer/assets/images/avatar/avatar-thumb-dummy.png"
                                alt="image not found"
                                id="profileImage"
                                className="radius-100"
                              />
                              <span className="badge rounded-pill bg-primary avatar-badge">
                                <input
                                  type="file"
                                  name="photo"
                                  className="p-absolute w-100 h-100 op-0 pl-0 pr-0"
                                  id="profileImageChange"
                                />
                                <i className="ri-camera-line"></i>
                              </span>
                            </div>
                            <span className="d-block fw-5 text-muted">
                              Company Logo
                            </span>
                          </div>
                        </div>

                        <div className="col-lg-6 mb-15">
                          <label className="form-label">Business Name</label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Enter Business Name"
                          />
                        </div>
                        <div className="col-lg-6 mb-15">
                          <label className="form-label">Business Type</label>
                          <select className="form-control">
                            <option value="technology">Technology / IT</option>
                            <option value="healthcare">Healthcare</option>
                            <option value="education">Education</option>
                            <option value="finance">Finance</option>
                            <option value="manufacturing">Manufacturing</option>
                            <option value="retail">Retail / E-commerce</option>
                            <option value="hospitality">Hospitality</option>
                            <option value="construction">Construction</option>
                            <option value="transport">
                              Transport &amp; Logistics
                            </option>
                          </select>
                        </div>
                        <div className="col-lg-6 mb-15">
                          <label className="form-label">Country</label>
                          <select className="form-control">
                            <option value="nigeria">Nigeria</option>
                            <option value="canada">Canada</option>
                            <option value="usa">United States</option>
                            <option value="uk">United Kingdom</option>
                            <option value="south-africa">South Africa</option>
                            <option value="ghana">Ghana</option>
                          </select>
                        </div>
                        <div className="col-lg-6 mb-15">
                          <label className="form-label">State / County</label>
                          <select className="form-control">
                            <option value="lagos">Lagos</option>
                            <option value="abuja">Abuja (FCT)</option>
                            <option value="rivers">Rivers</option>
                            <option value="oyo">Oyo</option>
                            <option value="kano">Kano</option>
                            <option value="enugu">Enugu</option>
                          </select>
                        </div>
                        <div className="col-lg-6 mb-15">
                          <label className="form-label">City</label>
                          <select className="form-control">
                            <option value="ikeja">Ikeja</option>
                            <option value="lekki">Lekki</option>
                            <option value="surulere">Surulere</option>
                            <option value="victoria-island">
                              Victoria Island
                            </option>
                            <option value="ikorodu">Ikorodu</option>
                            <option value="ajegunle">Ajegunle</option>
                          </select>
                        </div>
                        <div className="col-lg-6 mb-15">
                          <label className="form-label">Postal Code</label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Enter Postal Code"
                          />
                        </div>
                        <div className="col-12 mb-15">
                          <label className="form-label">Official Address</label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Enter Address"
                          />
                        </div>
                        <div className="col-lg-6 mb-15">
                          <label className="form-label">
                            Company Registration Number
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Enter Company Registration Number"
                          />
                        </div>
                        <div className="col-lg-6 mb-15">
                          <label className="form-label">
                            VAT Registration Number
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Enter VAT Registration Number"
                          />
                        </div>
                        <div className="col-lg-6 mb-15">
                          <label className="form-label">Company Size</label>
                          <select className="form-control">
                            <option value="micro">
                              1 - 10 employees (Micro)
                            </option>
                            <option value="small">
                              11 - 50 employees (Small)
                            </option>
                            <option value="medium">
                              51 - 250 employees (Medium)
                            </option>
                            <option value="large">
                              251 - 1000 employees (Large)
                            </option>
                            <option value="enterprise">
                              1000+ employees (Enterprise)
                            </option>
                          </select>
                        </div>
                        <div className="col-lg-6 mb-15">
                          <label className="form-label">Website</label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Enter Website"
                          />
                        </div>
                      </div>

                      <button
                        type="submit"
                        className="mt-30 btn btn-primary w-100"
                      >
                        Update Account Settings
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {category === "officer" && (
              <div className="col-12">
                <div className="card">
                  <div className="card-header">
                    <h5 className="mb-0">Responsibility Officer Settings</h5>
                  </div>
                  <div className="card-body pt-15">
                    <div>
                      <div className="row">
                        <div className="col-lg-6 mb-15">
                          <label className="form-label">First Name</label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Enter First Name"
                          />
                        </div>
                        <div className="col-lg-6 mb-15">
                          <label className="form-label">Last Name</label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Enter Last Name"
                          />
                        </div>
                        <div className="col-lg-6 mb-15">
                          <label className="form-label">Email Address</label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Enter Email Address"
                          />
                        </div>
                        <div className="col-lg-6 mb-15">
                          <label className="form-label">Mobile Number</label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Enter Mobile Number"
                          />
                        </div>

                        <div className="col-12 mb-15">
                          <label className="form-label">Position</label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Enter Position"
                          />
                        </div>
                      </div>

                      <button
                        type="submit"
                        className="mt-30 btn btn-primary w-100"
                      >
                        Update Officer Settings
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {category === "notifications" && (
              <div className="col-12">
                <div className="card">
                  <div className="card-header">
                    <div className="">
                      <h4 className="mb-1">Notification Settings</h4>
                      <p className="text-muted">
                        Customize how you receive notifications across channels.
                      </p>
                    </div>
                  </div>
                  <div className="card-body pt-15">
                    <div className="table-responsive">
                      <table className="table table-hover table-bordered text-center text-nowrap">
                        <thead>
                          <tr>
                            <th className="text-start ps-3">
                              Notification Type
                            </th>
                            <th>Email</th>
                            <th>SMS</th>
                            <th>Push</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="text-start ps-3">
                              Job Notifications
                            </td>
                            <td>
                              <input type="checkbox" checked />
                            </td>
                            <td>
                              <input
                                className="form-check-input"
                                type="checkbox"
                              />
                            </td>
                            <td>
                              <input type="checkbox" checked />
                            </td>
                          </tr>
                          <tr>
                            <td className="text-start ps-3">
                              {" "}
                              Work & Attendance Notifications
                            </td>
                            <td>
                              <input type="checkbox" checked />
                            </td>
                            <td>
                              <input type="checkbox" checked />
                            </td>
                            <td>
                              <input
                                className="form-check-input"
                                type="checkbox"
                              />
                            </td>
                          </tr>
                          <tr>
                            <td className="text-start ps-3">
                              Payment Notifications
                            </td>
                            <td>
                              <input type="checkbox" checked />
                            </td>
                            <td>
                              <input
                                className="form-check-input"
                                type="checkbox"
                              />
                            </td>
                            <td>
                              <input type="checkbox" checked />
                            </td>
                          </tr>
                          <tr>
                            <td className="text-start ps-3">
                              System Notifications
                            </td>
                            <td>
                              <input
                                className="form-check-input"
                                type="checkbox"
                              />
                            </td>
                            <td>
                              <input
                                className="form-check-input"
                                type="checkbox"
                              />
                            </td>
                            <td>
                              <input type="checkbox" checked />
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <div className="d-flex justify-content-end gap-10 mt-15">
                      <button className="btn btn-sm btn-danger">Discard</button>
                      <button className="btn btn-sm btn-success">
                        Update Preferences
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {category === "plans" && (
              <div className="col-12">
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
                          className={`payment-details ${
                            details.paypal ? "show-details" : ""
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
                          className={`payment-details ${
                            details.visa ? "show-details" : ""
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
                          className={`payment-details ${
                            details.master ? "show-details" : ""
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
                          className={`payment-details ${
                            details.amex ? "show-details" : ""
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
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    marginTop: "20px",
                  }}
                >
                  <div className="col-lg-6">
                    <div className="card d-flex-center gradient-color gap-16">
                      <div className="card-body text-white text-center">
                        <span className="d-block fs-16 mb-5">
                          Unlock Premium
                        </span>
                        <h2 className="mb-5 text-white">Upgrade to PRO</h2>
                        <span className="text-white fs-14">
                          Get access to all features
                        </span>
                        <div className="mt-10">
                          <button className="btn btn-light text-primary fw-600">
                            Upgrade Now{" "}
                            <i className="ri-arrow-right-line ml-5"></i>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {category === "password" && (
              <div className="col-12">
                <div className="card">
                  <div className="card-header">
                    <h5 className="mb-0">Change Password</h5>
                  </div>
                  <div className="card-body pt-15">
                    <div>
                      <div className="row">
                        <div className="col-12 mb-15">
                          <label className="form-label">Current Password</label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Enter Current Password"
                          />
                        </div>
                        <div className="col-12 mb-15">
                          <label className="form-label">New Password</label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Enter New Password"
                          />
                        </div>

                        <div className="col-12 mb-15">
                          <label className="form-label">Confirm Password</label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Confirm New Password"
                          />
                        </div>
                      </div>

                      <button
                        type="submit"
                        className="mt-30 btn btn-primary w-100"
                      >
                        Update Password
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {category === "security" && (
              <div className="col-12">
                <div className="card">
                  <div className="card-header d-flex justify-content-between align-items-center">
                    <h5 className="mb-0">Two-Step Verification</h5>
                    <span className="badge bg-label-success">Enabled</span>
                  </div>
                  <div className="card-body pt-15">
                    <p className="mb-15">
                      Add an extra layer of security to your account using
                      multiple verification methods.
                    </p>
                    <ul className="list-unstyled mb-15">
                      <li>
                        <i className="ri-checkbox-circle-line text-success me-2"></i>
                        Email Verification
                        <span className="text-muted">(Enabled)</span>
                      </li>
                      <li>
                        <i className="ri-checkbox-circle-line text-success me-2"></i>
                        Authenticator App
                        <span className="text-muted">(Enabled)</span>
                      </li>
                      <li>
                        <i className="ri-checkbox-circle-line text-success me-2"></i>
                        Phone Number Verification{" "}
                        <span className="text-muted">
                          (Verified: +101-1XXXXXX78)
                        </span>
                      </li>
                    </ul>
                    <button className="btn btn-outline-primary btn-sm me-2">
                      Manage Methods
                    </button>
                    <button className="btn btn-outline-danger btn-sm">
                      Disable Two-Step
                    </button>
                  </div>
                </div>

                <div className="card">
                  <div className="card-header">
                    <h5 className="mb-0">Recent Devices</h5>
                  </div>
                  <div className="card-body pt-15">
                    <ul className="list-group list-group-flush">
                      <li className="list-group-item d-flex justify-content-between align-items-center">
                        <div>
                          <strong>Chrome · Windows</strong>
                          <div className="text-muted small">
                            New York, NY · Active Now
                          </div>
                        </div>
                        <span className="badge bg-label-success">Current</span>
                      </li>
                      <li className="list-group-item d-flex justify-content-between align-items-center">
                        <div>
                          <strong>Safari · iPhone</strong>
                          <div className="text-muted small">
                            San Francisco, CA · 2 days ago
                          </div>
                        </div>
                        <button className="btn btn-sm btn-outline-danger">
                          Sign Out
                        </button>
                      </li>
                      <li className="list-group-item d-flex justify-content-between align-items-center">
                        <div>
                          <strong>Firefox · MacOS</strong>
                          <div className="text-muted small">
                            Chicago, IL · 5 days ago
                          </div>
                        </div>
                        <button className="btn btn-sm btn-outline-danger">
                          Sign Out
                        </button>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
