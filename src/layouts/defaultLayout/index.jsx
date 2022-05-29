import Header from "../../components/header";
import Sidebar from "../../components/sidebar";
import DefaultRoute from "../../routes/defaultRoute";

const DefaultLayout = () => {
  return (
    <>
      <div>
        <Header />
        <Sidebar />
        <DefaultRoute />
      </div>
    </>
  );
};

export default DefaultLayout;
