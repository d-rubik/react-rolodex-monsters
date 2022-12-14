
import './search-box.styles.css';

const SearchBox =({className,placeholder,onChangeHandler})=>(
   
       // const {searchValue}=this.props;
        
            <input
        className={`search-box ${className}`}
        type='search'
        placeholder={placeholder}
        onChange={onChangeHandler}
  />
        );
    
        

export default SearchBox;