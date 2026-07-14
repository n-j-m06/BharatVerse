export default function DashboardCard({title,value}){

    return(

        <div style={styles.card}>

            <h3>{title}</h3>

            <h1>{value}</h1>

        </div>

    )

}

const styles={

card:{

background:"white",

padding:"25px",

borderRadius:"10px",

boxShadow:"0px 0px 10px lightgray",

width:"220px"

}

}