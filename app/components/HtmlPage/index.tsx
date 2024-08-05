import './HtmlPage.css';
import { Menu } from '../Menu';

const HtmlPage = () => {
    const MenuItems = [
        {
            'name': 'Introduction',
            'href': './html#introduction'
        },
        {
            'name': 'Basic Structure',
            'href': './html#structure'
        },
        {
            'name': 'Common Tags',
            'href': './html#common'
        },
        {
            'name': 'Attributes',
            'href': './html#attributes'
        },
        {
            'name': 'Forms',
            'href': './html#forms'
        },
        {
            'name': 'HTML5 Features',
            'href': './html#html5'
        },
        {
            'name': 'Pratice and tools',
            'href': './html#tools'
        }
    ]
    return(
        <div className='container__html'>
            <section id='introduction'>
                <h2>Introduction to HTML</h2>
                <div className='container__html_introduction_text'>
                    <p>At its core, HTML is a fairly simple language made up of elements, which can be applied to pieces of text to give them different meaning in a document (is it a paragraph? is it a selection list? is it part of a table?), structures a document into logical sections (Does it have a header? Three columns of content? A navigation menu?) and embeds content such as images and videos on a page. This module will introduce the first two and introduce fundamental concepts and syntax you need to know to understand HTML.</p>
                </div>
            </section>
            <section id='structure'>
                <h2>Basic Structure of an HTML Document</h2>
                <div className='container__html_introduction_text'>
                    <p>An HTML document has a simple structure. Here is a basic template:</p>
                    <code>
                        <p>{`<!DOCTYPE>`}</p>
                        <p>{`<html>`}</p>
                        <p>{`<head>`}</p>
                        <p>{`<meta charset="UTF-8">`}</p>
                        <p>{`<title>Document Title</title>`}</p>
                        <p>{`</head>`}</p>
                        <p>{`<body>`}</p>
                        <p>{`<h1>Welcome to my Website</h1>`}</p>
                        <p>{`<p>This is a paragraph</p>`}</p>
                        <p>{`</body>`}</p>
                        <p>{`</html>`}</p>
                    </code>
                    <ul>
                        <li><p><span>{`<!DOCTYPE html>`}</span>: Declares the document type and HTML version.</p></li>
                        <li><p><span>{`<html>`}</span>: The root element of the HTML document.</p></li>
                        <li><p><span>{`<head>`}</span>: Contains meta-information about the HTML document (like title, charset).</p></li>
                        <li><p><span>{`<title>`}</span>: Sets the title of the document, which appears in the browser tab.</p></li>
                        <li><p><span>{`<body>`}</span>: Contains the content of the document visible to users.</p></li>
                    </ul>
                </div>
            </section>
            <section id='common'>
            <h2>Common HTML Tags</h2>
                <div className="container__html_html5_text">
                    <p>Here are some common HTML tags you will use frequently:</p>
                    <ul>
                        <li>
                            Headings: {`<h1>, <h2>, <h3>, <h4>, <h5>, <h6>`} (h1 is the largest, h6 is the smallest)
                            <code>
                                <p>{`<h1>Main Heading</h1>`}</p>
                                <p>{`<h2>Sub Heading</h2>`}</p>
                            </code>
                        </li>
                        <li>
                            Paragraphs: {`<p>`}
                            <code>
                                <p>{`<p>This is a paragraph.</p>`}</p>
                            </code>
                        </li>
                        <li>
                            Links: {`<a href="URL">Link Text</a>`}
                            <code>
                                <p>{`<a href="https://www.example.com">Visit Example</a>`}</p>
                            </code>
                        </li>
                        <li>
                            Images: {`<img src="imageURL" alt="description">`}
                            <code>
                                <p>{`<img src="image.jpg" alt="Description of image">`}</p>
                            </code>
                        </li>
                        <li>
                            <ul>
                                <li>
                                    Ordered List: {`<ol> and <li>`}
                                    <code>
                                        <p>{`<ol>`}</p>
                                        <p>{`<li>First item</li>`}</p>
                                        <p>{`<li>Second item</li>`}</p>
                                        <p>{`</ol>`}</p>
                                    </code>
                                </li>
                                <li>
                                    Unordered List: {`<ul> and <li>`}
                                    <code>
                                        <p>{`<ul>`}</p>
                                        <p>{`<li>Item A</li>`}</p>
                                        <p>{`<li>Item B</li>`}</p>
                                        <p>{`</ul>`}</p>
                                    </code>
                                </li>
                            </ul>
                        </li>
                        <li>
                            Tables: {`<table>, <tr>, <th>, <td>`}
                            <code>
                                <p>{`<table>`}</p>
                                <p>{`<tr>`}</p>
                                <p>{`<th>Header 1</th>`}</p>
                                <p>{`<th>Header 2</th>`}</p>
                                <p>{`</tr>`}</p>
                                <p>{`<tr>`}</p>
                                <p>{`<td>Data 1</th>`}</p>
                                <p>{`<td>Data 2</th>`}</p>
                                <p>{`</tr>`}</p>
                                <p>{`</table>`}</p>
                            </code>
                        </li>
                    </ul>
                </div>
            </section>
            <section id='attributes'>
            <h2>Attributes</h2>
                <div className="container__html_attributes_text">
                    <p>HTML elements can have attributes that provide additional information. Attributes are placed inside the opening tag. For example:</p>
                    <code className='codebox'>
                        <p>{`<a href="https://www.example.com" target="_blank">Visit Example</a>`}</p>
                    </code>
                    <ul>
                        <li><span>{`href`}</span>: Specifies the URL for links.</li>
                        <li><span>{`src`}</span>: Specifies the path for images.</li>
                        <li><span>{`alt`}</span>: Provides alternative text for images.</li>
                        <li><span>{`target`}</span>: Specifies where to open the linked document (_blank opens in a new tab).</li>
                    </ul>
                </div>
            </section>
            <section id='forms'>
                <h2>Forms</h2>
                <div className="container__html_forms_text">
                    <p>Forms are used to collect user input. Here is a simple example:</p>
                    <code className='codebox'>
                        <p>{`<form action="/submit" method="post">`}</p>
                        <p>{`<label for="name">Name:</label>`}</p>
                        <p>{`<input type="text" id="name" name="name">`}</p>
                        <p>{`<label for="email">Email:</label>`}</p>
                        <p>{`<input type="email" id="email" name="email">`}</p>
                        <p>{`<input type="submit" value="Submit">`}</p>
                        <p>{`</form>`}</p>       
                    </code>
                    <ul>
                        <li><span>{`<form>`}</span>: Defines the form.</li>
                        <li><span>{`action`}</span>: URL where the form data will be sent.</li>
                        <li><span>{`method`}</span>: HTTP method to use (usually post or get).</li>
                        <li><span>{`<label>`}</span>: Associates a label with a form control.</li>
                        <li><span>{`<input>`}</span>: Defines various types of input fields.</li>
                    </ul>
                </div>
            </section>
            <section id='html5'>
                <h2>HTML5 Features</h2>
                <div className="container__html_html5_text">
                    <p>HTML5 introduced new elements and attributes to make HTML more powerful:</p>
                    <ul>
                        <li>
                            Semantic Elements: {`<header>, <footer>, <article>, <section>, <nav>, <aside>`}
                            <code>
                                <p>{`<header>`}</p>
                                <p>{`<h1>Header Content</h1>`}</p>
                                <p>{`</header>`}</p>
                            </code>
                        </li>
                        <li>
                            Multimedia: {`<video>, <audio>`}
                            <code>
                                <p>{`<video src="movie.mp4" controls></video>`}</p>
                                <p>{`<audio src="audio.mp3" controls></audio>`}</p>
                            </code>
                        </li>
                        <li>
                            Forms: New input types like date, color, range
                            <code>
                                <p>{`<input type="date">`}</p>
                                <p>{`<input type="color">`}</p>
                                <p>{`<input type="range">`}</p>
                            </code>
                        </li>
                    </ul>
                </div>
            </section>
            <section id='tools'>
                <h2>Pratice and Tools</h2>
                <div className='container__html_tools_text'>
                    <ul>
                        <li>
                        Code Editors: Use tools like Visual Studio Code, Sublime Text, or Atom to write and edit HTML code.
                        </li>
                        <li>
                        Validation: Use the W3C Markup Validation Service to check for errors in your HTML code.
                        </li>
                        <li>
                        Learning Resources: Websites like MDN Web Docs (Mozilla Developer Network) and freeCodeCamp offer extensive tutorials and documentation.
                        </li>
                    </ul>
                    <p>
                        Feel free to experiment and build your own HTML documents. The more you practice, the more comfortable you will become with HTML! If you have any specific questions or need more detailed explanations, just let me know.
                    </p>
                </div>
            </section>
        </div>
    )
}

export { HtmlPage }