import { Component } from 'react';
import check from './check.png';
export class Planner extends Component {
    state = {
        userInput: '',
        planner: []
    }

    onChangeEvent(e){
        this.setState({ userInput: e});
    }

    addItem(input) {
        if (input === ''){
            alert('Please write something')
        } else {
            let plannerArray = this.state.planner;
            plannerArray.push (input);
            this.setState({
                planner: plannerArray,
                userInput: ''
            })
        }
    }

    deleteItem(){
        let plannerArray = this.state.planner;
        plannerArray= [];
        this.setState ({ planner: plannerArray})
    }

    crossedWord(event){
        const li = event.target;
        li.classList.toggle('crossed')
    }

    onFormSubmit(e){
        e.preventDefault();
    }


    render(){
        return(
            <div>
                <form onSubmit = {this.onFormSubmit}>
                    <div className= "container">
                        <input type ="text" placeholder = "What is your plans for today?" onChange ={(e) => {this.onChangeEvent(e.target.value)}} value = {this.state.userInput}/>
                    </div>
                    <div>
                        <button onClick= {() => this.addItem(this.state.userInput)} className = "add">ADD</button>
                    </div>
                    <ul>
                        {this.state.planner.map((item, index) =>(<li onClick = {this.crossedWord} key ={index}><img src ={check} className="check" alt = "check-box"/>{ item }</li>))}
                    </ul>
                    <div className =" container ">
                        <button onClick = {() => this.deleteItem()} className = "delete">DELETE</button>
                    </div>
                </form>
            </div>
        )}
    }
