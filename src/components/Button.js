const Button = ({state, text, onClick}) => {  
    const textResult = () => {
        if(state.active){
            if(state.asc){
                return text + " ↑";
            }
            else{
                return text + " ↓";
            }
        }
        else{
            return text + "";
        }
    }

    const color = () => {
        if(state.active){
            return "#3d84e0";
        }
        else{
            return "#8d8e8f";
        }
    }

    return(
         <button
            onClick={onClick} 
            style={{ backgroundColor: color()}}
        >
            {textResult()}
        </button>
    )
}

export default Button
