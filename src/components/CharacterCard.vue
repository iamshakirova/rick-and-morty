<template>
    <div class="character-card">
      <img :src="character.image" :alt="character.name" />
      <div class="character-info">
        <h2>{{ character.name }}</h2>
        <p><strong>Status:</strong> {{ character.status }}</p>
        <p><strong>Species:</strong> {{ character.species }}</p>
        <p><strong>Gender:</strong> {{ character.gender }}</p>
        <p><strong>Origin:</strong> {{ character.origin.name }}</p>
        <p><strong>Location:</strong> {{ character.location.name }}</p>
        <p><strong>Episodes:</strong> {{ character.episode.length }}</p>
        <p><strong>Created:</strong> {{ new Date(character.created).toLocaleDateString() }}</p>
      </div>
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
    padding: 15px;
    margin: 10px;
    width: 250px;
    box-sizing: border-box;
    border-radius: 8px;
    background-color: #f9f9f9;
    display: flex;
    flex-direction: column;
    align-items: center;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  }
  
  .character-card img {
    width: 100%;
    height: auto;
    border-radius: 8px;
  }
  
  .character-info {
    text-align: left;
    width: 100%;
    margin-top: 10px;
  }
  
  .character-info h2 {
    font-size: 1.5em;
    margin: 10px 0;
  }
  
  .character-info p {
    margin: 5px 0;
  }
  </style>
  
  