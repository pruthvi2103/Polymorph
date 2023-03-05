import PolymorphLogo from '@assets/polymorph-logo.svg';
// import PolymorphLogo from '@assets/polymorph-logo-without-name.svg';
import { Flex } from '@hover-design/react';
import React from 'react';
import { LogoImg, LogoName } from './Navbar.css';
interface Props {}

const Navbar = (props: Props) => {
    return (
        <>
            <Flex alignItems="center" gap="10px">
                <img
                    className={LogoImg}
                    src={PolymorphLogo}
                    alt="Polymorph logo"
                />
                {/* <h1 className={LogoName}>Polymorph</h1> */}
            </Flex>
        </>
    );
};

export default Navbar;
