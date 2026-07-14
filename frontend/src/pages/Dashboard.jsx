import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

import StatCard from "../components/StatCard";
import AgentStatus from "../components/AgentStatus";
import MapPlaceholder from "../components/MapPlaceholder";

export default function Dashboard() {

    return (

        <>

        <Navbar/>

        <div style={{display:"flex"}}>

            <Sidebar/>

            <div
                style={{
                    flex:1,
                    padding:"30px",
                    background:"#EEF2F7",
                    minHeight:"100vh"
                }}
            >

                <h1>Welcome Back 👋</h1>

                <p>
                    India's AI Digital Twin &
                    Decision Intelligence Platform
                </p>

                <br/>

                <div
                    style={{
                        display:"flex",
                        gap:"20px",
                        flexWrap:"wrap"
                    }}
                >

                    <StatCard
                        title="AI Agents"
                        value="5"
                        subtitle="Currently Active"
                        icon="🤖"
                    />

                    <StatCard
                        title="Cities"
                        value="28"
                        subtitle="Connected"
                        icon="🌍"
                    />

                    <StatCard
                        title="Citizen Reports"
                        value="142"
                        subtitle="Pending Review"
                        icon="👥"
                    />

                    <StatCard
                        title="Risk Alerts"
                        value="12"
                        subtitle="High Priority"
                        icon="🚨"
                    />

                </div>

                <div
                    style={{
                        display:"flex",
                        gap:"25px",
                        marginTop:"30px",
                        alignItems:"flex-start"
                    }}
                >

                    <div style={{flex:3}}>

                        <MapPlaceholder/>

                    </div>

                    <div style={{flex:1}}>

                        <AgentStatus/>

                    </div>

                </div>

            </div>

        </div>

        </>

    )

}