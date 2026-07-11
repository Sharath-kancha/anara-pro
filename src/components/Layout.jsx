import Navbar from "./Navbar";
import Footer from "./Footer";
import { Toaster } from "sonner";

export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-ivory-100">
      <Navbar />
      <main className="pt-20">{children}</main>
      <Footer />
      <Toaster
        position="bottom-center"
        toastOptions={{
          style: {
            background: "#1F2A23",
            color: "#F8F5EF",
            border: "1px solid rgba(199,167,108,0.30)",
            borderRadius: "16px",
            fontFamily: "Manrope, sans-serif",
          },
        }}
      />
    </div>
  );
}