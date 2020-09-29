import React from 'react';
import Carditems from './Carditems';
import './Cards.css';
function Cards() {
    return (
        <div className="cards">
            <h1>Check out these EPIC Destinations!</h1>
                <div className="cards__container">
                     <div className="cards__wrapper">
                          <ul className="cards__items">
                             <Carditems
                              src='images/1.jpg'
                              text='Top 10 Environmental Issues Facing Our Planet'
                              label='New'
                              path='post1'
                            />
                            <Carditems
                              src='images/2.jpg'
                              text='Things to Do to Protect the our Environment (Part1)'
                              label='New'
                              path='/post2'
                            />
                             <Carditems
                              src='images/3.jpg'
                              text='Things to Do to Protect the our Environment (Part2)'
                              label='New'
                              path='/post3'
                            />

                            
                          </ul>
                          <ul className="cards__items">
                             <Carditems
                              src='images/1.jpg'
                              text='Explore the hidden waterfall deep inside the Amazon jungle'
                              label='New'
                              path='/blog'
                            />
                            <Carditems
                              src='images/2.jpg'
                              text='Explore the hidden waterfall deep inside the Amazon jungle'
                              label='New'
                              path='/blog'
                            />
                             <Carditems
                              src='images/3.jpg'
                              text='Explore the hidden waterfall deep inside the Amazon jungle'
                              label='New'
                              path='/blog'
                            />
                            <Carditems
                              src='images/4.jpg'
                              text='Explore the hidden waterfall deep inside the Amazon jungle'
                              label='New'
                              path='/blog'
                            />

                            
                          </ul>
                     </div>
                </div>
        </div>
    )
}

export default Cards
