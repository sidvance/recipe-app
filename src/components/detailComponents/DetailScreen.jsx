import React from 'react'
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

const DetailScreen = () => {  

const {id} = useParams();

const [getRecipe, setGetRecipe] = useState()

useEffect(() => {
axios.get(`https://recipes.devmountain.com/recipes/${id}`)
  .then(res => {
    setGetRecipe(res.data)
  }) .catch(theseHands => {
    console.log(theseHands)
  })
}, [])



  return (
    <section>
      {/* Welcome to the details page! This page will be reusable. Follow instructions to know what to do here. */}
    </section>
  );
};

export default DetailScreen;
