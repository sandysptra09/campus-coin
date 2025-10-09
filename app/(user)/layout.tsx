import Footer from "@/components/custom/footer/footer";
import Navbar from "@/components/custom/navbar/navbar";

export default function UserLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <Navbar />
            {children}
            <Footer />
        </>
    )
}