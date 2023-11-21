import './SortControl.css';

export default function SortControl({defaultValue, onChange, options}) {
    
    return (
        <div className='sortControl-containter'>
            <div className='sortControl-descripion'>SORT BY</div>
            <select className='sortControl-options' value={defaultValue} name='sortControl' data-testid='sortControl-select'>
                {options.map((item, index)=> {
                    return <option key={item} className='sortControl-item' value={item} data-testid={'option_'+index}>{item}</option>
                })}
            </select>
        </div>
    )
};