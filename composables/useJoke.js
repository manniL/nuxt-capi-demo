import { computed, ref, useAsync, useContext, useFetch, wrapProperty } from '@nuxtjs/composition-api'


export const useJoke = (asyncKey) => {
  const useHttp = wrapProperty('$http', false)
  const jokes = ref([])
  const fetchJoke = ref('No fetch joke here')


  const getSuperDadJoke = async () => {
    const headers = {
      Accept: 'application/json'
    }
    const result = await useHttp().$get('https://icanhazdadjoke.com/', {
      headers
    })
    return result.joke
  }

  useFetch(async () => {
    fetchJoke.value = await getSuperDadJoke()
  })

  // ref(null)
  // When call succeeded ref('Some funny joke')
  const asyncJoke = useAsync(() => getSuperDadJoke(), asyncKey)

  return {
    fetchJoke, asyncJoke
  }
}
