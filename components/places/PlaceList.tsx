import {Place} from '../../utils/models';
import PlaceListItem from './PlaceListItem';

type Props = {
  places: Place[]
}

const PlaceList: React.FC<Props> = ({places}) => {
  return (
    <ul className="place-list">
      {places.map((place: Place) => (
        <PlaceListItem key={place.id} place={place}/>
      ))}
    </ul>
  )
}

export default PlaceList;