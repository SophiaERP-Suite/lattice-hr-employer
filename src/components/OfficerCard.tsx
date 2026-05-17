import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

dayjs.extend(relativeTime);



const OfferCard = () => {

  return (
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
  );
};

export default OfferCard;
