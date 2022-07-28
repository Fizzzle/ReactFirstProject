import { Component } from 'react';

import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployersList from '../employers-list/employers-list';
import EmployersAddForm from '../employers-add-form/employers-add-form';


import './app.css';

class App extends Component {   
    constructor(props) {
        super(props);
        this.state = {
            data: [
                { name: 'root', salary: 20, increase: false, id: 1 },
                { name: 'Max Vakulenko', salary: 99, increase: true, id: 2 },
                { name: 'Max Grinch', salary: 39, increase: true, id: 3 },
                { name: 'LonRav', salary: 92, increase: false, id: 4 },
                {name: 'Elena' , salary: 69, increase: false, id: 5 },
            ]
        }
        this.maxId = 4;
    }

    // Удаление пользователей \ старый и новый метод
    deleteItem = (id) => {
        this.setState(({ data }) => {
            // const index = data.findIndex(elem => elem.id === id);

            // const before = data.slice(0, index);
            // const after = data.slice(index + 1);

            // const newArr = [...before, ...after];


            return {
                data: data.filter(item => item.id !== id)
            }
        })
    }

    // Добавление пользователей
    addItem = (name, salary) => {
        const newItem = {
            name,
            salary,
            increase: false,
            id: this.maxId++
        }
        this.setState(({ data }) => {
            const newArr = [...data, newItem];
            return {
                data: newArr
            }
        });
    }

    render() {
        return (
        <div className="app">
            <AppInfo />

            <div className="search-panel">
                <SearchPanel />
                <AppFilter />                
            </div>
            
            <EmployersList
                data={this.state.data}
                onDelete={this.deleteItem } />

                <EmployersAddForm onAdd={this.addItem} />
        </div>
    );
    }
}

export default App;