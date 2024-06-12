import React, { useState } from 'react';
import Stars from './Stars'

export default function Review() {


    return (
        <div className="review">  
            <form>
                <h3 className="pt-5">Rate this movie</h3>
            <hr/>
                <div className="center">
                    <Stars />
               </div>
               <hr/>
                <div className="mb-3" id>
                    <label for="email" class="form-label"> Email Address</label>
                    <input type="email" class="form-control" id="inputEmail" aria-describedby="emailHelp" />
                    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label for="comment" className="form-label"> Comment</label>
                    <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea"></textarea>
                </div>
                <button type="submit" id="scmt" 
                
                className="btn btn-primary">Submit</button>
                <div className="mb-3">
                    <hr/>
                    <div id="reviewComments"></div>
                </div>
            </form>
          
        </div>
    );

}