import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state ={
    person: [
        {name: "Max", age: 24},
        {name: "Indra", age: 25},
        {name: "Wow", age: 29}

    ],
    showPerson: false,
  };

  deletePersonHandler = (personIndex)=>{
      const persons = this.state.person;
      persons.splice(persons, 1);
      this.setState({person:persons});
  };

  changeNameHandler = (event)=>{
      this.setState({
          person: [
              {name: 'Max', age: 24},
              {name: event.target.value, age: 25},
              {name: "Wow", age: 29}

          ]
      })
  };
  toogleHandler = ()=>{

        const doesShow  = this.state.showPerson;
        this.setState({showPerson:!doesShow});

  };

  render() {
    const style = {
        backgroundColor: 'white',
        font: 'inherit',
        border: '1px solid blue',
        padding: '8px',
        cursor: 'pointer'
    };

    let persons = null;
    if(this.state.showPerson){
        persons=(
            <div>
                {this.state.person.map((person, index)  =>{
                        return <Person
                            click = {()=>this.deletePersonHandler(index)}
                            name={person.name}
                            age={person.age} />
                    })
                }

            </div>

        );
    }
    return (
      <div className="App">
        <h1> Hi Im React</h1>
        <button style={style} onClick={this.toogleHandler}>Switch</button>
        {persons}

      </div>
    );
  }
}

export default App;
