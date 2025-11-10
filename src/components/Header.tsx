const Header = () => {
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
                <a className="app-header-ls-dark-logo" href="index.html">
                  <img src="/assets/images/logo/logo-black.svg" alt="image" />
                </a>
                <a className="app-header-ls-light-logo" href="index.html">
                  <img src="/assets/images/logo/logo-white.svg" alt="image" />
                </a>
              </div>
              <div className="app-header-mobile-logo">
                <a className="app-header-dark-logo" href="index.html">
                  <img src="/assets/images/logo/mobile-logo.svg" alt="image" />
                </a>
                <a className="app-header-light-logo" href="index.html">
                  <img
                    src="/assets/images/logo/mobile-logo-light.svg"
                    alt="image"
                  />
                </a>
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
            <div className="app-header-link">
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
                            src="/assets/images/avatar/avatar-thumb-001.webp"
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
                            src="/assets/images/avatar/avatar-thumb-002.webp"
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
                            src="/assets/images/avatar/avatar-thumb-003.webp"
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
                            src="/assets/images/avatar/avatar-thumb-004.webp"
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
                            src="/assets/images/avatar/avatar-thumb-005.webp"
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
                    <a
                      className="btn btn-primary w-100"
                      href="javascript:void(0);"
                    >
                      View all notifications
                    </a>
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
                            src="/assets/images/avatar/avatar-thumb-001.webp"
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
                            src="/assets/images/avatar/avatar-thumb-002.webp"
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
                            src="/assets/images/avatar/avatar-thumb-003.webp"
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
                            src="/assets/images/avatar/avatar-thumb-004.webp"
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
                            src="/assets/images/avatar/avatar-thumb-005.webp"
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
                    <a
                      className="btn btn-primary w-100"
                      href="javascript:void(0);"
                    >
                      View all messages
                    </a>
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
                        src="/assets/images/avatar/avatar-thumb-001.webp"
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
                    <a href="app-user-account.html">
                      <i className="ri-user-line"></i>Profile
                    </a>
                  </li>
                  <li className="bd-user-info-list">
                    <a href="app-user-billing.html">
                      <i className="ri-bank-card-line"></i>Plans & Billing
                    </a>
                  </li>
                  <li className="bd-user-info-list">
                    <a href="app-user-security.html">
                      <i className="ri-settings-2-line"></i>Profile Settings
                    </a>
                  </li>
                  <li className="bd-user-info-list">
                    <a href="auth-signin-basic.html">
                      <i className="ri-logout-circle-line"></i>Logout
                    </a>
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
