import { Component } from 'react';
import './employers-add-form.css';

class EmployersAddForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            salary: '',
            txt: 'Добавить',
            background: 'blue'
        }
        
    }
    
    onChangeValue = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    
    onSubmit = (e) => {
        e.preventDefault();

        if (this.state.name.length < 3 || !this.state.salary) {
            this.setState({
                txt: 'Введите имя и зарплату'
            })
            return;
        }
        this.props.onAdd(this.state.name, this.state.salary);
        this.setState({
            name: '',
            salary: '',
            txt: 'Добавить'
        })
    }

    onColor = () => {
        this.setState({
            background: 'red'
        })
    }
    

   render() {
        
        const {name, salary, txt, background} = this.state
    return (
        <div className="app-add-form"
        onSubmit = {this.onSubmit}>
            <h3>Добавьте нового сотрудника</h3>
            <form
                className="add-form d-flex">
                <input type="text"
                    className="form-control new-post-label"
                    placeholder="Как его зовут?"
                    name='name'
                    value={name} 
                    onChange={this.onChangeValue}/>
                <input type="number"
                    className="form-control new-post-label"
                    placeholder="З/П в $?"
                    name='salary'
                    value={salary} 
                    onChange={this.onChangeValue}/>

                <button type="submit"
                        className="btn btn-outline-light" style={{background}} onClick={this.onColor}>{txt}</button>
            </form>
        </div>
    )
   }
}

export default EmployersAddForm;