import { useEffect, useMemo,useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Plus, Edit2, Trash2, ChevronRight, Save, X } from "lucide-react";
import { toast, ToastContainer } from "react-toastify";
import {
  InterviewQuestion, QuestionFormData, 
} from "../types/Interview";
import { CreateInterview, DeleteQuestion, GetAllQuestions, UpdateQuestion } from "../api/InterviewApi";
import Hashids from "hashids";


const InterviewQuestionsPageLocal = () => {
  const navigate = useNavigate();
 const params = useParams();
  const [questions, setQuestions] = useState<InterviewQuestion[]>([]);
  const [showForm, setShowForm] = useState(false);
  const [questionId, setQuestionId] = useState<number>();
  const [editingQuestion, setEditingQuestion] = useState<InterviewQuestion | null>(null);

    const hashIds = new Hashids("LatticeHrEncode", 10);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<QuestionFormData>({
    defaultValues: {
      displayOrder: 0,
    },
  });
  const hashId = useMemo(() => {
    return hashIds.decode(String(params.id))[0];
  }, [params.id]);

  useEffect(() => {
getQuestions()
  }, [])

  const getQuestions = async () => {
try {
const questions = await GetAllQuestions(Number(hashId))

if(!questions) {
  return
}
setQuestions(questions)
}catch {

}
  }


  const onSubmit = async (data: QuestionFormData) => {
    try {
      if (editingQuestion) {
        const formData = new FormData()

        formData.append("InterviewQuestionId", Number(editingQuestion.interviewQuestionId).toString());
    formData.append("QuestionText", data.question);
    formData.append("QuestionHint", String(data.hint));
    formData.append("Order", String(data.displayOrder || questions.length + 1));

const interviewResponse = await UpdateQuestion(formData)       

if(!interviewResponse) {
toast.error("Failed to add question")
  return
}
      
        toast.success("Question updated successfully!");
      } else {

        const formData = new FormData()

         formData.append("JobInterviewId", hashId.toString());
    formData.append("QuestionText", data.question);
    formData.append("QuestionHint", String(data.hint));
    formData.append("Order", String(data.displayOrder || questions.length + 1));

const interviewResponse = await CreateInterview(formData)       

if(!interviewResponse) {
toast.error("Failed to add question")
  return
}
      
        toast.success("Question created successfully!");
      }

      cancelEdit();
    } catch (error) {
      console.error("Error saving question:", error);
      toast.error("An error occurred while saving the question");
    } finally {
      await getQuestions()
    }
  };

  const handleEdit = (question: InterviewQuestion, questionId: number) => {
    setEditingQuestion(question);
    setShowForm(true);
    setQuestionId(questionId)
    reset({
      question: question.questionText,
      hint: question.questionHint|| "",
      displayOrder: question.order,
    });
  };

  const handleDelete = async (questionId: number) => {
    try {
    if (!window.confirm("Are you sure you want to delete this question?")) {
      return;
    }

    const deleteQuestion = await DeleteQuestion(questionId)

    if(!deleteQuestion) {
      toast.error("Failed to delete question")
      return
    }
    
    toast.success("Question deleted successfully!");
  } catch {
 toast.error("Failed to delete question")
  } finally {
await getQuestions()
  }
  };

  const cancelEdit = () => {
    setEditingQuestion(null);
    setShowForm(false);
    reset({
      displayOrder: 0,
    });
  };

  const sortedQuestions = [...questions].sort((a, b) => a.order - b.order);

  return (
    <div className="app-content-area">
      <div className="app-content-wrap">
        <ToastContainer />
        <div className="container-fluid">
          {/* Page Header */}
          <div className="row mb-3">
            <div className="col-12">
              <div className="page-title-box d-flex-between flex-wrap gap-15">
                <div>
                  <h1 className="page-title fs-18 lh-1 mb-2">Interview Questions</h1>
                  <p className="text-muted mb-0">Job ID: {}</p>
                </div>
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb breadcrumb-example1 mb-0">
                    <li className="breadcrumb-item">
                      <a href="/Dashboard">Home</a>
                    </li>
                    <ChevronRight size={15} style={{ position: "relative", top: "3px" }} />
                    <li className="breadcrumb-item">
                      <a href="/job-dashboard">Jobs</a>
                    </li>
                    <ChevronRight size={15} style={{ position: "relative", top: "3px" }} />
                    <li className="breadcrumb-item active">Interview Questions</li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="row mb-3">
            <div className="col-12">
              <div className="d-flex gap-2 flex-wrap">
                <button
                  className="btn btn-primary"
                  onClick={() => setShowForm(!showForm)}
                >
                  <Plus size={18} className="me-1" />
                  {showForm ? "Hide Form" : "Add Question"}
                </button>
                <button
                  className="btn btn-outline-secondary"
                  // onClick={() => navigate(`/jobDetails/${id}`)}
                >
                  Back to Job
                </button>
              </div>
            </div>
          </div>

          {/* Question Form */}
          {showForm && (
            <div className="row mb-3">
              <div className="col-12">
                <div className="card">
                  <div className="card-header mb-5">
                    <h5 className="mb-0">
                      {editingQuestion ? "Edit Question" : "Add New Question"}
                    </h5>
                  </div>
                  <div className="card-body mt-10" style={{marginTop: "20px"}}>
                    <form onSubmit={handleSubmit(onSubmit)}>
                      <div className="row g-3">
                        {/* Question Text */}
                        <div className="col-12">
                          <label className="form-label">
                            Question <span className="text-danger">*</span>
                          </label>
                          <textarea
                            className={`form-control ${errors.question ? "is-invalid" : ""}`}
                            rows={3}
                            placeholder="Enter your question..."
                            {...register("question", {
                              required: "Question is required",
                              maxLength: {
                                value: 500,
                                message: "Question cannot exceed 500 characters",
                              },
                            })}
                          />
                          {errors.question && (
                            <div className="invalid-feedback">{errors.question.message}</div>
                          )}
                        </div>

                        {/* Hint/Description */}
                        <div className="col-12">
                          <label className="form-label">Hint / Description (Optional)</label>
                          <textarea
                            className="form-control"
                            rows={2}
                            placeholder="Add a hint or description to help the candidate understand the question..."
                            {...register("hint", {
                              maxLength: {
                                value: 500,
                                message: "Hint cannot exceed 500 characters",
                              },
                            })}
                          />
                          <small className="text-muted">
                            Provide additional context or guidance for the candidate
                          </small>
                        </div>

                        {/* Display Order */}
                        <div className="col-md-6">
                          <label className="form-label">Display Order</label>
                          <input
                            type="number"
                            className="form-control"
                            placeholder="0 for auto"
                            {...register("displayOrder", { valueAsNumber: true })}
                          />
                          <small className="text-muted">Leave as 0 to add at the end</small>
                        </div>

                        {/* Form Actions */}
                        <div className="col-12">
                          <div className="d-flex gap-2">
                            <button type="submit" className="btn btn-primary">
                              <Save size={18} className="me-1" />
                              {editingQuestion ? "Update" : "Save"}
                            </button>
                            <button
                              type="button"
                              className="btn btn-secondary"
                              onClick={cancelEdit}
                            >
                              <X size={18} className="me-1" />
                              Cancel
                            </button>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Questions List */}
          <div className="row">
            <div className="col-12">
              <div className="card">
                <div className="card-header ">
                  <h5 className="mb-0">Questions ({questions.length})</h5>
                </div>
                <div className="card-body">
                  {questions.length === 0 ? (
                    <div className="text-center py-5">
                      <p className="text-muted mb-3">No questions yet</p>
                      <button
                        className="btn btn-primary"
                        onClick={() => setShowForm(true)}
                      >
                        <Plus size={18} className="me-1" />
                        Add Your First Question
                      </button>
                    </div>
                  ) : (
                    <div className="list-group">
                      {sortedQuestions.map((question, index) => (
                        <div
                          key={question.interviewQuestionId}
                          className="list-group-item"
                        >
                          <div className="d-flex justify-content-between align-items-start">
                            <div className="flex-grow-1">
                              <h6 className="mb-1">
                                {index + 1}. {question.questionText}
                              </h6>
                              {question.questionHint && (
                                <p className="text-muted small mb-1 mt-1">
                                  <span className="fw-semibold">Hint:</span> {question.questionHint}
                                </p>
                              )}
                              <small className="text-muted">
                                Display Order: {question.order}
                              </small>
                            </div>
                            <div className="d-flex gap-1 ms-3">
                              <button
                                className="btn btn-sm btn-outline-primary"
                                onClick={() => handleEdit(question, question.interviewQuestionId)}
                                title="Edit"
                              >
                                <Edit2 size={14} />
                              </button>
                              <button
                                className="btn btn-sm btn-outline-danger"
                                onClick={() => handleDelete(question.interviewQuestionId)}
                                title="Delete"
                              >
                                <Trash2 size={14} />
                              </button>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InterviewQuestionsPageLocal;