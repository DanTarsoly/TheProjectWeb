import Link from 'next/link';
import {Place} from '../utils/models';

const PlaceListItem = (props: PropTypes) => {
  return (
    <li className="place-list-item">
      <Link href="/place/[id]" as={`/place/${props.place.id}`}>
        <a>{props.place.name}</a>
      </Link>
    </li>
  )
}

type PropTypes = {
  place: Place
}

export default PlaceListItem;