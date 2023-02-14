import constants from "../constants";
const FormButton = (props) => {
    return ( 
        <button className="md:w-80 w-72 h-10 bg-[#5DE2E7] text-gray-800 font-semibold hover:bg-[#07c4cb] rounded-md">
            {constants.welcomes.find(item => item.status === props.status).buttonText}
        </button>
    );
}

export default FormButton;