import { Link } from "react-router-dom";

export default function Sidebar(){

    return(

        <div style={styles.sidebar}>

            <h2>Navigation</h2>

            <Link to="/dashboard">🏠 Dashboard</Link>

            <Link to="#">🤖 AI Chat</Link>

            <Link to="#">🌍 Digital Twin</Link>

            <Link to="#">📊 Analytics</Link>

            <Link to="#">🚨 Disaster</Link>

            <Link to="#">📅 Timeline</Link>

            <Link
                to="/login"
                onClick={()=>localStorage.clear()}
            >
                🚪 Logout
            </Link>

        </div>

    )

}

const styles={

sidebar:{

width:"230px",

height:"100vh",

background:"#1F2937",

display:"flex",

flexDirection:"column",

gap:"20px",

padding:"20px",

color:"white"

}

}