import Card from "./card";

const cards = [
  ["Greek salad", "The famous greek salad of crispy lettuce, peppers, olivres and our Chicago style feta cheese. garnished with crunchy garlic and rosemary croutons", "./greeksalad.jpg", "Card 1 Image","$12.99"],
  ["Bruchetta", "The famous greek salad of crispy lettuce, peppers, olivres and our Chicago style feta cheese. garnished with crunchy garlic and rosemary croutons", "./bruchetta.svg", "Card 2 Image","$5.99"],
  ["Lemon Dessert", "The famous greek salad of crispy lettuce, peppers, olivres and our Chicago style feta cheese. garnished with crunchy garlic and rosemary croutons", "./lemondessert.jpg", "wtf?","$5.00"],
];
function ThisWeek() {
    return (
      <div className="thisweek">
        <div className="thisweek-header">
        <h2>This Week specials！</h2>
        <button>Online Menu</button>
        </div>
        <div className="card-container">
        {cards.map((card, index) => (
        <Card 
          key={index} // 使用索引作为 key，确保组件的唯一性
          title={card[0]} 
          content={card[1]} 
          imgepath={card[2]} 
          imgalt={card[3]}
          price={card[4]}
        />
      ))}
        </div>
      </div>
    );
}
export default ThisWeek;
