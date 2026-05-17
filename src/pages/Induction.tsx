import { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import {
  Plus, FolderOpen, MoreVertical, Edit, Eye, Grid, List, CircleCheck, ChartBarIncreasing, ClipboardList, CheckCheck, Trash, Pen, FolderX
} from "lucide-react";
import { InductionCategory } from "../types/induction";
import { toast, ToastContainer } from "react-toastify";
import Modal from "../components/modal";
import { createInductionCategory, deleteInductionCategory, getInductionCategories, getInductionItems, getInductionLevels, getInductionSections, updateInductionCategory } from "../api/InductionApi";
import Hashids from "hashids";

type ModalType = "add" | "edit" | "delete" | null;

const InductionDashboard = () => {
  const navigate = useNavigate();
  const [categories, setCategories] = useState<InductionCategory[]>([]);
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [modalType, setModalType] = useState<ModalType>(null);
  const [loading, setLoading] = useState({
    page: true,
    stats: true,
    action: false
  });
  const [selectedCategory, setSelectedCategory] = useState<InductionCategory | null>(null);
  const [selectedCategoryId, setSelectedCategoryId] = useState<number | null>(null);
  const [stats, setStats] = useState({
    totalCategories: 0,
    totalSections: 0,
    totalItems: 0,
    totalLevels: 0
  });
  const hashIds = new Hashids("LatticeHrEncode", 10);

  const openDeleteModal = (id: number) => {
    setModalType("delete");
    setSelectedCategoryId(Number(id))
  };

  const openEditModal = (category: InductionCategory) => {
    setSelectedCategory(category);
    setModalType("edit");
  };

  const openAddModal = () => {
    setModalType("add");
  };

  const closeModal = () => {
    setModalType(null);
    setSelectedCategory(null);
  };

  useEffect(() => {
    const fetchData = async () => {
      await Promise.all([
        getCategories(),
        getCardStats()
      ]);
    };
    fetchData();
  }, []);

  const getCardStats = async () => {
    try {
      setLoading(prev => ({ ...prev, stats: true }));

      const [itemsResponse, sectionsResponse, levelsResponse] = await Promise.all([
        getInductionItems(),
        getInductionSections(),
        getInductionLevels(),
      ]);

      setStats({
        totalCategories: categories?.length || 0,
        totalSections: sectionsResponse?.data?.length ?? 0,
        totalItems: itemsResponse?.data?.length ?? 0,
        totalLevels: levelsResponse?.data?.length ?? 0
      });

    } catch (error) {
      console.error("Failed to load stats", error);
      toast.error("Could not load dashboard stats");
    } finally {
      setLoading(prev => ({ ...prev, stats: false }));
    }
  };

  const getCategories = async () => {
    try {
      setLoading(prev => ({ ...prev, page: true }));
      const response = await getInductionCategories();
      console.log("cat res", response);
      const categoriesData = response.data || [];
      setCategories(categoriesData);

      setStats(prev => ({ ...prev, totalCategories: categoriesData.length }));
    } catch (error) {
      console.error("Failed to load categories", error);
      toast.error("Could not load categories");
      setCategories([]);
    } finally {
      setLoading(prev => ({ ...prev, page: false }));
    }
  };

  const handleCategoryClick = (categoryId: string) => {
    navigate(`/induction/programmes/${hashIds.encode(Number(categoryId))}`);
  };

  const handleCreateCategory = async (data: {
    inputValue?: string;
    inputValue5?: string;
  }) => {
    try {
      const { inputValue, inputValue5 } = data;

      if (!inputValue || !inputValue5) {
        toast.error("Please fill in all fields");
        return;
      }

      setLoading(prev => ({ ...prev, action: true }));

      const formData = new FormData();
      formData.append("Name", inputValue);
      formData.append("Description", inputValue5);

      const response = await createInductionCategory(formData);

      if (response?.status === 200 || response?.status === 201) {
        toast.success("Category created successfully");
        closeModal();
        await getCategories();
        await getCardStats();
      } else {
        toast.error("Could not add category");
      }
    } catch (error: any) {
      console.error("Could not add reference", error);
      toast.error(error?.message || "Could not create category");
    } finally {
      setLoading(prev => ({ ...prev, action: false }));
    }
  };

  const handleDeleteCategory = async () => {
    try {
      setLoading(prev => ({ ...prev, action: true }));
      const response = await deleteInductionCategory(Number(selectedCategoryId));

      if (response.status === 200 || response.status === 204) {
        toast.success("Category Deleted");
        closeModal();
        await getCategories();
        await getCardStats();
      } else {
        toast.error("Could not delete category");
      }
    } catch (error) {
      toast.error("Could not delete category");
    } finally {
      setLoading(prev => ({ ...prev, action: false }));
    }
  };

  const handleEditCategory = async (data: {
    inputValue?: string;
    inputValue5?: string;
  }) => {
    if (!selectedCategory) return;

    try {
      const { inputValue, inputValue5 } = data;
      if (!inputValue || !inputValue5) {
        toast.error("Please fill in all fields");
        return;
      }

      setLoading(prev => ({ ...prev, action: true }));

      const formData = new FormData();
      formData.append("Name", inputValue);
      formData.append("Description", inputValue5);

      const response = await updateInductionCategory(
        Number(selectedCategory.inductionCategoryId),
        formData
      );

      if (response?.status === 200 || response?.status === 201) {
        toast.success("Category updated");
        closeModal();
        await getCategories();
      } else {
        toast.error("Could not update category");
      }
    } catch (error) {
      toast.error("Could not update category");
    } finally {
      setLoading(prev => ({ ...prev, action: false }));
    }
  };

  // Loading skeletons
  const renderSkeletonCards = () => {
    return [1, 2, 3, 4].map((item) => (
      <div key={item} className="col-xxl-3 col-xl-3 col-lg-3 col-md-6">
        <div className="card">
          <div className="card-body mini-card-body d-flex align-center gap-16">
            <div className="avatar avatar-xl bg-light">
              <div className="placeholder-wave">
                <span className="placeholder col-12 bg-secondary" style={{ height: '40px', width: '40px', borderRadius: '12px', display: 'block' }}></span>
              </div>
            </div>
            <div className="card-content" style={{ width: '100%' }}>
              <div className="placeholder-wave">
                <span className="placeholder col-8 bg-secondary mb-2" style={{ height: '16px' }}></span>
                <span className="placeholder col-4 bg-secondary" style={{ height: '28px', display: 'block' }}></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    ));
  };

  const renderSkeletonGrid = () => {
    return [1, 2, 3, 4, 5, 6].map((item) => (
      <div key={item} className="col-md-6 col-xl-4">
        <div className="card h-100">
          <div className="card-body">
            <div className="d-flex justify-content-between align-items-start mb-3">
              <div className="d-flex align-items-center gap-3 w-75">
                <div className="placeholder-wave">
                  <span className="placeholder bg-secondary" style={{ width: '48px', height: '48px', borderRadius: '12px', display: 'block' }}></span>
                </div>
                <div className="w-100">
                  <div className="placeholder-wave">
                    <span className="placeholder col-10 bg-secondary mb-2" style={{ height: '20px' }}></span>
                  </div>
                </div>
              </div>
              <div className="placeholder-wave">
                <span className="placeholder bg-secondary" style={{ width: '32px', height: '32px', borderRadius: '4px', display: 'block' }}></span>
              </div>
            </div>
            <div className="placeholder-wave mb-3">
              <span className="placeholder col-12 bg-secondary mb-2" style={{ height: '16px' }}></span>
              <span className="placeholder col-8 bg-secondary" style={{ height: '16px' }}></span>
            </div>
            <hr className="my-3" />
            <div className="d-flex justify-content-between align-items-center">
              <div className="placeholder-wave">
                <span className="placeholder col-8 bg-secondary" style={{ height: '14px', width: '120px' }}></span>
              </div>
              <div className="placeholder-wave">
                <span className="placeholder bg-secondary" style={{ height: '36px', width: '100px', borderRadius: '4px' }}></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    ));
  };

  const renderEmptyState = () => (
    <div className="col-12">
      <div className="card">
        <div className="card-body text-center py-5">
          <div className="mb-4">
            <FolderX size={64} className="text-muted" style={{ opacity: 0.5 }} />
          </div>
          <h5 className="text-dark mb-2">No Induction Programme Found</h5>
          <p className="text-muted mb-4">
            Get started by creating your first induction category.
          </p>
          <button
            className="btn btn-success"
            onClick={openAddModal}
          >
            <Plus size={16} className="me-2" />
            Create Induction Programme
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <div className="app-content-area mb-15">
      <div className="app-content-wrap">
        <div className="container-fluid">
          <ToastContainer />

          <Modal
            isOpen={modalType === "delete"}
            title="Delete Induction Programme"
            message="Are you sure you want to delete this induction programme? This action cannot be undone."
            confirmText="Delete"
            cancelText="Cancel"
            confirmColor="danger"
            buttonIcon={<Trash size={16} />}
            headerIcon={<Trash size={20} />}
            loading={loading.action}
            onConfirm={handleDeleteCategory}
            onCancel={closeModal}
          />

          <Modal
            isOpen={modalType === "add"}
            title="Add New Induction Programme"
            message="Create a new induction programme to organize your content."
            confirmText="Create Programme"
            cancelText="Cancel"
            confirmColor="success"
            inputLabel="Programme Name"
            inputPlaceholder="e.g., General Induction, Safety Training"
            inputLabel5="Programme Description"
            inputPlaceholder5="Describe the purpose of this programme..."
            buttonIcon={<CheckCheck size={16} />}
            headerIcon={<Plus size={20} />}
            loading={loading.action}
            onConfirm={handleCreateCategory}
            onCancel={closeModal}
          />

          <Modal
            isOpen={modalType === "edit"}
            title="Edit Induction Programme"
            message="Update the induction programme details."
            confirmText="Update Programme"
            cancelText="Cancel"
            confirmColor="warning"
            inputLabel="Programme Name"
            inputPlaceholder=""
            defaultInputValue={selectedCategory?.name ?? ""}
            inputLabel5="Programme Description"
            inputPlaceholder5=""
            defaultInputValue5={selectedCategory?.description ?? ""}
            buttonIcon={<Pen size={16} />}
            headerIcon={<Pen size={20} />}
            loading={loading.action}
            onConfirm={handleEditCategory}
            onCancel={closeModal}
          />

          {/* Page Header */}
          <div className="row mb-4">
            <div className="col-12">
              <div className="page-title-box d-flex-between flex-wrap gap-15">
                <div>
                  <h1 className="page-title fs-18 lh-1">Induction Management</h1>
                  <p className="text-muted mb-0">Manage induction programmes, levels, and content</p>
                </div>
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb breadcrumb-example1 mb-0">
                    <li className="breadcrumb-item active">Induction Programme</li>
                    <li className="breadcrumb-item"><NavLink to="/dashboard">Home</NavLink></li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="row mb-4">
            {loading.stats || loading.page ? (
              renderSkeletonCards()
            ) : (
              <>
                <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6">
                  <div className="card">
                    <div className="card-body mini-card-body d-flex align-center gap-16">
                      <div className="avatar avatar-xl bg-primary-transparent text-primary">
                        <FolderOpen size={30} />
                      </div>
                      <div className="card-content">
                        <span className="d-block fs-16 mb-5">Total Programmes</span>
                        <h2 className="mb-5">{stats.totalCategories}</h2>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6">
                  <div className="card">
                    <div className="card-body mini-card-body d-flex align-center gap-16">
                      <div className="avatar avatar-xl bg-warning-transparent text-warning">
                        <CircleCheck size={30} />
                      </div>
                      <div className="card-content">
                        <span className="d-block fs-16 mb-5">Total Module</span>
                        <h2 className="mb-5">{stats.totalSections}</h2>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6">
                  <div className="card">
                    <div className="card-body mini-card-body d-flex align-center gap-16">
                      <div className="avatar avatar-xl bg-info-transparent text-info">
                        <ChartBarIncreasing size={30} />
                      </div>
                      <div className="card-content">
                        <span className="d-block fs-16 mb-5">Total Stages</span>
                        <h2 className="mb-5">{stats.totalLevels}</h2>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6">
                  <div className="card">
                    <div className="card-body mini-card-body d-flex align-center gap-16">
                      <div className="avatar avatar-xl bg-purple-transparent text-purple">
                        <ClipboardList size={30} />
                      </div>
                      <div className="card-content">
                        <span className="d-block fs-16 mb-5">Total Tasks</span>
                        <h2 className="mb-5">{stats.totalItems}</h2>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>

          {/* Actions Bar */}
          <div className="card mb-4">
            <div className="card-body">
              <div className="row g-3 align-items-center">
                <div className="col-md-7">
                  {/* Search input - commented out for now */}
                </div>
                <div className="col-md-5 text-end">
                  <div className="btn-group me-2">
                    <button
                      className={`d-none btn btn-outline-secondary ${viewMode === 'grid' ? 'active' : ''}`}
                      onClick={() => setViewMode('grid')}
                      disabled={loading.page}
                    >
                      <Grid size={16} />
                    </button>
                    <button
                      className={`d-none btn btn-outline-secondary ${viewMode === 'list' ? 'active' : ''}`}
                      onClick={() => setViewMode('list')}
                      disabled={loading.page}
                    >
                      <List size={16} />
                    </button>
                  </div>
                  <button
                    className="btn btn-success"
                    onClick={openAddModal}
                    disabled={loading.action}
                  >
                    <Plus size={16} className="me-1" />
                    New Programme
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Content Area */}
          {loading.page ? (
            // Loading skeletons
            viewMode === 'grid' ? (
              <div className="row g-4">
                {renderSkeletonGrid()}
              </div>
            ) : (
              <div className="card">
                <div className="table-responsive">
                  <table className="table align-middle mb-0">
                    <thead className="bg-light">
                      <tr>
                        <th>Category</th>
                        <th>Description</th>
                        <th>Date Created</th>
                        <th style={{ width: '50px' }}></th>
                      </tr>
                    </thead>
                    <tbody>
                      {[1, 2, 3, 4, 5].map((item) => (
                        <tr key={item}>
                          <td>
                            <div className="d-flex align-items-center gap-2">
                              <div className="placeholder-wave">
                                <span className="placeholder bg-secondary" style={{ width: '24px', height: '24px', display: 'block' }}></span>
                              </div>
                              <div className="placeholder-wave">
                                <span className="placeholder col-8 bg-secondary" style={{ height: '20px', width: '150px' }}></span>
                              </div>
                            </div>
                          </td>
                          <td>
                            <div className="placeholder-wave">
                              <span className="placeholder col-10 bg-secondary" style={{ height: '20px', width: '200px' }}></span>
                            </div>
                          </td>
                          <td>
                            <div className="placeholder-wave">
                              <span className="placeholder col-8 bg-secondary" style={{ height: '20px', width: '100px' }}></span>
                            </div>
                          </td>
                          <td>
                            <div className="placeholder-wave">
                              <span className="placeholder bg-secondary" style={{ height: '32px', width: '32px', display: 'block' }}></span>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )
          ) : categories.length === 0 ? (
            renderEmptyState()
          ) : (
            viewMode === 'grid' ? (
              <div className="row g-4">
                {categories.map(category => (
                  <div key={category.inductionCategoryId} className="col-md-6 col-xl-4">
                    <div className="card h-100 category-card">
                      <div className="card-body">
                        <div className="d-flex justify-content-between align-items-start mb-3">
                          <div className="d-flex align-items-center gap-3">
                            <div className="category-icon" style={{
                              width: 48,
                              height: 48,
                              borderRadius: 12,
                              background: 'linear-gradient(135deg, #3b82f6 0%, #93c5fd 100%)',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              color: 'white'
                            }}>
                              <FolderOpen size={24} />
                            </div>
                            <div>
                              <h5 className="mb-1">{category.name}</h5>
                            </div>
                          </div>
                          <div className="dropdown">
                            <button className="btn btn-link text-muted p-2" data-bs-toggle="dropdown">
                              <MoreVertical size={18} />
                            </button>
                            <ul className="dropdown-menu">
                              <li>
                                <button className="dropdown-item" onClick={() => handleCategoryClick(category.inductionCategoryId)}>
                                  <Eye size={14} className="me-2" />View Details
                                </button>
                              </li>
                              <li>
                                <button className="dropdown-item" onClick={(e) => {
                                  e.stopPropagation();
                                  openEditModal(category);
                                }}>
                                  <Edit size={14} className="me-2" />Edit
                                </button>
                              </li>
                              <li><hr className="dropdown-divider" /></li>
                              <li>
                                <button className="dropdown-item text-danger" onClick={() => openDeleteModal(Number(category.inductionCategoryId))}>
                                  <Trash size={14} className="me-2" />Delete
                                </button>
                              </li>
                            </ul>
                          </div>
                        </div>

                        <p className="text-muted small mb-3" style={{ minHeight: '40px' }}>
                          {category.description || 'No description provided'}
                        </p>

                        <hr className="my-3" />

                        <div className="d-flex justify-content-between align-items-center">
                          <small className="text-muted">
                            Created {new Date(category.dateCreated).toLocaleDateString("en-GB", {
                              day: "2-digit",
                              month: "short",
                              year: "numeric",
                            })}
                          </small>
                          <button
                            className="btn btn-outline-primary btn-sm"
                            onClick={() => handleCategoryClick(category.inductionCategoryId)}
                          >
                            <Eye size={14} className="me-1" /> View Details
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="card">
                <div className="table-responsive">
                  <table className="table table-hover align-middle mb-0">
                    <thead className="bg-light">
                      <tr>
                        <th>Category</th>
                        <th>Description</th>
                        <th>Date Created</th>
                        <th style={{ width: '80px' }}></th>
                      </tr>
                    </thead>
                    <tbody>
                      {categories.map(category => (
                        <tr key={category.inductionCategoryId} style={{ cursor: 'pointer' }} onClick={() => handleCategoryClick(category.inductionCategoryId)}>
                          <td>
                            <div className="d-flex align-items-center gap-2">
                              <FolderOpen size={18} color="#3b82f6" />
                              <span className="fw-medium">{category.name}</span>
                            </div>
                          </td>
                          <td className="text-muted">{category.description || '-'}</td>
                          <td>
                            {new Date(category.dateCreated).toLocaleDateString("en-GB", {
                              day: "2-digit",
                              month: "short",
                              year: "numeric",
                            })}
                          </td>
                          <td>
                            <div className="dropdown">
                              <button className="btn btn-sm btn-link text-muted" data-bs-toggle="dropdown">
                                <MoreVertical size={16} />
                              </button>
                              <ul className="dropdown-menu">
                                <li>
                                  <button className="dropdown-item" onClick={(e) => {
                                    e.stopPropagation();
                                    openEditModal(category);
                                  }}>
                                    <Edit size={14} className="me-2" />Edit
                                  </button>
                                </li>
                                <li>
                                  <button className="dropdown-item text-danger" onClick={(e) => {
                                    e.stopPropagation();
                                    openDeleteModal(Number(category.inductionCategoryId));
                                  }}>
                                    <Trash size={14} className="me-2" />Delete
                                  </button>
                                </li>
                              </ul>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )
          )}
        </div>
      </div>

      <style>{`
        .category-card {
          transition: transform 0.2s, box-shadow 0.2s;
          border: 1px solid #e5e7eb;
        }
        .category-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 10px 30px rgba(0,0,0,0.1);
          border-color: #3b82f6;
        }
        .placeholder-wave {
          width: 100%;
        }
      `}</style>
    </div>
  );
};

export default InductionDashboard;