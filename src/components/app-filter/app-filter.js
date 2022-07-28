import './app-filter.css';

const AppFilter = () => {
    return (
        <div className="btn-group">
            <button
                className="btn btn-light"
                type="button">
                 Все шутники
            </button>
             <button
                className="btn btn-outline-light"
                type="button">
                 На повышение(в бан)
            </button>
             <button
                className="btn btn-outline-light"
                type="button">
                З\П больше просто еды
            </button>
        </div>
    )
} 

export default AppFilter;