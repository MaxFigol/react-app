import './app-filter.css'


const AppFilter = () => {
    return(
        <div className="btn-group">
            <button className="btn btn-primary" type="button">Все сотрудники</button>
            <button className="btn btn-info" type="button">На повышение</button>
            <button className="btn btn-info" type="button">З/П 1000$</button>
        </div>
    )
}

export default AppFilter;