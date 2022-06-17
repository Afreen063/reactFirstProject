//ReactDOM.render(<h1>Hello everyone</h1>,document.getElementById("root"));
// ReactDOM is global variable which help us to render html. 
//render( <html content>, where we want to render this html content) .. render() is a function.
//ReactDOM.render(<p>Hello everyone</p>,document.getElementById("root"));


/*ReactDOM.render(<ul>
    <li>good</li>
    <li>bad</li>
</ul>, document.getElementById("root"));
*/
// we can also add unordered list .
/*function NavBar()
{
    return (
        <nav class="navbar navbar-expand-lg bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Link</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><a class="dropdown-divider"></a></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled">Disabled</a>
        </li>
      </ul>
      <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
    )
}// copied from bootstrap and render in react

ReactDOM.render(
    <div>
        <NavBar />
    </div>, document.getElementById("root")
)*///<NavBar is the function name that return navbar html page   

/*var element = document.createElement("h1");
element.innerText="hi everyone";
element.className="headers";
document.getElementById("root").append(element);*/
// using dom added html file

//in single line
//ReactDOM.render(<h1 className="headers">Hello everyone</h1>,document.getElementById("root"));

const element = <h1 className="headers">hello everyone</h1>
console.log(element);
ReactDOM.render(element,document.getElementById("root"))

//jsx basically a function that return object that react can interpret and create element.

//we can only render 1 parent in the reactDOM. 

//ReactDOM.render(<h1></h1><p></p>,document.getElementById("root")) it will through error
const v=(<div>
    <h1>hi everyone</h1>
    <p>byyeee</p>
</div>)

//ReactDOM.render(v
//, document.getElementById("root"));

const nav=(
    <div>
        <nav>
        <h1>Websites</h1>
        <ul>
            <li>pricing</li>
            <li>contact</li>
            <li>about</li>
        </ul>
        </nav>
    </div>
)
ReactDOM.render(nav,document.getElementById("root"))
//document.getElementById("root").append(JSON.stringify(nav))//it print [obj obj] without using json.stringfy


//