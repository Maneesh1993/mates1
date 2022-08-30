
import './App.css';
import { useState } from 'react';

function App() {
  // const name="maneesh";
  // const time = 20;

  return (
    <div className="App">
      {/* <h1>hello {name}🎉🎉🎉</h1> */}
      {/* <p>time is {time*20} mins</p> */}

      <Message name="maneesh " pic="https://scontent-maa2-2.xx.fbcdn.net/v/t31.18172-8/478308_482543288495074_2085104579_o.jpg?_nc_cat=111&ccb=1-7&_nc_sid=ba80b0&_nc_ohc=oo4BToCv2l8AX-byAmz&_nc_ht=scontent-maa2-2.xx&oh=00_AT86EVlUAfk6KkwF5E1De64s56iXUq-SKT-XWAkNfwppfg&oe=63310863" />
      <Counter/>

      <Message name="balaji" pic="https://scontent-maa2-1.xx.fbcdn.net/v/t1.6435-9/38614936_1331804120287547_5928396689277714432_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=xa4Gyy1cjGcAX9IBZja&_nc_ht=scontent-maa2-1.xx&oh=00_AT9oHyw3xtSSNYPyrsZRtw6E25duW-TZOTtl0stm9IBgbw&oe=63319513"/>
      <Counter/>

      <Message name="raghav" pic="https://scontent-maa2-1.xx.fbcdn.net/v/t1.18169-9/11406883_1656258234603176_4335581780239723111_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=174925&_nc_ohc=ROl13cY74psAX_8Z_8g&_nc_ht=scontent-maa2-1.xx&oh=00_AT_Jv1BmNdCOpKBr2Y66jRwOM98XrO6XOgnpozf6QNBfBA&oe=63321284"/>
      <Counter/>
      {/* <Message name="rajan" /> */}

      
      
    </div>
  );
}



function Message(props){
  const name=props.name;

  return (
    <>
  <img className="profile-pic" src={props.pic} alt="pic loading" />

  <h2 className='title'>Good morning {name}🎉🎉😆😆😍</h2>
  </>
  );
}

function Counter(){
  // const like=10;
  const [like,setLike]=useState(0);
  const [disLike,setDislike]=useState(0)

  return(
  <div >
    <button className='button' onClick={()=>{setLike(like+1)}}>Like {like}</button>
    <button className='button' onClick={()=>{setDislike(disLike+1)}}>dislike {disLike}</button>
    </div>
  );
}



export default App;

