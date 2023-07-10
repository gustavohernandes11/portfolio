import Image from "next/image";
import LogoIMG from "../../../public/favicon-32x32.png";
import Link from "next/link";

export const Logo = () => {
    return (
        <Link href="home">
            <Image alt="logo" src={LogoIMG} height={32} width={32} />
        </Link>
    );
};
