import Head from 'next/head'
import styles from '../styles/Home.module.css'
import UI from './Ui'
import GoodReading from './goodReading'
import FreeTemplate from './Free-template-React.js'
import CoolHacking from './coolHacking'
import FreeBuildInComponent from './FreeBuildInComponent'
import Introduction from './introduction'
import addPost from './addPost.js'
export default function Home() {
  return (
    <div>
      <Introduction/>
      <addPost/>
      <h3>Posts:</h3>
      <div className="grid-cols-3 gap-4">
        <div className="container mx-auto">
          <UI/>
        </div>
        <div className="container mx-auto">
          <GoodReading/>
        </div>
        <div className="container mx-auto"><CoolHacking/></div>
        <div className="container mx-auto"><FreeBuildInComponent/></div>
        <div className="container mx-auto"><FreeTemplate/></div>

      </div>
    </div>


  )
}
