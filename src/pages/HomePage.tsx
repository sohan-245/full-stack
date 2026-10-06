import { Link } from "react-router-dom";

const headingFont = {
  fontFamily: '"Fraunces", Georgia, "Times New Roman", serif',
};

function Home() {
  return (
    <div className="min-h-screen bg-[#E9F0EE] text-[#0E2A30] flex flex-col">

      <nav className="bg-[#E9F0EE] border-b border-[#0E2A30]/10">
        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">

          <Link
            to="/"
            className="text-xl font-semibold tracking-tight"
            style={headingFont}
          >
            Student Records
          </Link>

          <div className="flex items-center gap-6">

            <Link
              to="/login"
              className="text-sm font-medium text-[#0E2A30] hover:text-[#0E4F57] transition"
            >
              Log in
            </Link>

            <Link
              to="/create-user"
              className="rounded-lg bg-[#F4B63F] px-5 py-2.5 text-sm font-semibold text-[#0E2A30] transition hover:bg-[#E9A82A]"
            >
              Sign up
            </Link>

          </div>
        </div>
      </nav>


  
      <main className="flex-1">

        <section className="max-w-7xl mx-auto px-6 py-24">

          <div className="max-w-3xl">

            <p className="text-sm font-medium text-[#4F6A6E] mb-5">
              STUDENT MANAGEMENT SYSTEM
            </p>

            <h1
              className="text-5xl md:text-6xl font-semibold leading-tight tracking-tight text-[#0E2A30]"
              style={headingFont}
            >
              Your student records,
              <br />
              <span className="text-[#0E4F57]">
                simple and organized.
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-relaxed text-[#4F6A6E]">
              Manage your student information in one simple place.
              Create an account, access your records, and keep your
              information organized.
            </p>

            <div className="mt-9 flex items-center gap-4">

              <Link
                to="/create-user"
                className="rounded-lg bg-[#F4B63F] px-6 py-3 font-semibold text-[#0E2A30] transition hover:bg-[#E9A82A] active:bg-[#DB9B1E]"
              >
                Get started
              </Link>

              <Link
                to="/login"
                className="rounded-lg border border-[#0E2A30]/20 bg-white px-6 py-3 font-medium text-[#0E2A30] transition hover:bg-[#F5F8F7]"
              >
                Log in
              </Link>

            </div>

          </div>

        </section>

      </main>


    
      <footer className="border-t border-[#0E2A30]/10">
        <div className="max-w-7xl mx-auto px-6 py-5">
          <p className="text-sm text-[#4F6A6E]">
            © 2026 Student Records
          </p>
        </div>
      </footer>

    </div>
  );
}

export default Home;