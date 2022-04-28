import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployerList from '../employers-list/employers-list'
import EmployersAddForm from '../employers-add-form/employers-add-form';
import './app.css';

function App() {
    const data = [
        {name: 'Max.F', salary: 8000, increase: false, id: 1},
        {name: 'Alex.A', salary: 600, increase: true, id: 2},
        {name: 'John.S', salary: 400, increase: false, id: 3}
    ]
    return(
        <div className="app">
            <AppInfo/>
            <div className="search-panel">
                <SearchPanel/>
                <AppFilter/>
            </div>
            <EmployerList data={data}/>
            <EmployersAddForm/>
        </div>
    );
}

export default App;