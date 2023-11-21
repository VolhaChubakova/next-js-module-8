import './searchForm.css';

export default function SearchForm() {
    return (
        <div className='SearchForm-findSection'>
            <div className='SearchForm-container'>
            <p className='SearchForm-title'>FIND YOUR MOVIE</p>

                <input 
                    className='SearchForm-input' 
                    placeholder="What do you want to watch"
                />
                <button 
                    className='SearchForm-button'
                >SEARCH
                </button>
            </div>
        </div>
    );
}