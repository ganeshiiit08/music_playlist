import styled from 'styled-components'

export const AppContainer = styled.div`
  background-color: #152850;
  min-height: 100vh;
`

export const SingerBgContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding-left: 100px;
  background-image: url('https://assets.ccbp.in/frontend/react-js/music-playlist/music-playlist-Edsheeran-bg.png');
  height: 450px;
  background-size: cover;
`

export const SingerNameText = styled.h1`
  font-family: 'Roboto';
  color: #ffffff;
  font-size: 42px;
  font-weight: bold;
`

export const SingerInfoText = styled.p`
  font-family: 'Roboto';
  color: #ffffff;
  font-size: 32px;
  font-weight: 400;
`

export const SongsPlayListDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-left: 50px;
  margin-right: 50px;
`

export const PlayListHeader = styled.h1`
  font-family: 'Roboto';
  color: #ffffff;
  font-size: 32px;
  font-weight: bold;
`

export const SearchInput = styled.input`
  height: 30px;
  width: 18%;
  padding-left: 15px;
  color: #cbd5e1;
  border: 1px solid #ffffff;
  border-radius: 4px;
  background-color: transparent;
  outline: none;
  cursor: pointer;
`

export const SearchList = styled.ul`
  padding: 0;
  margin-left: 50px;
  margin-right: 50px;
`

export const NoSongsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const NoSongsHeader = styled.p`
  font-family: 'Roboto';
  color: #ffffff;
  font-size: 32px;
  font-weight: bold;
`
