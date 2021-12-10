<template>
  <h1>Submit Anonimous Tip</h1>
  <h4>Fill out the form below to let us know about any demon encounters</h4>
  <div class="body">  
    <form @submit.prevent="handleSubmit">
      <label>Date</label>
      <input type="date" required v-model="date">

      <label>Time (aproximately)</label>
      <input type="time" required v-model="time">

      <label>Location</label>
      <select required v-model="location">
        <option value="Shibuya">Shibuya</option>
        <option value="Myagi">Myagi</option>
        <option value="Koenji">Koenji</option>
        <option value="Akihabara">Akihabara</option>
        <option value="Roppongi">Roppongi</option>
        <option value="Asakusa">Asakusa</option>
      </select>

      <label>Demon</label>
      <input type="text" v-model="demon">

      <label>Incident Description</label>
      <input type="text" required v-model="description">

      <div class="submit">
        <button>Submit Tip</button>
      </div>
    </form>
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  name: 'Tips',
  setup() {
    const date = ref(null)
    const time = ref(null)
    const location = ref('')
    const demon = ref('')
    const description = ref('')
    
    let handleSubmit = () => {
      console.log(date.value)
      console.log(time.value)
      console.log(location.value)
      console.log(demon.value)
      console.log(description.value)
    }

    return { handleSubmit, date, time, location, demon, description }
  }
}
</script>

<style>
  form {
    max-width: 420px;
    margin: 30px auto;
    background: white;
    text-align: left;
    padding: 40px;
    border-radius: 10px;
  }
  label {
    color: #aaa;
    display: inline-block;
    margin: 25px 0 15px;
    font-size: 0.6em;
    text-transform: uppercase;
    letter-spacing: 1px;
    font-weight: bold;
  }
  input, select {
    display: block;
    padding: 10px 6px;
    width: 100%;
    box-sizing: border-box;
    border: none;
    border-bottom: 1px solid #ddd;
    color: #555;
  }
  select {
    cursor: pointer;
  }
  button {
    background: slategray;
    border: 0;
    padding: 10px 20px;
    margin-top: 20px;
    color: white;
    border-radius: 20px;
    cursor: pointer;
  } 
  .submit {
    text-align: center;
  }
</style>