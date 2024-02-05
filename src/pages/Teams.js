import Header from '../components/Header';
import {Button} from 'reactstrap';
import Footer from "../components/Footer";
import Roster from "./Roster";
import "./Teams.css";

const Teams = () => {
  return (
    <>
      <Header />
    <Button style={{marginLeft:"600px"}}href="/Oladipo" type="button">
      Players Details
      </Button>  
    <Button style={{marginLeft:"600px"}}href="/Profile" type="button">Profile</Button>
      
      <Roster/>
      <Footer/>
    </>
  );
};

export default Teams;