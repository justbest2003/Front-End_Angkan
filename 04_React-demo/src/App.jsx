import './App.css'
import Post from './components/Post'
import PostFunction from './components/PostFunction'
import Comment from './components/Comment'
import StateInClass from './components/StateInClass'
import StateInFunction from './components/StateInFunction'

function App() {

  return (
    <>
      {/*
      <Post userId="Angkan_SE" message="yaHoooooooo">
      <Comment userId="Angkan" message="อยากเรียนถึงหกโมงเย็นเลยครับ"/>
      <Comment userId="Thirayut" message="ง่วง"/>
      </Post>
      <PostFunction/>
  */}
      {/*<StateInClass name="Angkan" />*/}
      <StateInFunction name = "Angkan" />
    </>
  );
}

export default App
