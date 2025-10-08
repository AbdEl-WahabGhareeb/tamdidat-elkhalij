import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { cn } from '@/lib/utils';

interface NavLinkProps {
    href: string;
    children: React.ReactNode;
    className?: string;
}

export default function NavLink({ href, children, className }: NavLinkProps) {
    const pathname = usePathname();
    const isActive = pathname === href;

    return (
        <Link
            href={href}
            className={cn(
                className,
                isActive && "text-blue-600 font-bold",
                "transition-colors duration-200"
            )}
        >
            {children}
        </Link>
    );
}