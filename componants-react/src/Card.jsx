import profilePic from './assets/profile.png'

function Card(){

    return(
        <div className="card">
           <img className="card-image" src={profilePic}  alt="Profile picture" 
           style={{ width: '100', height:'100px'}} ></img>
           <h2 className="card-title">
            SHREYASH 
           </h2>
           <p className="card-text">I make websites and play games</p>
        </div>
    );
}



export default Card