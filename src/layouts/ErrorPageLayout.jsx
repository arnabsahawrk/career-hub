import ErrorPage from "../components/ErrorPage/ErrorPage";
import Footer from "../components/Footer/Footer";
import Nav from "../components/Nav/Nav";

const ErrorPageLayout = () => {
  return (
    <>
      <header
        className="container mx-auto px-4 md:px-12 lg:px-24 py-4 text-pretty"
        style={{
          background:
            "linear-gradient(90deg, rgba(126, 144, 254, 0.05) 0%, rgba(152, 115, 255, 0.05) 100%)",
        }}
      >
        <Nav />
      </header>
      <main
        className="container mx-auto px-4 md:px-12 lg:px-24  text-pretty min-h-[calc(100vh-64px]"
        style={{
          background:
            "linear-gradient(90deg, rgba(126, 144, 254, 0.05) 0%, rgba(152, 115, 255, 0.05) 100%)",
        }}
      >
        <ErrorPage />
      </main>
      <footer className="container mx-auto px-4 md:px-12 lg:px-24 py-4 text-pretty bg-[#1A1919]">
        <Footer />
      </footer>
    </>
  );
};

export default ErrorPageLayout;
