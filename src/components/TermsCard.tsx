import React, { useState, useEffect } from "react";
import dayjs from "dayjs";
import {
  Plus, Edit, Save, X, CheckCircle, XCircle, AlertCircle,
  FileText, Shield, Lock, Home, Briefcase, FileSignature, PenTool
} from "lucide-react";
import { Terms, TermsType } from "../types/terms";
import { CreateTerms, GetAllTerms, UpdateTerms } from "../api/TermsApi";
import { toast } from "react-toastify";
import RichTextEditor from "./RichTextEditor";

const TERMS_META: Record<TermsType, { label: string; icon: JSX.Element; color: string }> = {
  [TermsType.EmploymentOffer]: { label: "Employment Offer", icon: <FileSignature size={18} />, color: "info" },
  [TermsType.NDA]: { label: "NDA", icon: <Lock size={18} />, color: "danger" },
  [TermsType.ContractorAgreement]: { label: "Contractor Agreement", icon: <Briefcase size={18} />, color: "warning" },
  [TermsType.PrivacyPolicy]: { label: "Privacy Policy", icon: <Shield size={18} />, color: "info" },
  [TermsType.CodeOfConduct]: { label: "Code of Conduct", icon: <PenTool size={18} />, color: "success" },
  [TermsType.RemoteWorkPolicy]: { label: "Remote Work Policy", icon: <Home size={18} />, color: "secondary" },
  [TermsType.Other]: { label: "Other", icon: <FileText size={18} />, color: "dark" },
};

// const TERM_TYPES = Object.values(TermsType).filter(v => typeof v === "number") as TermsType[];

const TERM_TYPES = Object.values(TermsType);

const TermsCard: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TermsType>(TermsType.EmploymentOffer);
  const [viewMode, setViewMode] = useState<"view" | "edit" | "create">("view");
  const [termsList, setTermsList] = useState<Terms[]>([]);
  const [selectedTerms, setSelectedTerms] = useState<Terms | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  const [formData, setFormData] = useState({
    title: "",
    content: "",
  });

  useEffect(() => { fetchAllTerms(); }, []);

  useEffect(() => {
    setSelectedTerms(
      termsList.find(t => t.termsType === activeTab) ?? null
    );
    setViewMode("view");
    setError(null);
  }, [activeTab, termsList]);

  const fetchAllTerms = async () => {
    try {
      setLoading(true);
      const response = await GetAllTerms();
      console.log("Fetched terms:", response);

      if (Array.isArray(response)) {
        setTermsList(response);
      } else {
        setError("Unexpected response format");
      }
    } catch {
      setError("Failed to load terms");
    } finally {
      setLoading(false);
    }
  };

  const handleSave = async () => {
    if (!formData.title.trim()) {
      setError("Title is required");
      return;
    }

    if (!formData.content.trim()) {
      setError("Content is required");
      return;
    }

    try {
      setLoading(true);
      setError(null);

      let response;

      if (viewMode === "create") {
        const fd = new FormData();
        fd.append("TermsType", activeTab);
        fd.append("Title", formData.title.trim());
        fd.append("Content", formData.content.trim());

        response = await CreateTerms(fd);
      } else {
        const fd = new FormData();
        fd.append("Title", formData.title.trim());
        fd.append("Content", formData.content.trim());

        response = await UpdateTerms(selectedTerms!.termsId, fd);
      }

      if (response) {
        toast.success(
          viewMode === "create"
            ? "Terms created successfully."
            : "Terms updated successfully."
        );

        await fetchAllTerms();
        setViewMode("view");
      } else {
        setError("Failed to save terms");
      }
    } catch {
      setError("An error occurred while saving");
    } finally {
      setLoading(false);
    }
  };

  const openCreate = () => {
    setFormData({ title: TERMS_META[activeTab].label, content: "" });
    setViewMode("create");
    setError(null);
  };

  const openEdit = () => {
    if (!selectedTerms) return;
    setFormData({ title: selectedTerms.title, content: selectedTerms.content });
    setViewMode("edit");
    setError(null);
  };

  const cancel = () => { setViewMode("view"); setError(null); };

  return (
    <div className="card">

      {/* Header */}
      <div className="card-header d-flex justify-content-between align-items-center">
        <h5 className="mb-0">
          <FileText size={18} className="me-2" />
          Terms & Conditions
        </h5>
        {viewMode === "view" && (
          <button className="btn btn-info btn-sm" onClick={openCreate} disabled={loading}>
            <Plus size={15} className="me-1" />
            New {TERMS_META[activeTab].label}
          </button>
        )}
      </div>

      <div className="card-body">

        {/* Alerts */}
        {error && (
          <div className="alert alert-danger alert-dismissible">
            {error}
            <button className="btn-close" onClick={() => setError(null)} />
          </div>
        )}
        {success && (
          <div className="alert alert-success alert-dismissible">
            {success}
            <button className="btn-close" onClick={() => setSuccess(null)} />
          </div>
        )}

        {/* Type tabs */}
        <ul className="nav nav-tabs nav-fill mb-4">
          {TERM_TYPES.map(type => (
            <li className="nav-item" key={type}>
              <button
                className={`nav-link d-flex align-items-center justify-content-center gap-1 ${activeTab === type ? "active" : ""}`}
                onClick={() => setActiveTab(type)}
                disabled={loading}
              >
                <span className={`text-${TERMS_META[type].color}`}>
                  {TERMS_META[type].icon}
                </span>
                <span className="d-none d-md-inline">{TERMS_META[type].label}</span>
              </button>
            </li>
          ))}
        </ul>

        {/* Loading spinner */}
        {loading && (
          <div className="text-center py-5">
            <span className="spinner-border text-info" />
          </div>
        )}

        {!loading && (
          <>
            {/* ── VIEW ── */}
            {viewMode === "view" && selectedTerms && (
              <div>
                <div className="d-flex justify-content-between align-items-start mb-3">
                  <div>
                    <div className="d-flex align-items-center gap-2 mb-1">
                      <span className={`badge bg-${TERMS_META[selectedTerms.termsType].color}`}>
                        {TERMS_META[selectedTerms.termsType].label}
                      </span>
                      <h5 className="mb-0">{selectedTerms.title}</h5>
                    </div>
                    <small className="text-muted d-flex flex-wrap gap-2 align-items-center">
                      <span>v{selectedTerms.version}</span>
                      <span>·</span>
                      {selectedTerms.isActive
                        ? <span className="text-success"><CheckCircle size={13} className="me-1" />Active</span>
                        : <span className="text-danger"><XCircle size={13} className="me-1" />Inactive</span>}
                      <span>·</span>
                      <span>{dayjs(selectedTerms.dateCreated).format("DD MMM YYYY")}</span>
                      {selectedTerms.createdByName && (
                        <><span>·</span><span>by {selectedTerms.createdByName}</span></>
                      )}
                    </small>
                  </div>
                  <button className="btn btn-outline-info btn-sm" onClick={openEdit}>
                    <Edit size={15} className="me-1" />Edit
                  </button>
                </div>

                <div
                  className="p-4 rounded border"
                  style={{ maxHeight: 480, overflowY: "auto", fontSize: "0.875rem" }}
                  dangerouslySetInnerHTML={{ __html: selectedTerms.content }}
                />
              </div>
            )}

            {/* ── EMPTY STATE ─ */}
            {viewMode === "view" && !selectedTerms && (
              <div className="text-center py-5">
                <AlertCircle size={44} className="text-muted mb-3" />
                <h5>No {TERMS_META[activeTab].label} Found</h5>
                <p className="text-muted">None created yet for this type.</p>
                <button className="btn btn-info" onClick={openCreate}>
                  <Plus size={15} className="me-1" />
                  Create {TERMS_META[activeTab].label}
                </button>
              </div>
            )}

            {/* ── CREATE / EDIT FORM ── */}
            {(viewMode === "create" || viewMode === "edit") && (
              <div>
                <h5 className="mb-4">
                  {viewMode === "create" ? "Create" : "Edit"} — {TERMS_META[activeTab].label}
                </h5>

                <div className="row g-3">

                  {/* Title */}
                  <div className="col-md-8">
                    <label className="form-label">
                      Title <span className="text-danger">*</span>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="e.g. Standard Employment Offer v2"
                      value={formData.title}
                      onChange={e => setFormData(p => ({ ...p, title: e.target.value }))}
                    />
                  </div>

                  <div className="col-md-4">
                    <label className="form-label">Type</label>
                    <select
                      className="form-control"
                      value={activeTab}
                      onChange={e => setActiveTab(e.target.value as TermsType)}
                      disabled={viewMode === "edit"}
                    >
                      {TERM_TYPES.map(type => (
                        <option key={type} value={type}>{TERMS_META[type].label}</option>
                      ))}
                    </select>
                  </div>

                  {/* Content */}
                  <div className="col-12">
                    <label className="form-label">
                      Content <span className="text-danger">*</span>
                    </label>
                    <RichTextEditor
                      value={formData.content}
                      onChange={e => setFormData(p => ({ ...p, content: e }))}
                    />
                  </div>

                  {/* Action buttons */}
                  <div className="col-12 d-flex gap-2">
                    <button className="btn btn-success" onClick={handleSave} disabled={loading}>
                      <Save size={15} className="me-1" />
                      {loading ? "Saving…" : "Save Terms"}
                    </button>
                    <button className="btn btn-dark" onClick={cancel} disabled={loading}>
                      <X size={15} className="me-1" />Cancel
                    </button>
                  </div>

                </div>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default TermsCard;