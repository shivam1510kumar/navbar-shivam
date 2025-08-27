    import { ChevronDown, LogIn, Menu, Phone, ShieldCheck, X } from "lucide-react";
import { useEffect, useState } from "react";
import "./Navbar.css";


    // Default export a React component (per canvas guidelines)
    export default function VishnuNavbar() {
    const [open, setOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [solutionsOpen, setSolutionsOpen] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 8);
        onScroll();
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const NavLink = ({ href, children }) => (
        <a
        href={href}
        className="px-3 py-2 text-sm font-medium text-slate-700/90 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg transition-colors dark:text-slate-200 dark:hover:text-white dark:hover:bg-white/10"
        >
        {children}
        </a>
    );

    return (
        <header
        className={`sticky top-0 z-50 transition-all ${
            scrolled
            ? "backdrop-blur supports-[backdrop-filter]:bg-white/70 dark:supports-[backdrop-filter]:bg-slate-900/60 shadow-sm"
            : "bg-transparent"
        }`}
        >
        <nav className="mx-auto max-w-7xl px-3 sm:px-6 lg:px-8">
            <div className="flex h-16 items-center justify-between">
            {/* Brand */}
            <a href="#" className="flex items-center gap-3 group">
                <div className="h-9 w-9 grid place-items-center rounded-xl bg-gradient-to-br from-indigo-600 to-violet-600 text-white font-bold shadow-sm group-hover:shadow transition-shadow">
                VE
                </div>
                <div className="leading-tight">
                <div className="flex items-center gap-2">
                    <span className="text-base font-semibold tracking-tight text-slate-900 dark:text-white">
                    Vishnu Enterprises
                    </span>
                    <span className="hidden md:inline-flex items-center gap-1 rounded-full border border-indigo-200 bg-indigo-50 px-2 py-0.5 text-[10px] font-semibold text-indigo-700 dark:border-white/15 dark:bg-white/5 dark:text-indigo-200">
                    <ShieldCheck className="h-3 w-3" /> Authorized CSP
                    </span>
                </div>
                <p className="text-[11px] text-slate-500 dark:text-slate-400">Indian Bank Banking Services Partner</p>
                </div>
            </a>

            {/* Desktop nav */}
            <div className="hidden lg:flex items-center gap-1">
                <NavLink href="#home">Home</NavLink>
                <div className="relative">
                <button
                    onClick={() => setSolutionsOpen((v) => !v)}
                    onBlur={() => setTimeout(() => setSolutionsOpen(false), 150)}
                    className="inline-flex items-center gap-1 px-3 py-2 text-sm font-medium text-slate-700/90 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg transition-colors dark:text-slate-200 dark:hover:text-white dark:hover:bg-white/10"
                >
                    Services <ChevronDown className={`h-4 w-4 transition-transform ${solutionsOpen ? "rotate-180" : ""}`} />
                </button>
                {solutionsOpen && (
                    <div className="absolute left-0 mt-2 w-72 rounded-2xl border border-slate-200/70 bg-white p-2 shadow-lg dark:border-white/10 dark:bg-slate-900">
                    <DropdownItem title="AEPS Cash Withdrawal" desc="Aadhaar Enabled Payment System" />
                    <DropdownItem title="BBPS Bill Payments" desc="Electricity, water, mobile & more" />
                    <DropdownItem title="PAN Services" desc="Apply / Update PAN card" />
                    <DropdownItem title="Account Opening" desc="Paperless, assisted onboarding" />
                    <DropdownItem title="Money Transfer (DMT)" desc="Secure IMPS/NEFT transfers" />
                    </div>
                )}
                </div>
                <NavLink href="#about">About</NavLink>
                <NavLink href="#support">Support</NavLink>
            </div>

            {/* Right actions */}
            <div className="hidden lg:flex items-center gap-2">
                <a
                href="tel:+91XXXXXXXXXX"
                className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm font-medium text-slate-700 shadow-sm hover:border-indigo-300 hover:text-indigo-700 hover:shadow dark:border-white/10 dark:bg-white/5 dark:text-slate-200 dark:hover:border-white/20"
                >
                <Phone className="h-4 w-4" /> +91-XXXXXXXXXX
                </a>
                <a
                href="#login"
                className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-indigo-600 to-violet-600 px-3 py-2 text-sm font-semibold text-white shadow hover:brightness-110"
                >
                <LogIn className="h-4 w-4" /> Login
                </a>
            </div>

            {/* Mobile menu button */}
            <button
                onClick={() => setOpen((o) => !o)}
                aria-label="Toggle menu"
                className="lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-700 shadow-sm hover:border-indigo-300 hover:text-indigo-700 dark:border-white/10 dark:bg-white/5 dark:text-slate-200"
            >
                {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
            </div>

            {/* Mobile panel */}
            <div
            className={`lg:hidden overflow-hidden transition-[max-height] duration-300 ${open ? "max-h-[520px]" : "max-h-0"}`}
            >
            <div className="pb-4 pt-2">
                <MobileLink href="#home" onClick={() => setOpen(false)}>
                Home
                </MobileLink>

                <details className="group">
                <summary className="flex list-none cursor-pointer items-center justify-between rounded-xl px-3 py-2 text-sm font-medium text-slate-700/90 hover:bg-indigo-50 dark:text-slate-200 dark:hover:bg-white/10">
                    <span>Services</span>
                    <ChevronDown className="h-4 w-4 transition-transform group-open:rotate-180" />
                </summary>
                <div className="mt-1 space-y-1 rounded-xl border border-slate-200 bg-white p-2 dark:border-white/10 dark:bg-white/5">
                    <MobileSub title="AEPS Cash Withdrawal" />
                    <MobileSub title="BBPS Bill Payments" />
                    <MobileSub title="PAN Services" />
                    <MobileSub title="Account Opening" />
                    <MobileSub title="Money Transfer (DMT)" />
                </div>
                </details>

                <MobileLink href="#about" onClick={() => setOpen(false)}>
                About
                </MobileLink>
                <MobileLink href="#support" onClick={() => setOpen(false)}>
                Support
                </MobileLink>

                <div className="mt-2 grid grid-cols-2 gap-2">
                <a
                    href="tel:+91XXXXXXXXXX"
                    className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm font-medium text-slate-700 shadow-sm hover:border-indigo-300 hover:text-indigo-700 dark:border-white/10 dark:bg-white/5 dark:text-slate-200"
                >
                    <Phone className="h-4 w-4" /> Call
                </a>
                <a
                    href="#login"
                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-indigo-600 to-violet-600 px-3 py-2 text-sm font-semibold text-white shadow hover:brightness-110"
                >
                    <LogIn className="h-4 w-4" /> Login
                </a>
                </div>

                <div className="mt-3 flex items-center gap-2 rounded-xl border border-amber-300/40 bg-amber-50 px-3 py-2 text-[12px] text-amber-800 dark:border-amber-200/20 dark:bg-amber-200/10 dark:text-amber-200">
                <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-amber-500/20 text-amber-700 dark:text-amber-200">🇮🇳</span>
                <p>
                    <strong>Note:</strong> Vishnu Enterprises is an Authorized Customer Service Point (CSP) partner of <strong>Indian Bank</strong>.
                </p>
                </div>
            </div>
            </div>
        </nav>
        </header>
    );
    }

    function DropdownItem({ title, desc }) {
    return (
        <a
        href="#"
        className="block rounded-xl px-3 py-2 hover:bg-indigo-50 transition-colors dark:hover:bg-white/10"
        >
        <p className="text-sm font-semibold text-slate-800 dark:text-slate-100">{title}</p>
        <p className="text-xs text-slate-500 dark:text-slate-400">{desc}</p>
        </a>
    );
    }

    function MobileLink({ href, children, onClick }) {
    return (
        <a
        href={href}
        onClick={onClick}
        className="block rounded-xl px-3 py-2 text-sm font-medium text-slate-700/90 hover:bg-indigo-50 dark:text-slate-200 dark:hover:bg-white/10"
        >
        {children}
        </a>
    );
    }

    function MobileSub({ title }) {
    return (
        <a href="#" className="block rounded-lg px-3 py-2 text-[13px] text-slate-600 hover:bg-indigo-50 dark:text-slate-300 dark:hover:bg-white/10">
        {title}
        </a>
    );
    }
