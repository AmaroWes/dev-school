import './Menu.css';
import { ButtonLink } from '../ButtonLink';

const Menu = (props:any) => {
    const items = props.items;
    return(
        <div className="container__html_menu">
            <nav>
                <ul>
                    {items.map((item:any) =>{
                        return <li key={item.name}><ButtonLink href={item.href} name={item.name} /></li>
                    })}
                </ul>
            </nav>
        </div>
    )
}

export { Menu }