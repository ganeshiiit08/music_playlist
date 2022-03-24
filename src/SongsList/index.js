import {AiOutlineDelete} from 'react-icons/ai'

import {
  SongItemList,
  SongInfoContainer,
  SongImage,
  DivContainer1,
  NameText,
  GenreText,
  DivContainer2,
  Duration,
  DeleteIcon,
} from './styledComponents'

const SongsList = props => {
  const {MusicItemDetails, onClickDeleteSong} = props
  const {id, imageUrl, name, genre, duration} = MusicItemDetails

  const onDeleteTrack = () => {
    onClickDeleteSong(id)
  }

  return (
    <SongItemList>
      <SongInfoContainer>
        <SongImage src={imageUrl} alt="track" />
        <DivContainer1>
          <NameText>{name}</NameText>
          <GenreText>{genre}</GenreText>
        </DivContainer1>
      </SongInfoContainer>
      <DivContainer2>
        <Duration>{duration}</Duration>
        <DeleteIcon type="button" data-testid="delete" onClick={onDeleteTrack}>
          <AiOutlineDelete size={25} />
        </DeleteIcon>
      </DivContainer2>
    </SongItemList>
  )
}

export default SongsList
