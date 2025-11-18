import { WithContext as ReactTags, Tag } from "react-tag-input";
import { useState } from "react";
import BuildProcess from "../components/BuildProcess";
import { NavLink } from "react-router-dom";

const suggestions = [
  { id: "frontend_developer", text: "Frontend Developer", className: "" },
  { id: "backend_developer", text: "Backend Developer", className: "" },
  { id: "fullstack_developer", text: "Fullstack Developer", className: "" },
  { id: "react_developer", text: "React Developer", className: "" },
  { id: "nodejs_developer", text: "Node.js Developer", className: "" },
  { id: "ui_engineer", text: "UI Engineer", className: "" },
  { id: "software_engineer", text: "Software Engineer", className: "" },
  { id: "database_engineer", text: "Database Engineer", className: "" },
  { id: "web_designer", text: "Web Designer", className: "" },
  { id: "api_engineer", text: "API Engineer", className: "" },
];

const CreateInductionProcess = () => {
  const [tags, setTags] = useState<Tag[]>([]);
  const [processType, setProcessType] = useState<"document" | "custom">(
    "document"
  );

  const handleDelete = (index: number) => {
    setTags(tags.filter((_, i) => i !== index));
  };

  const onTagUpdate = (index: number, newTag: Tag) => {
    const updatedTags = [...tags];
    updatedTags.splice(index, 1, newTag);
    setTags(updatedTags);
  };

  const handleAddition = (tag: Tag) => {
    setTags((prevTags) => {
      return [...prevTags, tag];
    });
  };

  const handleDrag = (tag: Tag, currPos: number, newPos: number) => {
    const newTags = tags.slice();

    newTags.splice(currPos, 1);
    newTags.splice(newPos, 0, tag);

    setTags(newTags);
  };

  const onClearAll = () => {
    setTags([]);
  };

  return (
    <div className="app-content-area">
      <div className="app-content-wrap">
        <div className="container-fluid">
          <div className="row">
            <div className="col-xl-12">
              <div className="page-title-box d-flex-between flex-wrap gap-15">
                <h1 className="page-title fs-18 lh-1">New Induction</h1>
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb breadcrumb-example1 mb-0">
                    <li className="breadcrumb-item active" aria-current="page">
                      <NavLink to="/create-induction">
                        New Induction{" "}
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
                      <NavLink to="/induction">Induction</NavLink>
                    </li>

                    <li className="breadcrumb-item">
                      <NavLink to="/dashboard">Home</NavLink>
                    </li>
                  </ol>
                </nav>
              </div>
            </div>

            <div className="col-xl-12">
              <div className="card">
                <div className="card-header">
                  <h4>New Induction Process</h4>
                </div>
                <div className="card-body pt-15">
                  <div className="row gy-15">
                    <div className="col-xl-12">
                      <h5>Induction Information</h5>
                    </div>

                    <div className="col-xl-12 mt-20">
                      <label htmlFor="title" className="form-label">
                        Title
                      </label>
                      <input
                        type="text"
                        className="form-control flatpickr-input"
                        id="title"
                        placeholder="Title"
                      />
                    </div>
                    <div className="col-xl-12">
                      <label className="form-label">Description</label>
                      <textarea
                        className="form-control"
                        id="address"
                        rows={5}
                        placeholder="Description"
                        spellCheck="false"
                      ></textarea>
                    </div>

                    <div className="col-xl-12">
                      <div>
                        <label className="form-label">Associated Jobs</label>

                        <ReactTags
                          tags={tags}
                          inputFieldPosition="top"
                          suggestions={suggestions}
                          handleDelete={handleDelete}
                          handleAddition={handleAddition}
                          handleDrag={handleDrag}
                          onTagUpdate={onTagUpdate}
                          editable
                          clearAll
                          onClearAll={onClearAll}
                          maxTags={15}
                          allowAdditionFromPaste
                          placeholder="Press enter to add new job"
                          classNames={{
                            tagInput: "tag-container",
                            tagInputField: "tag-input form-control",
                            tag: "btn btn-primary selected-tag",
                            remove: "remove-tag",
                            clearAll: "clear-all-tags",
                            selected: "selected-tag-container",
                            editTagInputField: "form-control",
                            suggestions: "tag-suggestions",
                          }}
                        />
                      </div>
                    </div>

                    <div className="col-xl-12">
                      <label htmlFor="categoryType" className="form-label">
                        Process Type
                      </label>
                      <select
                        className="form-select"
                        id="categoryType"
                        value={processType}
                        onChange={(e) =>
                          setProcessType(
                            e.target.value as "custom" | "document"
                          )
                        }
                      >
                        <option value="document">Upload Document</option>
                        <option value="custom">Custom Process</option>
                      </select>
                    </div>

                    {processType === "document" ? (
                      <div className="col-xl-12 mt-30">
                        <label className="form-label fw-semibold fs-16 mb-20">
                          Uploaded Document
                        </label>

                        <input
                          className="form-control flatpickr-input"
                          type="file"
                        />
                      </div>
                    ) : (
                      <div className="col-xl-12 mt-30">
                        <label className="form-label fw-semibold fs-16 mb-20">
                          Custom Processes
                        </label>

                        <BuildProcess view={false} length={1} />
                      </div>
                    )}

                    <div className="d-flex gap-10 align-items-center justify-content-end mt-25">
                      <button type="button" className="btn btn-warning">
                        Save As Draft
                      </button>
                      <button type="button" className="btn btn-primary">
                        Publish
                      </button>
                    </div>
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

export default CreateInductionProcess;
