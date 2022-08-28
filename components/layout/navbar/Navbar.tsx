import Link from "next/link";
import styled from "styled-components";
import RevoltLogo from "../../../assets/logo/revolt-logo.svg";

const NavbarFloat = styled.nav`
    width: 100vw;
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    padding-top: 3rem;
`;

const NavbarFlex = styled.div`
    display: flex;
    justify-content: space-between;
    width: 90vw;
    margin: auto;
`;

const RevoltLogoContainer = styled.img`
    height: 25px;
`;

const LinkContainer = styled.div`
    display: flex;
    flex-direction: row;
    gap: 1rem;
`;

const NavLink = styled.a`
    font-weight: 600;
`;

const Navbar = () => {
    return (
        <NavbarFloat>
            <NavbarFlex>
                <Link href="/" passHref>
                    <NavLink>Stonk Bot</NavLink>
                </Link>
                <LinkContainer>
                    <Link href="https://discord.gg/9xGQuHP2" passHref>
                        <NavLink>Support Server</NavLink>
                    </Link>
                    {/* <Link href="/posts" passHref>
                        <NavLink>Changelog</NavLink>
                    </Link> */}
                    {/* <Link
                        href="https://github.com/orgs/revoltchat/projects/3/views/1"
                        passHref
                    >
                        <NavLink>Documentation</NavLink>
                    </Link> */}
                </LinkContainer>
            </NavbarFlex>
        </NavbarFloat>
    );
};

export default Navbar;
