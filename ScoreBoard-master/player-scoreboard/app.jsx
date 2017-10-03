
class Model 
{

   constructor () {
    this.name =["Jim Hoskins","Andree Hoskins","Alena Hoskins"];
    this.score=[31,35,42];
    this.id=[1, 2, 3];
    this.inputValue = null;
   this.render = undefined;
   }
  
  }  

const Header = (props)=>{
 let points =props.players.map((e) => e.score).reduce((a,b) =>{return a+ b});
 return(
   <div className="header">
     <div className= "count">
       <table>
         <tr><td>PLAYERS:</td>{props.players.length}</tr>
         <tr><td>TOTAL:</td>{points}</tr>
         </table>
         </div>
         <div className="stopwatch">
           <h3>STOPWATCH</h3>
           <h1 className="stopwatch-time">0</h1>
           <p><button>START</button>  <button>RESET</button></p>
           
           </div>
           </div>
 )
}
const PlayerList=(props)=>{
  return(<div>{
    props.players.map((data,index)=>{
      return(
        <div className="player">
          <div className="player-name">{data.name}</div>
          <div className="player-socore counter">
            <button className="counter-action decrement btn">-</button>
              <p className="counter-score">{data.score}</p>
              <button className="counter-action increment btn">+</button>
              </div>
              </div>
      
      )
    })} </div>)
}

let PlayerForm= React.createClass({
  render: function(){
    return(
      <div className="add-player-form">
        <form>
          <p><input type="text" placeholder="ENTER A NAME"></input></p>
          <p><input type="submit" value="Add Player"></input></p>
    </form>
    </div>
    )
  }
})


const Application = ({title, players}) => {
   return (
     <div className="scoreboard">
      <Header players={players}/>
      <PlayerList players={players}/>
      <PlayerForm />      
   </div>
   ) ;
}

ReactDOM.render(<Application title="Scoreboard" players = {Model}/>, document.getElementById('container'));