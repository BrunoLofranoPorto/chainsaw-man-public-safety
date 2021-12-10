<template>
   <div class="body"> 
        <div class="contacts" v-for="contact in contacts" :key="contact">{{ contact }}  |  </div>
        <br>
        <div class="partnerships" v-for="partnership in partnerships" :key="partnership">{{ partnership }}|</div>
        <br>
        <p>2021 Japan Public Security Office (fanmade)</p>
    </div>
</template>

<script>
import { ref } from 'vue'

export default {
    name: 'Footer',
    setup() {
        const contacts = ref(['4002 8922', 'contact.publicsecurity@jmail.com.jp'])
        const partnerships = ref(['Tokyo Tailorship', "Angel Demon's Blacksmith", 'Hayakawa Inc. Demonsitting'])

        return { contacts, partnerships }
    }
}
</script>

<style scoped>
    .contacts {
        display: inline-block;
        margin: 8px auto;
        letter-spacing: 1px;
    }
    p {
        display: inline-block;
    }
    .partnerships {
        display: inline-block;
        margin: 8px auto;
        letter-spacing: 1px;
    }
    .body {
        background-color: slategray;
        color: white;
    }
</style>