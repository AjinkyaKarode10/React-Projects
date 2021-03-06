import React , {useState,Component}  from 'react';
import logo from './logo.svg';
import Person from './components/Person'
import './App.css';

class App extends Component
{
// const App = props => {
// const [personsState , updatePersonsState] = useState({

//   persons : [
//     {
//       name : 'Ajinkya',
//       age : 25
//     },
//     {
//       name : 'Unknown',
//       age : '244'
//     }
//   ],
//   otherState : 'other state Value'
// });
// const switchNamehandler = () =>
// {
//   updatePersonsState({
//     persons : [
//       {
//         name : 'AK',
//         age : 25
//       },
//       {
//         name : 'Unknown',
//         age : '344'
//       }
//     ],
//     otherState : 'other state Value'
//   })
// }
 state = {
  persons : [
    {
      name : 'Ajinkya',
      age : 25
    },
    {
      name : 'Unknown',
      age : '244'
    }
  ],
  otherState : 'other state Value'
}

switchNamehandler = () =>
{

  console.log('Was clicked ');
  this.setState(
    {
      persons: [
        {
          name : 'AK',
          age : 25
        },
        {
          name : 'Unknown',
          age : '344'
        }
      ]
    }
    
  )
}

switchAgeHandler = (param) =>
{
  console.log('Age Handler');
  this.setState(
    {
      persons: [
        {
          name : 'AK',
          age : param
        },
        {
          name : 'Unknown',
          age : '34456'
        }
      ]
    }
    
  )

}
  render (){

    return(

      <div className="App">
        <h1>Hello React Js</h1>
        {/* <Person work = "Engineer"/>
        <Person work = "Unknown">MyHobbies</Person>
        <Person work = "Business"/> */}

        <Person name = {this.state.persons[0].name} age = {this.state.persons[0].age}/>
        <Person name = {this.state.persons[1].name} 
                age = {this.state.persons[1].age}
                //click={this.switchAgeHandler}/> 
                click={() => this.switchAgeHandler('Neebal')}/> 
        <button onClick={this.switchNamehandler}>Click</button>

        {/*  !st we made a function call ref not an actual func call , in 2nd we made use of arrow func to make a func call with parametrs     */}
        {/* <Person name = {personsState.persons[0].name} age = {personsState.persons[0].age}/>
        <Person name = {personsState.persons[1].name} age = {personsState.persons[1].age}/>
        <button onClick={switchNamehandler}>Click</button> */}

        
      </div>
    )
  }

};

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo"  ="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;


// state = {
//   persons : [
//     {
//       name : 'Ajinkya',
//       age : 25
//     },
//     {
//       name : 'Unknown',
//       age : '244'
//     }
//   ],
//   otherState : 'other state Value'
// }




// useState HOOKS 

// Code:-
// const App = props => {
//   const [personsState , updatePersonsState] = useState({
  
//     persons : [
//       {
//         name : 'Ajinkya',
//         age : 25
//       },
//       {
//         name : 'Unknown',
//         age : '244'
//       }
//     ],
//     otherState : 'other state Value'
//   });
//   const switchNamehandler = () =>
//   {
//     updatePersonsState({
//       persons : [
//         {
//           name : 'AK',
//           age : 25
//         },
//         {
//           name : 'Unknown',
//           age : '344'
//         }
//       ],
//       otherState : 'other state Value'
//     })
//   }
//  