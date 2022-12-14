import { useState, useEffect } from 'react';

import './App.css';
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';

const App =()=>{
/*
constructor(){
  super();
  this.state={monsters:[],
              searchValue:'',
  }
}
componentDidMount(){
  fetch('https://jsonplaceholder.typicode.com/users').then((response)=>response.json())
  .then((users)=>this.setState(()=>{
    return{monsters:users}},
  ()=>{console.log(this.state)}
  ));
}
onSearchChange= (event) =>{
  const searchValue= event.target.value.toLocaleLowerCase();
    this.setState(
      ()=>{
     return {searchValue}
    }
    );
  }
  
render(){
  
  const {monsters, searchValue}=this.state;
  const {onSearchChange}=this;
  
  const filteredMonsters = monsters.filter((monster)=>{
    return monster.name.toLocaleLowerCase().includes(searchValue);
  });
  */

  const [searchField,setSeachField]=useState('');
  console.log("SearchFIeld: ",searchField)


  const [monsters,setMonsters]=useState([]);
 
 

  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((response)=>response.json())
    .then((users)=>setMonsters(users));
  },[]);

  const filteredMonsters = monsters.filter((monster)=>{
    return monster.name.toLocaleLowerCase().includes(searchField);
  });

  const onSearchChange= (event) =>{
    const searchFieldString= event.target.value.toLocaleLowerCase();
    setSeachField(searchFieldString);
      
    }
 return(
  <div className='App'>
  <h1 className='app-title'>Monsters Rolodex</h1>
  <SearchBox onChangeHandler={onSearchChange} placeholder='Search monsters' className='monsters-search-box' />
  
 <CardList monsters={filteredMonsters}/>
  
  </div>
  );
    
}
//}
export default App;