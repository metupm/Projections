import React, {useState, useEffect} from 'react';
import { Chart as ChartJS, ArcElement, } from 'chart.js';
ChartJS.register(ArcElement);
import { Doughnut } from 'react-chartjs-2';
import { Legend } from 'chart.js';



function PieChart({ metrics }: { metrics: number[] }) {
    const [chartData, setChartData] = useState<any>({
      labels: ['CC', 'Model 1', 'Model 2', 'Model 3', 'Model 4', 'Model 5', 'Model 6'],
      datasets: [
        {
            data: metrics,
          backgroundColor: ['#808080', '#4cb059', '#3a5998', '#1f3666', '#e44d26', '#007bb5', '#ff7e29'],
        },
      ],
    });


  
    const chartOptions = {
        animation: false,
        plugins: {
          legend: {
            position: 'Left',
          },
          Legend: true
        },
      };
    
      useEffect(() => {
        setChartData((prevData: any) => ({
          ...prevData,
          datasets: [{ ...prevData.datasets[0], data: metrics }],
        }));
      }, [metrics]);

  
    return <Doughnut data={chartData} options={chartOptions} />;
  }


function ModelsFilter() {
    const [pressedButtons, setPressedButtons] = useState<string[]>([]);
    const [metrics, setMetrics] = useState<number[]>([100, 0, 0, 0, 0, 0, 0]);


    const filterStyle: React.CSSProperties = {
      backgroundColor: '#323332', 
      display: 'flex',
      justifyContent: 'flex-end',
      borderRadius: 20, 
      flexDirection: 'row', 
    };

    const d2a: React.CSSProperties = {
        paddingLeft: 10, 
    };

    

    const buttonStyle: React.CSSProperties = {
        backgroundColor: '#4cb059',
        color: 'white',
        padding: '8px 16px',
        borderRadius: 8,
        margin: '8px 8px', 
        cursor: 'pointer',
        border: 'none', 
        outline: 'none',
        position: 'relative', 
        fontSize:20, 
      };


      const handleSubmit = () => {
        console.log('Metrics:', metrics);
      };
    
      const resetChart = () => {
        setPressedButtons([]);
        setMetrics([100, 0, 0, 0, 0, 0, 0]); 
      };

      const handleButtonClick = (button: string) => {
        setPressedButtons((prevButtons) => [...prevButtons, button]);
        setMetrics((prevMetrics) => {
          const updatedMetrics = [...prevMetrics];
          updatedMetrics[0] -= 5;
          updatedMetrics[pressedButtons.length + 1] += 5;
          return updatedMetrics;
        });
      };
    
   
    return (
      <div style={filterStyle}> 
      <div style={{flexDirection: 'row', }}> 
      <div>
       <div style={{ width: '200px', height: '200px', }}>
       <PieChart metrics={metrics}/>
        </div>
        <button style={buttonStyle} onClick={resetChart}>
          Reset
        </button>
        <button style={buttonStyle} onClick={handleSubmit}>
          Submit
        </button>
        </div>
        </div>
        <div style={{paddingLeft: 300, }}>
            <div style={d2a}> 
             <h1 style={{color: 'white', fontFamily: 'Arial, san-serif'}}>
                Add
             </h1>
            </div>
            <div>


            <button style={{...buttonStyle, backgroundColor: '#4cb059', boxShadow: pressedButtons.includes('Model 1') ? '0px 0px 10px #4cb059' : 'none', }}
        onClick={() => {
        setPressedButtons((prevButtons) => [...prevButtons, 'Model 1']);
      setMetrics((prevMetrics) => {
      const updatedMetrics = [...prevMetrics];
      updatedMetrics[0] -= 5;
      updatedMetrics[1] += 5; 
      return updatedMetrics;});
     }}>
        Model 1
      </button>

      <button style={{...buttonStyle, backgroundColor: '#3a5998',
        boxShadow: pressedButtons.includes('Model 2') ? '0px 0px 10px #4cb059' : 'none',}}
        onClick={() => {
     setPressedButtons((prevButtons) => [...prevButtons, 'Model 2']);
      setMetrics((prevMetrics) => {
      const updatedMetrics = [...prevMetrics];
      updatedMetrics[0] -= 5;
      updatedMetrics[2] += 5; 
      return updatedMetrics;
        });
      }}>
       Model 2
        </button>


      <button style={{...buttonStyle, backgroundColor: '#1f3666',
        boxShadow: pressedButtons.includes('Model 3') ? '0px 0px 10px #4cb059' : 'none',}}
         onClick={() => {setPressedButtons((prevButtons) => [...prevButtons, 'Model 3']);
      setMetrics((prevMetrics) => {
      const updatedMetrics = [...prevMetrics];
      updatedMetrics[0] -= 5;
      updatedMetrics[3] += 5; 
      return updatedMetrics;});}}>
      Model 3
          </button>


      <button style={{...buttonStyle, backgroundColor: '#e44d26',
        boxShadow: pressedButtons.includes('Model 4') ? '0px 0px 10px #4cb059' : 'none',}}
         onClick={() => {setPressedButtons((prevButtons) => [...prevButtons, 'Model 4']);
         setMetrics((prevMetrics) => {
      const updatedMetrics = [...prevMetrics];
      updatedMetrics[0] -= 5;
      updatedMetrics[4] += 5; 
      return updatedMetrics;});}}>
        Model 4
         </button>


         <button style={{...buttonStyle,backgroundColor: '#007bb5',
     boxShadow: pressedButtons.includes('Model 5') ? '0px 0px 10px #4cb059' : 'none',}}
      onClick={() => {
      setPressedButtons((prevButtons) => [...prevButtons, 'Model 5']);
      setMetrics((prevMetrics) => {
      const updatedMetrics = [...prevMetrics];
      updatedMetrics[0] -= 5;
      updatedMetrics[5] += 5; 
      return updatedMetrics;
    });}}>
      Model 5
    </button>


    <button style={{
    ...buttonStyle,
     backgroundColor: '#ff7e29',
     boxShadow: pressedButtons.includes('Model 6') ? '0px 0px 10px #4cb059' : 'none',}}
     onClick={() => {
     setPressedButtons((prevButtons) => [...prevButtons, 'Model 6']);
     setMetrics((prevMetrics) => {
       const updatedMetrics = [...prevMetrics];
       updatedMetrics[0] -= 5;
       updatedMetrics[6] += 5;
       return updatedMetrics;
      });}}>
       Model 6
       </button>


            </div>
        </div>
        </div>
      
    )
  }
  
  
  export default ModelsFilter