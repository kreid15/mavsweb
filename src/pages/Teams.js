import Header from '../components/Header';
import Button from '@mui/material/Button';
import Footer from "../components/Footer";
import Team from "./Team";
import "./Teams.css";

const Teams = () => {
  return (
    <>
      <Header />
    <Button style={{marginLeft:"600px"}}href="/Players" variant='contained'>Players Details</Button>  
      <Team/>
      <Footer/>
    </>
  );
};

export default Teams;