import { useState } from "react";
import {
    Plus, Trash2, CheckCircle, GripVertical, AlertCircle,
    FileText, Video, Upload, ClipboardList, CheckSquare,
    HelpCircle, BookOpen
} from "lucide-react";

type StepType = "Document" | "Video" | "Upload" | "Form" | "Task" | "Quiz" | "Acknowledgement";

// Document
interface DocumentConfig { fileUrl: string; fileName: string; description: string; }
// Video
interface VideoConfig { videoUrl: string; description: string; }
// Upload
interface UploadConfig { instructions: string; acceptedFormats: string; maxSizeMb: number; }
// Form
interface FormField { id: string; label: string; type: "text" | "email" | "tel" | "date" | "number" | "textarea" | "select"; required: boolean; options?: string; }
interface FormConfig { fields: FormField[]; }
// Task
interface TaskConfig { instructions: string; checklistItems: string[]; requiresScreenshot: boolean; }
// Quiz
interface QuizQuestion { id: string; text: string; options: string[]; correct: number; }
interface QuizConfig { questions: QuizQuestion[]; passMarkPercent: number; }
// Acknowledgement
interface AcknowledgementConfig { policyTitle: string; policyText: string; requireSignature: boolean; }

export const DocumentConfigEditor = ({
    value, onChange
}: { value: DocumentConfig; onChange: (v: DocumentConfig) => void }) => {
    const [useUrl, setUseUrl] = useState(!!value.fileUrl && !value.fileUrl.startsWith("/uploads"));

    return (
        <div className="d-flex flex-column gap-3" >
            <div>
                <label className="form-label" > Description for candidate </label>
                < textarea className="form-control" rows={2}
                    placeholder="e.g., Please read the company handbook carefully before proceeding."
                    value={value.description}
                    onChange={e => onChange({ ...value, description: e.target.value })} />
            </div>

            < div >
                <label className="form-label" > Document Source </label>
                < div className="d-flex gap-3 mb-3" >
                    <div className="form-check" >
                        <input className="form-check-input" type="radio" id="doc-upload" name="docSource"
                            checked={!useUrl} onChange={() => setUseUrl(false)} />
                        < label className="form-check-label" htmlFor="doc-upload" > Upload file </label>
                    </div>
                    < div className="form-check" >
                        <input className="form-check-input" type="radio" id="doc-url" name="docSource"
                            checked={useUrl} onChange={() => setUseUrl(true)} />
                        < label className="form-check-label" htmlFor="doc-url" > Paste URL </label>
                    </div>
                </div>

                {
                    useUrl ? (
                        <input type="url" className="form-control"
                            placeholder="https://docs.google.com/... or https://yoursite.com/file.pdf"
                            value={value.fileUrl}
                            onChange={e => onChange({ ...value, fileUrl: e.target.value })
                            } />
                    ) : (
                        <div>
                            <input type="file" className="form-control" accept=".pdf,.doc,.docx,.ppt,.pptx"
                                onChange={e => {
                                    const file = e.target.files?.[0];
                                    if (file) onChange({ ...value, fileName: file.name, fileUrl: "" });
                                    // TODO: upload file to server and store returned URL in fileUrl
                                }} />
                            {
                                value.fileName && (
                                    <small className="text-success mt-1 d-flex align-items-center gap-1" >
                                        <CheckCircle size={13} /> {value.fileName}
                                    </small>
                                )
                            }
                            <small className="text-muted" > Accepted: PDF, DOC, DOCX, PPT, PPTX </small>
                        </div>
                    )}
            </div>
        </div>
    );
};

// ── Video ──────────────────────────────────────────────────────────
export const VideoConfigEditor = ({
    value, onChange
}: { value: VideoConfig; onChange: (v: VideoConfig) => void }) => {

    // Convert watch URL to embed URL
    const toEmbedUrl = (url: string) => {
        const yt = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&\s]+)/);
        if (yt) return `https://www.youtube.com/embed/${yt[1]}`;
        const vimeo = url.match(/vimeo\.com\/(\d+)/);
        if (vimeo) return `https://player.vimeo.com/video/${vimeo[1]}`;
        return url;
    };

    const embedUrl = value.videoUrl ? toEmbedUrl(value.videoUrl) : "";

    return (
        <div className="d-flex flex-column gap-3" >
            <div className="alert alert-info d-flex gap-2 py-2 mb-0" >
                <AlertCircle size={15} className="flex-shrink-0 mt-1" />
                <small>Paste a YouTube or Vimeo link.Direct video file uploads are not supported due to file size.</small>
            </div>

            < div >
                <label className="form-label" > Video URL < span className="text-danger" >* </span></label >
                <input type="url" className="form-control"
                    placeholder="https://www.youtube.com/watch?v=... or https://vimeo.com/..."
                    value={value.videoUrl}
                    onChange={e => onChange({ ...value, videoUrl: e.target.value })} />
            </div>

            {/* Live preview */}
            {
                embedUrl && (
                    <div>
                        <label className="form-label" > Preview </label>
                        < div className="ratio ratio-16x9 rounded overflow-hidden border" >
                            <iframe src={embedUrl} title="Video preview" allowFullScreen style={{ border: "none" }
                            } />
                        </div>
                    </div>
                )}

            <div>
                <label className="form-label" > Instructions for candidate </label>
                < textarea className="form-control" rows={2}
                    placeholder="e.g., Watch this welcome message from our CEO before moving on."
                    value={value.description}
                    onChange={e => onChange({ ...value, description: e.target.value })} />
            </div>
        </div>
    );
};

// ── Upload ─────────────────────────────────────────────────────────
export const UploadConfigEditor = ({
    value, onChange
}: { value: UploadConfig; onChange: (v: UploadConfig) => void }) => (
    <div className="d-flex flex-column gap-3" >
        <div>
            <label className="form-label" > Instructions for candidate < span className="text-danger" >* </span></label >
            <textarea className="form-control" rows={3}
                placeholder="e.g., Please upload your signed employment contract. Ensure all pages are signed and initialled."
                value={value.instructions}
                onChange={e => onChange({ ...value, instructions: e.target.value })} />
        </div>
        < div className="row g-3" >
            <div className="col-md-8" >
                <label className="form-label" > Accepted file types </label>
                < input type="text" className="form-control"
                    placeholder=".pdf,.doc,.docx"
                    value={value.acceptedFormats}
                    onChange={e => onChange({ ...value, acceptedFormats: e.target.value })} />
                < small className="text-muted" > Comma - separated e.g. .pdf,.doc,.docx,.jpg </small>
            </div>
            < div className="col-md-4" >
                <label className="form-label" > Max file size(MB) </label>
                < input type="number" className="form-control" min={1} max={100}
                    value={value.maxSizeMb}
                    onChange={e => onChange({ ...value, maxSizeMb: Number(e.target.value) })} />
            </div>
        </div>
    </div>
);

// ── Form ───────────────────────────────────────────────────────────
const FIELD_TYPES = [
    { value: "text", label: "Short Text" },
    { value: "textarea", label: "Long Text" },
    { value: "email", label: "Email" },
    { value: "tel", label: "Phone" },
    { value: "date", label: "Date" },
    { value: "number", label: "Number" },
    { value: "select", label: "Dropdown" },
];

export const FormConfigEditor = ({
    value, onChange
}: { value: FormConfig; onChange: (v: FormConfig) => void }) => {
    const addField = () => {
        onChange({
            fields: [...value.fields, {
                id: crypto.randomUUID(), label: "", type: "text", required: true, options: ""
            }]
        });
    };

    const updateField = (id: string, patch: Partial<FormField>) => {
        onChange({ fields: value.fields.map(f => f.id === id ? { ...f, ...patch } : f) });
    };

    const removeField = (id: string) => {
        onChange({ fields: value.fields.filter(f => f.id !== id) });
    };

    return (
        <div>
            <div className="alert alert-light border mb-3 py-2" >
                <small className="text-muted" >
                    Build the form the candidate will fill in.Drag to reorder(coming soon).
                </small>
            </div>

            < div className="d-flex flex-column gap-2 mb-3" >
                {
                    value.fields.length === 0 && (
                        <p className="text-muted text-center py-3 mb-0"> No fields yet.Click "Add Field" below.</p>
                    )}
                {
                    value.fields.map((field, index) => (
                        <div key={field.id} className="border rounded p-3" >
                            <div className="row g-2 align-items-start" >

                                <div className="col-auto d-flex align-items-center" >
                                    <span className="badge bg-secondary" > {index + 1} </span>
                                </div>

                                < div className="col-md-4" >
                                    <input type="text" className="form-control form-control-sm"
                                        placeholder="Field label e.g. Full Name"
                                        value={field.label}
                                        onChange={e => updateField(field.id, { label: e.target.value })} />
                                </div>

                                < div className="col-md-3" >
                                    <select className="form-select form-select-sm"
                                        value={field.type}
                                        onChange={e => updateField(field.id, { type: e.target.value as FormField["type"] })}>
                                        {
                                            FIELD_TYPES.map(t => (
                                                <option key={t.value} value={t.value} > {t.label} </option>
                                            ))
                                        }
                                    </select>
                                </div>

                                < div className="col-md-2 d-flex align-items-center" >
                                    <div className="form-check mb-0" >
                                        <input className="form-check-input" type="checkbox" id={`req-${field.id}`}
                                            checked={field.required}
                                            onChange={e => updateField(field.id, { required: e.target.checked })} />
                                        < label className="form-check-label fs-13" htmlFor={`req-${field.id}`}> Required </label>
                                    </div>
                                </div>

                                < div className="col-md-2 text-end" >
                                    <button className="btn btn-sm btn-outline-danger"
                                        onClick={() => removeField(field.id)}>
                                        <Trash2 size={13} />
                                    </button>
                                </div>

                                {/* Dropdown options */}
                                {
                                    field.type === "select" && (
                                        <div className="col-12" >
                                            <input type="text" className="form-control form-control-sm mt-1"
                                                placeholder="Options separated by comma e.g. Option A, Option B, Option C"
                                                value={field.options ?? ""}
                                                onChange={e => updateField(field.id, { options: e.target.value })
                                                } />
                                        </div>
                                    )}
                            </div>
                        </div>
                    ))}
            </div>

            < button className="btn btn-outline-primary btn-sm d-flex align-items-center gap-1 w-100 justify-content-center"
                onClick={addField} >
                <Plus size={14} /> Add Field
            </button>
        </div>
    );
};

// ── Task ───────────────────────────────────────────────────────────
export const TaskConfigEditor = ({
    value, onChange
}: { value: TaskConfig; onChange: (v: TaskConfig) => void }) => {
    const addItem = () => onChange({ ...value, checklistItems: [...value.checklistItems, ""] });

    const updateItem = (index: number, text: string) => {
        const items = [...value.checklistItems];
        items[index] = text;
        onChange({ ...value, checklistItems: items });
    };

    const removeItem = (index: number) => {
        onChange({ ...value, checklistItems: value.checklistItems.filter((_, i) => i !== index) });
    };

    return (
        <div className="d-flex flex-column gap-3" >
            <div>
                <label className="form-label" > Task Instructions < span className="text-danger" >* </span></label >
                <textarea className="form-control" rows={4}
                    placeholder="Describe what the candidate needs to do step by step..."
                    value={value.instructions}
                    onChange={e => onChange({ ...value, instructions: e.target.value })} />
            </div>

            < div >
                <label className="form-label" > Completion Checklist </label>
                < small className="text-muted d-block mb-2" >
                    Items the candidate must tick off to confirm task is done
                </small>

                < div className="d-flex flex-column gap-2 mb-2" >
                    {
                        value.checklistItems.map((item, index) => (
                            <div key={index} className="d-flex align-items-center gap-2" >
                                <GripVertical size={14} className="text-muted flex-shrink-0" />
                                <input type="text" className="form-control form-control-sm"
                                    placeholder={`Checklist item ${index + 1}`}
                                    value={item}
                                    onChange={e => updateItem(index, e.target.value)} />
                                <button className="btn btn-sm btn-outline-danger flex-shrink-0"
                                    onClick={() => removeItem(index)}>
                                    <Trash2 size={13} />
                                </button>
                            </div>
                        ))}
                </div>

                < button className="btn btn-outline-secondary btn-sm d-flex align-items-center gap-1"
                    onClick={addItem} >
                    <Plus size={13} /> Add Checklist Item
                </button>
            </div>

            < div className="form-check form-switch" style={{ paddingLeft: "2.5rem" }}>
                <input className="form-check-input" type="checkbox" id="screenshot"
                    checked={value.requiresScreenshot}
                    onChange={e => onChange({ ...value, requiresScreenshot: e.target.checked })} />
                < label className="form-check-label" htmlFor="screenshot" >
                    Require candidate to upload a screenshot as proof
                </label>
            </div>
        </div>
    );
};

// ── Quiz ───────────────────────────────────────────────────────────
export const QuizConfigEditor = ({
    value, onChange
}: { value: QuizConfig; onChange: (v: QuizConfig) => void }) => {
    const addQuestion = () => {
        onChange({
            ...value,
            questions: [...value.questions, {
                id: crypto.randomUUID(),
                text: "",
                options: ["", "", "", ""],
                correct: 0,
            }]
        });
    };

    const updateQuestion = (id: string, patch: Partial<QuizQuestion>) => {
        onChange({ ...value, questions: value.questions.map(q => q.id === id ? { ...q, ...patch } : q) });
    };

    const updateOption = (qId: string, optIndex: number, text: string) => {
        const q = value.questions.find(q => q.id === qId)!;
        const options = [...q.options];
        options[optIndex] = text;
        updateQuestion(qId, { options });
    };

    const removeQuestion = (id: string) => {
        onChange({ ...value, questions: value.questions.filter(q => q.id !== id) });
    };

    return (
        <div>
            <div className="row g-3 mb-4" >
                <div className="col-md-4" >
                    <label className="form-label" > Pass mark(%) </label>
                    < div className="input-group" >
                        <input type="number" className="form-control" min={10} max={100}
                            value={value.passMarkPercent}
                            onChange={e => onChange({ ...value, passMarkPercent: Number(e.target.value) })} />
                        < span className="input-group-text" >% </span>
                    </div>
                    < small className="text-muted" > Minimum score to pass </small>
                </div>
            </div>

            < div className="d-flex flex-column gap-4 mb-3" >
                {
                    value.questions.length === 0 && (
                        <p className="text-muted text-center py-3"> No questions yet.Click "Add Question" below.</p>
                    )
                }
                {
                    value.questions.map((q, qi) => (
                        <div key={q.id} className="border rounded p-4" >
                            <div className="d-flex justify-content-between align-items-start mb-3" >
                                <span className="badge bg-primary" > Question {qi + 1} </span>
                                < button className="btn btn-sm btn-outline-danger"
                                    onClick={() => removeQuestion(q.id)}>
                                    <Trash2 size={13} />
                                </button>
                            </div>

                            < div className="mb-3" >
                                <label className="form-label fs-13" > Question text < span className="text-danger" >* </span></label >
                                <input type="text" className="form-control"
                                    placeholder="e.g., What should you do if you notice a fire hazard?"
                                    value={q.text}
                                    onChange={e => updateQuestion(q.id, { text: e.target.value })} />
                            </div>

                            < label className="form-label fs-13 mb-2" >
                                Answer Options — click the circle to mark the correct answer
                            </label>
                            < div className="d-flex flex-column gap-2" >
                                {
                                    q.options.map((opt, oi) => (
                                        <div key={oi} className={`d-flex align-items-center gap-2 border rounded p-2 ${q.correct === oi ? "border-success bg-white" : "bg-white"}`} >
                                            {/* Correct answer selector */}
                                            < button
                                                className="btn btn-sm p-0 flex-shrink-0"
                                                title="Mark as correct answer"
                                                onClick={() => updateQuestion(q.id, { correct: oi })}
                                                style={{
                                                    width: 22, height: 22, borderRadius: "50%",
                                                    border: `2px solid ${q.correct === oi ? "#22c55e" : "#d1d5db"}`,
                                                    background: q.correct === oi ? "#22c55e" : "white",
                                                    display: "flex", alignItems: "center", justifyContent: "center"
                                                }}>
                                                {q.correct === oi && <CheckCircle size={12} color="white" />}
                                            </button>

                                            < input type="text" className="form-control form-control-sm border-0 p-0"
                                                style={{ background: "transparent" }}
                                                placeholder={`Option ${oi + 1}`}
                                                value={opt}
                                                onChange={e => updateOption(q.id, oi, e.target.value)} />

                                            {
                                                q.correct === oi && (
                                                    <span className="badge bg-success flex-shrink-0" style={{ fontSize: 10 }}> Correct </span>
                                                )}
                                        </div>
                                    ))}
                            </div>
                        </div>
                    ))}
            </div>

            < button className="btn btn-outline-primary btn-sm d-flex align-items-center gap-1 w-100 justify-content-center"
                onClick={addQuestion} >
                <Plus size={14} /> Add Question
            </button>
        </div>
    );
};

// ── Acknowledgement ────────────────────────────────────────────────
export const AcknowledgementConfigEditor = ({
    value, onChange
}: { value: AcknowledgementConfig; onChange: (v: AcknowledgementConfig) => void }) => (
    <div className="d-flex flex-column gap-3" >
        <div>
            <label className="form-label" > Policy / Document Title < span className="text-danger" >* </span></label >
            <input type="text" className="form-control"
                placeholder="e.g., Code of Conduct, Data Protection Policy, Health & Safety Policy"
                value={value.policyTitle}
                onChange={e => onChange({ ...value, policyTitle: e.target.value })} />
        </div>

        < div >
            <label className="form-label" > Policy Text < span className="text-danger" >* </span></label >
            <small className="text-muted d-block mb-2" >
                Paste or type the full policy.The candidate will scroll through this before signing.
            </small>
            < textarea className="form-control" rows={10}
                placeholder="Type or paste the full policy text here..."
                value={value.policyText}
                onChange={e => onChange({ ...value, policyText: e.target.value })} />
        </div>

        < div className="border rounded p-3"
            style={{ background: value.requireSignature ? "#fffbeb" : "#f9fafb" }}>
            <div className="form-check form-switch mb-0" style={{ paddingLeft: "2.5rem" }}>
                <input className="form-check-input" type="checkbox" id="requireSig"
                    checked={value.requireSignature}
                    onChange={e => onChange({ ...value, requireSignature: e.target.checked })}
                    style={{ width: "2.5em", height: "1.3em" }} />
                < label className="form-check-label fw-semibold" htmlFor="requireSig" >
                    Require digital signature
                </label>
            </div>
            < small className="text-muted d-block mt-1" style={{ paddingLeft: "2.5rem" }}>
                {
                    value.requireSignature
                        ? "Candidate must type their full name as a digital signature before they can complete this step"
                        : "Candidate only needs to tick an agreement checkbox"
                }
            </small>
        </div>
    </div>
);

// ══════════════════════════════════════════════════════════════════
// MASTER SWITCHER — drop this into CreateInductionProcess
// replaces the old configJson textarea
// ══════════════════════════════════════════════════════════════════

const DEFAULT_CONFIGS: Record<StepType, any> = {
    Document: { fileUrl: "", fileName: "", description: "" },
    Video: { videoUrl: "", description: "" },
    Upload: { instructions: "", acceptedFormats: ".pdf,.doc,.docx", maxSizeMb: 10 },
    Form: { fields: [] },
    Task: { instructions: "", checklistItems: [], requiresScreenshot: false },
    Quiz: { questions: [], passMarkPercent: 70 },
    Acknowledgement: { policyTitle: "", policyText: "", requireSignature: true },
};

const STEP_META: Record<StepType, { icon: any; color: string; bg: string; hint: string }> = {
    Document: { icon: FileText, color: "#3b82f6", bg: "#eff6ff", hint: "Upload a file or paste a link for the candidate to read" },
    Video: { icon: Video, color: "#8b5cf6", bg: "#f5f3ff", hint: "Paste a YouTube or Vimeo URL for the candidate to watch" },
    Upload: { icon: Upload, color: "#f59e0b", bg: "#fffbeb", hint: "Write instructions for what the candidate needs to upload" },
    Form: { icon: ClipboardList, color: "#10b981", bg: "#f0fdf4", hint: "Build a form with custom fields for the candidate to fill in" },
    Task: { icon: CheckSquare, color: "#ef4444", bg: "#fef2f2", hint: "Describe a task and build a checklist for the candidate to complete" },
    Quiz: { icon: HelpCircle, color: "#ec4899", bg: "#fdf4ff", hint: "Write multiple choice questions with a pass mark" },
    Acknowledgement: { icon: BookOpen, color: "#06b6d4", bg: "#ecfeff", hint: "Paste a policy the candidate must read and optionally sign" },
};

export const StepConfigEditor = ({
    stepType, configJson, onChange
}: {
    stepType: StepType;
    configJson: string;
    onChange: (json: string) => void;
}) => {
    const meta = STEP_META[stepType];
    const Icon = meta.icon;

    const parsed = (() => {
        try { return JSON.parse(configJson || "{}"); }
        catch { return DEFAULT_CONFIGS[stepType]; }
    })();

    // Merge with defaults so switching types always has required keys
    const config = { ...DEFAULT_CONFIGS[stepType], ...parsed };

    const handleChange = (val: any) => onChange(JSON.stringify(val));

    return (
        <div>
            {/* Type hint banner */}
            < div className="d-flex align-items-center gap-2 rounded p-3 mb-4"
                style={{ background: meta.bg }
                }>
                <div style={
                    {
                        width: 34, height: 34, borderRadius: 8, flexShrink: 0,
                        background: meta.color + "22",
                        display: "flex", alignItems: "center", justifyContent: "center"
                    }
                }>
                    <Icon size={17} style={{ color: meta.color }} />
                </div>
                < small style={{ color: meta.color }}> {meta.hint} </small>
            </div>

            {stepType === "Document" && <DocumentConfigEditor value={config} onChange={handleChange} />}
            {stepType === "Video" && <VideoConfigEditor value={config} onChange={handleChange} />}
            {stepType === "Upload" && <UploadConfigEditor value={config} onChange={handleChange} />}
            {stepType === "Form" && <FormConfigEditor value={config} onChange={handleChange} />}
            {stepType === "Task" && <TaskConfigEditor value={config} onChange={handleChange} />}
            {stepType === "Quiz" && <QuizConfigEditor value={config} onChange={handleChange} />}
            {stepType === "Acknowledgement" && <AcknowledgementConfigEditor value={config} onChange={handleChange} />}
        </div>
    );
};

export default StepConfigEditor;