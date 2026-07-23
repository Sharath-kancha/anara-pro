import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  collection,
  getDocs,
  doc,
  updateDoc,
} from "firebase/firestore";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth, db } from "../firebase";

export default function AdminDashboard() {
  const navigate = useNavigate();
  const [signups, setSignups] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedSignup, setSelectedSignup] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (!user) {
        navigate("/admin-login");
        return;
      }

      try {
      const snapshot = await getDocs(collection(db, "signups"));

        const data = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        setSignups(data);
      } catch (error) {
        console.error("Error loading signups:", error);
      } finally {
        setLoading(false);
      }
    });

    return () => unsubscribe();
  }, [navigate]);
const handleStatusChange = async (signupId, newStatus) => {
  try {
    const signupRef = doc(db, "signups", signupId);

    await updateDoc(signupRef, {
      status: newStatus,
    });

    setSignups((currentSignups) =>
      currentSignups.map((signup) =>
        signup.id === signupId
          ? { ...signup, status: newStatus }
          : signup
      )
    );

    if (selectedSignup?.id === signupId) {
      setSelectedSignup((current) => ({
        ...current,
        status: newStatus,
      }));
    }
  } catch (error) {
    console.error("Error updating status:", error);
    alert("Could not update the enquiry status. Please try again.");
  }
};
  const handleLogout = async () => {
    await signOut(auth);
    navigate("/admin-login");
  };

  return (
    <main className="min-h-screen bg-ivory-100 pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-6">

        <div className="flex justify-between items-center mb-10">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-sage-600">
              Anara Lifethread
            </p>

            <h1 className="font-serif text-4xl text-ink mt-2">
              Admin Dashboard
            </h1>

            <p className="text-ink-muted mt-2">
              Manage customer enquiries and service requests.
            </p>
          </div>

          <button
            onClick={handleLogout}
            className="border border-sage-600 text-sage-700 rounded-full px-6 py-2.5 hover:bg-sage-50"
          >
            Logout
          </button>
        </div>

        <div className="bg-white rounded-3xl border border-sage-100 shadow-soft overflow-hidden">

          {loading ? (
            <div className="p-10 text-center text-ink-muted">
              Loading enquiries...
            </div>
          ) : signups.length === 0 ? (
            <div className="p-10 text-center text-ink-muted">
              No enquiries found.
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead className="bg-sage-50">
                  <tr>
                    <th className="px-6 py-4">Name</th>
                    <th className="px-6 py-4">Phone</th>
                    <th className="px-6 py-4">Service</th>
                    <th className="px-6 py-4">City</th>
                    <th className="px-6 py-4">Date</th>
                    <th className="px-6 py-4">Status</th>
                    <th className="px-6 py-4">Actions</th>
                  </tr>
                </thead>

                <tbody>
                  {signups.map((signup) => (
                    <tr
                      key={signup.id}
                      className="border-t border-sage-100"
                    >
                      <td className="px-6 py-4">
                        {signup.name || "-"}
                      </td>

                      <td className="px-6 py-4">
                        {signup.phone || "-"}
                      </td>

                      <td className="px-6 py-4 capitalize">
                        {signup.service || "-"}
                      </td>

                      <td className="px-6 py-4">
                        {signup.city || "-"}
                      </td>

                      <td className="px-6 py-4">
                        {signup.createdAt?.toDate
                          ? signup.createdAt
                              .toDate()
                              .toLocaleDateString()
                          : "-"}
                      </td>
                      <td className="px-6 py-4">
  <select
    value={signup.status || "New"}
    onChange={(e) =>
      handleStatusChange(signup.id, e.target.value)
    }
    className="border border-sage-100 rounded-xl px-3 py-2 text-sm bg-white outline-none focus:border-sage-600"
  >
    <option value="New">New</option>
    <option value="Contacted">Contacted</option>
    <option value="In Progress">In Progress</option>
    <option value="Converted">Converted</option>
    <option value="Closed">Closed</option>
  </select>
</td>
                      <td className="px-6 py-4">
  <button
    type="button"
    onClick={() => setSelectedSignup(signup)}
    className="text-sage-700 font-medium hover:underline"
  >
    View Details
  </button>
</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

        </div>
      </div>
      {selectedSignup && (
  <div className="fixed inset-0 z-50 bg-black/40 flex items-center justify-center px-4 py-8">
    <div className="bg-white rounded-3xl w-full max-w-3xl max-h-[90vh] overflow-y-auto shadow-xl p-6 md:p-8">

      {/* HEADER */}
      <div className="flex items-start justify-between gap-4 mb-8">
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-sage-600">
            Customer Enquiry
          </p>

          <h2 className="font-serif text-3xl text-ink mt-2">
            {selectedSignup.name || "Customer Details"}
          </h2>

          <p className="text-ink-muted mt-1 capitalize">
            {selectedSignup.service || "-"}
          </p>
        </div>

        <button
          type="button"
          onClick={() => setSelectedSignup(null)}
          className="w-10 h-10 rounded-full bg-sage-50 text-ink hover:bg-sage-100"
        >
          ✕
        </button>
      </div>

      {/* CONTACT DETAILS */}
      <div className="mb-8">
        <h3 className="font-serif text-xl text-ink mb-4">
          Contact Information
        </h3>

        <div className="grid sm:grid-cols-2 gap-4 text-sm">
          <div className="bg-ivory-100 rounded-2xl p-4">
            <p className="text-ink-muted">Phone</p>
            <p className="text-ink font-medium mt-1">
              {selectedSignup.phone || "-"}
            </p>
          </div>

          <div className="bg-ivory-100 rounded-2xl p-4">
            <p className="text-ink-muted">Email</p>
            <p className="text-ink font-medium mt-1">
              {selectedSignup.email || "-"}
            </p>
          </div>

          <div className="bg-ivory-100 rounded-2xl p-4">
            <p className="text-ink-muted">City</p>
            <p className="text-ink font-medium mt-1">
              {selectedSignup.city || "-"}
            </p>
          </div>

          <div className="bg-ivory-100 rounded-2xl p-4">
            <p className="text-ink-muted">PIN Code</p>
            <p className="text-ink font-medium mt-1">
              {selectedSignup.pincode || "-"}
            </p>
          </div>
        </div>

        <div className="bg-ivory-100 rounded-2xl p-4 mt-4">
          <p className="text-sm text-ink-muted">Full Address</p>
          <p className="text-ink font-medium mt-1">
            {selectedSignup.address || "-"}
          </p>
        </div>
      </div>

      {/* BABYSITTING CHILD DETAILS */}
      {selectedSignup.service === "babysitting" && (
        <div className="mb-8">
          <h3 className="font-serif text-xl text-ink mb-4">
            Children Details
          </h3>

          <p className="text-sm text-ink-muted mb-4">
            Number of Children:{" "}
            <span className="text-ink font-medium">
              {selectedSignup.numberOfChildren || "-"}
            </span>
          </p>

          {selectedSignup.childrenAges?.map((age, index) => (
            <div
              key={index}
              className="flex justify-between items-center bg-ivory-100 rounded-2xl p-4 mb-3"
            >
              <span className="font-medium text-ink">
                Child {index + 1}
              </span>

              <span className="text-sm text-ink-muted">
                Age: {age || "-"} · Gender:{" "}
                {selectedSignup.childrenGenders?.[index] || "-"}
              </span>
            </div>
          ))}
        </div>
      )}

      {/* QUESTIONNAIRE ANSWERS */}
      <div>
        <h3 className="font-serif text-xl text-ink mb-4">
          Questionnaire Responses
        </h3>

        {selectedSignup.answers &&
        Object.keys(selectedSignup.answers).length > 0 ? (
          <div className="space-y-3">
            {Object.entries(selectedSignup.answers).map(
              ([question, answer]) => (
                <div
                  key={question}
                  className="bg-ivory-100 rounded-2xl p-4"
                >
                  <p className="text-xs uppercase tracking-wide text-sage-600">
                    {question
                      .replace(/_/g, " ")
                      .replace(/([A-Z])/g, " $1")}
                  </p>

                  <p className="text-ink mt-2">
                    {answer}
                  </p>
                </div>
              )
            )}
          </div>
        ) : (
          <p className="text-ink-muted">
            No questionnaire responses available.
          </p>
        )}
      </div>

      <button
        type="button"
        onClick={() => setSelectedSignup(null)}
        className="mt-8 w-full bg-sage-600 hover:bg-sage-700 text-white rounded-full py-3.5 font-medium"
      >
        Close
      </button>

    </div>
  </div>
)}
    </main>
  );
}