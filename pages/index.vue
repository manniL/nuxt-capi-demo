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

const getSuperDadJoke = async () => {
  const headers = {
    Accept: 'application/json'
  }
  const result = await fetch('https://icanhazdadjoke.com/', {
    headers
  }).then(r => r.json())

  return result.joke ? result.joke : false
}

export default {
  name: 'Index',
  data () {
    return {
      jokes: []
    }
  },
  computed: {
    joke () {
      return this.jokes[0] ?? 'Click the button to see an awesome joke!!!!!!!!!!1111^^w3q2'
    },
    oldJokes () {
      return this.jokes.slice(1, 5)
    }
  },
  async fetch () {
    await this.getSuperDadJoke()
  },
  methods: {
    async getSuperDadJoke () {
      this.jokes.unshift(await getSuperDadJoke())
    }
  }
  /*async asyncData () {
    const jokes = [await getSuperDadJoke()]
    return {
      jokes
    }
  }*/
}
</script>
