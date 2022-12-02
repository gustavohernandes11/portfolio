import { Link } from "@chakra-ui/react";

type NavLinkProps = {
    children: React.ReactNode;
    href: string;
};

export const NavLink = ({ children, href }: NavLinkProps) => {
    return (
        <Link
            fontSize="0.8rem"
            href={href}
            transition="color 0.2s"
            _hover={{
                cursor: "pointer",
                color: "custom.blue",
            }}
        >
            {children}
        </Link>
    );
};
