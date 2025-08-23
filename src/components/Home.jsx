import Header from "./Header";
import Footer from "./Footer";
export default function Home() {
  return (
    <>
      <Header />
      {/* first section*/}
      <section className="min-h-screen flex items-center justify-between bg-indigo-50 text-black py-16 px-24 gap-12">
        <div className="flex-1">
          <h1 className="text-[3.5rem] font-bold mb-6 text-black">
            Track Your Carrer
          </h1>
          <h3 className="text-lg mb-4 text-black">Like a pro</h3>
          <p className="text-base max-w-[500px] text-black">
            Transform your job search with intelligent tracking, automated
            follow-ups, and data-driven insights that land you the perfect role
          </p>
        </div>
      </section>
      <Footer />
    </>
  );
}
