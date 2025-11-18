import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import SideBar from "../components/SideBar";
import { useEffect, useState } from "react";
import { SettingsContext } from "../Contexts";

const templateScripts = [
  "/Employer/assets/js/cdn-cgi/scripts/5c5dd728/cloudflare-static/email-decode.min.js",
  "/Employer/assets/js/vendor/bootstrap.bundle.min.js",
  "/Employer/assets/js/vendor/jquery-3.7.0.js",
  "/Employer/assets/js/plugins/popper.min.js",
  "/Employer/assets/js/plugins/simplebar.min.js",
  "/Employer/assets/js/plugins/simplebar-active.js",
  "/Employer/assets/js/vendor/height-equal.js",
  "/Employer/assets/js/vendor/isotope.pkgd.js",
  "/Employer/assets/js/vendor/magnific-popup.min.js",
  "/Employer/assets/js/vendor/backtotop.js",
  "/Employer/assets/js/plugins/smooth-scrollbar.js",
  "/Employer/assets/js/plugins/apexcharts.min.js",
  "/Employer/assets/js/plugins/jsvectormap.min.js",
  "/Employer/assets/js/plugins/world-merc.js",
  "/Employer/assets/js/plugins/swiper.min.js",
  "/Employer/assets/js/vendor/ecommerce-dashboard.js",
  "/Employer/assets/js/main.js",
  "/Employer/assets/js/vendor/sidebar.js",
];

const EmployerLayout = () => {
  const [category, setCategory] = useState<string>("account");

  useEffect(() => {
    const loadScripts = async () => {
      await Promise.allSettled(
        templateScripts.map((script) => {
          return new Promise((resolve, reject) => {
            const scriptElem = document.createElement("script");
            scriptElem.src = script;
            scriptElem.defer = true;

            scriptElem.onload = resolve;
            scriptElem.onerror = reject;
            document.body.appendChild(scriptElem);
          });
        })
      );
    };

    loadScripts();
  }, []);

  return (
    <div className="page">
      <SettingsContext.Provider value={{ category, setCategory }}>
        {/* SideBar */}
        <SideBar />

        {/* Header */}
        <Header />

        {/* Outlet */}

        <Outlet />

        {/* Footer */}
        <Footer />
      </SettingsContext.Provider>
    </div>
  );
};

export default EmployerLayout;
