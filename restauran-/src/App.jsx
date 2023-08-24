import Header from "./components/Header";
import Product from "./components/Product";
import Footer from "./components/Footer";

function App() {
  const store = [
    {
      name: "Somali sweet",
      image: "https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=600",
      description: "Free Delivery",
      quantity: 15,
      price: 4.96,
    },
    {
      name: "Somali Food",
      image: "https://images.pexels.com/photos/421809/pexels-photo-421809.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
      description: "Paid Delivery",
      quantity: 17,
      price: 1.63,
    },
    {
      name: "Somali Fruit",
      image: "https://images.pexels.com/photos/1099680/pexels-photo-1099680.jpeg?auto=compress&cs=tinysrgb&w=600",
      quantity: 51,
      description: "Paid Delivery",
      price: 5.98,
    },
    {
      name: "Somali Cheep ",
      image: "https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?auto=compress&cs=tinysrgb&w=600",
      description: "Paid Delivery",
      quantity: 105,
      price: 4.98,
    },
   
  ];

  return (
    <main className=" h-screen w-screen">
      <Header />
      <section id="content" className="mt-10 mx-8   rounded-lg mb-5">
      
        <div
          id="products-list"
          className="grid sm:grid-cols-1 justify-items-center md:grid-cols-2 lg:grid-cols-2 2xl:grid-cols-2 gap-6"
        >
          {store.map((product) => {
            return (
              <Product
                title={product.name}
                description={product.description}
                price={product.price}
                img={product.image}
                quantity={product.quantity}
              />
            );
          })}
        </div>
      </section>
      <Footer/>
    </main>
  );
}

export default App;