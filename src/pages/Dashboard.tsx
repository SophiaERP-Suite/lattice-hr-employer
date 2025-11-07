const Dashboard = () => {
  return (
    <div className="app-content-area">
      <div className="app-content-wrap">
        <div className="container-fluid">
          <div className="row overflow-hidden">
            <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6">
              <div className="card">
                <div className="card-body mini-card-body d-flex align-center gap-16">
                  <div className="avatar avatar-xl bg-primary-transparent text-primary">
                    <i className="ri-shopping-bag-3-line fs-42"></i>
                  </div>
                  <div className="card-content">
                    <span className="d-block fs-16 mb-5">Total Orders</span>
                    <h2 className="mb-5">98.5k</h2>
                    <span className="text-success">
                      +1.24%
                      <i className="ri-arrow-up-line ml-5 d-inline-block"></i>
                    </span>
                    <span className="fs-12 text-muted ml-5">This week</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6">
              <div className="card">
                <div className="card-body mini-card-body d-flex align-center gap-16">
                  <div className="avatar avatar-xl bg-info-transparent text-info">
                    <i className="ri-user-line fs-42"></i>
                  </div>
                  <div className="card-content">
                    <span className="d-block fs-16 mb-5">New Users</span>
                    <h2 className="mb-5">12.3k</h2>
                    <span className="text-success">
                      +0.87%
                      <i className="ri-arrow-up-line ml-5 d-inline-block"></i>
                    </span>
                    <span className="fs-12 text-muted ml-5">This week</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6">
              <div className="card">
                <div className="card-body mini-card-body d-flex align-center gap-16">
                  <div className="avatar avatar-xl bg-danger-transparent text-danger">
                    <i className="ri-box-3-line fs-42"></i>
                  </div>
                  <div className="card-content">
                    <span className="d-block fs-16 mb-5">
                      Available Products
                    </span>
                    <h2 className="mb-5">5,230</h2>
                    <span className="text-danger">
                      -0.34%
                      <i className="ri-arrow-down-line ml-5 d-inline-block"></i>
                    </span>
                    <span className="fs-12 text-muted ml-5">This week</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6">
              <div className="card">
                <div className="card-body mini-card-body d-flex align-center gap-16">
                  <div className="avatar avatar-xl bg-success-transparent text-success">
                    <i className="ri-wallet-3-line fs-42"></i>
                  </div>
                  <div className="card-content">
                    <span className="d-block fs-16 mb-5">Net Profit</span>
                    <h2 className="mb-5">$8.6k</h2>
                    <span className="text-success">
                      +2.05%
                      <i className="ri-arrow-up-line ml-5 d-inline-block"></i>
                    </span>
                    <span className="fs-12 text-muted ml-5">This week</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-xxl-6 col-xl-12">
              <div className="card">
                <div className="card-header justify-between">
                  <h4 className="">Revenue Report</h4>
                  <div className="card-dropdown">
                    <div className="dropdown">
                      <a
                        className="card-dropdown-icon"
                        href="javascript:void(0);"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <i className="ri-more-2-fill"></i>
                      </a>
                      <div className="dropdown-menu">
                        <a className="dropdown-item" href="javascript:void(0);">
                          This Week
                        </a>
                        <a className="dropdown-item" href="javascript:void(0);">
                          Last Week
                        </a>
                        <a className="dropdown-item" href="javascript:void(0);">
                          This Month
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card-body pt-15">
                  <div id="order-status"></div>
                </div>
              </div>
            </div>
            <div className="col-xxl-3 col-xl-6 col-lg-6 col-md-6">
              <div className="card">
                <div className="card-header justify-between">
                  <h4 className="">Sales by Locations</h4>
                  <div className="card-dropdown">
                    <div className="dropdown">
                      <a
                        className="card-dropdown-icon"
                        href="javascript:void(0);"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <i className="ri-more-2-fill"></i>
                      </a>
                      <div className="dropdown-menu">
                        <a className="dropdown-item" href="javascript:void(0);">
                          This Week
                        </a>
                        <a className="dropdown-item" href="javascript:void(0);">
                          Last Week
                        </a>
                        <a className="dropdown-item" href="javascript:void(0);">
                          This Month
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card-body pt-15">
                  <div id="seles-countries"></div>
                  <div className="bd-progress-wrapper">
                    <div className="single-progress mb-10">
                      <div className="d-flex-between mb-5">
                        <h6 className="fs-14">USA</h6>
                        <span className="progress-number">70%</span>
                      </div>
                      <div className="progress">
                        <div
                          className="progress-bar bg-primary"
                          role="progressbar"
                          style={{ width: "70%" }}
                          aria-valuenow={70}
                          aria-valuemin={0}
                          aria-valuemax={100}
                        ></div>
                      </div>
                    </div>

                    <div className="single-progress mb-10">
                      <div className="d-flex-between mb-5">
                        <h6 className="fs-14">Palestine</h6>
                        <span className="progress-number">85%</span>
                      </div>
                      <div className="progress">
                        <div
                          className="progress-bar bg-secondary"
                          role="progressbar"
                          style={{ width: "85%" }}
                          aria-valuenow={85}
                          aria-valuemin={0}
                          aria-valuemax={100}
                        ></div>
                      </div>
                    </div>

                    <div className="single-progress mb-10">
                      <div className="d-flex-between mb-5">
                        <h6 className="fs-14">Brazil</h6>
                        <span className="progress-number">60%</span>
                      </div>
                      <div className="progress">
                        <div
                          className="progress-bar bg-info"
                          role="progressbar"
                          style={{ width: "60%" }}
                          aria-valuenow={60}
                          aria-valuemin={0}
                          aria-valuemax={100}
                        ></div>
                      </div>
                    </div>

                    <div className="single-progress">
                      <div className="d-flex-between mb-5">
                        <h6 className="fs-14">Ireland</h6>
                        <span className="progress-number">50%</span>
                      </div>
                      <div className="progress">
                        <div
                          className="progress-bar bg-success"
                          role="progressbar"
                          style={{ width: "50%" }}
                          aria-valuenow={50}
                          aria-valuemin={0}
                          aria-valuemax={100}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xxl-3 col-xl-6 col-lg-6 col-md-6">
              <div className="card-carousel p-relative">
                <div className="card-slide-top">
                  <h4 className="mb-10 text-black">Trending Product</h4>
                  <span className="badge bg-label-dark">
                    <span className="text-success mr-5">8.5%</span> Than Last
                    Week
                  </span>
                </div>
                <div className="swiper trendingProduct p-relative">
                  <div className="swiper-wrapper">
                    <div className="swiper-slide">
                      <div className="card-slide-wrapper p-relative">
                        <div className="card-slide-thumb">
                          <img
                            src="/assets/images/product/product-details1.webp"
                            alt="image not found"
                          />
                        </div>
                        <div className="card-slide-bottom">
                          <h5 className="text-white mb-10">
                            <a href="javascript:void(0);">Iphone 15 Pro Max</a>
                          </h5>
                          <div className="bd-price">
                            <span className="current-price">$1925.00</span>
                            <span className="old-price">$1925.00</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className="card-slide-wrapper p-relative">
                        <div className="card-slide-thumb">
                          <img
                            src="/assets/images/product/product-details2.webp"
                            alt="image not found"
                          />
                        </div>
                        <div className="card-slide-bottom">
                          <h5 className="text-white mb-10">
                            <a href="javascript:void(0);">Iphone 15 Pro Max</a>
                          </h5>
                          <div className="bd-price">
                            <span className="current-price">$1925.00</span>
                            <span className="old-price">$1925.00</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className="card-slide-wrapper p-relative">
                        <div className="card-slide-thumb">
                          <img
                            src="/assets/images/product/product-details3.webp"
                            alt="image not found"
                          />
                        </div>
                        <div className="card-slide-bottom">
                          <h5 className="text-white mb-10">
                            <a href="javascript:void(0);">Iphone 15 Pro Max</a>
                          </h5>
                          <div className="bd-price">
                            <span className="current-price">$1925.00</span>
                            <span className="old-price">$1925.00</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card-slide-pagination tranding">
                    <div className="bd-pagination"></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xxl-6 col-xl-12">
              <div className="card">
                <div className="card-header justify-between">
                  <h4 className="">Top Level Seller</h4>
                  <div className="card-dropdown">
                    <div className="dropdown">
                      <a
                        className="card-dropdown-icon"
                        href="javascript:void(0);"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <i className="ri-more-2-fill"></i>
                      </a>
                      <div className="dropdown-menu">
                        <a className="dropdown-item" href="javascript:void(0);">
                          This Week
                        </a>
                        <a className="dropdown-item" href="javascript:void(0);">
                          Last Week
                        </a>
                        <a className="dropdown-item" href="javascript:void(0);">
                          This Month
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card-body pt-15">
                  <div className="card-scrollbar">
                    <div className="vendor-box-wrap">
                      <div className="vendor-box p-relative">
                        <div className="vendor-content">
                          <div className="d-flex-between">
                            <div className="d-flex gap-15">
                              <div className="vendor-thumb">
                                <img
                                  src="/assets/images/avatar/avatar-thumb-001.webp"
                                  alt="image not found"
                                />
                              </div>
                              <div className="">
                                <h5 className="mb-5">Tech Solutions Inc.</h5>
                                <span className="text-body">
                                  Electronics Vendor
                                </span>
                              </div>
                            </div>
                            <div className="card-dropdown">
                              <div className="dropdown">
                                <a
                                  className="card-dropdown-icon"
                                  href="javascript:void(0);"
                                  role="button"
                                  data-bs-toggle="dropdown"
                                  aria-expanded="false"
                                >
                                  <i className="ri-more-2-fill"></i>
                                </a>
                                <div className="dropdown-menu">
                                  <a
                                    className="dropdown-item"
                                    href="javascript:void(0);"
                                  >
                                    View Orders
                                  </a>
                                  <a
                                    className="dropdown-item"
                                    href="javascript:void(0);"
                                  >
                                    Contact
                                  </a>
                                  <a
                                    className="dropdown-item"
                                    href="javascript:void(0);"
                                  >
                                    Reports
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="vendor-content mb-10">
                            <span className="d-block mb-5">
                              Monthly Revenue
                            </span>
                            <div className="d-flex flex-wrap gap-10">
                              <h3 className="">$8,750</h3>
                              <div className="">
                                <span className="text-success">
                                  +3.2%
                                  <i className="ri-arrow-up-line ml-5 d-inline-block"></i>
                                </span>
                                <span className="fs-12 text-muted ml-5">
                                  This month
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="vendor-chart">
                          <div id="widgetChartYear"></div>
                        </div>
                      </div>
                      <div className="vendor-box p-relative">
                        <div className="vendor-content">
                          <div className="d-flex-between">
                            <div className="d-flex gap-15">
                              <div className="vendor-thumb">
                                <img
                                  src="/assets/images/avatar/avatar-thumb-002.webp"
                                  alt="image not found"
                                />
                              </div>
                              <div className="">
                                <h5 className="mb-5">Fashion Trends Ltd.</h5>
                                <span className="text-body">
                                  Clothing Supplier
                                </span>
                              </div>
                            </div>
                            <div className="card-dropdown">
                              <div className="dropdown">
                                <a
                                  className="card-dropdown-icon"
                                  href="javascript:void(0);"
                                  role="button"
                                  data-bs-toggle="dropdown"
                                  aria-expanded="false"
                                >
                                  <i className="ri-more-2-fill"></i>
                                </a>
                                <div className="dropdown-menu">
                                  <a
                                    className="dropdown-item"
                                    href="javascript:void(0);"
                                  >
                                    View Orders
                                  </a>
                                  <a
                                    className="dropdown-item"
                                    href="javascript:void(0);"
                                  >
                                    Contact
                                  </a>
                                  <a
                                    className="dropdown-item"
                                    href="javascript:void(0);"
                                  >
                                    Reports
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="vendor-content mb-10">
                            <span className="d-block mb-5">
                              Monthly Revenue
                            </span>
                            <div className="d-flex flex-wrap gap-10">
                              <h3 className="">$12,300</h3>
                              <div className="">
                                <span className="text-success">
                                  +5.1%
                                  <i className="ri-arrow-up-line ml-5 d-inline-block"></i>
                                </span>
                                <span className="fs-12 text-muted ml-5">
                                  This month
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="vendor-chart">
                          <div id="widgetChartYear2"></div>
                        </div>
                      </div>
                      <div className="vendor-box p-relative">
                        <div className="vendor-content">
                          <div className="d-flex-between">
                            <div className="d-flex gap-15">
                              <div className="vendor-thumb">
                                <img
                                  src="/assets/images/avatar/avatar-thumb-003.webp"
                                  alt="image not found"
                                />
                              </div>
                              <div className="">
                                <h5 className="mb-5">Home Essentials Co.</h5>
                                <span className="text-body">
                                  Furniture Vendor
                                </span>
                              </div>
                            </div>
                            <div className="card-dropdown">
                              <div className="dropdown">
                                <a
                                  className="card-dropdown-icon"
                                  href="javascript:void(0);"
                                  role="button"
                                  data-bs-toggle="dropdown"
                                  aria-expanded="false"
                                >
                                  <i className="ri-more-2-fill"></i>
                                </a>
                                <div className="dropdown-menu">
                                  <a
                                    className="dropdown-item"
                                    href="javascript:void(0);"
                                  >
                                    View Orders
                                  </a>
                                  <a
                                    className="dropdown-item"
                                    href="javascript:void(0);"
                                  >
                                    Contact
                                  </a>
                                  <a
                                    className="dropdown-item"
                                    href="javascript:void(0);"
                                  >
                                    Reports
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="vendor-content mb-10">
                            <span className="d-block mb-5">
                              Monthly Revenue
                            </span>
                            <div className="d-flex flex-wrap gap-10">
                              <h3 className="">$6,450</h3>
                              <div className="">
                                <span className="text-success">
                                  +2.8%
                                  <i className="ri-arrow-up-line ml-5 d-inline-block"></i>
                                </span>
                                <span className="fs-12 text-muted ml-5">
                                  This month
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="vendor-chart">
                          <div id="widgetChartYear3"></div>
                        </div>
                      </div>
                      <div className="vendor-box p-relative">
                        <div className="vendor-content">
                          <div className="d-flex-between">
                            <div className="d-flex gap-15">
                              <div className="vendor-thumb">
                                <img
                                  src="/assets/images/avatar/avatar-thumb-004.webp"
                                  alt="image not found"
                                />
                              </div>
                              <div className="">
                                <h5 className="mb-5">Office Supplies Pro</h5>
                                <span className="text-body">
                                  Stationery Vendor
                                </span>
                              </div>
                            </div>
                            <div className="card-dropdown">
                              <div className="dropdown">
                                <a
                                  className="card-dropdown-icon"
                                  href="javascript:void(0);"
                                  role="button"
                                  data-bs-toggle="dropdown"
                                  aria-expanded="false"
                                >
                                  <i className="ri-more-2-fill"></i>
                                </a>
                                <div className="dropdown-menu">
                                  <a
                                    className="dropdown-item"
                                    href="javascript:void(0);"
                                  >
                                    View Orders
                                  </a>
                                  <a
                                    className="dropdown-item"
                                    href="javascript:void(0);"
                                  >
                                    Contact
                                  </a>
                                  <a
                                    className="dropdown-item"
                                    href="javascript:void(0);"
                                  >
                                    Reports
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="vendor-content mb-10">
                            <span className="d-block mb-5">
                              Monthly Revenue
                            </span>
                            <div className="d-flex flex-wrap gap-10">
                              <h3 className="">$4,920</h3>
                              <div className="">
                                <span className="text-success">
                                  +1.9%
                                  <i className="ri-arrow-up-line ml-5 d-inline-block"></i>
                                </span>
                                <span className="fs-12 text-muted ml-5">
                                  This month
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="vendor-chart">
                          <div id="widgetChartYear4"></div>
                        </div>
                      </div>
                      <div className="vendor-box p-relative">
                        <div className="vendor-content">
                          <div className="d-flex-between">
                            <div className="d-flex gap-15">
                              <div className="vendor-thumb">
                                <img
                                  src="/assets/images/avatar/avatar-thumb-005.webp"
                                  alt="image not found"
                                />
                              </div>
                              <div className="">
                                <h5 className="mb-5">Global Foods Import</h5>
                                <span className="text-body">
                                  Food Distributor
                                </span>
                              </div>
                            </div>
                            <div className="card-dropdown">
                              <div className="dropdown">
                                <a
                                  className="card-dropdown-icon"
                                  href="javascript:void(0);"
                                  role="button"
                                  data-bs-toggle="dropdown"
                                  aria-expanded="false"
                                >
                                  <i className="ri-more-2-fill"></i>
                                </a>
                                <div className="dropdown-menu">
                                  <a
                                    className="dropdown-item"
                                    href="javascript:void(0);"
                                  >
                                    View Orders
                                  </a>
                                  <a
                                    className="dropdown-item"
                                    href="javascript:void(0);"
                                  >
                                    Contact
                                  </a>
                                  <a
                                    className="dropdown-item"
                                    href="javascript:void(0);"
                                  >
                                    Reports
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="vendor-content mb-10">
                            <span className="d-block mb-5">
                              Monthly Revenue
                            </span>
                            <div className="d-flex flex-wrap gap-10">
                              <h3 className="">$15,680</h3>
                              <div className="">
                                <span className="text-success">
                                  +7.3%
                                  <i className="ri-arrow-up-line ml-5 d-inline-block"></i>
                                </span>
                                <span className="fs-12 text-muted ml-5">
                                  This month
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="vendor-chart">
                          <div id="widgetChartYear5"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xxl-6 col-xl-12">
              <div className="card">
                <div className="card-header justify-between">
                  <h4 className="">Best Selling Products</h4>
                  <div className="card-dropdown">
                    <div className="dropdown">
                      <a
                        className="card-dropdown-icon"
                        href="javascript:void(0);"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <i className="ri-more-2-fill"></i>
                      </a>
                      <div className="dropdown-menu">
                        <a className="dropdown-item" href="javascript:void(0);">
                          This Week
                        </a>
                        <a className="dropdown-item" href="javascript:void(0);">
                          Last Week
                        </a>
                        <a className="dropdown-item" href="javascript:void(0);">
                          This Month
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card-body pt-15">
                  <div className="table-responsive">
                    <table className="table text-nowrap">
                      <thead className="table-light">
                        <tr>
                          <th>Product</th>
                          <th>Price</th>
                          <th>Order</th>
                          <th>Available</th>
                          <th>Total</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            <div className="d-flex align-items-center gap-10">
                              <div className="avatar">
                                <img
                                  className="radius-6"
                                  src="/assets/images/product/item7.png"
                                  alt="image not found"
                                />
                              </div>
                              <h6 className="text-heading fw-6">
                                MacBook Pro M2
                              </h6>
                            </div>
                          </td>
                          <td className="text-heading">$1999.00</td>
                          <td className="text-muted">12</td>
                          <td className="text-muted">341</td>
                          <td className="text-heading">$24000.00</td>
                        </tr>
                        <tr>
                          <td>
                            <div className="d-flex align-items-center gap-10">
                              <div className="avatar">
                                <img
                                  className="radius-6"
                                  src="/assets/images/product/item8.png"
                                  alt="image not found"
                                />
                              </div>
                              <h6 className="text-heading fw-6">
                                Home Speakers
                              </h6>
                            </div>
                          </td>
                          <td className="text-heading">$1999.00</td>
                          <td className="text-muted">12</td>
                          <td className="text-muted">341</td>
                          <td className="text-heading">$24000.00</td>
                        </tr>
                        <tr>
                          <td>
                            <div className="d-flex align-items-center gap-10">
                              <div className="avatar">
                                <img
                                  className="radius-6"
                                  src="/assets/images/product/item9.png"
                                  alt="image not found"
                                />
                              </div>
                              <h6 className="text-heading fw-6">
                                Kitchen Appliance
                              </h6>
                            </div>
                          </td>
                          <td className="text-heading">$1999.00</td>
                          <td className="text-muted">12</td>
                          <td>
                            <span className="badge bg-label-danger">
                              Out of Stock
                            </span>
                          </td>
                          <td className="text-heading">$24000.00</td>
                        </tr>
                        <tr>
                          <td>
                            <div className="d-flex align-items-center gap-10">
                              <div className="avatar">
                                <img
                                  className="radius-6"
                                  src="/assets/images/product/item10.png"
                                  alt="image not found"
                                />
                              </div>
                              <h6 className="text-heading fw-6">
                                Air Conditioners
                              </h6>
                            </div>
                          </td>
                          <td className="text-heading">$1999.00</td>
                          <td className="text-muted">12</td>
                          <td className="text-muted">341</td>
                          <td className="text-heading">$24000.00</td>
                        </tr>
                        <tr>
                          <td>
                            <div className="d-flex align-items-center gap-10">
                              <div className="avatar">
                                <img
                                  className="radius-6"
                                  src="/assets/images/product/item11.png"
                                  alt="image not found"
                                />
                              </div>
                              <h6 className="text-heading fw-6">
                                Gaming Consoles
                              </h6>
                            </div>
                          </td>
                          <td className="text-heading">$1999.00</td>
                          <td className="text-muted">12</td>
                          <td>
                            <span className="badge bg-label-success">
                              Sale 30% off
                            </span>
                          </td>
                          <td className="text-heading">$24000.00</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xxl-4 col-xl-6 col-lg-6">
              <div className="card height-equal">
                <div className="card-header justify-between">
                  <h4 className="">Recent Transactions</h4>
                  <div className="card-dropdown">
                    <div className="dropdown">
                      <a
                        className="card-dropdown-icon"
                        href="javascript:void(0);"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <i className="ri-more-2-fill"></i>
                      </a>
                      <div className="dropdown-menu">
                        <a className="dropdown-item" href="javascript:void(0);">
                          This Week
                        </a>
                        <a className="dropdown-item" href="javascript:void(0);">
                          Last Week
                        </a>
                        <a className="dropdown-item" href="javascript:void(0);">
                          This Month
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card-body pt-15">
                  <ul className="transactions-list">
                    <li className="d-flex-between flex-xxs-wrap gap-15 mb-15">
                      <div className="d-flex align-center">
                        <div className="badge square fs-18 bg-label-primary py-10 mr-10">
                          <i className="ri-bank-card-line"></i>
                        </div>
                        <div>
                          <h6 className="fs-14">Order #DN-78945</h6>
                          <span className="text-muted lh-1">
                            Visa •••• 4215 • 12/25
                          </span>
                        </div>
                      </div>
                      <div className="text-right">
                        <h6 className="text-success mb-5">$249.99</h6>
                        <span className="text-body-secondary">Completed</span>
                      </div>
                    </li>

                    <li className="d-flex-between flex-xxs-wrap gap-15 mb-15">
                      <div className="d-flex align-center">
                        <div className="badge square fs-18 bg-label-primary py-10 mr-10">
                          <i className="ri-paypal-line"></i>
                        </div>
                        <div>
                          <h6 className="fs-14">Order #DN-78944</h6>
                          <span className="text-muted lh-1">
                            PayPal •{" "}
                            <a
                              href="https://demo.topylo.com/cdn-cgi/l/email-protection"
                              className="__cf_email__"
                              data-cfemail="225751475062475a434f524e470c414d4f"
                            >
                              [email&#160;protected]
                            </a>
                          </span>
                        </div>
                      </div>
                      <div className="text-right">
                        <h6 className="text-warning mb-5">$129.50</h6>
                        <span className="text-body-secondary">Processing</span>
                      </div>
                    </li>

                    <li className="d-flex-between flex-xxs-wrap gap-15 mb-15">
                      <div className="d-flex align-center">
                        <div className="badge square fs-18 bg-label-primary py-10 mr-10">
                          <i className="ri-bank-line"></i>
                        </div>
                        <div>
                          <h6 className="fs-14">Order #DN-78943</h6>
                          <span className="text-muted lh-1">
                            Bank Transfer • Chase
                          </span>
                        </div>
                      </div>
                      <div className="text-right">
                        <h6 className="text-danger mb-5">$89.99</h6>
                        <span className="text-body-secondary">Failed</span>
                      </div>
                    </li>

                    <li className="d-flex-between flex-xxs-wrap gap-15 mb-15">
                      <div className="d-flex align-center">
                        <div className="badge square fs-18 bg-label-primary py-10 mr-10">
                          <i className="ri-bit-coin-line"></i>
                        </div>
                        <div>
                          <h6 className="fs-14">Order #DN-78942</h6>
                          <span className="text-muted lh-1">
                            Bitcoin • 3 confirmations
                          </span>
                        </div>
                      </div>
                      <div className="text-right">
                        <h6 className="text-success mb-5">$1,450.00</h6>
                        <span className="text-body-secondary">Completed</span>
                      </div>
                    </li>

                    <li className="d-flex-between flex-xxs-wrap gap-15 mb-15">
                      <div className="d-flex align-center">
                        <div className="badge square fs-18 bg-label-primary py-10 mr-10">
                          <i className="ri-refund-2-line"></i>
                        </div>
                        <div>
                          <h6 className="fs-14">Refund #RF-58721</h6>
                          <span className="text-muted lh-1">
                            Original Order #DN-78940
                          </span>
                        </div>
                      </div>
                      <div className="text-right">
                        <h6 className="text-info mb-5">-$65.25</h6>
                        <span className="text-body-secondary">Refunded</span>
                      </div>
                    </li>
                    <li className="d-flex-between flex-xxs-wrap gap-15 mb-15">
                      <div className="d-flex align-center">
                        <div className="badge square fs-18 bg-label-primary py-10 mr-10">
                          <i className="ri-apple-line"></i>
                        </div>
                        <div>
                          <h6 className="fs-14">Order #DN-78941</h6>
                          <span className="text-muted lh-1">
                            Apple Pay •••• 8792
                          </span>
                        </div>
                      </div>
                      <div className="text-right">
                        <h6 className="text-success mb-5">$179.99</h6>
                        <span className="text-body-secondary">Completed</span>
                      </div>
                    </li>

                    <li className="d-flex-between flex-xxs-wrap gap-15 mb-15">
                      <div className="d-flex align-center">
                        <div className="badge square fs-18 bg-label-primary py-10 mr-10">
                          <i className="ri-alert-line"></i>
                        </div>
                        <div>
                          <h6 className="fs-14">Order #DN-78940</h6>
                          <span className="text-muted lh-1">
                            Dispute • Partial Refund
                          </span>
                        </div>
                      </div>
                      <div className="text-right">
                        <h6 className="text-danger mb-5">-$49.99</h6>
                        <span className="text-body-secondary">Disputed</span>
                      </div>
                    </li>
                  </ul>
                  <div className="d-flex-between stats-card mt-30">
                    <div className="text-center">
                      <h3 className="text-success mb-5">$8,245.60</h3>
                      <p className="text-muted fs-12">Total Revenue</p>
                    </div>
                    <div className="text-center">
                      <h3 className="text-primary mb-5">42</h3>
                      <p className="text-muted fs-12">Transactions</p>
                    </div>
                    <div className="text-center">
                      <h3 className="text-warning mb-5">3</h3>
                      <p className="text-muted fs-12">Pending</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xxl-3 col-xl-6 col-lg-6">
              <div className="card height-equal">
                <div className="card-header justify-between">
                  <h4 className="">Top Customer</h4>
                  <div className="card-dropdown">
                    <div className="dropdown">
                      <a
                        className="card-dropdown-icon"
                        href="javascript:void(0);"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <i className="ri-more-2-fill"></i>
                      </a>
                      <div className="dropdown-menu">
                        <a className="dropdown-item" href="javascript:void(0);">
                          This Week
                        </a>
                        <a className="dropdown-item" href="javascript:void(0);">
                          Last Week
                        </a>
                        <a className="dropdown-item" href="javascript:void(0);">
                          This Month
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card-body pt-15">
                  <ul>
                    <li className="d-flex-between mb-15">
                      <div className="d-flex-items gap-10">
                        <div className="avatar avatar-md radius-100">
                          <img
                            className="radius-100"
                            src="/assets/images/avatar/avatar-thumb-002.webp"
                            alt="image not found"
                          />
                        </div>
                        <div>
                          <h6 className="mb-0">John Dawson</h6>
                          <span className="text-muted">Premium Member</span>
                        </div>
                      </div>
                      <div className="text-end">
                        <div className="fs-16 fw-6">15</div>
                        <span className="fs-14 text-muted">Order</span>
                      </div>
                    </li>
                    <li className="d-flex-between mb-15">
                      <div className="d-flex-items gap-10">
                        <div className="avatar avatar-md radius-100 bg-primary-transparent text-primary fw-7">
                          MD
                        </div>
                        <div>
                          <h6 className="mb-0">John Dawson</h6>
                          <span className="text-muted">Premium Member</span>
                        </div>
                      </div>
                      <div className="text-end">
                        <div className="fs-16 fw-6">15</div>
                        <span className="fs-14 text-muted">Order</span>
                      </div>
                    </li>
                    <li className="d-flex-between mb-15">
                      <div className="d-flex-items gap-10">
                        <div className="avatar avatar-md radius-100">
                          <img
                            className="radius-100"
                            src="/assets/images/avatar/avatar-thumb-002.webp"
                            alt="image not found"
                          />
                        </div>
                        <div>
                          <h6 className="mb-0">John Dawson</h6>
                          <span className="text-muted">Premium Member</span>
                        </div>
                      </div>
                      <div className="text-end">
                        <div className="fs-16 fw-6">15</div>
                        <span className="fs-14 text-muted">Order</span>
                      </div>
                    </li>
                    <li className="d-flex-between mb-15">
                      <div className="d-flex-items gap-10">
                        <div className="avatar avatar-md radius-100 bg-primary-transparent text-primary fw-7">
                          MD
                        </div>
                        <div>
                          <h6 className="mb-0">John Dawson</h6>
                          <span className="text-muted">Premium Member</span>
                        </div>
                      </div>
                      <div className="text-end">
                        <div className="fs-16 fw-6">15</div>
                        <span className="fs-14 text-muted">Order</span>
                      </div>
                    </li>
                    <li className="d-flex-between mb-15">
                      <div className="d-flex-items gap-10">
                        <div className="avatar avatar-md radius-100">
                          <img
                            className="radius-100"
                            src="/assets/images/avatar/avatar-thumb-002.webp"
                            alt="image not found"
                          />
                        </div>
                        <div>
                          <h6 className="mb-0">John Dawson</h6>
                          <span className="text-muted">Premium Member</span>
                        </div>
                      </div>
                      <div className="text-end">
                        <div className="fs-16 fw-6">15</div>
                        <span className="fs-14 text-muted">Order</span>
                      </div>
                    </li>
                    <li className="d-flex-between mb-15">
                      <div className="d-flex-items gap-10">
                        <div className="avatar avatar-md radius-100 bg-primary-transparent text-primary fw-7">
                          MD
                        </div>
                        <div>
                          <h6 className="mb-0">John Dawson</h6>
                          <span className="text-muted">Premium Member</span>
                        </div>
                      </div>
                      <div className="text-end">
                        <div className="fs-16 fw-6">15</div>
                        <span className="fs-14 text-muted">Order</span>
                      </div>
                    </li>
                    <li className="d-flex-between mb-15">
                      <div className="d-flex-items gap-10">
                        <div className="avatar avatar-md radius-100">
                          <img
                            className="radius-100"
                            src="/assets/images/avatar/avatar-thumb-002.webp"
                            alt="image not found"
                          />
                        </div>
                        <div>
                          <h6 className="mb-0">John Dawson</h6>
                          <span className="text-muted">Premium Member</span>
                        </div>
                      </div>
                      <div className="text-end">
                        <div className="fs-16 fw-6">15</div>
                        <span className="fs-14 text-muted">Order</span>
                      </div>
                    </li>
                    <li className="d-flex-between">
                      <div className="d-flex-items gap-10">
                        <div className="avatar avatar-md radius-100 bg-primary-transparent text-primary fw-7">
                          MD
                        </div>
                        <div>
                          <h6 className="mb-0">John Dawson</h6>
                          <span className="text-muted">Premium Member</span>
                        </div>
                      </div>
                      <div className="text-end">
                        <div className="fs-16 fw-6">15</div>
                        <span className="fs-14 text-muted">Order</span>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-xxl-5 col-xl-12">
              <div className="card height-equal">
                <div className="card-header justify-between">
                  <h4 className="">Top Selling Categories</h4>
                  <div className="card-dropdown">
                    <div className="dropdown">
                      <a
                        className="card-dropdown-icon"
                        href="javascript:void(0);"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <i className="ri-more-2-fill"></i>
                      </a>
                      <div className="dropdown-menu">
                        <a className="dropdown-item" href="javascript:void(0);">
                          Today
                        </a>
                        <a className="dropdown-item" href="javascript:void(0);">
                          This Week
                        </a>
                        <a
                          className="dropdown-item active"
                          href="javascript:void(0);"
                        >
                          This Month
                        </a>
                        <a className="dropdown-item" href="javascript:void(0);">
                          This Year
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card-body pt-15">
                  <div className="table-responsive">
                    <table className="table text-nowrap">
                      <thead className="table-light">
                        <tr>
                          <th className=""> Category</th>
                          <th className="">Revenue</th>
                          <th className="">Orders</th>
                          <th className="">Avg. Order</th>
                          <th className="">Growth</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            <h6 className="mb-5">Electronics</h6>
                            <span className="text-muted">
                              Phones, Laptops, TVs
                            </span>
                          </td>
                          <td className="text-end fw-6">$24,850</td>
                          <td className="text-end">182</td>
                          <td className="text-end">$136.54</td>
                          <td className="text-end">
                            <span className="text-success">
                              <i className="ri-arrow-up-line mr-5"></i> 12.5%
                            </span>
                          </td>
                        </tr>

                        <tr>
                          <td>
                            <h6 className="mb-5">Fashion</h6>
                            <span className="text-muted">
                              Clothing, Shoes, Bags
                            </span>
                          </td>
                          <td className="text-end fw-6">$18,420</td>
                          <td className="text-end">254</td>
                          <td className="text-end">$72.52</td>
                          <td className="text-end">
                            <span className="text-success">
                              <i className="ri-arrow-up-line"></i> 8.2%
                            </span>
                          </td>
                        </tr>

                        <tr>
                          <td>
                            <h6 className="mb-5">Home & Kitchen</h6>
                            <span className="text-muted">
                              Furniture, Appliances
                            </span>
                          </td>
                          <td className="text-end fw-6">$12,750</td>
                          <td className="text-end">98</td>
                          <td className="text-end">$130.10</td>
                          <td className="text-end">
                            <span className="text-danger">
                              <i className="ri-arrow-down-line"></i> 3.2%
                            </span>
                          </td>
                        </tr>

                        <tr>
                          <td>
                            <h6 className="mb-5">Beauty</h6>
                            <span className="text-muted">Skincare, Makeup</span>
                          </td>
                          <td className="text-end fw-6">$9,680</td>
                          <td className="text-end">167</td>
                          <td className="text-end">$57.96</td>
                          <td className="text-end">
                            <span className="text-success">
                              <i className="ri-arrow-up-line"></i> 21.7%
                            </span>
                          </td>
                        </tr>

                        <tr>
                          <td>
                            <h6 className="mb-5">Sports</h6>
                            <span className="text-muted">
                              Equipment, Activewear
                            </span>
                          </td>
                          <td className="text-end fw-6">$7,350</td>
                          <td className="text-end">89</td>
                          <td className="text-end">$82.58</td>
                          <td className="text-end">
                            <span className="text-success">
                              <i className="ri-arrow-up-line"></i> 5.5%
                            </span>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <h6 className="mb-5">Books & Media</h6>
                            <span className="text-muted">
                              Books, eBooks, Audiobooks
                            </span>
                          </td>
                          <td className="text-end fw-6">$6,240</td>
                          <td className="text-end">312</td>
                          <td className="text-end">$20.00</td>
                          <td className="text-end">
                            <span className="text-success">
                              <i className="ri-arrow-up-line"></i> 15.5%
                            </span>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <h6 className="mb-5">Grocery</h6>
                            <span className="text-muted">
                              Food, Beverages, Essentials
                            </span>
                          </td>
                          <td className="text-end fw-6">$15,670</td>
                          <td className="text-end">428</td>
                          <td className="text-end">$36.61</td>
                          <td className="text-end">
                            <span className="text-success">
                              <i className="ri-arrow-up-line"></i> 4.3%
                            </span>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-12">
              <div className="card">
                <div className="card-header justify-between">
                  <h4 className="">Recent Orders</h4>
                  <div className="card-dropdown">
                    <div className="dropdown">
                      <a
                        className="card-dropdown-icon"
                        href="javascript:void(0);"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <i className="ri-more-2-fill"></i>
                      </a>
                      <div className="dropdown-menu">
                        <a className="dropdown-item" href="javascript:void(0);">
                          This Week
                        </a>
                        <a className="dropdown-item" href="javascript:void(0);">
                          Last Week
                        </a>
                        <a className="dropdown-item" href="javascript:void(0);">
                          This Month
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card-body pt-15">
                  <div className="table-responsive">
                    <table className="table text-nowrap w-100">
                      <thead className="table-light">
                        <tr>
                          <th>Order ID</th>
                          <th>Customer</th>
                          <th>Product</th>
                          <th>Quantity</th>
                          <th>Amount</th>
                          <th>Status</th>
                          <th>Rating</th>
                          <th>Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            <a href="ecommerce-order-details.html">
                              #DN-2024-001
                            </a>
                          </td>
                          <td>
                            <div className="d-flex-items gap-10">
                              <div className="avatar avatar-md radius-100">
                                <img
                                  className="radius-100"
                                  src="/assets/images/avatar/avatar-thumb-001.webp"
                                  alt="image not found"
                                />
                              </div>
                              <div>
                                <h6>Sarah Johnson</h6>
                                <span className="fs-12 text-muted">
                                  <a
                                    href="https://demo.topylo.com/cdn-cgi/l/email-protection"
                                    className="__cf_email__"
                                    data-cfemail="73001201121b191c1b1d001c1d331e121a1f5d101c1e"
                                  >
                                    [email&#160;protected]
                                  </a>
                                </span>
                              </div>
                            </div>
                          </td>
                          <td>
                            <div className="d-flex-items gap-10">
                              <div className="avatar avatar-md radius-6">
                                <img
                                  className="radius-6"
                                  src="/assets/images/product/item3.png"
                                  alt="image not found"
                                />
                              </div>
                              <span className="fw-6 text-muted">
                                Wireless Earbuds Pro
                              </span>
                            </div>
                          </td>
                          <td>1</td>
                          <td>$129.99</td>
                          <td>
                            <span className="badge bg-label-success">
                              Delivered
                            </span>
                          </td>
                          <td>
                            <div className="rating">
                              <i className="ri-star-fill text-warning"></i>
                              <i className="ri-star-fill text-warning"></i>
                              <i className="ri-star-fill text-warning"></i>
                              <i className="ri-star-fill text-warning"></i>
                              <i className="ri-star-half-fill text-warning"></i>
                              <span className="ms-1">4.5</span>
                            </div>
                          </td>
                          <td>
                            <div className="d-flex-items gap-10">
                              <a
                                className="btn-icon btn-success-light"
                                href="ecommerce-order-details.html"
                                data-bs-toggle="tooltip"
                                data-bs-placement="top"
                                data-bs-title="View"
                              >
                                <i className="ri-eye-line"></i>
                              </a>
                              <a
                                className="btn-icon btn-info-light"
                                href="ecommerce-order-details.html"
                                data-bs-toggle="tooltip"
                                data-bs-placement="top"
                                data-bs-title="Edit"
                              >
                                <i className="ri-edit-line"></i>
                              </a>
                              <a
                                className="btn-icon btn-danger-light"
                                href="javascript:void(0);"
                                data-bs-toggle="tooltip"
                                data-bs-placement="top"
                                data-bs-title="Delete"
                              >
                                <i className="ri-delete-bin-line"></i>
                              </a>
                            </div>
                          </td>
                        </tr>

                        <tr>
                          <td>
                            <a href="ecommerce-order-details.html">
                              #DN-2024-002
                            </a>
                          </td>
                          <td>
                            <div className="d-flex-items gap-10">
                              <div className="avatar avatar-md radius-100">
                                <img
                                  className="radius-100"
                                  src="/assets/images/avatar/avatar-thumb-002.webp"
                                  alt="image not found"
                                />
                              </div>
                              <div>
                                <h6>Michael Kim</h6>
                                <span className="fs-12 text-muted">
                                  <a
                                    href="https://demo.topylo.com/cdn-cgi/l/email-protection"
                                    className="__cf_email__"
                                    data-cfemail="c8bba9baa9a0a2a7a0a6bba7a688a5a9a1a4e6aba7a5"
                                  >
                                    [email&#160;protected]
                                  </a>
                                </span>
                              </div>
                            </div>
                          </td>
                          <td>
                            <div className="d-flex-items gap-10">
                              <div className="avatar avatar-md radius-6">
                                <img
                                  className="radius-6"
                                  src="/assets/images/product/item4.png"
                                  alt="image not found"
                                />
                              </div>
                              <span className="fw-6 text-muted">
                                Smart Watch Series 5
                              </span>
                            </div>
                          </td>
                          <td>1</td>
                          <td>$129.99</td>
                          <td>
                            <span className="badge bg-label-info">Shipped</span>
                          </td>
                          <td>
                            <div className="rating">
                              <i className="ri-star-fill text-warning"></i>
                              <i className="ri-star-fill text-warning"></i>
                              <i className="ri-star-fill text-warning"></i>
                              <i className="ri-star-fill text-warning"></i>
                              <i className="ri-star-half-fill text-warning"></i>
                              <span className="ms-1">4.5</span>
                            </div>
                          </td>
                          <td>
                            <div className="d-flex-items gap-10">
                              <a
                                className="btn-icon btn-success-light"
                                href="ecommerce-order-details.html"
                                data-bs-toggle="tooltip"
                                data-bs-placement="top"
                                data-bs-title="View"
                              >
                                <i className="ri-eye-line"></i>
                              </a>
                              <a
                                className="btn-icon btn-info-light"
                                href="ecommerce-order-details.html"
                                data-bs-toggle="tooltip"
                                data-bs-placement="top"
                                data-bs-title="Edit"
                              >
                                <i className="ri-edit-line"></i>
                              </a>
                              <a
                                className="btn-icon btn-danger-light"
                                href="javascript:void(0);"
                                data-bs-toggle="tooltip"
                                data-bs-placement="top"
                                data-bs-title="Delete"
                              >
                                <i className="ri-delete-bin-line"></i>
                              </a>
                            </div>
                          </td>
                        </tr>

                        <tr>
                          <td>
                            <a href="ecommerce-order-details.html">
                              #DN-2024-003
                            </a>
                          </td>
                          <td>
                            <div className="d-flex-items gap-10">
                              <div className="avatar avatar-md radius-100">
                                <img
                                  className="radius-100"
                                  src="/assets/images/avatar/avatar-thumb-003.webp"
                                  alt="image not found"
                                />
                              </div>
                              <div>
                                <h6>Emily Chen</h6>
                                <span className="fs-12 text-muted">
                                  <a
                                    href="https://demo.topylo.com/cdn-cgi/l/email-protection"
                                    className="__cf_email__"
                                    data-cfemail="addeccdfccc5c7c2c5c3dec2c3edc0ccc4c183cec2c0"
                                  >
                                    [email&#160;protected]
                                  </a>
                                </span>
                              </div>
                            </div>
                          </td>
                          <td>
                            <div className="d-flex-items gap-10">
                              <div className="avatar avatar-md radius-6">
                                <img
                                  className="radius-6"
                                  src="/assets/images/product/item5.png"
                                  alt="image not found"
                                />
                              </div>
                              <span className="fw-6 text-muted">
                                Bluetooth Speaker
                              </span>
                            </div>
                          </td>
                          <td>1</td>
                          <td>$129.99</td>
                          <td>
                            <span className="badge bg-label-warning">
                              Processing
                            </span>
                          </td>
                          <td>
                            <div className="rating">
                              <i className="ri-star-line text-muted"></i>
                              <i className="ri-star-line text-muted"></i>
                              <i className="ri-star-line text-muted"></i>
                              <i className="ri-star-line text-muted"></i>
                              <i className="ri-star-line text-muted"></i>
                              <span className="ms-1">-</span>
                            </div>
                          </td>
                          <td>
                            <div className="d-flex-items gap-10">
                              <a
                                className="btn-icon btn-success-light"
                                href="ecommerce-order-details.html"
                                data-bs-toggle="tooltip"
                                data-bs-placement="top"
                                data-bs-title="View"
                              >
                                <i className="ri-eye-line"></i>
                              </a>
                              <a
                                className="btn-icon btn-info-light"
                                href="ecommerce-order-details.html"
                                data-bs-toggle="tooltip"
                                data-bs-placement="top"
                                data-bs-title="Edit"
                              >
                                <i className="ri-edit-line"></i>
                              </a>
                              <a
                                className="btn-icon btn-danger-light"
                                href="javascript:void(0);"
                                data-bs-toggle="tooltip"
                                data-bs-placement="top"
                                data-bs-title="Delete"
                              >
                                <i className="ri-delete-bin-line"></i>
                              </a>
                            </div>
                          </td>
                        </tr>

                        <tr>
                          <td>
                            <a href="ecommerce-order-details.html">
                              #DN-2024-004
                            </a>
                          </td>
                          <td>
                            <div className="d-flex-items gap-10">
                              <div className="avatar avatar-md radius-100">
                                <img
                                  className="radius-100"
                                  src="/assets/images/avatar/avatar-thumb-004.webp"
                                  alt="image not found"
                                />
                              </div>
                              <div>
                                <h6>David Lopez</h6>
                                <span className="fs-12 text-muted">
                                  <a
                                    href="https://demo.topylo.com/cdn-cgi/l/email-protection"
                                    className="__cf_email__"
                                    data-cfemail="fa899b889b9290959294899594ba979b9396d4999597"
                                  >
                                    [email&#160;protected]
                                  </a>
                                </span>
                              </div>
                            </div>
                          </td>
                          <td>
                            <div className="d-flex-items gap-10">
                              <div className="avatar avatar-md radius-6">
                                <img
                                  className="radius-6"
                                  src="/assets/images/product/item6.png"
                                  alt="image not found"
                                />
                              </div>
                              <span className="fw-6 text-muted">
                                Gaming Mouse
                              </span>
                            </div>
                          </td>
                          <td>1</td>
                          <td>$129.99</td>
                          <td>
                            <span className="badge bg-label-danger">
                              Returned
                            </span>
                          </td>
                          <td>
                            <div className="rating">
                              <i className="ri-star-fill text-warning"></i>
                              <i className="ri-star-line text-warning"></i>
                              <i className="ri-star-line text-warning"></i>
                              <i className="ri-star-line text-warning"></i>
                              <i className="ri-star-line text-warning"></i>
                              <span className="ms-1">4.5</span>
                            </div>
                          </td>
                          <td>
                            <div className="d-flex-items gap-10">
                              <a
                                className="btn-icon btn-success-light"
                                href="ecommerce-order-details.html"
                                data-bs-toggle="tooltip"
                                data-bs-placement="top"
                                data-bs-title="View"
                              >
                                <i className="ri-eye-line"></i>
                              </a>
                              <a
                                className="btn-icon btn-info-light"
                                href="ecommerce-order-details.html"
                                data-bs-toggle="tooltip"
                                data-bs-placement="top"
                                data-bs-title="Edit"
                              >
                                <i className="ri-edit-line"></i>
                              </a>
                              <a
                                className="btn-icon btn-danger-light"
                                href="javascript:void(0);"
                                data-bs-toggle="tooltip"
                                data-bs-placement="top"
                                data-bs-title="Delete"
                              >
                                <i className="ri-delete-bin-line"></i>
                              </a>
                            </div>
                          </td>
                        </tr>

                        <tr>
                          <td>
                            <a href="ecommerce-order-details.html">
                              #DN-2024-005
                            </a>
                          </td>
                          <td>
                            <div className="d-flex-items gap-10">
                              <div className="avatar avatar-md radius-100">
                                <img
                                  className="radius-100"
                                  src="/assets/images/avatar/avatar-thumb-005.webp"
                                  alt="image not found"
                                />
                              </div>
                              <div>
                                <h6>Jessica Williams</h6>
                                <span className="fs-12 text-muted">
                                  <a
                                    href="https://demo.topylo.com/cdn-cgi/l/email-protection"
                                    className="__cf_email__"
                                    data-cfemail="cebdafbcafa6a4a1a6a0bda1a08ea3afa7a2e0ada1a3"
                                  >
                                    [email&#160;protected]
                                  </a>
                                </span>
                              </div>
                            </div>
                          </td>
                          <td>
                            <div className="d-flex-items gap-10">
                              <div className="avatar avatar-md radius-6">
                                <img
                                  className="radius-6"
                                  src="/assets/images/product/item7.png"
                                  alt="image not found"
                                />
                              </div>
                              <span className="fw-6 text-muted">
                                Fitness Tracker
                              </span>
                            </div>
                          </td>
                          <td>1</td>
                          <td>$129.99</td>
                          <td>
                            <span className="badge bg-label-danger">
                              On Hold
                            </span>
                          </td>
                          <td>
                            <div className="rating">
                              <i className="ri-star-line text-muted"></i>
                              <i className="ri-star-line text-muted"></i>
                              <i className="ri-star-line text-muted"></i>
                              <i className="ri-star-line text-muted"></i>
                              <i className="ri-star-line text-muted"></i>
                              <span className="ms-1">-</span>
                            </div>
                          </td>
                          <td>
                            <div className="d-flex-items gap-10">
                              <a
                                className="btn-icon btn-success-light"
                                href="ecommerce-order-details.html"
                                data-bs-toggle="tooltip"
                                data-bs-placement="top"
                                data-bs-title="View"
                              >
                                <i className="ri-eye-line"></i>
                              </a>
                              <a
                                className="btn-icon btn-info-light"
                                href="ecommerce-order-details.html"
                                data-bs-toggle="tooltip"
                                data-bs-placement="top"
                                data-bs-title="Edit"
                              >
                                <i className="ri-edit-line"></i>
                              </a>
                              <a
                                className="btn-icon btn-danger-light"
                                href="javascript:void(0);"
                                data-bs-toggle="tooltip"
                                data-bs-placement="top"
                                data-bs-title="Delete"
                              >
                                <i className="ri-delete-bin-line"></i>
                              </a>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
