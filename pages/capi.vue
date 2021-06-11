<template>
  <div>
    <h1>Funny Dad Joke</h1>
    <p>Fetch: {{ fetchJoke }}</p>
    <p>Async: {{ asyncJoke }}</p>
  </div>
</template>

<script>
import { useJoke, } from '../composables/useJoke.js'
import { defineComponent, ref, useMeta } from '@nuxtjs/composition-api'

export default defineComponent({
  name: 'Index',
  head: {},
  setup (props, ctx) {
    const { fetchJoke, asyncJoke } = useJoke('someRandomKey')

    const message = ref('Computed Meta')

    useMeta(() => ({
      title: message.value
    }))

    return {
      fetchJoke,
      asyncJoke,
    }
  }
})
</script>
