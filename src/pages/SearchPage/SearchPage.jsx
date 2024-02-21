import React, { useEffect } from 'react'
import Pictures from '../../components/Pictures/Pictures'
import useEditorialStore from '../../store/EditorialStore/EditorialStore'

const SearchPage = ({searchValue}) => {
  const {search, getPicturesSearch} = useEditorialStore()
  useEffect(()=> {
    getPicturesSearch(searchValue)
  },[])
  return (
    <div>
      <Pictures photos={search}/>
    </div>
  )
}

export default SearchPage
