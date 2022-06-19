function Page(){

  return (
  <div>
     <Header /> 
   <Main />
   <Footer />
  </div>
)
}
function Main()
{
  return (
    <div>
       <h1>
      hi there is my first react page
    </h1>
    <ol>
      <li>first copy cdn react in the script</li>
      <li>copy babel in the script</li>
      <li>write type=text/babel</li>
    </ol>
    </div>
  )
}
function Footer()
{
  return (
    <footer>
    0 20xx Ansari development. All right reserved.
      </footer>
  )
}

function Header(){
  return(
    <header>
    <nav>
      <img src ="https://tse2.mm.bing.net/th?id=OIP.8MEfXloFsCOJm3CezNPBcAHaGm&pid=Api&P=0&w=196&h=174" width="100px"></img>
    </nav>
    </header>
  )
}

ReactDOM.render(<Page />,document.getElementById("root"));



