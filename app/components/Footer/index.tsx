import './Footer.css'

const Footer = () => {
    return(
        <footer className='container__footer'>
            <h3>Reference</h3>
            <article>
                <ul>
                    <li>
                        All the documentation in this page is taken from <a href='https://developer.mozilla.org'>MDN</a>.
                    </li>
                </ul>
            </article>
        </footer>
    )
}

export { Footer }