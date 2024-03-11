import Image from "next/image";
import Link from "next/link";
import LogoIMG from "../../public/favicon-32x32.png";

export const Logo = () => (
    <Link href="#home">
        <Image alt="logo" src={LogoIMG} height={32} width={32} />
    </Link>
);
