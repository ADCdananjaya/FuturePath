import components from "../components";

const Dashboard = (props) => {
    return ( 
        <div className="w-full bg-[#000411]">
            {props.userType === "canLog" ? <components.Suggestions user="candidate" />: <components.Suggestions user="company"/>}
        </div>
    );
}

export default Dashboard;