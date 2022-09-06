import React from 'react'
import Seo from '../components/Seo'
import MyLessons from '../components/MyLessons/MyLessons'

const my_lessons = () => {
  return (
    <>
        <Seo title={"App Millers | My Lessons"} />
        <MyLessons />
    </>
  )
}

export default my_lessons