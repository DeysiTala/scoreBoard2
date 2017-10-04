let PLAYERS = [
  {
    name: "Jim Hoskins",
    score: 31,
    id: 1,
  },
   {
    name: "Andree Hoskins",
    score: 35,
    id: 2,
  },
   {
    name: "Alena Hoskins",
    score: 42,
    id: 3,
  },
  {
    name: "Alena Hoskins",
    score: 42,
    id: 4,
  },
];
class Modal{
  constructor () {
    
      this.inputValue = null;
      this.render = undefined;
      this.player = PLAYERS;
      this.callback = null;
   }
  

  subscribe(render) {
     this.callback = render;
  }

  notify() {
     this.callback();
  }
  inform() {
    console.log(this.other.map(e => e.text));
    this.render();
 }
 addPlayer(text) {
    this.player.push({
       id: Utils.uuid(),
       name: text,
       score: 0,
       completed: false
    });
    this.notify();
 }
 updatePlayer(index) {
    if(this.player[index].score>= 0){

      this.player[index].score ++ ;
    }
    this.notify();
 }
downloadPlayer(index){
 if(this.player[index].score >=0){

  this.player[index].socre --;
 }
 this.notify();
}

}
   
 const Header = ({model})=>{
 let points =model.player.map((e) => e.score).reduce((a,b) =>{return a+ b});
 return(
   <div className="header">
     <div className= "count">
       <table>
         <tr><td>PLAYERS:</td>{model.player.length}</tr>
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
const PlayerList=({model})=>{
  return(<div>{
    model.players.map((value,index)=>{
      return(
        <div className="player" key={Utils.uuid()}>
          <div className="player-name">{value.name}</div>
          <div className="player-score counter">
            <button className="counter-action decrement btn" onClick={()=> model.downloadPlayer(index)}>-</button>
              <p className="counter-score">{data.score}</p>
              <button className="counter-action increment btn" onClick={()=> model.updatePlayer(index)}>+</button>
              </div>
              </div>
      
      )
    })} </div>)
}

let PlayerForm= React.createClass({
  render: function(){
    return(
      <div className="add-player-form">
        <form  onSubmit={e => {
               e.preventDefault();
               model.add(model.text)}}>
          <p><input type="text" placeholder="ENTER A NAME" onChange={e => (model.text = e.target.value)}></input></p>
          <p><input type="submit" value="Add Player"></input></p>
    </form>
    </div>
    )
  }
})


const Application = ({title, model}) => {
   return (
     <div className="scoreboard">
      <Header model={model}/>
      <PlayerList model={model}/>
      <PlayerForm model={model} />      
   </div>
   ) ;
}
let model = new Model();

let counter = 1;
let render =()=>{
  ReactDOM.render(<Application title="Scoreboard" model = {model}/>, document.getElementById('container'));
};

model.subscribe(render);

render()

/*let model = new Model();

let counter = 1;

let render = () => {
  console.log('render times: ', counter++);
  ReactDOM.render(
    <Application title="TodoApp" model={model} />,
    document.getElementById('container')
  );
};

model.subscribe(render);

render();*/
