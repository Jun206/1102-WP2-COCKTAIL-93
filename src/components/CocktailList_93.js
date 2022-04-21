import React from 'react'
import Cocktail_93 from './Cocktail_93'
import Loading_93 from './Loading_93'
import { useGlobalContext } from '../context'

const CocktailList_93 = () => {
  const { loading, cocktails } = useGlobalContext();
  if(loading){
    return <Loading_93 />
  }

  if (cocktails.length < 1){
    return (
      <h2 className='section-title'>
        no cocktails matched your search cirteria
      </h2>
    )
  }

  return (
    <section className='section'>
      <h2 className='section-title'>cocktail list component</h2>
      <div className='cocktails-center'>
        {
          cocktails.map( (item) => {
            return <Cocktail_93 key={item.id}{...item}/>
          })
        }
      </div>
    </section>
  )
}

export default CocktailList_93
