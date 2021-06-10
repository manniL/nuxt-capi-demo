import { computed, ref } from '@nuxtjs/composition-api'

export const useJoke = () => {

  const jokes = ref([])
  const joke = computed(() => jokes.value[0] ?? 'Click the button to see an awesome joke!!!!!!!!!!1111^^w3q2')
  const oldJokes = computed(() => jokes.value.slice(1, 5))

  const getSuperDadJoke = async () => {
    const headers = {
      Accept: 'application/json'
    }
    const result = await fetch('https://icanhazdadjoke.com/', {
      headers
    }).then(r => r.json())

    if (result.joke) {
      jokes.value.unshift(result.joke)
    }
  }
  return {
    joke, oldJokes, getSuperDadJoke
  }
}
