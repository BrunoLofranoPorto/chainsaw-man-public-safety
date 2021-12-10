<template>
  <h1>This is the team view</h1>
  <div v-for="member in team" :key="member.id">
    <h2>Name: {{ member.name }}</h2>
    <h4>Rank: {{ member.rank }}</h4>
    <h4>Age: {{ member.age }}</h4>
    <h4>Demon Pacts: {{ member.pacts }}</h4>
    <img :src="'./src/assets/' + member.imageRoute + '.jpg'">
  </div>

</template>

<script>
import { ref } from 'vue'

export default {
    name: 'Team',
    setup() {
      const team = ref([])
      const error = ref(null)

      const load = async () => {
        try {
          let data = await fetch('http://localhost:3000/team')
          if (!data.ok) {
            throw Error('no data availible')
          }
          team.value = await data.json()
        }
        catch (err) {
          error.value = err.message
        }
      }


      load()

      return { team, error, load }
    }
}
</script>

<style scoped>
  
</style>