import "../globals.css";
import MainNav from "@/components/nav/MainNav";
import localFont from "next/font/local";

const myFont = localFont({
    src: "../../fonts/font.otf",
    display: "swap",
});

export const metadata = {
    title: "",
    description: "",
};

export default function RootLayout({ children }) {
    return (
        <html className={myFont.className}>
            <body>
                <div className="mainStructure">
                    <div>
                        <MainNav />
                    </div>
                    <div>{children}</div>
                </div>
            </body>
        </html>
    );
}
