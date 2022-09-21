import React from 'react';

const Order = () => {
  return (
    <section className='section'>
      <div className="order custom-grid">
        <h2>Order Section</h2>

        <div className="order-container">
          <ul className="order__list">
            <li className="order__item">Hp Monitor</li>
            <li className="order__item">Intel Core i5 6485</li>
            <li className="order__item">MicroMax Sound System</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Order;