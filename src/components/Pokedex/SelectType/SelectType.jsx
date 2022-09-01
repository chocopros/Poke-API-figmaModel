import axios from 'axios'
import React, {useState, useEffect} from 'react'


const SelectType = ({setTypePokemons}) => {

    const [listTypes, setListTypes] = useState()

   useEffect(()=>{

    const url = "https://pokeapi.co/api/v2/type/"
    axios.get(url)
        .then(res => setListTypes(res.data.results))
        .catch(err => console.log(err))
    },[])

    const handleChange = e => {
        setTypePokemons(e.target.value)
    }

  return (
    <form>
        <select onChange={handleChange}>
            <option value="All">All Pokemons</option>
            {
                listTypes?.map(type => (
                    <option key={type.name} value={type.name}>{type.name}</option>
                ))
            }
        </select>
    </form>
  )
}

export default SelectType