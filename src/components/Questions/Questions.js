const Questions = (props) => {
    const {question,options}= props.question;
    // console.log(props.question)

    return (
        <div>
            <p>{question}</p>

            {
                options.map(element=><li>{element}</li>)
                
            }
            
            
           
          
        </div>
    );
};

export default Questions;