const Dashboard = (props) => {
    return ( 
        <div className="text-9xl">
            {props.userType === "canLog" ? "candidate login": "company login"}
        </div>
    );
}

export default Dashboard;