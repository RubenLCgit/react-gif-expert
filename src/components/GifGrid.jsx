import PropTypes from 'prop-types';
import { useFetchGifs } from '../hooks/useFetchGifs';
import { CardGrid } from './CardGrid';

export const GifGrid = ({ category }) => {

  const { images, isLoading } = useFetchGifs( category );
  
  return (
    <div>
      <h3> {category} </h3>
      {
        isLoading && ( <h2>Loading ...</h2> )
      }
      <div className='card-grid'>
        {images.map((image) => (
          <CardGrid key = {image.id} { ...image } />
        ))}
      </div>

    </div>
  )
}

GifGrid.propTypes = {
  category : PropTypes.string.isRequired
}