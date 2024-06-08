import Card from "./card";

const cards = [
  ["Greek salad", "Card 1 Content", "./card1.png", "Card 1 Image","$12.99"],
  ["Bruchetta", "Card 2 Content", "./card2.png", "Card 2 Image","$5.99"],
  ["Lemon Dessert", "Card 3 Content", "./card3.png", "Card 3 Image","$5.00"],
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
          imagePath={card[2]} 
          imgalt={card[3]}
          price={card[4]}
        />
      ))}
        </div>
      </div>
    );
}
export default ThisWeek;
