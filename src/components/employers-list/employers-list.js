import EmployersListItem from '../employers-list-item/employers-list-item';
import './employers-list.css'

const EmployerList = ({data, onDelete, onToogleIncrease, onToogleRise}) =>{
    const elements = data.map(item => {
        const {id, ...itemProps} = item;
        return(
            <EmployersListItem key={id}{...itemProps} onDelete={() => onDelete(id)} onToogleIncrease={() => onToogleIncrease(id)} onToogleRise={() => onToogleRise(id)}/>
        )
    })

    return(
        <ul className="app-list list-group">
            {elements}
        </ul>
    );
}

export default EmployerList;