import Link from "next/link";

export default function SocialIcons() {
    return (
        <div className="flex space-x-4">
            <Link
                className="w-8 h-8 rounded bg-gray-800 flex items-center justify-center hover:bg-primary transition-colors text-white"
                href="https://www.facebook.com/profile.php?id=61586656664237&_rdc=1&_rdr#"
                target="_blank"
                rel="noopener noreferrer"
            >
                <span className="material-icons-outlined text-sm">facebook</span>
            </Link>
            <Link
                className="w-8 h-8 rounded bg-gray-800 flex items-center justify-center hover:bg-primary transition-colors text-white"
                href="https://www.linkedin.com/company/rexsearch/"
                target="_blank"
                rel="noopener noreferrer"
            >
                <span className="text-sm font-bold">in</span>
            </Link>
            <Link
                className="w-8 h-8 rounded bg-gray-800 flex items-center justify-center hover:bg-primary transition-colors text-white"
                href="https://x.com/rex_search"
                target="_blank"
                rel="noopener noreferrer"
            >
                <span className="text-sm font-bold">X</span>
            </Link>
        </div>
    );
}