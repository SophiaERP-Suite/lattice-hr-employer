const Messages = () => {
  return (
    <div className="app-content-area">
      <div className="app-content-wrap">
        <div className="container-fluid">
          <div className="row">
            <div className="col-xl-12">
              <div className="app-chat-wrapper mb-25">
                <div className="">
                  <div className="inner-sidebar-wrapper">
                    <div className="app-chat-contacts-box inner-sidebar-main">
                      <div className="app-chat-header d-flex-items gap-15">
                        <div className="app-chat-user p-relative">
                          <div className="avatar avatar-md radius-100">
                            <img
                              src="assets/images/avatar/avatar-thumb-001.webp"
                              alt="image not found"
                              className="radius-100"
                            />
                          </div>
                          <div className="status online"></div>
                        </div>
                        <div className="app-chat-search">
                          <input
                            type="search"
                            className="form-control"
                            placeholder="Search..."
                          />
                          <button type="submit">
                            <i className="ri-search-line"></i>
                          </button>
                        </div>
                      </div>
                      <div className="app-chat-contact">
                        <ul
                          className="nav nav-pills chat-tabs-list"
                          id="pills-tab"
                          role="tablist"
                        >
                          <li className="nav-item" role="presentation">
                            <button
                              className="nav-link active"
                              id="pills-chats-tab"
                              data-bs-toggle="pill"
                              data-bs-target="#pills-chats"
                              type="button"
                              role="tab"
                              aria-controls="pills-chats"
                              aria-selected="true"
                            >
                              Chat
                            </button>
                          </li>
                          <li className="nav-item" role="presentation">
                            <button
                              className="nav-link"
                              id="pills-groups-tab"
                              data-bs-toggle="pill"
                              data-bs-target="#pills-groups"
                              type="button"
                              role="tab"
                              aria-controls="pills-groups"
                              aria-selected="false"
                              tabIndex={-1}
                            >
                              Employers
                            </button>
                          </li>
                          <li className="nav-item" role="presentation">
                            <button
                              className="nav-link"
                              id="pills-contact-tab"
                              data-bs-toggle="pill"
                              data-bs-target="#pills-contact"
                              type="button"
                              role="tab"
                              aria-controls="pills-contact"
                              aria-selected="false"
                              tabIndex={-1}
                            >
                              Contact
                            </button>
                          </li>
                        </ul>
                        <div className="tab-content" id="pills-tabContent">
                          <div
                            className="tab-pane fade active show"
                            id="pills-chats"
                            role="tabpanel"
                            aria-labelledby="pills-chats-tab"
                            tabIndex={0}
                          >
                            <div
                              className="app-chat-list card-scrollbar"
                              data-scrollbar="true"
                              tabIndex={-1}
                              style={{ overflow: "hidden", outline: "none" }}
                            >
                              <div
                                className="scroll-content"
                                style={{
                                  transform: "translate3d(0px, 0px, 0px)",
                                }}
                              >
                                <ul>
                                  <li>
                                    <a href="javascript:void(0);">
                                      <div className="d-flex-items">
                                        <div className="app-chat-user">
                                          <div className="avatar avatar-md radius-100">
                                            <img
                                              src="assets/images/avatar/avatar-thumb-002.webp"
                                              alt="image not found"
                                              className="radius-100"
                                            />
                                          </div>
                                          <div className="status online"></div>
                                        </div>
                                        <div className="flex-fill">
                                          <div className="d-flex-between">
                                            <h6>Michael Smith</h6>
                                            <span className="text-muted fs-12">
                                              12:45PM
                                            </span>
                                          </div>
                                          <div className="d-flex-between">
                                            <span className="short-msg text-body-secondary fs-12">
                                              Can we meet tomorrow?
                                            </span>
                                            <span className="unread-msg">
                                              3
                                            </span>
                                          </div>
                                        </div>
                                      </div>
                                    </a>
                                  </li>
                                  <li>
                                    <a href="javascript:void(0);">
                                      <div className="d-flex-items">
                                        <div className="app-chat-user">
                                          <div className="avatar avatar-md radius-100">
                                            <img
                                              src="assets/images/avatar/avatar-thumb-003.webp"
                                              alt="image not found"
                                              className="radius-100"
                                            />
                                          </div>
                                          <div className="status offline"></div>
                                        </div>
                                        <div className="flex-fill">
                                          <div className="d-flex-between">
                                            <h6>Sarah Williams</h6>
                                            <span className="text-muted fs-12">
                                              11:20AM
                                            </span>
                                          </div>
                                          <div className="d-flex-between">
                                            <span className="short-msg text-body-secondary fs-12">
                                              I've sent the documents
                                            </span>
                                            <span className="text-muted fs-12 lh-1">
                                              <i className="ri-check-fill"></i>
                                            </span>
                                          </div>
                                        </div>
                                      </div>
                                    </a>
                                  </li>
                                  <li>
                                    <a href="javascript:void(0);">
                                      <div className="d-flex-items">
                                        <div className="app-chat-user">
                                          <div className="avatar avatar-md radius-100">
                                            <img
                                              src="assets/images/avatar/avatar-thumb-004.webp"
                                              alt="image not found"
                                              className="radius-100"
                                            />
                                          </div>
                                          <div className="status busy"></div>
                                        </div>
                                        <div className="flex-fill">
                                          <div className="d-flex-between">
                                            <h6>David Brown</h6>
                                            <span className="text-muted fs-12">
                                              10:15AM
                                            </span>
                                          </div>
                                          <div className="d-flex-between">
                                            <span className="short-msg text-body-secondary fs-12">
                                              Let me check and get back to you
                                            </span>
                                            <span className="text-success fs-12 lh-1">
                                              <i className="ri-check-double-fill"></i>
                                            </span>
                                          </div>
                                        </div>
                                      </div>
                                    </a>
                                  </li>
                                  <li>
                                    <a href="javascript:void(0);">
                                      <div className="d-flex-items">
                                        <div className="app-chat-user">
                                          <div className="avatar avatar-md radius-100">
                                            <img
                                              src="assets/images/avatar/avatar-thumb-005.webp"
                                              alt="image not found"
                                              className="radius-100"
                                            />
                                          </div>
                                          <div className="status online"></div>
                                        </div>
                                        <div className="flex-fill">
                                          <div className="d-flex-between">
                                            <h6>Jennifer Lee</h6>
                                            <span className="text-muted fs-12">
                                              Yesterday
                                            </span>
                                          </div>
                                          <div className="d-flex-between">
                                            <span className="short-msg text-body-secondary fs-12">
                                              Thanks for your help!
                                            </span>
                                            <span className="text-success fs-12 lh-1">
                                              <i className="ri-check-double-fill"></i>
                                            </span>
                                          </div>
                                        </div>
                                      </div>
                                    </a>
                                  </li>
                                  <li>
                                    <a href="javascript:void(0);">
                                      <div className="d-flex-items">
                                        <div className="app-chat-user">
                                          <div className="avatar avatar-md radius-100">
                                            <img
                                              src="assets/images/avatar/avatar-thumb-006.webp"
                                              alt="image not found"
                                              className="radius-100"
                                            />
                                          </div>
                                          <div className="status offline"></div>
                                        </div>
                                        <div className="flex-fill">
                                          <div className="d-flex-between">
                                            <h6>Robert Taylor</h6>
                                            <span className="text-muted fs-12">
                                              Yesterday
                                            </span>
                                          </div>
                                          <div className="d-flex-between">
                                            <span className="short-msg text-body-secondary fs-12">
                                              The project is due next week
                                            </span>
                                            <span className="text-muted fs-12 lh-1">
                                              <i className="ri-check-fill"></i>
                                            </span>
                                          </div>
                                        </div>
                                      </div>
                                    </a>
                                  </li>
                                  <li>
                                    <a href="javascript:void(0);">
                                      <div className="d-flex-items">
                                        <div className="app-chat-user">
                                          <div className="avatar avatar-md radius-100">
                                            <img
                                              src="assets/images/avatar/avatar-thumb-007.webp"
                                              alt="image not found"
                                              className="radius-100"
                                            />
                                          </div>
                                          <div className="status online"></div>
                                        </div>
                                        <div className="flex-fill">
                                          <div className="d-flex-between">
                                            <h6>Lisa Anderson</h6>
                                            <span className="text-muted fs-12">
                                              Monday
                                            </span>
                                          </div>
                                          <div className="d-flex-between">
                                            <span className="short-msg text-body-secondary fs-12">
                                              Can you review my proposal?
                                            </span>
                                            <span className="text-success fs-12 lh-1">
                                              <i className="ri-check-double-fill"></i>
                                            </span>
                                          </div>
                                        </div>
                                      </div>
                                    </a>
                                  </li>
                                  <li>
                                    <a href="javascript:void(0);">
                                      <div className="d-flex-items">
                                        <div className="app-chat-user">
                                          <div className="avatar avatar-md radius-100">
                                            <img
                                              src="assets/images/avatar/avatar-thumb-008.webp"
                                              alt="image not found"
                                              className="radius-100"
                                            />
                                          </div>
                                          <div className="status busy"></div>
                                        </div>
                                        <div className="flex-fill">
                                          <div className="d-flex-between">
                                            <h6>Thomas Wilson</h6>
                                            <span className="text-muted fs-12">
                                              Monday
                                            </span>
                                          </div>
                                          <div className="d-flex-between">
                                            <span className="short-msg text-body-secondary fs-12">
                                              Meeting at 3pm confirmed
                                            </span>
                                            <span className="text-success fs-12 lh-1">
                                              <i className="ri-check-double-fill"></i>
                                            </span>
                                          </div>
                                        </div>
                                      </div>
                                    </a>
                                  </li>
                                  <li>
                                    <a href="javascript:void(0);">
                                      <div className="d-flex-items">
                                        <div className="app-chat-user">
                                          <div className="avatar avatar-md radius-100">
                                            <img
                                              src="assets/images/avatar/avatar-thumb-009.webp"
                                              alt="image not found"
                                              className="radius-100"
                                            />
                                          </div>
                                          <div className="status offline"></div>
                                        </div>
                                        <div className="flex-fill">
                                          <div className="d-flex-between">
                                            <h6>Emily Davis</h6>
                                            <span className="text-muted fs-12">
                                              Sunday
                                            </span>
                                          </div>
                                          <div className="d-flex-between">
                                            <span className="short-msg text-body-secondary fs-12">
                                              Happy birthday! 🎂
                                            </span>
                                            <span className="text-muted fs-12 lh-1">
                                              <i className="ri-check-fill"></i>
                                            </span>
                                          </div>
                                        </div>
                                      </div>
                                    </a>
                                  </li>
                                  <li>
                                    <a href="javascript:void(0);">
                                      <div className="d-flex-items">
                                        <div className="app-chat-user">
                                          <div className="avatar avatar-md radius-100">
                                            <img
                                              src="assets/images/avatar/avatar-thumb-010.webp"
                                              alt="image not found"
                                              className="radius-100"
                                            />
                                          </div>
                                          <div className="status online"></div>
                                        </div>
                                        <div className="flex-fill">
                                          <div className="d-flex-between">
                                            <h6>Daniel Martinez</h6>
                                            <span className="text-muted fs-12">
                                              Saturday
                                            </span>
                                          </div>
                                          <div className="d-flex-between">
                                            <span className="short-msg text-body-secondary fs-12">
                                              The files are uploaded to the
                                              server
                                            </span>
                                            <span className="text-success fs-12 lh-1">
                                              <i className="ri-check-double-fill"></i>
                                            </span>
                                          </div>
                                        </div>
                                      </div>
                                    </a>
                                  </li>
                                  <li>
                                    <a href="javascript:void(0);">
                                      <div className="d-flex-items">
                                        <div className="app-chat-user">
                                          <div className="avatar avatar-md radius-100">
                                            <img
                                              src="assets/images/avatar/avatar-thumb-011.webp"
                                              alt="image not found"
                                              className="radius-100"
                                            />
                                          </div>
                                          <div className="status busy"></div>
                                        </div>
                                        <div className="flex-fill">
                                          <div className="d-flex-between">
                                            <h6>Olivia Garcia</h6>
                                            <span className="text-muted fs-12">
                                              Friday
                                            </span>
                                          </div>
                                          <div className="d-flex-between">
                                            <span className="short-msg text-body-secondary fs-12">
                                              Let's discuss this in person
                                            </span>
                                            <span className="text-success fs-12 lh-1">
                                              <i className="ri-check-double-fill"></i>
                                            </span>
                                          </div>
                                        </div>
                                      </div>
                                    </a>
                                  </li>
                                  <li>
                                    <a href="javascript:void(0);">
                                      <div className="d-flex-items">
                                        <div className="app-chat-user">
                                          <div className="avatar avatar-md radius-100">
                                            <img
                                              src="assets/images/avatar/avatar-thumb-012.webp"
                                              alt="image not found"
                                              className="radius-100"
                                            />
                                          </div>
                                          <div className="status offline"></div>
                                        </div>
                                        <div className="flex-fill">
                                          <div className="d-flex-between">
                                            <h6>James Rodriguez</h6>
                                            <span className="text-muted fs-12">
                                              Thursday
                                            </span>
                                          </div>
                                          <div className="d-flex-between">
                                            <span className="short-msg text-body-secondary fs-12">
                                              I'll be traveling next week
                                            </span>
                                            <span className="text-muted fs-12 lh-1">
                                              <i className="ri-check-fill"></i>
                                            </span>
                                          </div>
                                        </div>
                                      </div>
                                    </a>
                                  </li>
                                </ul>
                              </div>
                              <div
                                className="scrollbar-track scrollbar-track-x"
                                style={{ display: "none" }}
                              >
                                <div
                                  className="scrollbar-thumb scrollbar-thumb-x"
                                  style={{
                                    width: "379px",
                                    transform: "translate3d(0px, 0px, 0px)",
                                  }}
                                ></div>
                              </div>
                              <div
                                className="scrollbar-track scrollbar-track-y"
                                style={{ display: "block" }}
                              >
                                <div
                                  className="scrollbar-thumb scrollbar-thumb-y"
                                  style={{
                                    height: "595.613px",
                                    transform: "translate3d(0px, 0px, 0px)",
                                  }}
                                ></div>
                              </div>
                            </div>
                          </div>
                          <div
                            className="tab-pane fade"
                            id="pills-groups"
                            role="tabpanel"
                            aria-labelledby="pills-groups-tab"
                            tabIndex={0}
                          >
                            <div
                              className="app-chat-list card-scrollbar"
                              data-scrollbar="true"
                              tabIndex={-1}
                              style={{ overflow: "hidden", outline: "none" }}
                            >
                              <div className="scroll-content">
                                <ul>
                                  <li>
                                    <a href="javascript:void(0);">
                                      <div className="d-flex-items">
                                        <div className="app-chat-user">
                                          <div className="avatar avatar-md radius-100">
                                            <img
                                              src="assets/images/avatar/avatar-thumb-002.webp"
                                              alt="image not found"
                                              className="radius-100"
                                            />
                                          </div>
                                          <div className="status online"></div>
                                        </div>
                                        <div className="flex-fill">
                                          <div className="d-flex-between">
                                            <h6>Marketing Team</h6>
                                            <span className="text-muted fs-12">
                                              12:45PM
                                            </span>
                                          </div>
                                          <div className="d-flex-between">
                                            <span className="short-msg text-body-secondary fs-12">
                                              <span className="text-primary">
                                                John Smith:
                                              </span>{" "}
                                              Can we meet tomorrow?
                                            </span>
                                            <span className="text-success fs-12 lh-1">
                                              <i className="ri-check-double-fill"></i>
                                            </span>
                                          </div>
                                        </div>
                                      </div>
                                    </a>
                                  </li>
                                  <li>
                                    <a href="javascript:void(0);">
                                      <div className="d-flex-items">
                                        <div className="app-chat-user">
                                          <div className="avatar avatar-md radius-100">
                                            <img
                                              src="assets/images/avatar/avatar-thumb-003.webp"
                                              alt="image not found"
                                              className="radius-100"
                                            />
                                          </div>
                                          <div className="status offline"></div>
                                        </div>
                                        <div className="flex-fill">
                                          <div className="d-flex-between">
                                            <h6>Design Department</h6>
                                            <span className="text-muted fs-12">
                                              11:20AM
                                            </span>
                                          </div>
                                          <div className="d-flex-between">
                                            <span className="short-msg text-body-secondary fs-12">
                                              <span className="text-primary">
                                                Sarah Johnson:
                                              </span>{" "}
                                              I've sent the documents
                                            </span>
                                            <span className="unread-msg">
                                              3
                                            </span>
                                          </div>
                                        </div>
                                      </div>
                                    </a>
                                  </li>
                                  <li>
                                    <a href="javascript:void(0);">
                                      <div className="d-flex-items">
                                        <div className="app-chat-user">
                                          <div className="avatar avatar-md radius-100">
                                            <img
                                              src="assets/images/avatar/avatar-thumb-004.webp"
                                              alt="image not found"
                                              className="radius-100"
                                            />
                                          </div>
                                          <div className="status busy"></div>
                                        </div>
                                        <div className="flex-fill">
                                          <div className="d-flex-between">
                                            <h6>Development Team</h6>
                                            <span className="text-muted fs-12">
                                              10:15AM
                                            </span>
                                          </div>
                                          <div className="d-flex-between">
                                            <span className="short-msg text-body-secondary fs-12">
                                              <span className="text-primary">
                                                Michael Brown:
                                              </span>{" "}
                                              Let me check and get back to you
                                            </span>
                                            <span className="text-success fs-12 lh-1">
                                              <i className="ri-check-double-fill"></i>
                                            </span>
                                          </div>
                                        </div>
                                      </div>
                                    </a>
                                  </li>
                                  <li>
                                    <a href="javascript:void(0);">
                                      <div className="d-flex-items">
                                        <div className="app-chat-user">
                                          <div className="avatar avatar-md radius-100">
                                            <img
                                              src="assets/images/avatar/avatar-thumb-005.webp"
                                              alt="image not found"
                                              className="radius-100"
                                            />
                                          </div>
                                          <div className="status online"></div>
                                        </div>
                                        <div className="flex-fill">
                                          <div className="d-flex-between">
                                            <h6>HR Committee</h6>
                                            <span className="text-muted fs-12">
                                              Yesterday
                                            </span>
                                          </div>
                                          <div className="d-flex-between">
                                            <span className="short-msg text-body-secondary fs-12">
                                              <span className="text-primary">
                                                Emily Davis:
                                              </span>{" "}
                                              Thanks for your help!
                                            </span>
                                            <span className="text-success fs-12 lh-1">
                                              <i className="ri-check-double-fill"></i>
                                            </span>
                                          </div>
                                        </div>
                                      </div>
                                    </a>
                                  </li>
                                  <li>
                                    <a href="javascript:void(0);">
                                      <div className="d-flex-items">
                                        <div className="app-chat-user">
                                          <div className="avatar avatar-md radius-100">
                                            <img
                                              src="assets/images/avatar/avatar-thumb-006.webp"
                                              alt="image not found"
                                              className="radius-100"
                                            />
                                          </div>
                                          <div className="status offline"></div>
                                        </div>
                                        <div className="flex-fill">
                                          <div className="d-flex-between">
                                            <h6>Project Alpha</h6>
                                            <span className="text-muted fs-12">
                                              Yesterday
                                            </span>
                                          </div>
                                          <div className="d-flex-between">
                                            <span className="short-msg text-body-secondary fs-12">
                                              <span className="text-primary">
                                                Robert Wilson:
                                              </span>{" "}
                                              The project is due next week
                                            </span>
                                            <span className="text-muted fs-12 lh-1">
                                              <i className="ri-check-fill"></i>
                                            </span>
                                          </div>
                                        </div>
                                      </div>
                                    </a>
                                  </li>
                                  <li>
                                    <a href="javascript:void(0);">
                                      <div className="d-flex-items">
                                        <div className="app-chat-user">
                                          <div className="avatar avatar-md radius-100">
                                            <img
                                              src="assets/images/avatar/avatar-thumb-007.webp"
                                              alt="image not found"
                                              className="radius-100"
                                            />
                                          </div>
                                          <div className="status online"></div>
                                        </div>
                                        <div className="flex-fill">
                                          <div className="d-flex-between">
                                            <h6>Sales Group</h6>
                                            <span className="text-muted fs-12">
                                              Monday
                                            </span>
                                          </div>
                                          <div className="d-flex-between">
                                            <span className="short-msg text-body-secondary fs-12">
                                              <span className="text-primary">
                                                Jessica Lee:
                                              </span>{" "}
                                              Can you review my proposal?
                                            </span>
                                            <span className="text-success fs-12 lh-1">
                                              <i className="ri-check-double-fill"></i>
                                            </span>
                                          </div>
                                        </div>
                                      </div>
                                    </a>
                                  </li>
                                  <li>
                                    <a href="javascript:void(0);">
                                      <div className="d-flex-items">
                                        <div className="app-chat-user">
                                          <div className="avatar avatar-md radius-100">
                                            <img
                                              src="assets/images/avatar/avatar-thumb-008.webp"
                                              alt="image not found"
                                              className="radius-100"
                                            />
                                          </div>
                                          <div className="status busy"></div>
                                        </div>
                                        <div className="flex-fill">
                                          <div className="d-flex-between">
                                            <h6>Management Board</h6>
                                            <span className="text-muted fs-12">
                                              Monday
                                            </span>
                                          </div>
                                          <div className="d-flex-between">
                                            <span className="short-msg text-body-secondary fs-12">
                                              <span className="text-primary">
                                                David Miller:
                                              </span>{" "}
                                              Meeting at 3pm confirmed
                                            </span>
                                            <span className="text-success fs-12 lh-1">
                                              <i className="ri-check-double-fill"></i>
                                            </span>
                                          </div>
                                        </div>
                                      </div>
                                    </a>
                                  </li>
                                  <li>
                                    <a href="javascript:void(0);">
                                      <div className="d-flex-items">
                                        <div className="app-chat-user">
                                          <div className="avatar avatar-md radius-100">
                                            <img
                                              src="assets/images/avatar/avatar-thumb-009.webp"
                                              alt="image not found"
                                              className="radius-100"
                                            />
                                          </div>
                                          <div className="status offline"></div>
                                        </div>
                                        <div className="flex-fill">
                                          <div className="d-flex-between">
                                            <h6>Social Committee</h6>
                                            <span className="text-muted fs-12">
                                              Sunday
                                            </span>
                                          </div>
                                          <div className="d-flex-between">
                                            <span className="short-msg text-body-secondary fs-12">
                                              <span className="text-primary">
                                                Lisa Wong:
                                              </span>{" "}
                                              Happy birthday! 🎂
                                            </span>
                                            <span className="text-muted fs-12 lh-1">
                                              <i className="ri-check-fill"></i>
                                            </span>
                                          </div>
                                        </div>
                                      </div>
                                    </a>
                                  </li>
                                  <li>
                                    <a href="javascript:void(0);">
                                      <div className="d-flex-items">
                                        <div className="app-chat-user">
                                          <div className="avatar avatar-md radius-100">
                                            <img
                                              src="assets/images/avatar/avatar-thumb-010.webp"
                                              alt="image not found"
                                              className="radius-100"
                                            />
                                          </div>
                                          <div className="status online"></div>
                                        </div>
                                        <div className="flex-fill">
                                          <div className="d-flex-between">
                                            <h6>IT Support</h6>
                                            <span className="text-muted fs-12">
                                              Saturday
                                            </span>
                                          </div>
                                          <div className="d-flex-between">
                                            <span className="short-msg text-body-secondary fs-12">
                                              <span className="text-primary">
                                                Daniel Kim:
                                              </span>{" "}
                                              The files are uploaded to the
                                              server
                                            </span>
                                            <span className="text-success fs-12 lh-1">
                                              <i className="ri-check-double-fill"></i>
                                            </span>
                                          </div>
                                        </div>
                                      </div>
                                    </a>
                                  </li>
                                  <li>
                                    <a href="javascript:void(0);">
                                      <div className="d-flex-items">
                                        <div className="app-chat-user">
                                          <div className="avatar avatar-md radius-100">
                                            <img
                                              src="assets/images/avatar/avatar-thumb-011.webp"
                                              alt="image not found"
                                              className="radius-100"
                                            />
                                          </div>
                                          <div className="status busy"></div>
                                        </div>
                                        <div className="flex-fill">
                                          <div className="d-flex-between">
                                            <h6>Finance Team</h6>
                                            <span className="text-muted fs-12">
                                              Friday
                                            </span>
                                          </div>
                                          <div className="d-flex-between">
                                            <span className="short-msg text-body-secondary fs-12">
                                              <span className="text-primary">
                                                Olivia Martinez:
                                              </span>{" "}
                                              Let's discuss this in person
                                            </span>
                                            <span className="text-success fs-12 lh-1">
                                              <i className="ri-check-double-fill"></i>
                                            </span>
                                          </div>
                                        </div>
                                      </div>
                                    </a>
                                  </li>
                                  <li>
                                    <a href="javascript:void(0);">
                                      <div className="d-flex-items">
                                        <div className="app-chat-user">
                                          <div className="avatar avatar-md radius-100">
                                            <img
                                              src="assets/images/avatar/avatar-thumb-012.webp"
                                              alt="image not found"
                                              className="radius-100"
                                            />
                                          </div>
                                          <div className="status offline"></div>
                                        </div>
                                        <div className="flex-fill">
                                          <div className="d-flex-between">
                                            <h6>Operations Group</h6>
                                            <span className="text-muted fs-12">
                                              Thursday
                                            </span>
                                          </div>
                                          <div className="d-flex-between">
                                            <span className="short-msg text-body-secondary fs-12">
                                              <span className="text-primary">
                                                James Wilson:
                                              </span>{" "}
                                              I'll be traveling next week
                                            </span>
                                            <span className="text-muted fs-12 lh-1">
                                              <i className="ri-check-fill"></i>
                                            </span>
                                          </div>
                                        </div>
                                      </div>
                                    </a>
                                  </li>
                                </ul>
                              </div>
                              <div
                                className="scrollbar-track scrollbar-track-x"
                                style={{ display: "none" }}
                              >
                                <div className="scrollbar-thumb scrollbar-thumb-x"></div>
                              </div>
                              <div
                                className="scrollbar-track scrollbar-track-y"
                                style={{ display: "none" }}
                              >
                                <div className="scrollbar-thumb scrollbar-thumb-y"></div>
                              </div>
                            </div>
                          </div>
                          <div
                            className="tab-pane fade"
                            id="pills-contact"
                            role="tabpanel"
                            aria-labelledby="pills-contact-tab"
                            tabIndex={0}
                          >
                            <div
                              className="app-chat-list card-scrollbar"
                              data-scrollbar="true"
                              tabIndex={-1}
                              style={{ overflow: "hidden", outline: "none" }}
                            >
                              <div className="scroll-content">
                                <ul className="contact-list">
                                  <li>
                                    <h5>A</h5>
                                  </li>
                                  <li>
                                    <a href="javascript:void(0);"></a>
                                    <div className="d-flex-between">
                                      <a href="javascript:void(0);">
                                        <div className="d-flex-items gap-10">
                                          <div className="avatar avatar-md radius-100">
                                            <img
                                              src="assets/images/avatar/avatar-thumb-001.webp"
                                              alt="image not found"
                                              className="radius-100"
                                            />
                                          </div>
                                          <h6>Alice Johnson</h6>
                                        </div>
                                      </a>
                                      <div className="card-dropdown">
                                        <a href="javascript:void(0);"></a>
                                        <div className="dropdown">
                                          <a href="javascript:void(0);"></a>
                                          <a
                                            className="card-dropdown-box square small"
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
                                              <i className="ri-edit-line"></i>
                                              Edit
                                            </a>
                                            <a
                                              className="dropdown-item"
                                              href="javascript:void(0);"
                                            >
                                              <i className="ri-spam-2-line"></i>
                                              Block
                                            </a>
                                            <a
                                              className="dropdown-item"
                                              href="javascript:void(0);"
                                            >
                                              <i className="ri-delete-bin-line"></i>
                                              Delate
                                            </a>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </li>

                                  <li>
                                    <h5>B</h5>
                                  </li>
                                  <li>
                                    <a href="javascript:void(0);"></a>
                                    <div className="d-flex-between">
                                      <a href="javascript:void(0);">
                                        <div className="d-flex-items gap-10">
                                          <div className="avatar avatar-md radius-100">
                                            <img
                                              src="assets/images/avatar/avatar-thumb-002.webp"
                                              alt="image not found"
                                              className="radius-100"
                                            />
                                          </div>
                                          <h6>Brian Wilson</h6>
                                        </div>
                                      </a>
                                      <div className="card-dropdown">
                                        <a href="javascript:void(0);"></a>
                                        <div className="dropdown">
                                          <a href="javascript:void(0);"></a>
                                          <a
                                            className="card-dropdown-box square small"
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
                                              <i className="ri-edit-line"></i>
                                              Edit
                                            </a>
                                            <a
                                              className="dropdown-item"
                                              href="javascript:void(0);"
                                            >
                                              <i className="ri-spam-2-line"></i>
                                              Block
                                            </a>
                                            <a
                                              className="dropdown-item"
                                              href="javascript:void(0);"
                                            >
                                              <i className="ri-delete-bin-line"></i>
                                              Delate
                                            </a>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </li>
                                  <li>
                                    <a href="javascript:void(0);"></a>
                                    <div className="d-flex-between">
                                      <a href="javascript:void(0);">
                                        <div className="d-flex-items gap-10">
                                          <div className="avatar avatar-md radius-100">
                                            <img
                                              src="assets/images/avatar/avatar-thumb-003.webp"
                                              alt="image not found"
                                              className="radius-100"
                                            />
                                          </div>
                                          <h6>Betty White</h6>
                                        </div>
                                      </a>
                                      <div className="card-dropdown">
                                        <a href="javascript:void(0);"></a>
                                        <div className="dropdown">
                                          <a href="javascript:void(0);"></a>
                                          <a
                                            className="card-dropdown-box square small"
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
                                              <i className="ri-edit-line"></i>
                                              Edit
                                            </a>
                                            <a
                                              className="dropdown-item"
                                              href="javascript:void(0);"
                                            >
                                              <i className="ri-spam-2-line"></i>
                                              Block
                                            </a>
                                            <a
                                              className="dropdown-item"
                                              href="javascript:void(0);"
                                            >
                                              <i className="ri-delete-bin-line"></i>
                                              Delate
                                            </a>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </li>

                                  <li>
                                    <h5>C</h5>
                                  </li>
                                  <li>
                                    <a href="javascript:void(0);"></a>
                                    <div className="d-flex-between">
                                      <a href="javascript:void(0);">
                                        <div className="d-flex-items gap-10">
                                          <div className="avatar avatar-md radius-100">
                                            <img
                                              src="assets/images/avatar/avatar-thumb-004.webp"
                                              alt="image not found"
                                              className="radius-100"
                                            />
                                          </div>
                                          <h6>Chris Evans</h6>
                                        </div>
                                      </a>
                                      <div className="card-dropdown">
                                        <a href="javascript:void(0);"></a>
                                        <div className="dropdown">
                                          <a href="javascript:void(0);"></a>
                                          <a
                                            className="card-dropdown-box square small"
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
                                              <i className="ri-edit-line"></i>
                                              Edit
                                            </a>
                                            <a
                                              className="dropdown-item"
                                              href="javascript:void(0);"
                                            >
                                              <i className="ri-spam-2-line"></i>
                                              Block
                                            </a>
                                            <a
                                              className="dropdown-item"
                                              href="javascript:void(0);"
                                            >
                                              <i className="ri-delete-bin-line"></i>
                                              Delate
                                            </a>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </li>

                                  <li>
                                    <h5>D</h5>
                                  </li>
                                  <li>
                                    <a href="javascript:void(0);"></a>
                                    <div className="d-flex-between">
                                      <a href="javascript:void(0);">
                                        <div className="d-flex-items gap-10">
                                          <div className="avatar avatar-md radius-100">
                                            <img
                                              src="assets/images/avatar/avatar-thumb-005.webp"
                                              alt="image not found"
                                              className="radius-100"
                                            />
                                          </div>
                                          <h6>David Miller</h6>
                                        </div>
                                      </a>
                                      <div className="card-dropdown">
                                        <a href="javascript:void(0);"></a>
                                        <div className="dropdown">
                                          <a href="javascript:void(0);"></a>
                                          <a
                                            className="card-dropdown-box square small"
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
                                              <i className="ri-edit-line"></i>
                                              Edit
                                            </a>
                                            <a
                                              className="dropdown-item"
                                              href="javascript:void(0);"
                                            >
                                              <i className="ri-spam-2-line"></i>
                                              Block
                                            </a>
                                            <a
                                              className="dropdown-item"
                                              href="javascript:void(0);"
                                            >
                                              <i className="ri-delete-bin-line"></i>
                                              Delate
                                            </a>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </li>

                                  <li>
                                    <h5>E</h5>
                                  </li>
                                  <li>
                                    <a href="javascript:void(0);"></a>
                                    <div className="d-flex-between">
                                      <a href="javascript:void(0);">
                                        <div className="d-flex-items gap-10">
                                          <div className="avatar avatar-md radius-100">
                                            <img
                                              src="assets/images/avatar/avatar-thumb-006.webp"
                                              alt="image not found"
                                              className="radius-100"
                                            />
                                          </div>
                                          <h6>Emma Watson</h6>
                                        </div>
                                      </a>
                                      <div className="card-dropdown">
                                        <a href="javascript:void(0);"></a>
                                        <div className="dropdown">
                                          <a href="javascript:void(0);"></a>
                                          <a
                                            className="card-dropdown-box square small"
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
                                              <i className="ri-edit-line"></i>
                                              Edit
                                            </a>
                                            <a
                                              className="dropdown-item"
                                              href="javascript:void(0);"
                                            >
                                              <i className="ri-spam-2-line"></i>
                                              Block
                                            </a>
                                            <a
                                              className="dropdown-item"
                                              href="javascript:void(0);"
                                            >
                                              <i className="ri-delete-bin-line"></i>
                                              Delate
                                            </a>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </li>
                                  <li>
                                    <a href="javascript:void(0);"></a>
                                    <div className="d-flex-between">
                                      <a href="javascript:void(0);">
                                        <div className="d-flex-items gap-10">
                                          <div className="avatar avatar-md radius-100">
                                            <img
                                              src="assets/images/avatar/avatar-thumb-007.webp"
                                              alt="image not found"
                                              className="radius-100"
                                            />
                                          </div>
                                          <h6>Ethan Hunt</h6>
                                        </div>
                                      </a>
                                      <div className="card-dropdown">
                                        <a href="javascript:void(0);"></a>
                                        <div className="dropdown">
                                          <a href="javascript:void(0);"></a>
                                          <a
                                            className="card-dropdown-box square small"
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
                                              <i className="ri-edit-line"></i>
                                              Edit
                                            </a>
                                            <a
                                              className="dropdown-item"
                                              href="javascript:void(0);"
                                            >
                                              <i className="ri-spam-2-line"></i>
                                              Block
                                            </a>
                                            <a
                                              className="dropdown-item"
                                              href="javascript:void(0);"
                                            >
                                              <i className="ri-delete-bin-line"></i>
                                              Delate
                                            </a>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </li>

                                  <li>
                                    <h5>F</h5>
                                  </li>
                                  <li>
                                    <a href="javascript:void(0);"></a>
                                    <div className="d-flex-between">
                                      <a href="javascript:void(0);">
                                        <div className="d-flex-items gap-10">
                                          <div className="avatar avatar-md radius-100">
                                            <img
                                              src="assets/images/avatar/avatar-thumb-008.webp"
                                              alt="image not found"
                                              className="radius-100"
                                            />
                                          </div>
                                          <h6>Fiona Green</h6>
                                        </div>
                                      </a>
                                      <div className="card-dropdown">
                                        <a href="javascript:void(0);"></a>
                                        <div className="dropdown">
                                          <a href="javascript:void(0);"></a>
                                          <a
                                            className="card-dropdown-box square small"
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
                                              <i className="ri-edit-line"></i>
                                              Edit
                                            </a>
                                            <a
                                              className="dropdown-item"
                                              href="javascript:void(0);"
                                            >
                                              <i className="ri-spam-2-line"></i>
                                              Block
                                            </a>
                                            <a
                                              className="dropdown-item"
                                              href="javascript:void(0);"
                                            >
                                              <i className="ri-delete-bin-line"></i>
                                              Delate
                                            </a>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </li>

                                  <li>
                                    <h5>G</h5>
                                  </li>
                                  <li>
                                    <a href="javascript:void(0);"></a>
                                    <div className="d-flex-between">
                                      <a href="javascript:void(0);">
                                        <div className="d-flex-items gap-10">
                                          <div className="avatar avatar-md radius-100">
                                            <img
                                              src="assets/images/avatar/avatar-thumb-009.webp"
                                              alt="image not found"
                                              className="radius-100"
                                            />
                                          </div>
                                          <h6>George Brown</h6>
                                        </div>
                                      </a>
                                      <div className="card-dropdown">
                                        <a href="javascript:void(0);"></a>
                                        <div className="dropdown">
                                          <a href="javascript:void(0);"></a>
                                          <a
                                            className="card-dropdown-box square small"
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
                                              <i className="ri-edit-line"></i>
                                              Edit
                                            </a>
                                            <a
                                              className="dropdown-item"
                                              href="javascript:void(0);"
                                            >
                                              <i className="ri-spam-2-line"></i>
                                              Block
                                            </a>
                                            <a
                                              className="dropdown-item"
                                              href="javascript:void(0);"
                                            >
                                              <i className="ri-delete-bin-line"></i>
                                              Delate
                                            </a>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </li>

                                  <li>
                                    <h5>H</h5>
                                  </li>
                                  <li>
                                    <a href="javascript:void(0);"></a>
                                    <div className="d-flex-between">
                                      <a href="javascript:void(0);">
                                        <div className="d-flex-items gap-10">
                                          <div className="avatar avatar-md radius-100">
                                            <img
                                              src="assets/images/avatar/avatar-thumb-010.webp"
                                              alt="image not found"
                                              className="radius-100"
                                            />
                                          </div>
                                          <h6>Hannah Baker</h6>
                                        </div>
                                      </a>
                                      <div className="card-dropdown">
                                        <a href="javascript:void(0);"></a>
                                        <div className="dropdown">
                                          <a href="javascript:void(0);"></a>
                                          <a
                                            className="card-dropdown-box square small"
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
                                              <i className="ri-edit-line"></i>
                                              Edit
                                            </a>
                                            <a
                                              className="dropdown-item"
                                              href="javascript:void(0);"
                                            >
                                              <i className="ri-spam-2-line"></i>
                                              Block
                                            </a>
                                            <a
                                              className="dropdown-item"
                                              href="javascript:void(0);"
                                            >
                                              <i className="ri-delete-bin-line"></i>
                                              Delate
                                            </a>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </li>
                                  <li>
                                    <a href="javascript:void(0);"></a>
                                    <div className="d-flex-between">
                                      <a href="javascript:void(0);">
                                        <div className="d-flex-items gap-10">
                                          <div className="avatar avatar-md radius-100">
                                            <img
                                              src="assets/images/avatar/avatar-thumb-011.webp"
                                              alt="image not found"
                                              className="radius-100"
                                            />
                                          </div>
                                          <h6>Henry Cavill</h6>
                                        </div>
                                      </a>
                                      <div className="card-dropdown">
                                        <a href="javascript:void(0);"></a>
                                        <div className="dropdown">
                                          <a href="javascript:void(0);"></a>
                                          <a
                                            className="card-dropdown-box square small"
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
                                              <i className="ri-edit-line"></i>
                                              Edit
                                            </a>
                                            <a
                                              className="dropdown-item"
                                              href="javascript:void(0);"
                                            >
                                              <i className="ri-spam-2-line"></i>
                                              Block
                                            </a>
                                            <a
                                              className="dropdown-item"
                                              href="javascript:void(0);"
                                            >
                                              <i className="ri-delete-bin-line"></i>
                                              Delate
                                            </a>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </li>

                                  <li>
                                    <h5>Z</h5>
                                  </li>
                                  <li>
                                    <a href="javascript:void(0);"></a>
                                    <div className="d-flex-between">
                                      <a href="javascript:void(0);">
                                        <div className="d-flex-items gap-10">
                                          <div className="avatar avatar-md radius-100">
                                            <img
                                              src="assets/images/avatar/avatar-thumb-020.webp"
                                              alt="image not found"
                                              className="radius-100"
                                            />
                                          </div>
                                          <h6>Zoe Saldana</h6>
                                        </div>
                                      </a>
                                      <div className="card-dropdown">
                                        <a href="javascript:void(0);"></a>
                                        <div className="dropdown">
                                          <a href="javascript:void(0);"></a>
                                          <a
                                            className="card-dropdown-box square small"
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
                                              <i className="ri-edit-line"></i>
                                              Edit
                                            </a>
                                            <a
                                              className="dropdown-item"
                                              href="javascript:void(0);"
                                            >
                                              <i className="ri-spam-2-line"></i>
                                              Block
                                            </a>
                                            <a
                                              className="dropdown-item"
                                              href="javascript:void(0);"
                                            >
                                              <i className="ri-delete-bin-line"></i>
                                              Delate
                                            </a>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </li>
                                </ul>
                              </div>
                              <div
                                className="scrollbar-track scrollbar-track-x"
                                style={{ display: "none" }}
                              >
                                <div className="scrollbar-thumb scrollbar-thumb-x"></div>
                              </div>
                              <div
                                className="scrollbar-track scrollbar-track-y"
                                style={{ display: "none" }}
                              >
                                <div className="scrollbar-thumb scrollbar-thumb-y"></div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="email-sidebar-overlay"></div>
                </div>

                <div className="app-chat-main-area">
                  <div className="app-chat-main-header d-flex-between">
                    <div className="d-flex-items gap-15">
                      <a
                        className="inner-sidebar-toggle"
                        href="javascript:void(0)"
                      >
                        <div className="sidebar-menu-bar">
                          <span></span>
                          <span></span>
                          <span></span>
                        </div>
                      </a>
                      <div className="d-flex-items">
                        <div className="app-chat-user">
                          <div className="avatar avatar-md radius-100">
                            <img
                              src="assets/images/avatar/avatar-thumb-002.webp"
                              alt="image not found"
                              className="radius-100"
                            />
                          </div>
                          <div className="status online"></div>
                        </div>
                        <h6>Michael Smith</h6>
                      </div>
                    </div>
                    <div className="d-flex-items gap-15">
                      <button
                        className="btn-icon btn-sm btn-warning-light"
                        type="submit"
                      >
                        <i className="ri-search-line fs-20"></i>
                      </button>
                      <div className="bd--card-dropdown">
                        <a href="javascript:void(0);"></a>
                        <div className="dropdown">
                          <a href="javascript:void(0);"></a>
                          <a
                            className="btn-icon btn-sm btn-dark-light"
                            href="javascript:void(0);"
                            role="button"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                          >
                            <i className="ri-more-2-fill fs-20"></i>
                          </a>
                          <div className="dropdown-menu">
                            <a
                              className="dropdown-item"
                              href="javascript:void(0);"
                            >
                              View Profile
                            </a>
                            <a
                              className="dropdown-item"
                              href="javascript:void(0);"
                            >
                              Mute Notifications
                            </a>
                            <a
                              className="dropdown-item"
                              href="javascript:void(0);"
                            >
                              Clear Chat
                            </a>
                            <a
                              className="dropdown-item"
                              href="javascript:void(0);"
                            >
                              Report
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="app-chat-history-body card-scrollbar"
                    data-scrollbar="true"
                    tabIndex={-1}
                    style={{ overflow: "hidden", outline: "none" }}
                  >
                    <div
                      className="scroll-content"
                      style={{ transform: "translate3d(0px, 0px, 0px)" }}
                    >
                      <ul className="list-unstyled">
                        <li className="app-chat-day-label">
                          {" "}
                          <span>Yesterday</span>{" "}
                        </li>

                        <li className="app-chat-item-start">
                          <div className="app-chat-list-inner">
                            <div className="app-chat-person">
                              <span className="avatar avatar-sm">
                                <img
                                  className="radius-100"
                                  src="assets/images/avatar/avatar-thumb-002.webp"
                                  alt="image not found"
                                />
                              </span>
                            </div>
                            <div className="app-chat-messages">
                              <div>
                                <p className="mb-0">
                                  Just tried an AI app that writes poetry! It's
                                  insanely good. 😍
                                </p>
                              </div>
                              <span className="app-chat-messages-time">
                                08:42PM
                              </span>
                            </div>
                          </div>
                        </li>

                        <li className="app-chat-item-end">
                          <div className="app-chat-list-inner">
                            <div className="app-chat-messages">
                              <div>
                                <p className="mb-0">
                                  Seriously? I need to check it out. Send me a
                                  poem it made!
                                </p>
                              </div>
                              <span className="app-chat-read-time">
                                <i className="ri-check-double-line"></i>
                              </span>
                              08:45PM
                            </div>
                            <div className="app-chatting-person">
                              <span className="avatar avatar-sm">
                                <img
                                  src="assets/images/avatar/avatar-thumb-001.webp"
                                  alt="image not found"
                                  className="radius-100"
                                />
                              </span>
                            </div>
                          </div>
                        </li>

                        <li className="app-chat-item-start">
                          <div className="app-chat-list-inner">
                            <div className="app-chat-person">
                              <span className="avatar avatar-sm">
                                <img
                                  className="radius-100"
                                  src="assets/images/avatar/avatar-thumb-002.webp"
                                  alt="image not found"
                                />
                              </span>
                            </div>
                            <div className="app-chat-messages">
                              <div>
                                <p className="mb-0">
                                  Here's one: "Beneath the stars, the rivers
                                  dream..." 🌌🌊
                                </p>
                              </div>
                              <span className="app-chat-messages-time">
                                08:47PM
                              </span>
                            </div>
                          </div>
                        </li>

                        <li className="app-chat-item-end">
                          <div className="app-chat-list-inner">
                            <div className="app-chat-messages">
                              <div>
                                <p className="mb-0">
                                  Wow, that's actually beautiful. 😳 Technology
                                  is crazy now.
                                </p>
                              </div>
                              <span className="app-chat-read-time">
                                <i className="ri-check-double-line"></i>
                              </span>
                              08:50PM
                            </div>
                            <div className="app-chatting-person">
                              <span className="avatar avatar-sm">
                                <img
                                  src="assets/images/avatar/avatar-thumb-001.webp"
                                  alt="image not found"
                                  className="radius-100"
                                />
                              </span>
                            </div>
                          </div>
                        </li>

                        <li className="app-chat-day-label">
                          {" "}
                          <span>Today</span>{" "}
                        </li>

                        <li className="app-chat-item-start">
                          <div className="app-chat-list-inner">
                            <div className="app-chat-person">
                              <span className="avatar avatar-sm">
                                <img
                                  className="radius-100"
                                  src="assets/images/avatar/avatar-thumb-002.webp"
                                  alt="image not found"
                                />
                              </span>
                            </div>
                            <div className="app-chat-messages">
                              <div>
                                <p className="mb-0">
                                  Good morning! ☀️ Did you see the AI art
                                  contest winners?
                                </p>
                              </div>
                              <span className="app-chat-messages-time">
                                09:12AM
                              </span>
                            </div>
                          </div>
                        </li>

                        <li className="app-chat-item-end">
                          <div className="app-chat-list-inner">
                            <div className="app-chat-messages">
                              <div>
                                <p className="mb-0">
                                  Yeah! 😍 Some of the paintings looked like
                                  masterpieces from another world!
                                </p>
                              </div>
                              <span className="app-chat-read-time">
                                <i className="ri-check-double-line"></i>
                              </span>
                              09:14AM
                            </div>
                            <div className="app-chatting-person">
                              <span className="avatar avatar-sm">
                                <img
                                  src="assets/images/avatar/avatar-thumb-001.webp"
                                  alt="image not found"
                                  className="radius-100"
                                />
                              </span>
                            </div>
                          </div>
                        </li>

                        <li className="app-chat-item-start">
                          <div className="app-chat-list-inner">
                            <div className="app-chat-person">
                              <span className="avatar avatar-sm">
                                <img
                                  className="radius-100"
                                  src="assets/images/avatar/avatar-thumb-002.webp"
                                  alt="image not found"
                                />
                              </span>
                            </div>
                            <div className="app-chat-messages">
                              <div>
                                <p className="mb-0">
                                  Imagine combining AI art and AI poetry
                                  together! 📜🎨
                                </p>
                              </div>
                              <div>
                                <p className="mb-0">
                                  i AI! Can you explain neural networks to me in
                                  simple terms?
                                </p>
                              </div>
                              <div>
                                <p className="mb-0">
                                  Have you heard about the AI that can code apps
                                  from just a prompt?
                                </p>
                              </div>
                              <span className="app-chat-messages-time">
                                09:16AM
                              </span>
                            </div>
                          </div>
                        </li>

                        <li className="app-chat-item-end">
                          <div className="app-chat-list-inner">
                            <div className="app-chat-messages">
                              <div>
                                <p className="mb-0">
                                  Bro, that's the next big trend! 🔥 We should
                                  totally start a project!
                                </p>
                              </div>
                              <span className="app-chat-read-time">
                                <i className="ri-check-double-line"></i>
                              </span>
                              09:18AM
                            </div>
                            <div className="app-chatting-person">
                              <span className="avatar avatar-sm">
                                <img
                                  src="assets/images/avatar/avatar-thumb-001.webp"
                                  alt="image not found"
                                  className="radius-100"
                                />
                              </span>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                    <div
                      className="scrollbar-track scrollbar-track-x"
                      style={{ display: "none" }}
                    >
                      <div
                        className="scrollbar-thumb scrollbar-thumb-x"
                        style={{
                          width: "522px",
                          transform: "translate3d(0px, 0px, 0px)",
                        }}
                      ></div>
                    </div>
                    <div
                      className="scrollbar-track scrollbar-track-y"
                      style={{ display: "block" }}
                    >
                      <div
                        className="scrollbar-thumb scrollbar-thumb-y"
                        style={{
                          height: "371.929px",
                          transform: "translate3d(0px, 0px, 0px)",
                        }}
                      ></div>
                    </div>
                  </div>
                  <div className="app-chat-main-footer">
                    <form className="form-send-message d-flex justify-content-between align-items-center">
                      <input
                        className="form-control message-input border-0 me-4 shadow-none"
                        placeholder="Type your message here..."
                      />
                      <div className="message-actions d-flex-items gap-15">
                        <span className="cursor-pointer text-black">
                          <i className="ri-emoji-sticker-line fs-22"></i>
                        </span>
                        <span className="cursor-pointer text-black">
                          <i className="ri-mic-line fs-22"></i>
                        </span>
                        <label htmlFor="attach-doc" className="form-label mb-0">
                          <span className="cursor-pointer">
                            <i className="ri-attachment-line fs-22"></i>
                          </span>
                          <input type="file" id="attach-doc" hidden />
                        </label>
                        <button className="btn btn-primary">
                          Send <i className="ri-send-plane-line"></i>
                        </button>
                      </div>
                    </form>
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

export default Messages;
