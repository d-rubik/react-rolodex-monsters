
import './card-list.styles.css'
import Card from "./card/card.component";

const CardList =({monsters})=>(
    
        
         //   <div>Hello I'm the Card component</div>
         <div className="card-list">
         {monsters.map((monster)=>{ 
             return  <Card key={monster.id} monster={monster}/>
                 })}
                 </div>
    
    
);
export default CardList;