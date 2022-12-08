import { Link } from "@chakra-ui/react";

type NavLinkProps = {
    children: React.ReactNode;
    href: string;
    onClick?: () => void;
};

export const NavLink = ({ children, href, onClick }: NavLinkProps) => {
    return (
        <Link
            onClick={onClick}
            fontSize="1rem"
            fontWeight={700}
            href={href}
            transition="color 0.2s"
            color="gray.200"
            _hover={{
                cursor: "pointer",
                color: "custom.blue",
            }}
        >
            {children}
        </Link>
    );
};
