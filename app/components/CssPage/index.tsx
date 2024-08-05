import './CssPage.css';


const CssPage = () => {
    return(
        <div className='container__css'>
            <section id='introduction'>
                <h2>Introduction</h2>
                <article>
                    <p>
                        Cascading Stylesheets — or CSS — is the first technology you should learn after HTML. While HTML is used to define the structure and semantics of your content, CSS is used to style and design it. For example, you can use CSS to change the font, color, size and spacing of your content, divide it into multiple columns, or add animations and other decorative features.
                    </p>
                </article>
            </section>
            <section id='structure'>
                <h2>Basic Structure</h2>
                <article>
                    <p>HTML and CSS Files: Typically, you'll have an HTML file and a separate CSS file. For example:</p>
                    <ul>
                        <li>index.html</li>
                        <li>styles.css</li>
                    </ul>
                    <p>Linking CSS to HTML: In your HTML file, you link the CSS file within the {`<head>`} section.</p>
                    <code>
                    <p>{`<!DOCTYPE>`}</p>
                        <p>{`<html>`}</p>
                        <p>{`<head>`}</p>
                        <p>{`<meta charset="UTF-8">`}</p>
                        <p>{`<title>Document Title</title>`}</p>
                        <p>{`<link rel="stylesheet" href="styles.css">`}</p>
                        <p>{`</head>`}</p>
                        <p>{`<body>`}</p>
                        <p>{`<h1>Welcome to my Website</h1>`}</p>
                        <p>{`<p>This is a paragraph</p>`}</p>
                        <p>{`</body>`}</p>
                        <p>{`</html>`}</p>
                    </code>
                </article>
            </section>
            <section id='syntax'>
                <h2>CSS Syntax</h2>
                <article>
                    <p>CSS syntax is straightforward and consists of selectors and declaration blocks:</p>
                    <code>
                        {`selector { property: value; }`}
                    </code>
                    <p>Exemple:</p>
                    <code>
                        {`h1 { color: blue; font-size: 24px; }`}
                    </code>
                </article>
            </section>
            <section id='selectors'>
                <h2>Selectors</h2>
                <article>
                    <p>Selectors are used to target HTML elements you want to style. Here are some common ones:</p>
                    <ul>
                        <li>
                            Element Selector: Targets all elements of a given type.
                            <code>
                                {`p { color: red; }`}
                            </code>
                        </li>
                        <li>
                            Class Selector: Targets elements with a specific class attribute.
                            <code>
                                {`.my-class { background-color: yellow; }`}
                            </code>
                        </li>
                        <li>
                            ID Selector: Targets an element with a specific id attribute.
                            <code>
                                {`#my-id { margin: 20px; }`}
                            </code>
                        </li>
                        <li>
                            Universal Selector: Targets all elements.
                            <code>
                                {`* { box-sizing: border-box; }`}
                            </code>
                        </li>
                        <li>
                            Attribute Selector: Targets elements with a specific attribute.
                            <code>
                                {`[type="text"] { border: 1px solid black; }`}
                            </code>
                        </li>
                    </ul>
                </article>
            </section>
            <section id='properties'>
                <h2>Basic Properties</h2>
                <article>
                    <ul>
                        <li>
                            Color: Sets the color of text.
                            <code>
                                {`color: red;`}
                            </code>
                        </li>
                        <li>
                            Background: Sets the background color or image.
                            <code>
                                {`background-color: lightblue;`}
                                {`background-image: url('image.jpg');`}
                            </code>
                        </li>
                        <li>
                            Font: Sets font properties.
                            <code>
                                {`font-family: Arial, sans-serif;`}
                                {`font-size: 16px;`}
                            </code>
                        </li>
                        <li>
                            Text Alignment: Aligns text within an element.
                            <code>
                                {`text-align: center;`}
                            </code>
                        </li>
                        <li>
                            Margin and Padding: Controls space outside and inside of an element.
                            <code>
                                {`margin: 10px;`}
                                {`padding: 15px;`}
                            </code>
                        </li>
                        <li>
                            Border: Sets the border around an element.
                            <code>
                                {`border: 1px solid black;`}
                            </code>
                        </li>
                    </ul>
                </article>
            </section>
            <section id='layout'>
                <h2>Layout</h2>
                <article>
                    <ul>
                        <li>
                            Flexbox: A powerful layout module for arranging items in rows or columns.
                            <code>
                                {`.container { display: flex; justify-content: space-between; }`}
                            </code>
                        </li>
                        <li>
                            Grid: Allows for complex layouts with rows and columns.
                            <code>
                                {`.grid-container { display: grid; grid-template-columns: repeat(3, 1fr); }`}
                            </code>
                        </li>
                    </ul>
                </article>
            </section>
            <section id='responsive'>
                <h2>Responsive Design</h2>
                <article>
                    <p>Use media queries to apply styles based on screen size or device characteristics.</p>
                    <code>
                        {`@media (max-width: 600px) { body { font-size: 14px; } }`}
                    </code>
                </article>
            </section>
        </div>
    )
}

export { CssPage }