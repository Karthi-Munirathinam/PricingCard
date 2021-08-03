import PriceCard from './priceCard';
import './App.css';

function App() {
  const pricingData = [
    {
      packageName: "FREE",
      price: "$0",
      available: ["Single User", "5GB Storage", "Unlimited Public Projects", "Community Access"],
      unavailable: ["Unlimited Private Projects", "Dedicated Phone Support", "Free Subdomain", "Monthly Status Reports"]
    },
    {
      packageName: "PLUS",
      price: "$9",
      available: ["5 Users", "50GB Storage", "Unlimited Public Projects", "Community Access", "Unlimited Private Projects", "Dedicated Phone Support", "Free Subdomain"],
      unavailable: ["Monthly Status Reports"]
    },
    {
      packageName: "PRO",
      price: "$49",
      available: ["Unlimited Users", "150GB Storage", "Unlimited Public Projects", "Community Access", "Unlimited Private Projects", "Dedicated Phone Support", "Free Subdomain", "Monthly Status Reports"]
    }
  ];
  return (
    <section className="pricing py-5">
      <div className="container">
        <div className="row">

          {pricingData.map((obj, index) => {
            return <PriceCard key={`C${index}`} Data={obj} />
          })}

        </div>
      </div>
    </section>
  );
}

export default App;
