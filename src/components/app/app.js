import { Component } from 'react';

import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployerList from '../employers-list/employers-list'
import EmployersAddForm from '../employers-add-form/employers-add-form';
import './app.css';

class App extends Component {
    constructor(props){
        super(props)
        this.state = {
            data: [
                {name: 'Max.F', salary: 8000, increase: false, rise: false, id: 1},
                {name: 'Alex.A', salary: 600, increase: true, rise: true, id: 2},
                {name: 'John.S', salary: 400, increase: false, rise: false, id: 3}
            ]
        }
        this.maxId = 4;
    }

    deleteItem = (id) => {
        this.setState(({data}) => {
            return{
                data: data.filter(item =>  item.id !== id)
            }
        })
    }

    addItem = (name, salary) => {
        const newItem = {
            name, 
            salary,
            increase: false,
            rise: false,
            id: this.maxId++
        }
        this.setState(({data}) => {
            const newArr = [...data, newItem];
            return {
                data: newArr
            }
        });
    }

    onToogleIncrease = (id) => {
        this.setState(({data}) => ({
            data: data.map(item => {
                if(item.id === id) {
                    return {...item, increase: !item.increase }
                }
                return item
            })
        }))
    }

    onToogleRise = (id) => {
        this.setState(({data}) => ({
            data: data.map(item => {
                if(item.id === id) {
                    return {...item, rise: !item.rise }
                }
                return item
            })
        }))
    }
    
    render() {
        const employees = this.state.data.length;
        const increased = this.state.data.filter(item => item.increase).length;
        return(
            <div className="app">
                <AppInfo employees={employees} increased={increased}/>
                <div className="search-panel">
                    <SearchPanel/>
                    <AppFilter/>
                </div>
                <EmployerList data={this.state.data} onDelete={this.deleteItem} onToogleIncrease={this.onToogleIncrease} onToogleRise={this.onToogleRise}/>
                <EmployersAddForm onAdd={this.addItem}/>
            </div>
        );
    }
}

export default App;