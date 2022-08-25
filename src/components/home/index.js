import "../home/style.css"

function Home ({text, onClick}) {

    return(

        <div className="flex">
            <button onClick={onClick} className="myButton">{text}</button>
        </div>
       
    )

}

export default Home;