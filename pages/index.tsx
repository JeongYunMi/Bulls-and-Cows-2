import type { NextPage } from 'next'
import MenuBar from '../src/components/MenuBar'
import Box from '../src/components/Box'
import StartButton from '../src/components/index/StartButton'

const Home: NextPage = () => {
  return (
    <>
      <MenuBar />
      <Box alignItems='center'>
        <StartButton/>
      </Box>
    </>
  )
}

export default Home
