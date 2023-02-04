import components from "./components";

function App() {
  return (
    <div className="w-full bg-[#000411]">
      <div className="px-6 sm:px-16 w-full">
          <components.Navbar />
      </div>
      <components.Hero />
      <components.Empower />
      <components.Intern />
      <components.Communication />
      <components.Testimonials />
      <components.Footer />
    </div>
  );
}

export default App;
