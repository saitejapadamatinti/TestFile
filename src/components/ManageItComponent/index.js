import {BackgrounImg} from './styledComponents'
import './index.css'

const managerItArray = [
  {
    id: 1,
    imgUrl:
      'https://res.cloudinary.com/dj2ghn49v/image/upload/v1668843010/cld-sample.jpg',
    content: 'Manage IT services',
  },
  {
    id: 1,
    imgUrl:
      'https://res.cloudinary.com/dj2ghn49v/image/upload/v1668843010/cld-sample.jpg',
    content: 'Manage IT services',
  },
  {
    id: 1,
    imgUrl:
      'https://res.cloudinary.com/dj2ghn49v/image/upload/v1668843010/cld-sample.jpg',
    content: 'Manage IT services',
  },
]

const ManageIt = () => (
  <>
    <ul className="manage-it-ul">
      {managerItArray.map(each => (
        <>
          <li className="manage-li-div">
            <BackgrounImg banner={each.imgUrl}>
              <h3 className="manage-it-head">{each.content}</h3>
            </BackgrounImg>
          </li>
        </>
      ))}
    </ul>
  </>
)

export default ManageIt
