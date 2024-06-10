<template>
    <div>
      <h1>Rick and Morty Characters</h1>
      <div>
        <input v-model="nameFilter" placeholder="Name" />
        <select v-model="statusFilter">
          <option value="">Any status</option>
          <option value="alive">Alive</option>
          <option value="dead">Dead</option>
          <option value="unknown">Unknown</option>
        </select>
        <button @click="applyFilters">Apply</button>
      </div>
      <div>
        <button @click="prevPage" :disabled="currentPage === 1">Previous</button>
        <button @click="nextPage" :disabled="!hasNextPage">Next</button>
      </div>
      <div class="characters-grid">
        <CharacterCard v-for="character in characters" :key="character.id" :character="character" />
      </div>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  import { ref, onMounted } from 'vue';
  import CharacterCard from '../components/CharacterCard.vue';
  
  export default {
    components: {
      CharacterCard
    },
    setup() {
      const characters = ref([]);
      const currentPage = ref(1);
      const hasNextPage = ref(false);
      const nameFilter = ref('');
      const statusFilter = ref('');
  
      const fetchCharacters = async () => {
        const url = 'https://rickandmortyapi.com/api/character';
        const params = {
          page: currentPage.value,
          name: nameFilter.value,
          status: statusFilter.value
        };
  
        console.log('Fetching characters from:', url);
        console.log('With params:', params);
  
        try {
          const response = await axios.get(url, { params });
          characters.value = response.data.results;
          hasNextPage.value = response.data.info.next !== null;
        } catch (error) {
          console.error('Error fetching characters:', error);
        }
      };
  
      const applyFilters = () => {
        currentPage.value = 1;
        fetchCharacters();
      };
  
      const prevPage = () => {
        if (currentPage.value > 1) {
          currentPage.value--;
          fetchCharacters();
        }
      };
  
      const nextPage = () => {
        if (hasNextPage.value) {
          currentPage.value++;
          fetchCharacters();
        }
      };
  
      onMounted(fetchCharacters);
  
      return {
        characters,
        currentPage,
        hasNextPage,
        nameFilter,
        statusFilter,
        applyFilters,
        prevPage,
        nextPage
      };
    }
  };
  </script>
  
  <style scoped>
  .characters-grid {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 10px; 
  }
  </style>
  
  