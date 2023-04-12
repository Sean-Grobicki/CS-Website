import '../Stylesheets/App.css';

function Pickems() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Blast Paris Major 2023</h1>
        <nav className = {global.navBar}> 
          <a href = "Home" className={global.navBarLink}>Home</a>
          <a href = "" className={global.active + ' '+ global.navBarLink}>Pickems</a>
          <a href = "Teams" className={global.navBarLink}>Teams Attending</a>
          <a href = "Rankings" className={global.navBarLink}>Valve Rankings</a>
        </nav>
        <h2>Pickems</h2>
      </header>
    </div>
  );
}

export default Pickems;