import PropTypes from 'prop-types'

export const CardGrid = ({ title, url}) => {
  return (

    <div className='card'>
      <img src={url} alt={title} />
      <p>{ title }</p>
    </div>

  )
}

CardGrid.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
}