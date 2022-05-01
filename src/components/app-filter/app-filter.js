import './app-filter.css'


const AppFilter = (props) => {
    const btnData = [
        {name: 'all', label: 'Все сотрудники'},
        {name: 'rise', label: 'На повышение'},
        {name: '1000', label: 'З/П 1000$'},
    ]

    const buttons = btnData.map(({name, label}) => {
        const active = props.filter === name;
        const clazz = active ? 'btn-primary' : 'btn-info'
        return(
            <button className={`btn ${clazz}`} type="button" key={name} onClick={() => props.onFilterSelect(name)}>{label}</button>
        )
    })
    return(
        <div className="btn-group">
            {buttons}
            {/* <button className="btn btn-primary" type="button">Все сотрудники</button>
            <button className="btn btn-info" type="button">На повышение</button>
            <button className="btn btn-info" type="button">З/П 1000$</button> */}
        </div>
    )
}

export default AppFilter;