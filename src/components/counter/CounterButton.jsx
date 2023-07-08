import {PropTypes} from 'prop-types'
export default  function CounterButton({by, incrementMethod, decrementMethod}){

    //A function inside a function
    // function incrementCounterFunction(){
    //     incrementMethod(by)
        
    // }
    function decrementCounterFunction(){
        decrementMethod(by)
    } 

    return(
        <div className="Counter">
        <div>
            <button className="counterButton"
             onClick={decrementCounterFunction}     
                >-{by}</button>
                <button className="counterButton"
             onClick={() => incrementMethod(by)}       // you can use arrow function to call the parent directly in the child 
                >+{by}</button> 
        </div>
        </div>
    )
}


CounterButton.propTypes = {
    by: PropTypes.number
}

CounterButton.defaultProps = {
    by: 5
}