import { useState } from 'react'
import Card from './component/Card'
import headphone from './assets/headphone.jpg'
import keyboard from './assets/keyboard.jpg'
import laptop from './assets/laptop.jpg'
import mobile from './assets/mobile.jpg'
import monitor from './assets/monitor.jpg'
import mouse from './assets/mouse.jpg'
import powerBank from './assets/powerBank.jpg'
import smartWatch from './assets/smartWatch.jpg'
import speaker from './assets/speaker.jpg'
import tablet from './assets/tablet.jpg'

function App() {
  const products = [
    { id: 1, name: "Laptop", price: 55000, description: "High performance laptop", image:laptop },
    { id: 2, name: "Mobile", price: 25000, description: "Latest Android smartphone", image:keyboard },
    { id: 3, name: "Headphones", price: 3000, description: "Noise cancelling headphones", image:headphone },
    { id: 4, name: "Keyboard", price: 1500, description: "Mechanical keyboard", image:mobile },
    { id: 5, name: "Mouse", price: 800, description: "Wireless mouse", image:monitor },
    { id: 6, name: "Monitor", price: 12000, description: "24-inch Full HD monitor", image:mouse },
    { id: 7, name: "Tablet", price: 18000, description: "Portable tablet device", image:tablet },
    { id: 8, name: "Smart Watch", price: 4000, description: "Fitness tracking smartwatch", image:smartWatch },
    { id: 9, name: "Speaker", price: 2500, description: "Bluetooth speaker", image:speaker },
    { id: 10, name: "Power Bank", price: 1200, description: "10000mAh power bank", image:powerBank}
  ];

  return (
    <>
      <div className='max-w-7xl mx-auto px-6'>
        <div className="flex items-center">
          <p className="bg-red-700 h-8 w-5 m-6 rounded-md"></p>
          <h2 className="text-red-500 ">Our Products</h2>
        </div>

        <h1 className="text-3xl mx-6 mb-8">Explore Our Products</h1>

        <div className="grid grid-cols-4 w-full m-auto ">
          {products.map((item) => {
            return (
              <Card
                key={item.id}
                name={item.name}
                price={item.price}
                desc={item.description}
                image={item.image}
                
              />
            );
          })}
        </div>
      </div>
    </>
  );
}

export default App
