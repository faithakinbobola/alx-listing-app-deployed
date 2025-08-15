import { ReactNode } from "react";
import Footer from "./Footer"
import Header from "./Header"
import { LayoutProps } from "@/interfaces";

const Layout: React.FC<LayoutProps> = ({ children, className }) => {
    return (
        <div className={className}>
            <Header />
            <main className="min-h-screen">{children}</main>
            <Footer />
        </div>
    );
}

export default Layout;