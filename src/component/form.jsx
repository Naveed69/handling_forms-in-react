export const Form=()=>{
    const handleForm=()=>{

    }
    return(
        <div>
            <h1><u><i>Fill Form</i></u></h1>
            <label>Name:<input type="text" name="username" placeholder="Enter Name"></input><br/>
            <label>Age:<input type="text" name="age" placeholder="Enter Age"></input></label></label><br/>
            <label>Select Doctor:</label>
            <select >
                <option value='naveed'>Dr.Naveed</option>
                <option value='roma'>Dr.Roma</option>
            </select>
            <br/><button type="button" onClick={handleForm}>Submit</button>
        </div>
    )
}