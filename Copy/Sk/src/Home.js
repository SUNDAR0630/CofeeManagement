// import React from 'react'
// import {useNavigate} from "react-router-dom"
// import "./Home.css"

// function Home() {

//     const nav = useNavigate();

//     const submit=()=>{
//         nav("/coffee")
//     }

//   return (
    
//     <div className="home-container">
     
//       <div className="center-container">
//           <div className="background-image">
//           <button className="submit-button" onClick={submit}  style={{marginLeft:'600px', marginTop:'250px'}}>Click Hear To View</button>
//           </div>
//       </div>

//     </div>
//   )
// }

// export default Home;



// import React from "react";
// import { TextField, Button, Grid, Card, CardContent } from "@material-ui/core";
// import "./Home.css";

// const Home = () => {
//   return (
//     <div className="coffee-day-container">
//       <div className="image-container">
//         <img
//           className="coffee-image"
//           src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeoTmDs8lK4drWX8vtwTxt2AQEgg3TjjshieDpyrGqZw&usqp=CAU&ec=48600113"
//           alt="Coffee Image"
//         />
//       </div>
//       <div className="content-container">
//         <h2 className="coffee-title">COFFEE DAY</h2>
//         <div className="offer-container">
//           <Grid container spacing={2}>
//             <Grid item xs={12} sm={6} md={3}>
//               <Card>
//                 <CardContent>
//                   <h3>Offer 1</h3>
//                   <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
//                 </CardContent>
//               </Card>
//             </Grid>
//             <Grid item xs={12} sm={6} md={3}>
//               <Card>
//                 <CardContent>
//                   <h3>Offer 2</h3>
//                   <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
//                 </CardContent>
//               </Card>
//             </Grid>
//             <Grid item xs={12} sm={6} md={3}>
//               <Card>
//                 <CardContent>
//                   <h3>Offer 3</h3>
//                   <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
//                 </CardContent>
//               </Card>
//             </Grid>
//             <Grid item xs={12} sm={6} md={3}>
//               <Card>
//                 <CardContent>
//                   <h3>Offer 4</h3>
//                   <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
//                 </CardContent>
//               </Card>
//             </Grid>
//           </Grid>
//         </div>
//         <div className="form-container">
//           <TextField label="Name" variant="outlined" fullWidth />
//           <TextField label="Phone Number" variant="outlined" fullWidth />
//           <Button variant="contained" color="primary" fullWidth>
//             Submit
//           </Button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Home;




import React from "react";
import { TextField, Button, Grid, Card, CardContent } from "@material-ui/core";
import {useNavigate} from "react-router-dom"
import { red } from "@mui/material/colors";



const Home = () => {
  const coffeeTitleStyles = {
    fontSize: "24px",
    justifyContent:"center",
    alignItems:"center",
    animation: "colorAnimation 2s infinite alternate",
    backgroundcolor:"red",
  };
  const nav = useNavigate();

      const submit=()=>{
          nav("/coffee")
       }
  const offerCardStyles = {
    transition: "background-color 0.3s",
     cursor: "pointer",
     "&:hover":{
        background:red
     },
    
  };

  const nameInputStyles = {
    width: "80%",
    maxWidth: "300px",
  };

  
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "20px",
      }}
    >
      <div
        style={{
          flex: "0 0 50%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img
          style={{
            maxWidth: "100%",
            maxHeight: "100%",
            marginBottom:"40px",
            width:"400px",
          }}
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeoTmDs8lK4drWX8vtwTxt2AQEgg3TjjshieDpyrGqZw&usqp=CAU&ec=48600113"
          alt="Coffee Image"
        />
      </div>
      <div
        style={{
          flex: "0 0 50%",
          padding: "20px",
        }}
      >
        <h2 style={coffeeTitleStyles}>COFFEE DAY</h2>
        <div style={{ marginBottom: "20px" }}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6} md={3}>
              <Card style={offerCardStyles}>
                <CardContent>
                  <h3>Offer 1</h3>
                  <p>BUY 2 
                    Affogato
                    GET 1 FREE</p>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Card style={offerCardStyles}>
                <CardContent>
                  <h3>Offer 2</h3>
                  <p> Get 4 Cappuccino 
                     Rs 600  </p>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Card style={offerCardStyles}>
                <CardContent>
                  <h3>Offer 3</h3>
                  <p>FLAT OFF RS 1000 FOR BILL 4000</p>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Card style={offerCardStyles}>
                <CardContent>
                  <h3>Offer 4</h3>
                  <p>COMBOOO 3 Latte AND 2 Espresso RS:600 </p>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          <TextField
            label="Name"
            variant="outlined"
            style={nameInputStyles}
          />
          <TextField
            label="Phone Number"
            variant="outlined"
            style={nameInputStyles}
        />
     <Button variant="contained" onClick={submit} color="success " style={{with:"fit-content",alignItems:"flex-start",padding:"10px"}} >
          Click for MORE MENU
     </Button>


        
        </div>
        
        </div>
        </div>
)}
export default Home