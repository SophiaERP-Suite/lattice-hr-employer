import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

dayjs.extend(relativeTime);



const NotificationCard = () => {

  return (
    <div className="card">
      <div className="card-header">
        <div className="">
          <h4 className="mb-1">Notification Settings</h4>
          <p className="text-muted">
            Customize how you receive notifications across channels.
          </p>
        </div>
      </div>
      <div className="card-body pt-15">
        <div className="table-responsive">
          <table className="table table-hover table-bordered text-center text-nowrap">
            <thead>
              <tr>
                <th className="text-start ps-3">
                  Notification Type
                </th>
                <th>Email</th>
                <th>SMS</th>
                <th>Push</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="text-start ps-3">
                  Job Notifications
                </td>
                <td>
                  <input type="checkbox" checked />
                </td>
                <td>
                  <input
                    className="form-check-input"
                    type="checkbox"
                  />
                </td>
                <td>
                  <input type="checkbox" checked />
                </td>
              </tr>
              <tr>
                <td className="text-start ps-3">
                  {" "}
                  Work & Attendance Notifications
                </td>
                <td>
                  <input type="checkbox" checked />
                </td>
                <td>
                  <input type="checkbox" checked />
                </td>
                <td>
                  <input
                    className="form-check-input"
                    type="checkbox"
                  />
                </td>
              </tr>
              <tr>
                <td className="text-start ps-3">
                  Payment Notifications
                </td>
                <td>
                  <input type="checkbox" checked />
                </td>
                <td>
                  <input
                    className="form-check-input"
                    type="checkbox"
                  />
                </td>
                <td>
                  <input type="checkbox" checked />
                </td>
              </tr>
              <tr>
                <td className="text-start ps-3">
                  System Notifications
                </td>
                <td>
                  <input
                    className="form-check-input"
                    type="checkbox"
                  />
                </td>
                <td>
                  <input
                    className="form-check-input"
                    type="checkbox"
                  />
                </td>
                <td>
                  <input type="checkbox" checked />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="d-flex justify-content-end gap-10 mt-15">
          <button className="btn btn-sm btn-danger">Discard</button>
          <button className="btn btn-sm btn-success">
            Update Preferences
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotificationCard;
