import { useContext, useEffect, useState } from "react";
import { SettingsContext } from "../Contexts";
import { NavLink } from "react-router-dom";
import AccountCard from "../components/AccountCard";
import OfferCard from "../components/OfficerCard";
import NotificationCard from "../components/NotificationCard";
import BillingCard from "../components/BillingCard";
import PasswordCard from "../components/PasswordCard";
import PrivacyCard from "../components/PrivacyCard";
import TermsCard from "../components/TermsCard";

const Settings = () => {
  const { category, setCategory } = useContext(SettingsContext);

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
                      <NavLink to="/settings">
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
                      </NavLink>
                    </li>

                    <li className="breadcrumb-item">
                      <NavLink to="/dashboard">Home</NavLink>
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
                      className={`btn ${category === "account" ? "btn-primary" : "btn-light"
                        }`}
                    >
                      Account
                    </a>
                  </li>
                  <li onClick={() => setCategory("officer")}>
                    <a
                      className={`btn ${category === "officer" ? "btn-primary" : "btn-light"
                        }`}
                    >
                      Officer
                    </a>
                  </li>
                  <li onClick={() => setCategory("notifications")}>
                    <a
                      className={`btn ${category === "notifications"
                        ? "btn-primary"
                        : "btn-light"
                        }`}
                    >
                      Notifications
                    </a>
                  </li>
                  <li onClick={() => setCategory("plans")}>
                    <a
                      className={`btn ${category === "plans" ? "btn-primary" : "btn-light"
                        }`}
                    >
                      Plans & Billing
                    </a>
                  </li>

                  <li onClick={() => setCategory("password")}>
                    <a
                      className={`btn ${category === "password" ? "btn-primary" : "btn-light"
                        }`}
                    >
                      Password
                    </a>
                  </li>
                  <li onClick={() => setCategory("terms")}>
                    <a
                      className={`btn ${category === "terms" ? "btn-primary" : "btn-light"
                        }`}
                    >
                      Terms & Conditions
                    </a>
                  </li>
                  <li onClick={() => setCategory("security")}>
                    <a
                      className={`btn ${category === "security" ? "btn-primary" : "btn-light"
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
                <AccountCard />
              </div>
            )}

            {category === "officer" && (
              <div className="col-12">
                <OfferCard />
              </div>
            )}

            {category === "notifications" && (
              <div className="col-12">
                <NotificationCard />
              </div>
            )}

            {category === "plans" && (
              <div className="col-12">
                <BillingCard />
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
                <PasswordCard />
              </div>
            )}

            {category === "terms" && (
              <div className="col-12">
                <TermsCard />
              </div>
            )}

            {category === "security" && (
              <div className="col-12">
                <PrivacyCard />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
