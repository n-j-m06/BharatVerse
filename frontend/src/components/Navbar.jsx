export default function Navbar() {

    const user = localStorage.getItem("user");

    return (

        <div style={styles.navbar}>

            <h2>🌍 BHARATVERSE</h2>

            <h3>👤 {user}</h3>

        </div>

    );

}

const styles={

    navbar:{

        height:"70px",

        background:"#111827",

        color:"white",

        display:"flex",

        justifyContent:"space-between",

        alignItems:"center",

        padding:"0 30px"

    }

}