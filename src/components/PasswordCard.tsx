import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

dayjs.extend(relativeTime);

const PasswordCard = () => {

  return (
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
  );
};

export default PasswordCard;
