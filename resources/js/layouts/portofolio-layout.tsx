import type {ReactNode} from "react";

interface props {
    children: ReactNode;
}

export default function PortofolioLayout({ children }: props) {
    return (
        <div className="min-h-screen bg-slate-950 text-white">
            {children}
        </div>
    );
}   