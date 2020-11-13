import { PokedexInstance, handleError } from './utils'

export const getBerriesList = async () => {
  try {
    const response = await PokedexInstance.getBerriesList()
    if (response && response.results) {
      return { ...response, results: response.results, status: true, message: '' }
    }
    return { ...response, status: true, message: '' }
  } catch (error) {
    console.error('> Error api getBerriesList()', error)
    return handleError(error)
  }
}

export const getBerryByName = async (name = '') => {
  try {
    const response = await PokedexInstance.getBerryByName(name)
    return { response, status: true, message: '' }
  } catch (error) {
    console.error(`> Error api getBerryByName(${name})`, error)
    return handleError(error)
  }
}