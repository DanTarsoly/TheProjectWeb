import {Place} from '../utils/models';
import PlaceListItem from './PlaceListItem';

const PlaceList = (props: PropTypes) => {
  return (
    <ul className="place-list">
      {props.places.map((place: Place) => (
        <PlaceListItem key={place.id} place={place}/>
      ))}
    </ul>
  )
}

type PropTypes = {
  places: Place[]
}

export default PlaceList;