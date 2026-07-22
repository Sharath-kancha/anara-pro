import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { collection, getDocs } from "firebase/firestore";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth, db } from "../firebase";

export default function AdminDashboard() {
  const navigate = useNavigate();
  const [signups, setSignups] = useState([]);
  const [loading, setLoading] = useState(true);

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
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

        </div>
      </div>
    </main>
  );
}