import React, { useEffect } from 'react'
import Pictures from '../../components/Pictures/Pictures'
import useEditorialStore from '../../store/EditorialStore/EditorialStore'

const SearchPage = () => {
  const {search, getPicturesSearch} = useEditorialStore()
  useEffect(()=> {
    getPicturesSearch()
  },[])
  return (
    <div>
      <Pictures photos={search}/>
    </div>
  )
}

export default SearchPage
