"use client";
import Footer from "./components/footer/footer";
import Header from "./components/header/header";
import Header2 from "./components/header2/header2";
import { usePathname } from "next/navigation";
import Navbar from "./components/navbar/navbar";
import { Provider } from "react-redux";
import { Medical } from "./store/MedicalStore";
export const LayoutProvider = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();
  const excludeHeaderFooterRoutes = [
    "/",
    "/profil",
    "/Contactus",
    "/gallery",
    "/listofMedicalEquipment",
    "/prudrout",
    "/marketrout",
    "/PurchaseExport",
    "/aboutme",
  ];
  const excludeNavbar = [
    "/profil",
    "/Contactus",
    "/gallery",
    "/listofMedicalEquipment",
    "/aboutme",
    "/PurchaseExport",
    "/marketrout",
    "/prudrout",
  ];
  return (
    <>
      <Provider store={Medical}>
        {" "}
        {excludeHeaderFooterRoutes.includes(pathname) && <Header />}
        {excludeHeaderFooterRoutes.includes(pathname) && <Header2 />}
        {excludeNavbar.includes(pathname) && <Navbar />}
        {children} {excludeHeaderFooterRoutes.includes(pathname) && <Footer />}{" "}
      </Provider>
    </>
  );
};
