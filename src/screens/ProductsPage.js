import React, { useState, useContext } from 'react';
import '../styles/ProductsPage.css';
import Header from '../components/Header';
import ProductModal from '../components/ProductModal';
import { CartContext } from '../context/CartContext';

const ProductsPage = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const { addToCart } = useContext(CartContext);

  const products = [
    {
      id: 1,
      name: 'Hanging Planter (Large)',
      image: 'https://tse3.mm.bing.net/th/id/OIP.PHLP1SQ6znlpi3fqjfglSgHaJ4?r=0&rs=1&pid=ImgDetMain&o=7&rm=3',
      description: 'A spacious hanging planter perfect for lush greenery and vertical garden vibes.',
      price: 35,
    },
    {
      id: 2,
      name: 'Hanging Planter (Small)',
      image: 'https://tse4.mm.bing.net/th/id/OIP.Q4u1NnP4_Ta7WHa6p_5tGQHaG-?r=0&rs=1&pid=ImgDetMain&o=7&rm=3',
      description: 'Compact and charming, ideal for succulents or small herbs.',
      price: 25,
    },
    {
      id: 3,
      name: 'Floor Chair',
      image: 'https://tse4.mm.bing.net/th/id/OIP.AVnQm37wQ4Au9h0Y3nuCPwHaHa?r=0&rs=1&pid=ImgDetMain&o=7&rm=3',
      description: 'Low-profile comfort with a modern twist—great for cozy corners or gaming setups.',
      price: 60,
    },
    {
      id: 4,
      name: 'Mirror & Table Set',
      image: 'https://th.bing.com/th/id/R.a3d6d07b3e03732723308009eff70df1?rik=XMfS7WFfIHtE1w&riu=http%3a%2f%2fcdn.notonthehighstreet.com%2ffs%2fde%2f41%2f3d22-762e-45f8-ac2f-1326e26c9404%2foriginal_modish-mirrored-dressing-table-set.jpg&ehk=i3M537prC8%2bzY22THu6%2bvQJspR8whKBNoPgkMKArl1A%3d&risl=&pid=ImgRaw&r=0',
      description: 'Elegant mirrored set that adds glamour and function to any bedroom or vanity space.',
      price: 120,
    },
    {
      id: 5,
      name: 'Wine Rack',
      image: 'https://beerandwine.guide/wp-content/uploads/2023/01/Mofish-Stackable-Modular-Bamboo-Wine-Rack.jpg',
      description: 'Elegant yet simple wine rack for your aesthetic needs.',
      price: 50,
      color: 'Gold',
    },
    {
      id: 6,
      name: 'Cat Clock',
      image: 'https://tse4.mm.bing.net/th/id/OIP.EPZapOv5vPlxw6rxLCCZWwHaJ-?r=0&rs=1&pid=ImgDetMain&o=7&rm=3',
      description: 'Whimsical feline-themed clock that adds personality to any wall.',
      price: 40,
    },
    {
      id: 7,
      name: 'Octagon Mirror',
      image: 'https://tse1.mm.bing.net/th/id/OIP.8YCaAc5fLVSmMoZk6IXkpgHaHa?r=0&rs=1&pid=ImgDetMain&o=7&rm=3',
      description: 'Geometric elegance meets minimalist design—perfect for hallways or bathrooms.',
      price: 55,
    },
  ];

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // ✅ Improved Add to Cart with alert
  const handleAddToCart = (product) => {
    addToCart(product);
    alert(`${product.name} has been added to your cart!`);
  };

  return (
    <div className="products-page">
      <Header />

      <div className="products-header">
        <h2 className="page-title">Our Products</h2>
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search for an item..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <span className="search-icon">🔍</span>
        </div>
      </div>

      <div className="product-grid">
        {filteredProducts.map((product) => (
          <div key={product.id} className="product-card">
            <div className="image-wrapper" onClick={() => setSelectedProduct(product)}>
              <img src={product.image} alt={product.name} />
            </div>
            <div className="product-info">
              <h3>{product.name}</h3>
              <p className="product-description">{product.description}</p>
              <div className="price-row">
                <span className="price">${product.price}</span>
                <button className="add-btn" onClick={() => handleAddToCart(product)}>
                  + Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredProducts.length === 0 && (
        <p className="no-results">No products found for “{searchTerm}”.</p>
      )}

      {selectedProduct && (
        <ProductModal
          isOpen={true}
          onClose={() => setSelectedProduct(null)}
          product={selectedProduct}
          onAddToCart={handleAddToCart}
        />
      )}
    </div>
  );
};

export default ProductsPage;
