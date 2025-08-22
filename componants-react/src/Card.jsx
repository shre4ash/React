import profilePic from './assets/profile.png'

function Card(){

    return(
        <div className="card">
           <img src={profilePic}  alt="Profile picture" 
           style={{ width: '100', height:'100px'}} ></img>
           <h2>
            Bro code 
           </h2>
           <p>I make websites and play games</p>
        </div>
    );
}



export default Card