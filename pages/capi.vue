<template>
  <div>
    <h1>Funny Dad Joke</h1>
    <p>
      {{ joke }}
    </p>

    <h2>Old jokes</h2>
    <ul>
      <li v-for="oldJoke in oldJokes">
        {{ oldJoke }}
      </li>
    </ul>
    <button @click="getSuperDadJoke">
      Click here to get a new joke
    </button>
  </div>
</template>

<script>
import { watchEffect } from '@nuxtjs/composition-api'
import { useJoke } from '../composables/useJoke.js'

export default {
  name: 'Index',
  setup () {

    const { joke, oldJokes, getSuperDadJoke } = useJoke()

    watchEffect(() => {
      console.log(joke.value)
    })

    return {
      joke,
      oldJokes,
      getSuperDadJoke
    }
  }
}
</script>
