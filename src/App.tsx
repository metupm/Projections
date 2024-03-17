import ModelsFilter from "./components/ModelsFilter";
import Table from "./components/Table";
import "./styles/global.css";

function App() {

  const pageStyle: React.CSSProperties = {
    backgroundColor: '#1d1f1e', 
    minHeight: '100vh', 
  };

  const headerStyle: React.CSSProperties ={
    textAlign: 'right', 
    paddingRight: 20,
    fontFamily: 'Arial, sans-serif', 
    color: '#4cb059', 
    fontSize: 60,
    margin: 0, 
  };

  const contentStyle: React.CSSProperties = {
    marginLeft: 90, 
    marginRight: 90, 
  };


  const headingStyle: React.CSSProperties = {
    color: 'white', 
    fontFamily: 'Arial, sans-serif', 
    fontSize:40, 
  };

  return (
    <div style={pageStyle}> 
      <div>
       <h1 style={headerStyle}>College Basketball</h1>
      </div>
      <div style={contentStyle}>
        <h1 style={headingStyle}>
          Current Projections
        </h1>
      </div>

      <div style={{display: 'flex', justifyContent:'center', marginLeft: 10, marginRight: 10, }}>
        <Table/>
      </div>
    </div>
    
  )
}


export default App
