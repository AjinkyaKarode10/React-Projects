import React , {useState,Component}  from 'react';

import './App.css';
import Layout from './components/Layout/Layout';


class App extends Component{
render(){

  return(
    <div>
      <Layout>
        <p>Test</p>
      </Layout>
    </div>
  );
  }
}
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