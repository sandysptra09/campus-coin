import Footer from "@/components/custom/footer/footer";
import Navbar from "@/components/custom/navbar/navbar";
import { log } from "node:console";

export default function UserLayout({ children }: { children: React.ReactNode }) {
    log("User Layout Rendered");
    return (
        <>
            <Navbar />
            {children}
            <Footer />
        </>
    )
}