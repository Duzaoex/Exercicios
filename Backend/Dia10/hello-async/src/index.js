const fetch = require('node-fetch')
const axios = require('axios').default

const endpoint = 'https://raadfsdfghsdfghdsfgsdf';

const fetchBank = async () => {
  try {
    const response = await fetch(endpoint);
    const data = await response.json();
    return data;
  } catch (err) {
    console.log(err.message)
    return null
  }
}

const fetchBankAxios = async () => {
  try {
    const response = await axios.get(endpoint)
    return response.data;
  } catch (err) {
    console.log(err.message)
    return null
  }
}

const fetchTenBanks = async () => {
  const banks = []
  for(let index = 0; index < 10; index += 1) {
    const bank = await fetchBank();
    banks.push(bank)
  }
  return banks;
}

const fetchTenBanksParallel = () => {
  const input = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
  // Array.from
  const promises = input.map(() => fetchBankAxios())
  return Promise.all(promises)
}

const main = async () => {
  console.time()
  const banks = await fetchTenBanksParallel()
  console.log(banks)
  console.timeEnd()
}

main()