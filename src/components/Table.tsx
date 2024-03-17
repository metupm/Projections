import React, { useState, useEffect} from "react";
import jsonData from "../../server/New folder (3)/preds.json";

const Table = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [rowsPerPage] = useState(20);
    const [rows, setRows] = useState([]);

    const fetchData = () => {
      const storedData = localStorage.getItem("predsData");
      if (storedData) {
        setRows(JSON.parse(storedData));
      } else {
        setRows(jsonData);
      }
    };

    useEffect(() => {
      setRows(jsonData); 
    }, [jsonData]);

    
  useEffect(() => {
    localStorage.setItem("predsData", JSON.stringify(rows)); 
  }, [rows]);


  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  const totalPages = Math.ceil(rows.length / rowsPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
    <div style={{ marginTop: '15px' }} > 
      <table>
        <thead>
          <tr> 
            <th colSpan={2} style={{ backgroundColor: '#323332', borderTopLeftRadius: '20px', color: 'white', fontSize: '30px', fontFamily: 'Arial, sans-serif', padding: 10, paddingInline: 300}}>Predictive</th> 
            <th colSpan={7} style={{ backgroundColor: '#323332', borderTopRightRadius: '20px', color: 'white', fontSize: '30px', fontFamily: 'Arial, sans-serif', padding: 10, paddingInline: 300 }}>Market</th> 
          </tr>
          <tr> 
            <th style={{ padding: '10px', color: 'white', fontFamily: 'Arial, sans-serif', paddingInline: 20, fontSize: 25, }}>Home</th> 
            <th style={{ padding: '10px', color: 'white', fontFamily: 'Arial, sans-serif', paddingInline: 20, fontSize: 25,}}>Away</th>
            <th colSpan={2} style={{ padding: '10px', color: 'white', fontFamily: 'Arial, sans-serif', paddingInline: 20,fontSize: 25, }}>Projected</th> 
            <th colSpan={2} style={{ padding: '10px', color: 'white', fontFamily: 'Arial, sans-serif', paddingInline: 20, fontSize: 25,}}>Consensus</th> 
            <th colSpan={2} style={{ padding: '10px', color: 'white', fontFamily: 'Arial, sans-serif', paddingInline: 20, fontSize: 25, }}>Totals</th> 
            <th colSpan={1} style={{ padding: '10px', color: 'white', fontFamily: 'Arial, sans-serif', paddingInline: 20, fontSize: 25, }}>Spreads</th> 
          </tr>
          <tr>
              <th></th>
              <th></th>
              <th style={{ padding: '5px', color: 'white', fontFamily: 'Arial, sans-serif', paddingInline: 10, fontSize: 10 }}>Total</th>
              <th style={{ padding: '5px', color: 'white', fontFamily: 'Arial, sans-serif', paddingInline: 10, fontSize: 10 }}>Spread</th>
              <th style={{ padding: '5px', color: 'white', fontFamily: 'Arial, sans-serif', paddingInline: 10, fontSize: 10 }}>Total</th>
              <th style={{ padding: '5px', color: 'white', fontFamily: 'Arial, sans-serif', paddingInline: 10, fontSize: 10 }}>Spread</th>
              <th style={{ padding: '5px', color: 'white', fontFamily: 'Arial, sans-serif', paddingInline: 15, fontSize: 10 }}>Bet Types</th>
              <th style={{ padding: '5px', color: 'white', fontFamily: 'Arial, sans-serif', paddingInline: 10, fontSize: 10 }}>EV</th>
              <th style={{ padding: '5px', color: 'white', fontFamily: 'Arial, sans-serif', paddingInline: 10, fontSize: 10 }}>EV</th>
            </tr>
          
        </thead>
        <tbody>
        {Array.isArray(rows) && rows.length > 0 && rows.slice(indexOfFirstRow, indexOfLastRow).map((row, index) => (
            <tr key={index}>
              <td style={{ padding: '10px', backgroundColor: 'white', fontFamily: 'Arial, sans-serif', fontSize: 20, textAlign:'center' }}>{row['Home Team']} ({row['Home Score']})</td>
              <td style={{ padding: '10px', backgroundColor: 'white', fontFamily: 'Arial, sans-serif', fontSize: 20, textAlign:'center'  }}>{row['Away Team']} ({row['Away Score']})</td>
              <td style={{ padding: '10px', backgroundColor: 'white', fontFamily: 'Arial, sans-serif' , fontSize: 20, textAlign:'center'  }}>{row['Projected Total']}</td>
              <td style={{ padding: '10px', backgroundColor: 'white' , fontFamily: 'Arial, sans-serif', fontSize: 20, textAlign:'center' }}>{row['Projected Spread']}</td>
              <td style={{ padding: '10px', backgroundColor: 'white', fontFamily: 'Arial, sans-serif', fontSize: 20, textAlign:'center'  }}>{row['Consensus Total']}</td>
              <td style={{ padding: '10px', backgroundColor: 'white', fontFamily: 'Arial, sans-serif', fontSize: 20, textAlign:'center'  }}>{row['Consensus Spread']}</td>
              <td style={{ padding: '10px', backgroundColor: 'white' , fontFamily: 'Arial, sans-serif', fontSize: 20,textAlign:'center'  }}>{row['Bet Type']}</td>
              <td style={{ padding: '10px', backgroundColor: 'white', fontFamily: 'Arial, sans-serif', fontSize: 20,  textAlign:'center' }}>{row['TEV']}</td>
              <td style={{ padding: '10px', backgroundColor: 'white', fontFamily: 'Arial, sans-serif', fontSize: 20, textAlign:'center'  }}>{row['SEV']}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div style={{ marginTop: '15px' }}>
        {Array.from({ length: totalPages }, (_, i) => (
          <button key={i + 1} onClick={() => paginate(i + 1)} style={{ margin: '5px', padding: '5px 10px', fontSize: '16px' }}>{i + 1}</button>
        ))}
      </div>
      </div>
    );
  };
  
  export default Table;
