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
  description: string;
  file?: File | null;
}

type BuildProcessProps = {
  view: boolean;
  length: number;
};

const BuildProcess = ({ view, length = 1 }: BuildProcessProps) => {
  const [steps, setSteps] = useState<Step[]>(
    Array.from({ length }).fill({
      id: "step-1",
      title: "",
      description: "",
      file: null,
    }) as Step[]
  );

  const handleAddStep = () => {
    const newStep: Step = {
      id: `step-${steps.length + 1}`,
      title: "",
      description: "",
      file: null,
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
    <div className="build-process">
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="steps">
          {(provided) => (
            <div {...provided.droppableProps} ref={provided.innerRef}>
              {steps.map((step, index) => (
                <Draggable key={step.id} draggableId={step.id} index={index}>
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
                      <h5 className="mb-15">Step {index + 1}</h5>
                      <input
                        type="text"
                        placeholder="Step Title"
                        value={step.title}
                        onChange={(e) =>
                          handleChange(index, "title", e.target.value)
                        }
                        className="form-control mb-2"
                      />
                      <textarea
                        placeholder="Step Description"
                        value={step.description}
                        onChange={(e) =>
                          handleChange(index, "description", e.target.value)
                        }
                        className="form-control mb-2"
                      />

                      {view ? (
                        <p>
                          <label>
                            Uploaded Document:{" "}
                            <a
                              href="#"
                              style={{ fontWeight: "bold", fontSize: "16px" }}
                            >
                              Induction procedure.pdf
                            </a>
                          </label>
                        </p>
                      ) : (
                        <>
                          {" "}
                          <input
                            type="file"
                            onChange={(e) =>
                              handleChange(
                                index,
                                "file",
                                e.target.files ? e.target.files[0] : null
                              )
                            }
                            className="form-control mb-2"
                          />
                          <button
                            type="button"
                            className="btn btn-danger"
                            onClick={() => handleRemoveStep(index)}
                          >
                            Remove Step
                          </button>
                        </>
                      )}
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>

      {!view && (
        <button className="btn btn-primary mt-3" onClick={handleAddStep}>
          Add Step
        </button>
      )}
    </div>
  );
};
export default BuildProcess;
