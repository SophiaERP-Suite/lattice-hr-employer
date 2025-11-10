const Footer = () => {
  return (
    <>
      <footer className="app-footer-area">
        <div className="row">
          <div className="col-xl-12">
            <div className="card-footer d-flex justify-center">
              <p>
                Copyright © <span id="year"></span>{" "}
                <span className="text-heading">Lattice HR</span> Powered by{" "}
                <a href="https://techiefy.co.uk/one/default" target="_blank">
                  Techiefy UK
                </a>{" "}
                All rights reserved
              </p>
            </div>
          </div>
        </div>
      </footer>

      {/* Search Modal Start */}
      <div className="modal fade" id="searchModal" tabIndex={-1}>
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-body">
              <div className="input-group">
                <input
                  type="search"
                  className="form-control"
                  placeholder="Search..."
                />
                <button
                  className="btn btn-primary"
                  type="button"
                  id="button-addon1"
                >
                  <i className="ri-search-line"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Search Modal End */}
    </>
  );
};

export default Footer;
