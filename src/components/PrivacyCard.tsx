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



const PrivacyCard = () => {

  return (
    <div>

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

  );
};

export default PrivacyCard;
