import defaultImage from '../../../assets/cover.jpg'

export default function CoverImage({src}) {
  return (
    <div>
        <img src={src || defaultImage} alt="cover"/>
    </div>
  )
}
