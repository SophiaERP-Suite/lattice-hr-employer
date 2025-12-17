import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { SettingsContext } from "../Contexts";
import latty from "../assets/images/logo/latty.png"
import avatarThumb1 from "../assets/images/avatar/avatar-thumb-001.webp"
import avatarThumb2 from "../assets/images/avatar/avatar-thumb-002.webp"
import avatarThumb3 from "../assets/images/avatar/avatar-thumb-003.webp"
import avatarThumb4 from "../assets/images/avatar/avatar-thumb-004.webp"
import avatarThumb5 from "../assets/images/avatar/avatar-thumb-005.webp"

const Header = () => {
  const { setCategory } = useContext(SettingsContext);

  const handleToggle = () => {
    // @ts-expect-error/jquery
    if (window.toggleSideBar) {
      // @ts-expect-error/jquery
      window.toggleSideBar();
    }
  };

  return (
    <div className="app-header-area">
      <header className="app-header" id="header">
        <div className="app-header-inner">
          <div className="app-header-left">
            <div className="d-flex align-center gap-15">
              <div className="app-header-element">
                <a
                  className="sidebar-toggle-bar"
                  id="sidebarToggle"
                  href="javascript:void(0);"
                  onClick={handleToggle}
                >
                  <div className="sidebar-menu-bar">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                </a>
              </div>
              <div className="app-header-ls-logo">
                {/* large screen logo */}
                <NavLink className="app-header-ls-dark-logo" to="/dashboard">
                  <img
                    src={latty}
                    alt="image"
                  />
                </NavLink>
                <NavLink className="app-header-ls-light-logo" to="/dashboard">
                  <img
                    src={latty}
                    alt="image"
                  />
                </NavLink>
              </div>
              <div className="app-header-mobile-logo">
                <NavLink className="app-header-dark-logo" to="/dashboard">
                  <img
                    src={latty}
                    alt="image"
                  />
                </NavLink>
                <NavLink className="app-header-light-logo" to="/dashboard">
                  <img
                    src={latty}
                    alt="image"
                  />
                </NavLink>
              </div>
            </div>
            <div className="app-header-search d-none d-lg-block">
              <form action="#">
                <input
                  className="form-control"
                  type="text"
                  placeholder="Search..."
                />
                <button type="submit">
                  <i className="ri-search-line"></i>
                </button>
              </form>
            </div>
          </div>
          <div className="app-header-right">
            <div className="app-header-search-modal">
              <button
                type="button"
                className="app-header-circle"
                data-bs-toggle="modal"
                data-bs-target="#searchModal"
              >
                <i className="ri-search-line"></i>
              </button>
            </div>
            <div className="app-header-link support-link">
              <div className="dropdown">
                <a
                  className="dropdown-toggle"
                  href="javascript:void(0);"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <span className="app-header-circle">
                    <i
                      className="ri-customer-service-line"
                      style={{ color: "var(--color-info) !important" }}
                    ></i>
                  </span>
                </a>
              </div>
            </div>

            <div className="app-header-notification">
              <div className="dropdown">
                <a
                  className="dropdown-toggle"
                  href="javascript:void(0);"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <span className="app-header-circle">
                    <i className="ri-notification-line"></i>
                  </span>
                </a>
                <ul className="dropdown-menu">
                  <li className="dropdown-menu-header">
                    <h5>Notification</h5>
                    <span className="badge bg-label-primary">8 New</span>
                  </li>
                  <li className="dropdown-notifications-list card-scrollbar">
                    <ul>
                      <li className="dropdown-notifications-list-item">
                        <div className="avatar">
                          <img
                            className="radius-100"
                            src={avatarThumb1}
                            alt="image not found"
                          />
                        </div>
                        <div className="content">
                          <h6 className="mb-5">New Order Received 🛒</h6>
                          <p className="mb-5">
                            Order #14523 has been placed by John Doe
                          </p>
                          <span className="text-body-secondary">Just now</span>
                        </div>
                        <div className="notifications-actions d-flex direction-column align-center">
                          <a
                            href="javascript:void(0);"
                            className="dropdown-notifications-read d-block pt-5"
                          >
                            <span className="bullet bg-primary"></span>
                          </a>
                          <a
                            href="javascript:void(0);"
                            className="dropdown-notifications-archive"
                          >
                            <i className="ri-close-line"></i>
                          </a>
                        </div>
                      </li>
                      <li className="dropdown-notifications-list-item">
                        <div className="avatar">
                          <img
                            className="radius-100"
                            src={avatarThumb2}
                            alt="image not found"
                          />
                        </div>
                        <div className="content">
                          <h6 className="mb-5">Low Stock Alert ⚠️</h6>
                          <p className="mb-5">
                            Only 3 items left in stock for "Smartwatch Pro X"
                          </p>
                          <span className="text-body-secondary">
                            10 mins ago
                          </span>
                        </div>
                        <div className="notifications-actions d-flex direction-column align-center">
                          <a
                            href="javascript:void(0);"
                            className="dropdown-notifications-read d-block pt-5"
                          >
                            <span className="bullet bg-primary"></span>
                          </a>
                          <a
                            href="javascript:void(0);"
                            className="dropdown-notifications-archive"
                          >
                            <i className="ri-close-line"></i>
                          </a>
                        </div>
                      </li>
                      <li className="dropdown-notifications-list-item">
                        <div className="avatar">
                          <img
                            className="radius-100"
                            src={avatarThumb3}
                            alt="image not found"
                          />
                        </div>
                        <div className="content">
                          <h6 className="mb-5">New Customer Registered 👤</h6>
                          <p className="mb-5">
                            Sarah Williams has joined your store
                          </p>
                          <span className="text-body-secondary">
                            30 mins ago
                          </span>
                        </div>
                        <div className="notifications-actions d-flex direction-column align-center">
                          <a
                            href="javascript:void(0);"
                            className="dropdown-notifications-archive"
                          >
                            <i className="ri-close-line"></i>
                          </a>
                        </div>
                      </li>
                      <li className="dropdown-notifications-list-item">
                        <div className="avatar">
                          <img
                            className="radius-100"
                            src={avatarThumb4}
                            alt="image not found"
                          />
                        </div>
                        <div className="content">
                          <h6 className="mb-5">Product Review ⭐</h6>
                          <p className="mb-5">
                            "Wireless Earbuds" got a new 5-star review
                          </p>
                          <span className="text-body-secondary">
                            1 hour ago
                          </span>
                        </div>
                        <div className="notifications-actions d-flex direction-column align-center">
                          <a
                            href="javascript:void(0);"
                            className="dropdown-notifications-archive"
                          >
                            <i className="ri-close-line"></i>
                          </a>
                        </div>
                      </li>
                      <li className="dropdown-notifications-list-item">
                        <div className="avatar">
                          <img
                            className="radius-100"
                            src={avatarThumb5}
                            alt="image not found"
                          />
                        </div>
                        <div className="content">
                          <h6 className="mb-5">Weekly Sales Report 📈</h6>
                          <p className="mb-5">
                            Your store sales increased by 18% this week
                          </p>
                          <span className="text-body-secondary">
                            3 hours ago
                          </span>
                        </div>
                        <div className="notifications-actions d-flex direction-column align-center">
                          <a
                            href="javascript:void(0);"
                            className="dropdown-notifications-archive"
                          >
                            <i className="ri-close-line"></i>
                          </a>
                        </div>
                      </li>
                    </ul>
                  </li>
                  <li className="dropdown-notifications-btn">
                    <NavLink
                      className="btn btn-primary w-100"
                      to="/notifications"
                    >
                      View all notifications
                    </NavLink>
                  </li>
                </ul>
              </div>
            </div>

            <div className="app-header-notification">
              <div className="dropdown">
                <a
                  className="dropdown-toggle"
                  href="javascript:void(0);"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <span className="app-header-circle">
                    <i className="ri-discuss-line"></i>
                  </span>
                </a>
                <ul className="dropdown-menu">
                  <li className="dropdown-menu-header">
                    <h5>Inbox</h5>
                    <span className="badge bg-label-primary">8 New</span>
                  </li>
                  <li className="dropdown-notifications-list card-scrollbar">
                    <ul>
                      <li className="dropdown-notifications-list-item">
                        <div className="avatar">
                          <img
                            className="radius-100"
                            src={avatarThumb1}
                            alt="image not found"
                          />
                        </div>
                        <div className="content">
                          <h6 className="mb-5">New Order Received 🛒</h6>
                          <p className="mb-5">
                            Order #14523 has been placed by John Doe
                          </p>
                          <span className="text-body-secondary">Just now</span>
                        </div>
                        <div className="notifications-actions d-flex direction-column align-center">
                          <a
                            href="javascript:void(0);"
                            className="dropdown-notifications-read d-block pt-5"
                          >
                            <span className="bullet bg-primary"></span>
                          </a>
                          <a
                            href="javascript:void(0);"
                            className="dropdown-notifications-archive"
                          >
                            <i className="ri-close-line"></i>
                          </a>
                        </div>
                      </li>
                      <li className="dropdown-notifications-list-item">
                        <div className="avatar">
                          <img
                            className="radius-100"
                            src={avatarThumb2}
                            alt="image not found"
                          />
                        </div>
                        <div className="content">
                          <h6 className="mb-5">Low Stock Alert ⚠️</h6>
                          <p className="mb-5">
                            Only 3 items left in stock for "Smartwatch Pro X"
                          </p>
                          <span className="text-body-secondary">
                            10 mins ago
                          </span>
                        </div>
                        <div className="notifications-actions d-flex direction-column align-center">
                          <a
                            href="javascript:void(0);"
                            className="dropdown-notifications-read d-block pt-5"
                          >
                            <span className="bullet bg-primary"></span>
                          </a>
                          <a
                            href="javascript:void(0);"
                            className="dropdown-notifications-archive"
                          >
                            <i className="ri-close-line"></i>
                          </a>
                        </div>
                      </li>
                      <li className="dropdown-notifications-list-item">
                        <div className="avatar">
                          <img
                            className="radius-100"
                            src={avatarThumb3}
                            alt="image not found"
                          />
                        </div>
                        <div className="content">
                          <h6 className="mb-5">New Customer Registered 👤</h6>
                          <p className="mb-5">
                            Sarah Williams has joined your store
                          </p>
                          <span className="text-body-secondary">
                            30 mins ago
                          </span>
                        </div>
                        <div className="notifications-actions d-flex direction-column align-center">
                          <a
                            href="javascript:void(0);"
                            className="dropdown-notifications-archive"
                          >
                            <i className="ri-close-line"></i>
                          </a>
                        </div>
                      </li>
                      <li className="dropdown-notifications-list-item">
                        <div className="avatar">
                          <img
                            className="radius-100"
                            src={avatarThumb4}
                            alt="image not found"
                          />
                        </div>
                        <div className="content">
                          <h6 className="mb-5">Product Review ⭐</h6>
                          <p className="mb-5">
                            "Wireless Earbuds" got a new 5-star review
                          </p>
                          <span className="text-body-secondary">
                            1 hour ago
                          </span>
                        </div>
                        <div className="notifications-actions d-flex direction-column align-center">
                          <a
                            href="javascript:void(0);"
                            className="dropdown-notifications-archive"
                          >
                            <i className="ri-close-line"></i>
                          </a>
                        </div>
                      </li>
                      <li className="dropdown-notifications-list-item">
                        <div className="avatar">
                          <img
                            className="radius-100"
                            src={avatarThumb5}
                            alt="image not found"
                          />
                        </div>
                        <div className="content">
                          <h6 className="mb-5">Weekly Sales Report 📈</h6>
                          <p className="mb-5">
                            Your store sales increased by 18% this week
                          </p>
                          <span className="text-body-secondary">
                            3 hours ago
                          </span>
                        </div>
                        <div className="notifications-actions d-flex direction-column align-center">
                          <a
                            href="javascript:void(0);"
                            className="dropdown-notifications-archive"
                          >
                            <i className="ri-close-line"></i>
                          </a>
                        </div>
                      </li>
                    </ul>
                  </li>
                  <li className="dropdown-notifications-btn">
                    <NavLink className="btn btn-primary w-100" to="/messages">
                      View all messages
                    </NavLink>
                  </li>
                </ul>
              </div>
            </div>

            <div className="app-header-user">
              <div className="dropdown">
                <a
                  className="dropdown-toggle"
                  href="javascript:void(0);"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <div className="author">
                    <div className="author-thumb">
                      <img
                        src={avatarThumb1}
                        alt="user"
                      />
                    </div>
                    <div className="officer-name-div">
                      <h6 className="author-name lh-1">Okoye David</h6>
                      <span>Officer</span>
                    </div>
                  </div>
                </a>
                <ul className="dropdown-menu">
                  <li className="bd-user-info-list">
                    <NavLink to="/profile">
                      <i className="ri-user-line"></i>Profile
                    </NavLink>
                  </li>
                  <li className="bd-user-info-list">
                    <NavLink
                      to="/settings"
                      style={{ cursor: "pointer" }}
                      onClick={() => {
                        setCategory("plans");
                      }}
                    >
                      <i className="ri-bank-card-line"></i>Plans & Billing
                    </NavLink>
                  </li>
                  <li className="bd-user-info-list">
                    <NavLink
                      to="/settings"
                      style={{ cursor: "pointer" }}
                      onClick={() => {
                        setCategory("account");
                      }}
                    >
                      <i className="ri-settings-2-line"></i>Profile Settings
                    </NavLink>
                  </li>
                  <li className="bd-user-info-list">
                    <NavLink to="#">
                      <i className="ri-logout-circle-line"></i>Logout
                    </NavLink>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div className="body__overlay"></div>
    </div>
  );
};

export default Header;
