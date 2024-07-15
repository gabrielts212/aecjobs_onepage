import Header from "../components/header/header";
import Footer from "../components/footer/footer";
import Aboutus from "../components/Aboutus/Aboutus";
import RegisterPage from "../components/RegisterPage/RegisterPage";
import Form from "../components/form/form";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
        {/* <RegisterPage form={<Form />} />
        <Aboutus /> */}
        <Footer />
      {/* <div className="flex-grow mt-10 flex flex-col items-center w-full max-w-5xl mx-auto px-4">
      </div> */}
    </div>
  );
}
