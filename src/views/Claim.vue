<template>
  <h1>Claim your demon bounty!</h1>
  <h5>If you are a civil demon hunter and wish to recieve money for killing a demon, simply fill out the form below</h5>

  <form @submit.prevent="handleSubmit">
    <label>Full name</label>
    <input type="text" required v-model="name">

    <label>Demon killed</label>
    <input type="text" required v-model="demon">

    <label>Date of kill</label>
    <input type="date" required v-model="date">

    <label>Proof of kill</label>
    <input type="file">

    <label>Banking information</label>
    <input type="text" required v-model="banking">

    <div class="submit">
      <button>Submit Claim</button>
    </div>
  </form>

  <h1 v-if="isSubmitted">{{ submissionMessage }}</h1>
</template>

<script>
import { ref } from 'vue'

export default {
  name: 'Claim',
  setup() {
    const name = ref('')
    const demon = ref('')
    const date = ref(null)
    const banking = ref('')

    let isSubmitted = ref(false)

    const submissionMessage = ref('Your bounty claim has been submitted, onde it is accepted will recieve your reward!')
    
    let handleSubmit = () => {
      console.log(name.value)
      console.log(demon.value)
      console.log(date.value)
      console.log(banking.value)

      isSubmitted.value = !isSubmitted.value
    }

    return { handleSubmit, name, demon, date, banking, isSubmitted, submissionMessage }
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