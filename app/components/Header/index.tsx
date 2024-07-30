'use client';

import { ButtonLink } from "../ButtonLink";
import "./Header.css"

const Header = (props:any) => {
    const btn = props.btnsHeader;
    return(
        <header className="container__header">
            <div className="container__header_logo">
                <ButtonLink href="/" name={"Web School"} />
            </div>
            <nav className="container__header_navlist">
                <ul>
                    {btn.map((b:any) => {
                        return <li key={b.name}><ButtonLink href={b.href} name={b.name} /></li>
                    })}
                </ul>
            </nav>
        </header>
    );
}

export {Header};