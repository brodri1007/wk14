import React, { useState } from 'react';
import Stars from './Stars'


export default function Review() {


    return (
        <div ClassName="review">  
            <form>
                <h3 className="pt-5">Rate this movie</h3>
            <hr/>
                <div>
                    <Stars />
               </div>
               <hr/>
                <div className="mb-3">
                    <label for="email" class="form-label"> Email Address</label>
                    <input type="email" class="form-control" id="inputEmail" aria-describedby="emailHelp" />
                    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div class="mb-3">
                    <label for="comment" class="form-label"> Comment</label>
                    <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea"></textarea>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
                <div class="mb-3">
                    <hr/>
                    <div></div>
                </div>
            </form>
          
        </div>
    );

}