<template>
    <div class="character-card">
      <img :src="character.image" :alt="character.name" />
      <h2>{{ character.name }}</h2>
      <p>{{ character.status }}</p>
      <p>{{ character.species }}</p>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      character: {
        type: Object,
        required: true
      }
    }
  };
  </script>
  
  <style scoped>
  .character-card {
    border: 1px solid #ddd;
    padding: 10px;
    margin: 10px;
    width: 200px;
    box-sizing: border-box; 
  }
  
  .character-card img {
    width: 100%; 
    height: auto; 
  }
  
  .character-card h2 {
    font-size: 1.2em;
    margin: 10px 0;
  }
  
  .character-card p {
    margin: 5px 0;
  }
  </style>
  