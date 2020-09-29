import React from 'react';
import './About.css';
import '../Footer.css'
import {Link} from 'react-router-dom'
 export default function About (){
     return (
     <>
     <div class="bgimg-1">
  <div class="caption">
  <span class="border">Tripti Sharma</span>
  </div>
</div>

<div className="first">
  <h3 className="first-a">About Me</h3>
  <p>I’m Tripti Sharma,Who love to bulid web Application.
    <br/> Environment most importance part of life.This time our Environment suffering most of problems(Like population, climate change, water, many kind of pollution etc.)
      
    <br/>We are share the Information about Environment .I hope this information help you.GOOD LUCK</p>
</div>

<div class="bgimg-2">
  <div class="caption">
  <span class="border" className="second">Contact Me</span>
  </div>
</div>

<div className="third-five">
  <div className="third">
   <ol>
       
   </ol>
  </div>
</div>

<div class="bgimg-3">
  <div class="caption">
  <span class="border" className="four">Follow Me </span>
  </div>
</div>

<div className="third-five">
  <div className="five">
  <section>
            <div class='social-media-wrap'>
          <div class='social-icons'>
            <Link
              class='social-icon-link facebook'
              to='/'
              target='_blank'
              aria-label='Facebook'
            >
              <i class='fab fa-facebook-f' />
            </Link>
            <Link
              class='social-icon-link instagram'
              to='/'
              target='_blank'
              aria-label='Instagram'
            >
              <i class='fab fa-instagram' />
            </Link>
           
            <Link
              class='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='Twitter'
            >
              <i class='fab fa-twitter' />
            </Link>
            <Link
              class='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='LinkedIn'
            >
              <i class='fab fa-linkedin' />
            </Link>
          </div>
        </div>
            </section>
  </div>
</div>

<div class="bgimg-1">
  <div class="caption">
  <span class="border">Thank You</span>
  </div>
</div>

     </>
     )
 }