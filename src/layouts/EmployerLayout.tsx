import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import SideBar from "../components/SideBar";
import { useEffect, useState } from "react";
import { SettingsContext } from "../Contexts";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

const templateScripts = [
  "./assets/js/cdn-cgi/scripts/5c5dd728/cloudflare-static/email-decode.min.js",
  "./assets/js/vendor/bootstrap.bundle.min.js",
  "./assets/js/vendor/jquery-3.7.0.js",
  "./assets/js/plugins/popper.min.js",
  "./assets/js/plugins/simplebar.min.js",
  "./assets/js/plugins/simplebar-active.js",
  "./assets/js/vendor/height-equal.js",
  "./assets/js/vendor/isotope.pkgd.js",
  "./assets/js/vendor/magnific-popup.min.js",
  "./assets/js/vendor/backtotop.js",
  "./assets/js/plugins/smooth-scrollbar.js",
  "./assets/js/plugins/apexcharts.min.js",
  "./assets/js/plugins/jsvectormap.min.js",
  "./assets/js/plugins/world-merc.js",
  "./assets/js/plugins/swiper.min.js",
  "./assets/js/vendor/ecommerce-dashboard.js",
  "./assets/js/main.js",
  "./assets/js/vendor/sidebar.js",
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
