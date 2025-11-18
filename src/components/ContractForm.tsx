import { useState } from "react";
import {
  DragDropContext,
  Droppable,
  Draggable,
  DropResult,
} from "react-beautiful-dnd";

interface Step {
  id: string;
  title: string;
}

type ContractFormProps = {
  type: "edit" | "create";
};

const ContractForm = ({ type }: ContractFormProps) => {
  const [steps, setSteps] = useState<Step[]>(
    Array.from({ length: type === "create" ? 1 : 2 }).fill({
      id: "step-1",
      title: "",
    }) as Step[]
  );

  const handleAddStep = () => {
    const newStep: Step = {
      id: `step-${steps.length + 1}`,
      title: "",
    };
    setSteps([...steps, newStep]);
  };

  const handleRemoveStep = (index: number) => {
    const newSteps = [...steps];
    newSteps.splice(index, 1);
    setSteps(newSteps);
  };

  const handleChange = (
    index: number,
    field: keyof Step,
    value: string | File | null
  ) => {
    const newSteps = [...steps];
    newSteps[index][field] = value as File & string;
    setSteps(newSteps);
  };

  const onDragEnd = (result: DropResult) => {
    if (!result.destination) return;
    const newSteps = Array.from(steps);
    const [moved] = newSteps.splice(result.source.index, 1);
    newSteps.splice(result.destination.index, 0, moved);
    setSteps(newSteps);
  };

  return (
    <div
      className="modal fade"
      id="addNewEmployee"
      tabIndex={-1}
      aria-labelledby="addNewEmployeeLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered modal-lg">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-16" id="addNewEmployeeLabel">
              {type === "create" ? "Create" : "Edit"} Contract
            </h1>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <div className="row" style={{ rowGap: "20px" }}>
              <div className="col-xl-12">
                <label htmlFor="address" className="form-label">
                  Description
                </label>
                <textarea
                  className="form-control"
                  id="address"
                  rows={3}
                  placeholder="Description"
                  spellCheck="false"
                ></textarea>
              </div>

              <div className="col-xl-6">
                <label htmlFor="currency" className="form-label">
                  Currency
                </label>
                <select className="form-control" id="currency">
                  <option value="ngn">₦ NGN</option>
                  <option value="usd">$ USD</option>
                  <option value="eur">€ EUR</option>
                  <option value="gbp">£ GBP</option>
                </select>
              </div>

              <div className="col-xl-6">
                <label htmlFor="rateMin" className="form-label">
                  Rate Offered (Min)
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="rateMin"
                  placeholder="Minimum Rate"
                />
              </div>

              <div className="col-12">
                <label className="form-label mb-10">Attached Files</label>

                <input
                  className="form-control flatpickr-input"
                  type="file"
                  multiple
                />
              </div>

              <div className="col-12">
                <label className="form-label mb-10">Key Terms</label>

                <DragDropContext onDragEnd={onDragEnd}>
                  <Droppable droppableId="steps">
                    {(provided) => (
                      <div {...provided.droppableProps} ref={provided.innerRef}>
                        {steps.map((step, index) => (
                          <Draggable
                            key={step.id}
                            draggableId={step.id}
                            index={index}
                          >
                            {(provided) => (
                              <div
                                className="step-card"
                                ref={provided.innerRef}
                                {...provided.draggableProps}
                                {...provided.dragHandleProps}
                                style={{
                                  padding: "1rem",
                                  marginBottom: "2rem",
                                  border: "1px solid #ccc",
                                  borderRadius: "5px",
                                  background: "#f9f9f9",
                                  ...provided.draggableProps.style,
                                }}
                              >
                                <h5 className="mb-15">Term {index + 1}</h5>
                                <input
                                  type="text"
                                  placeholder="Condition"
                                  value={step.title}
                                  onChange={(e) =>
                                    handleChange(index, "title", e.target.value)
                                  }
                                  className="form-control mb-2"
                                />

                                <button
                                  type="button"
                                  className="btn btn-danger"
                                  onClick={() => handleRemoveStep(index)}
                                >
                                  Remove Condition
                                </button>
                              </div>
                            )}
                          </Draggable>
                        ))}
                        {provided.placeholder}
                      </div>
                    )}
                  </Droppable>
                </DragDropContext>

                <button
                  className="btn btn-primary mt-3"
                  onClick={handleAddStep}
                >
                  Add Condition
                </button>
              </div>
            </div>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-danger"
              data-bs-dismiss="modal"
            >
              Save as Draft
            </button>
            <button type="button" className="btn btn-primary">
              {type === "edit" ? "Update" : "Send"} Contract
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContractForm;
