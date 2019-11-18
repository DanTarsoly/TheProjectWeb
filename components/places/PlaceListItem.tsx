import Link from 'next/link';
import {Place} from '../../utils/models';

type Props = {
  place: Place
}

const PlaceListItem: React.FC<Props> = ({place}) => {
  return (
    <li className="place-list-item">
      <Link href="/place/[id]" as={`/place/${place.id}`}>
        <a>{place.name}</a>
      </Link>
    </li>
  )
}

export default PlaceListItem;