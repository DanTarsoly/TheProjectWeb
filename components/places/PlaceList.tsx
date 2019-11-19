import {Place} from '../../utils/models';
import PlaceListItem from './PlaceListItem';

type Props = {
  places: Place[]
}

const PlaceList: React.FC<Props> = ({places}) => {
  return (
    <ul className="place-list" style={placeListStyle}>
      {places.map((place: Place) => (
        <PlaceListItem key={place.id} place={place}/>
      ))}
    </ul>
  )
}

const placeListStyle = {
  padding: 20,
  margin: 20,
  border: '1px solid #DDD',
  borderRadius: 4
}

export default PlaceList;