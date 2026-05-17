import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { NavLink } from "react-router-dom";
import { Eye, Pen, CheckCheck, EyeOff, Users, BriefcaseBusiness } from "lucide-react";
import Hashids from "hashids";
import { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import { PublishJob } from "../api/JobApi";
import { getEmployerDetails } from "../api/EmployerApi";
import { EmployerDetailsDto } from "../types/employer";

dayjs.extend(relativeTime);



const AccountCard = () => {

  return (
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
    </div>);
};

export default AccountCard;
