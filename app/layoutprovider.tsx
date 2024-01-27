"use client";
import Footer from "./components/footer/footer";
import Header from "./components/header/header";
import Header2 from "./components/header2/header2";
import { usePathname } from "next/navigation";
export const LayoutProvider = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();
  const excludeHeaderFooterRoutes = [
    "/",
    "/profil",
    "/Contactus",
    "/gallery",
    "/listofMedicalEquipment",
    "/aboutme",
    "/PurchaseExport",
    "/marketrout",
    "/prudrout"
  ];
  return (
    <>
      {" "}
      {excludeHeaderFooterRoutes.includes(pathname) && <Header />}
      {excludeHeaderFooterRoutes.includes(pathname) && <Header2 />} {children}{" "}
      {excludeHeaderFooterRoutes.includes(pathname) && <Footer />}{" "}
    </>
  );
};
