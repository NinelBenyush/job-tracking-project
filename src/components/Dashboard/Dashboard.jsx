import React, { useState } from "react";
import { Plus, Edit2, Trash2, Search, Filter } from "lucide-react";
import PersonalHeader from "../Header/PersonalHeader";
import Footer from "../Footer/Footer";
import styles from "./Dashboard.module.css";

const initialJobs = [
  {
    id: 1,
    email: "hr@techcorp.com",
    company: "TechCorp Inc.",
    position: "Senior Frontend Developer",
    dateApplied: "2024-08-25",
    status: "Applied",
  },
  {
    id: 2,
    email: "jobs@startupco.com",
    company: "StartupCo",
    position: "Full Stack Developer",
    dateApplied: "2024-08-23",
    status: "Interview Scheduled",
  },
  {
    id: 3,
    email: "careers@bigtech.com",
    company: "BigTech Solutions",
    position: "React Developer",
    dateApplied: "2024-08-20",
    status: "Rejected",
  },
  {
    id: 4,
    email: "hiring@innovate.com",
    company: "Innovate Labs",
    position: "JavaScript Developer",
    dateApplied: "2024-08-18",
    status: "Offer Received",
  },
];

export default function Dashboard() {
  const [jobs, setJobs] = useState(initialJobs);
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [showAddForm, setShowAddForm] = useState(false);
  const [newJob, setNewJob] = useState({
    email: "",
    company: "",
    position: "",
    dateApplied: "",
    status: "Applied",
  });

  const filteredJobs = jobs.filter((job) => {
    const matchesSearch =
      job.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.position.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.email.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === "All" || job.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const handleAddJob = () => {
    if (
      newJob.email &&
      newJob.company &&
      newJob.position &&
      newJob.dateApplied
    ) {
      const job = { id: Date.now(), ...newJob };
      setJobs([...jobs, job]);
      setNewJob({
        email: "",
        company: "",
        position: "",
        dateApplied: "",
        status: "Applied",
      });
      setShowAddForm(false);
    }
  };

  const handleDeleteJob = (id) => setJobs(jobs.filter((job) => job.id !== id));

  const uniqueStatuses = [...new Set(jobs.map((job) => job.status))];

  const getStatusClass = (status) => {
    switch (status) {
      case "Applied":
        return styles.applied;
      case "Interview Scheduled":
        return styles.interview;
      case "Rejected":
        return styles.rejected;
      case "Offer Received":
        return styles.offer;
      case "In Progress":
        return styles.inProgress;
      default:
        return "";
    }
  };

  return (
    <>
      <PersonalHeader />
      <div className={styles.dashboardContainer}>
        <div className={styles.header}>
          <h1>Job Tracker Dashboard</h1>
          <p>Track your job applications and their progress</p>
        </div>
        <div className={styles.statsGrid}>
          <div className={styles.statsCard}>
            <h3>Total Applications</h3>
            <p>{jobs.length}</p>
          </div>
          <div className={styles.statsCard}>
            <h3>In Progress</h3>
            <p>
              {
                jobs.filter(
                  (job) =>
                    job.status === "Interview Scheduled" ||
                    job.status === "In Progress"
                ).length
              }
            </p>
          </div>
          <div className={styles.statsCard}>
            <h3>Offers Received</h3>
            <p>
              {jobs.filter((job) => job.status === "Offer Received").length}
            </p>
          </div>
          <div className={styles.statsCard}>
            <h3>Response Rate</h3>
            <p>
              {jobs.length > 0
                ? Math.round(
                    (jobs.filter((job) => job.status !== "Applied").length /
                      jobs.length) *
                      100
                  )
                : 0}
              %
            </p>
          </div>
        </div>

        <div className={styles.controlsContainer}>
          <div className={styles.controlsHeader}>
            <div className="flex gap-4 flex-1">
              <div className={styles.searchWrapper}>
                <Search className={styles.searchIcon} />
                <input
                  type="text"
                  placeholder="Search companies, positions, or emails..."
                  className={styles.searchInput}
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <div className={styles.filterWrapper}>
                <Filter className={styles.filterIcon} />
                <select
                  className={styles.statusSelect}
                  value={statusFilter}
                  onChange={(e) => setStatusFilter(e.target.value)}
                >
                  <option value="All">All Statuses</option>
                  {uniqueStatuses.map((status) => (
                    <option key={status} value={status}>
                      {status}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <button
              onClick={() => setShowAddForm(!showAddForm)}
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md flex items-center gap-2 transition-colors"
            >
              <Plus className="w-4 h-4" /> Add Job Application
            </button>
          </div>

          {showAddForm && (
            <div className={styles.addForm}>
              <input
                type="email"
                placeholder="Contact Email"
                value={newJob.email}
                onChange={(e) =>
                  setNewJob({ ...newJob, email: e.target.value })
                }
              />
              <input
                type="text"
                placeholder="Company Name"
                value={newJob.company}
                onChange={(e) =>
                  setNewJob({ ...newJob, company: e.target.value })
                }
              />
              <input
                type="text"
                placeholder="Position Title"
                value={newJob.position}
                onChange={(e) =>
                  setNewJob({ ...newJob, position: e.target.value })
                }
              />
              <input
                type="date"
                value={newJob.dateApplied}
                onChange={(e) =>
                  setNewJob({ ...newJob, dateApplied: e.target.value })
                }
              />
              <div className="flex gap-2">
                <select
                  value={newJob.status}
                  onChange={(e) =>
                    setNewJob({ ...newJob, status: e.target.value })
                  }
                >
                  <option value="Applied">Applied</option>
                  <option value="Interview Scheduled">
                    Interview Scheduled
                  </option>
                  <option value="In Progress">In Progress</option>
                  <option value="Offer Received">Offer Received</option>
                  <option value="Rejected">Rejected</option>
                </select>
                <button onClick={handleAddJob}>Add</button>
              </div>
            </div>
          )}
        </div>

        {/* Table */}
        <div className={styles.tableContainer}>
          <div className={styles.tableWrapper}>
            <table className="min-w-full divide-y divide-gray-200">
              <thead>
                <tr>
                  {[
                    "Email",
                    "Company",
                    "Position",
                    "Date Applied",
                    "Status",
                    "Actions",
                  ].map((title) => (
                    <th key={title}>{title}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {filteredJobs.length > 0 ? (
                  filteredJobs.map((job) => (
                    <tr key={job.id}>
                      <td>{job.email}</td>
                      <td>{job.company}</td>
                      <td>{job.position}</td>
                      <td>{new Date(job.dateApplied).toLocaleDateString()}</td>
                      <td>
                        <span
                          className={`${styles.statusBadge} ${getStatusClass(
                            job.status
                          )}`}
                        >
                          {job.status}
                        </span>
                      </td>
                      <td className={styles.actionBtn}>
                        <button>
                          <Edit2 />
                        </button>
                        <button onClick={() => handleDeleteJob(job.id)}>
                          <Trash2 />
                        </button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={6} className="text-center py-12 text-gray-500">
                      {searchTerm || statusFilter !== "All"
                        ? "No jobs match your current filters"
                        : "No job applications yet. Click 'Add Job Application' to get started!"}
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
