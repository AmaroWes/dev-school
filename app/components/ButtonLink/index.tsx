import Link from 'next/link';
import './ButtonLink.css';

const ButtonLink = (props:any) => {
    return(
        <Link href={props.href}>{props.name}</Link>
    )
}

export { ButtonLink }