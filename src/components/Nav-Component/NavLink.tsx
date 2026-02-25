import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { cn } from '@/lib/utils';

interface NavLinkProps {
    href: string;
    children: React.ReactNode;
    className?: string;
    target?: string;
    rel?: string;
}

export default function NavLink({ href, children, className, target, rel, ...props }: NavLinkProps) {
    const pathname = usePathname();
    const isActive = pathname === href;

    // If target="_blank", use anchor tag for external links
    if (target === "_blank") {
        return (
            <a
                href={href}
                target={target}
                rel={rel}
                className={cn(
                    className,
                    "transition-colors duration-200"
                )}
                {...props}
            >
                {children}
            </a>
        );
    }

    return (
        <Link
            href={href}
            className={cn(
                className,
                isActive && "text-blue-600 font-bold",
                "transition-colors duration-200"
            )}
            {...props}
        >
            {children}
        </Link>
    );
}