// In jsx we need to make all the tags as closing tags so error ayegi to iss cheez ka dhyan rakhna.

import React from "react";
// prop ko directly destructure karlo with any name , yaha pe without destructure karke bhi kar skte the by writing as props then using it like {props.heading} or {props.paragraph } where required after all type of prop is object so dot operator se access ho jayegi values.

// Agar props ki value ayi nahi to we can use a default value as = " kuch bhi likh do" so here paragraph = " default value hai bhai " means ki agar parent se paragraph ki value nahi ayi to it will take default value as "default value hai bhai"
function Card({ heading, paragraph = "default value hai bhai " }) {
  return (
    <>
      <div class="max-w-sm rounded overflow-hidden shadow-lg">
        <img class="w-full" src="" alt="Sunset in the mountains" />
        <div class="px-6 py-4">
          <div class="font-bold text-xl mb-2">{heading}</div>
          <p class="text-gray-700 text-base">{paragraph}.</p>
        </div>
        <div class="px-6 pt-4 pb-2">
          <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            #photography
          </span>
          <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            #travel
          </span>
          <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            #winter
          </span>
        </div>
      </div>
      ;
    </>
  );
}

export default Card;
