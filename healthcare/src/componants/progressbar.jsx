




const Progressbar=({progress, color})=>{

    const styleObject ={
        width: `${progress}%`,
        backgroundColor: color || 'lightgreen',
        height: 20,
        borderRadius:20
    }
    
    return(
        <>      
            <div className="progress-maindiv">
                    <div className="progress-bar">
                            <div style={styleObject}>
                                {`${progress}%`}
                            </div>
                    </div>
                
            </div>
        </>
    )
}
export default Progressbar;