import React, { Component } from 'react'
import './App.css';
import ListItem  from './ListItem';
import {library} from '@fortawesome/fontawesome-svg-core'
import {faTrash} from '@fortawesome/free-solid-svg-icons'

library.add(faTrash);

 class App extends Component {
   constructor(props){
     super(props);
     this.state={
       items:[],
       currentItem:{
         text:"",
         key:" "
       }
       
     }
     // Here we are finding the three event which we created
     this.handleInput= this.handleInput.bind(this);
     this.addItem= this.addItem.bind(this);
     this.deleteItem= this.deleteItem.bind(this);
     this.setUpdate=this.setUpdate.bind(this);

   }
   // used for targeting the current value from the input
   handleInput(e){
     this.setState({
       currentItem:{
         text: e.target.value,
         key:Date.now()
       }
     })
   }
 //this event used for adding the items
   addItem(e){
     e.preventDefault();
     const newItem =this.state.currentItem ;
     console.log(newItem,"newwwwwwwww")

// here we checking the condition 
     if(newItem.text!==""){
       const newItems =[...this.state.items,newItem];
       this.setState({
         items:newItems,
         currentItem:{
           text:'',
           key:'',
         }
       })
     }
   }
// this event is for deleting the the items of comparing by the key
  deleteItem(key){
    const filteredItems = this.state.items.filter(item =>
      item.key!==key
    );
    this.setState({
      items:filteredItems
    })
  }

  setUpdate(text,key){
    const items = this.state.items;
    items.map(item =>{
      if(item.key===key){
        item.text=text;
      }
    })
    this.setState({
      items:items
    })
  }
  render() {
    return (
      <>
      <h2>𝑻̲̅𝒐̲̅𝑫̲̅𝒐̲̅ 𝑨̲̅𝒑̲̅𝒑̲̅ </h2>
      <div className="App">
        <header>
          <form id='to-do-form' onSubmit={this.addItem}>
            <input type='text' placeholder='✍️ Enter Text'
            value={this.state.currentItem.text}
            onChange={this.handleInput}

            />
            <button type='submit'>𝙰𝚍𝚍 </button>
          </form>
        </header>
        {/* Here we are pasing the props to the ListItem Component */}
        <ListItem items={this.state.items}
        deleteItem={this.deleteItem} 
        setUpdate={this.setUpdate}
        />
      </div>
      </>
    )
  }
  
}
export default App;

