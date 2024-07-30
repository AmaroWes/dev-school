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
            <Menu items={MenuItems}/>
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
                    <code className='codebox'>
                        <pre>{`
                        <!DOCTYPE html>
                        <html>
                        <head>
                            <meta charset="UTF-8">
                            <title>Document Title</title>
                        </head>
                        <body>
                            <h1>Welcome to My Website</h1>
                            <p>This is a paragraph.</p>
                        </body>
                        </html>`
                        }</pre>
                    </code>
                    <ul>
                        <li><pre>{`<!DOCTYPE html>`}</pre>: Declares the document type and HTML version.</li>
                        <li><pre>{`<html>`}</pre>: The root element of the HTML document.</li>
                        <li><pre>{`<head>`}</pre>: Contains meta-information about the HTML document (like title, charset).</li>
                        <li><pre>{`<title>`}</pre>: Sets the title of the document, which appears in the browser tab.</li>
                        <li><pre>{`<body>`}</pre>: Contains the content of the document visible to users.</li>
                    </ul>
                </div>
            </section>
            <section id='common'>
            <h2>Common HTML Tags</h2>
                <div className="container__html_html5_text">
                    <p>Here are some common HTML tags you will use frequently:</p>
                    <ul>
                        <li>
                            Headings: <pre>{`<h1>, <h2>, <h3>, <h4>, <h5>, <h6>`}</pre> (h1 is the largest, h6 is the smallest)
                            <code>
                                <pre>{`
                                    <h1>Main Heading</h1>
                                    <h2>Sub Heading</h2>
                                `}</pre>
                            </code>
                        </li>
                        <li>
                            Paragraphs: <pre>{`<p>`}</pre>
                            <code>
                                <pre>{`
                                <p>This is a paragraph.</p>
                                `}</pre>
                            </code>
                        </li>
                        <li>
                            Links: <pre>{`<a href="URL">Link Text</a>`}</pre>
                            <code>
                                <pre>{`
                                <a href="https://www.example.com">Visit Example</a>
                                `}</pre>
                            </code>
                        </li>
                        <li>
                            Images: <pre>{`<img src="imageURL" alt="description">`}</pre>
                            <code>
                                <pre>{`
                                <img src="image.jpg" alt="Description of image">
                                `}</pre>
                            </code>
                        </li>
                        <li>
                            <ul>
                                <li>
                                    Ordered List: <pre>{`<ol> and <li>`}</pre>
                                    <code>
                                        <pre>{`
                                            <ol>
                                                <li>First item</li>
                                                <li>Second item</li>
                                            </ol>
                                        `}</pre>
                                    </code>
                                </li>
                                <li>
                                    Unordered List: <pre>{`<ul> and <li>`}</pre>
                                    <code>
                                        <pre>{`
                                            <ul>
                                                <li>Item A</li>
                                                <li>Item B</li>
                                            </ul>
                                        `}</pre>
                                    </code>
                                </li>
                            </ul>
                        </li>
                        <li>
                            Tables: <pre>{`<table>, <tr>, <th>, <td>`}</pre>
                            <code>
                                <pre>{`
                                    <table>
                                        <tr>
                                            <th>Header 1</th>
                                            <th>Header 2</th>
                                        </tr>
                                        <tr>
                                            <td>Data 1</td>
                                            <td>Data 2</td>
                                        </tr>
                                    </table>
                                `}</pre>
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
                        <pre>{`
                            <a href="https://www.example.com" target="_blank">Visit Example</a>
                        `}</pre>
                    </code>
                    <ul>
                        <li><pre>{`href`}</pre>: Specifies the URL for links.</li>
                        <li><pre>{`src`}</pre>: Specifies the path for images.</li>
                        <li><pre>{`alt`}</pre>: Provides alternative text for images.</li>
                        <li><pre>{`target`}</pre>: Specifies where to open the linked document (_blank opens in a new tab).</li>
                    </ul>
                </div>
            </section>
            <section id='forms'>
                <h2>Forms</h2>
                <div className="container__html_forms_text">
                    <p>Forms are used to collect user input. Here is a simple example:</p>
                    <code className='codebox'>
                        <pre>{`
                            <form action="/submit" method="post">
                                <label for="name">Name:</label>
                                <input type="text" id="name" name="name">
                                
                                <label for="email">Email:</label>
                                <input type="email" id="email" name="email">
                                
                                <input type="submit" value="Submit">
                            </form>
                        `}</pre>
                    </code>
                    <ul>
                        <li><pre>{`<form>`}</pre>: Defines the form.</li>
                        <li><pre>{`action`}</pre>: URL where the form data will be sent.</li>
                        <li><pre>{`method`}</pre>: HTTP method to use (usually post or get).</li>
                        <li><pre>{`<label>`}</pre>: Associates a label with a form control.</li>
                        <li><pre>{`<input>`}</pre>: Defines various types of input fields.</li>
                    </ul>
                </div>
            </section>
            <section id='html5'>
                <h2>HTML Features</h2>
                <div className="container__html_html5_text">
                    <p>HTML5 introduced new elements and attributes to make HTML more powerful:</p>
                    <ul>
                        <li>
                            Semantic Elements: <pre>{`<header>, <footer>, <article>, <section>, <nav>, <aside>`}</pre>
                            <code>
                                <pre>{`
                                <header>
                                    <h1>Header Content</h1>
                                </header>
                                `}</pre>
                            </code>
                        </li>
                        <li>
                            Multimedia: <pre>{`<video>, <audio>`}</pre>
                            <code>
                                <pre>{`
                                <video src="movie.mp4" controls></video>
                                <audio src="audio.mp3" controls></audio>
                                `}</pre>
                            </code>
                        </li>
                        <li>
                            Forms: New input types like date, color, range
                            <code>
                                <pre>{`
                                <input type="date">
                                <input type="color">
                                <input type="range">
                                `}</pre>
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
                        Feel free to experiment and build your own HTML documents. The more you practice, the more comfortable you'll become with HTML! If you have any specific questions or need more detailed explanations, just let me know.
                    </p>
                </div>
            </section>
        </div>
    )
}

export { HtmlPage }