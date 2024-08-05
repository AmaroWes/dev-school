import './JsPage.css';

const JsPage = () => {
    return(
        <div className='container__js'>
            <section id='introduction'>
                <h2>Introduction</h2>
                <article>
                    <p>
                        JavaScript is a cross-platform, object-oriented scripting language.
                        It is a small and lightweight language. Inside a host environment
                        (for example, a web browser), JavaScript can be connected to the
                        objects of its environment to provide programmatic control over
                        them.
                    </p>
                    <p>
                        JavaScript contains a standard library of objects, such as Array,
                        Date, and Math, and a core set of language elements such as
                        operators, control structures, and statements. Core JavaScript can
                        be extended for a variety of purposes by supplementing it with
                        additional objects; for example:
                    </p>
                    <ul>
                        <li>
                            Client-side JavaScript extends the core language by supplying
                            objects to control a browser and its Document Object Model (DOM).
                            For example, client-side extensions allow an application to place
                            elements on an HTML form and respond to user events such as mouse
                            clicks, form input, and page navigation
                        </li>
                        <li>
                            Server-side JavaScript extends the core language by supplying
                            objects relevant to running JavaScript on a server. For example,
                            server-side extensions allow an application to communicate with a
                            database, provide continuity of information from one invocation to
                            another of the application, or perform file manipulations on a
                            server.
                        </li>
                    </ul>
                </article>
            </section>
            <section id='hello_world'>
                <h2>Hello World</h2>
                <article>
                    <p>
                        To get started with writing JavaScript, open the Scratchpad and write
                        your first &quot;Hello world&quot; JavaScript code:
                    </p>
                    <code>
                        <p>{`function greetMe(yourName) {alert(&quot;Hello &quot; + yourName); }`}</p>
                        <p>greetMe(&quot;World&quot;);</p>
                    </code>
                    <p>
                        Select the code in the pad and hit Ctrl+R to watch it unfold in your
                        browser!
                    </p>
                </article>
            </section>
            <section id='variables'>
                <h2>Variables</h2>
                <article>
                    <p>
                        You use variables as symbolic names for values in your application.
                        The names of variables, called identifiers, conform to certain rules.
                    </p>
                    <p>
                        A JavaScript identifier must start with a letter, underscore (_), or
                        dollar sign ($); subsequent characters can also be digits (0-9).
                        Because JavaScript is case sensitive, letters include the characters
                        &quot;A&quot; through &quot;Z&quot; (uppercase) and the characters &quot;a&quot; through &quot;z&quot;
                        (lowercase).
                    </p>
                    <p>
                        You can use ISO 8859-1 or Unicode letters such as å and ü in
                        identifiers. You can also use the Unicode escape sequences as
                        characters in identifiers. Some examples of legal names are
                        Number_hits, temp99, and _name.
                    </p>
                </article>
            </section>
            <section id='declaring_variables'>
                <h2>Declaring Variables</h2>
                <article>
                    <p>You can declare a variable in three ways: </p>
                    <p>
                        With the keyword var. For exemple: 
                        <code>
                            var x = 42;
                        </code>
                        This syntax can be used to declare both local and global variables.
                    </p>
                    <p>
                        By simply assigning it a value. For exemple: 
                        <code>
                            x = 42;
                        </code>
                        This always declares a global variable. It generates a strict JavaScript warning. You shouldnt use this variant.
                    </p>
                    <p>
                        With the keyword let. For exemple:
                        <code>
                            let y = 13;
                        </code>
                        This syntax can be used to declare a block scope local variable. See Variable scope below.
                    </p>
                </article>
            </section>
            <section id='variable_scope'>
                <h2>Variable Scope</h2>
                <article>
                    <p>
                        When you declare a variable outside of any function, it is called a
                        global variable, because it is available to any other code in the
                        current document. When you declare a variable within a function, it
                        is called a local variable, because it is available only within that
                        function.
                    </p>
                    <p>
                        JavaScript before ECMAScript 2015 does not have block statement
                        scope; rather, a variable declared within a block is local to the
                        function (or global scope) that the block resides within. For
                        example the following code will log 5, because the scope of x is the
                        function (or global context) within which x is declared, not the
                        block, which in this case is an if statement.  
                    </p>
                    <code>
                        <p>{`if (true) {var x = 5; } console.log(x); // 5`}</p>
                    </code>
                    <p>
                        This behavior changes, when using the let declaration introduced in
                        ECMAScript 2015.
                    </p>
                    <code>
                        <p>{`if (true) {let y = 5; } console.log(y); // ReferencerError: y is not defined`}</p>
                    </code>
                </article>
            </section>
            <section id='global_variables'>
                <h2>Global Variables</h2>
                <article>
                    <p>
                        Global variables are in fact properties of the global object. In web
                        pages the global object is window, so you can set and access global
                        variables using the window.variable syntax.
                    </p>
                    <p>
                        Consequently, you can access global variables declared in one window
                        or frame from another window or frame by specifying the window or
                        frame name. For example, if a variable called phoneNumber is
                        declared in a document, you can refer to this variable from an
                        iframe as parent.phoneNumber.
                    </p>
                </article>
            </section>
            <section id='constants'>
                <h2>Constants</h2>
                <article>
                    <p>
                        You can create a read-only, named constant with the const keyword.
                        The syntax of a constant identifier is the same as for a variable
                        identifier: it must start with a letter, underscore or dollar sign
                        and can contain alphabetic, numeric, or underscore characters.            
                    </p>
                    <code>
                        const PI = 3.14;
                    </code>
                    <p>
                        A constant cannot change value through assignment or be re-declared
                        while the script is running. It has to be initialized to a value.
                    </p>
                    <p>
                        The scope rules for constants are the same as those for let block
                        scope variables. If the const keyword is omitted, the identifier is
                        assumed to represent a variable.
                    </p>
                    <p>
                        You cannot declare a constant with the same name as a function or
                        variable in the same scope. For example:
                    </p>
                    <code>
                        <p>{`// THIS WILL CAUSE AN ERROR function f() {};`}</p>
                        <p>{`// THIS WILL CAUSE AN ERROR ALSO function f() { cont g = 5; var g; `}</p>
                        <p>{`//statements const f = 5; `}</p>
                    </code>
                    <p>
                        However, object attributes are not protected, so the following
                        statement is executed without problems.
                    </p>
                    <code>
                        <p>{`const MY_OBJ = {&quot;key&quot;: &quot;value&quot;}; MY_OBJ.key = &quot;otherValue&quot;;`}</p>
                    </code>
                </article>
            </section>
            <section id='data_types'>
                <h2>Data Types</h2>
                <article>
                    <p>The latest ECMAScript standard defines seven data types:</p>
                    <ul>
                        <li>
                            <p>Six data types that are primitives:</p>
                            <ul>
                                <li>
                                    null. A special keyword denoting a null value. Because
                                    JavaScript is case-sensitive, null is not the same as Null,
                                    NULL, or any other variant.
                                </li>
                                <li>Boolean. true and false.</li>
                                <li>
                                    undefined. A top-level property whose value is undefined.
                                </li>
                                <li>Number. 42 or 3.14159.</li>
                                <li>String. &quot;Howdy&quot;</li>
                                <li>
                                    Symbol (new in ECMAScript 2015). A data type whose instances
                                    are unique and immutable.
                                </li>
                            </ul>
                        </li>
                        <li>and Object</li>
                    </ul>
                    <p>
                        Although these data types are a relatively small amount, they enable
                        you to perform useful functions with your applications. Objects and
                        functions are the other fundamental elements in the language. You can
                        think of objects as named containers for values, and functions as
                        procedures that your application can perform.
                    </p>
                </article>
            </section>
            <section id='if__else_statement'>
                <h2>If...else statement</h2>
                <article>
                    <p>
                        Use the if statement to execute a statement if a logical condition is
                        true. Use the optional else clause to execute a statement if the
                        condition is false. An if statement looks as follows:
                    </p>
                    <code>
                        <p>{`if (condition) { statement_1; } else { statement_2; }`}</p>
                    </code>
                    <p>
                        condition can be any expression that evaluates to true or false. See
                        Boolean for an explanation of what evaluates to true and false. If
                        condition evaluates to true, statement_1 is executed; otherwise,
                        statement_2 is executed. statement_1 and statement_2 can be any
                        statement, including further nested if statements.
                    </p>
                    <p>
                        You may also compound the statements using else if to have multiple
                        conditions tested in sequence, as follows:
                    </p>
                    <code>
                        <p>{`if (condition_1) { statement_1; } else if (condition_2) { statement_2; } else if (condition_n) { statement_n; } else { statement_last; } `}</p>                          
                    </code>
                    <p>
                        In the case of multiple conditions only the first logical condition
                        which evaluates to true will be executed. To execute multiple
                        statements, group them within a block statement {`({ ... })`} . In
                        general, it is good practice to always use block statements, especially
                        when nesting if statements:
                    </p>
                    <code>
                        {`if (condition) { statement_1_runs_if_condition_is_true; statement_2_runs_if_condition_is_true; } else { statement_3_runs_if_condition_is_false; statement_4_runs_if_condition_is_false; }`}
                    </code>
                    <p>
                        It is advisable to not use simple assignments in a conditional
                        expression, because the assignment can be confused with equality when
                        glancing over the code. For example, do not use the following code:
                    </p>
                    <code>
                        if (x = y) { /* statements here */ }
                    </code>
                    <p> 
                        If you need to use
                        an assignment in a conditional expression, a common practice is to put
                        additional parentheses around the assignment. For example:
                    </p>
                    <code>
                        if ((x = y)) { /* statements here */}
                    </code>
                </article>
            </section>
            <section id='while_statement'>
                <h2>While statement</h2>
                <article>
                    <p>
                        A while statement executes its statements as long as a specified
                        condition evaluates to true. A while statement looks as follows:
                    </p>
                    <code>while (condition) statement</code>
                    <p>
                        If the condition becomes
                        false, statement within the loop stops executing and control passes to
                        the statement following the loop.
                    </p>
                    <p>
                        The condition test occurs before statement in the loop is executed.
                        If the condition returns true, statement is executed and the
                        condition is tested again. If the condition returns false, execution
                        stops and control is passed to the statement following while.
                    </p>
                    <p>
                        To execute multiple statements, use a block statement {`({ ... })`} to
                        group those statements.
                    </p>
                    <p>Exemple: </p>
                    <p>
                        The following while loop iterates as long as n is less than three:
                    </p>
                    <code>
                        {`var n = 0; var x = 0; while ( n > 3 ) { n++; x += n; }`}
                    </code>
                    <p>
                        With each iteration, the loop increments n and adds that value to x.
                        Therefore, x and n take on the following values:
                    </p>
                    <ul>
                        <li>After the first pass: n = 1 and x = 1</li>
                        <li>After the second pass: n = 2 and x = 3</li>
                        <li>After the third pass: n = 3 and x = 6</li>
                    </ul>
                    <p>
                        After completing the third pass, the condition n &lt; 3 is no longer
                        true, so the loop terminates.
                    </p>
                </article>
            </section>
            <section id='function_declarations'>
                <h2>Function Declarations</h2>
                <article>
                    <p>
                        A function definition (also called a function declaration, or function
                        statement) consists of the function keyword, followed by:
                    </p>
                    <ul>
                        <li>The name of the function.</li>
                        <li>
                            A list of arguments to the function, enclosed in parentheses and
                            separated by commas.
                        </li>
                        <li>
                            The JavaScript statements that define the function, enclosed in
                            curly brackets, { }.
                        </li>
                    </ul>
                    <p>
                        For example, the following code defines a simple function named
                        square:
                    </p>
                    <code>
                        {`function square(number) { return number * number; }`}
                    </code>
                    <p>
                        The function square takes one argument, called number. The function
                        consists of one statement that says to return the argument of the
                        function (that is, number) multiplied by itself. The return
                        statement specifies the value returned by the function.
                    </p>
                    <code>return number * number;</code>
                    <p>
                        Primitive parameters (such as a number) are passed to functions by
                        value; the value is passed to the function, but if the function
                        changes the value of the parameter, this change is not reflected
                        globally or in the calling function.
                    </p>
                </article>
            </section>
        </div>
    )
}

export { JsPage }