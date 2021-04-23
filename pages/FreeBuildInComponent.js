import React, {useState} from 'react'

export default function FreeBuildInComponent() {

      // const {content,setContent} = useState([])

      const content = [{
            title:"Clean && Nice tailwind library",
            info:"This is very nice content",
            image:"https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=320&q=80",
            url:"https://merakiui.com/"
      }
      ]
      const cards = content.map((each,index) => {
            return (
                  <div className="max-w-xs mx-auto overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800" key={index}>
                        <div className="px-4 py-2">
                              <h1 className="text-3xl font-bold text-gray-800 uppercase dark:text-white">{each.title}</h1>
                              <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">{each .info}</p>
                        </div>

                        <img className="object-cover w-full h-48 mt-2" src={each.image} alt="NIKE AIR"/>

                        <div className="flex items-center justify-between px-4 py-2 bg-gray-900">
                              <button className="px-2 py-1 text-xs font-semibold text-gray-900 uppercase transition-colors duration-200 transform bg-white rounded hover:bg-gray-200 focus:bg-gray-400 focus:outline-none"><a href={each.url}>Read</a></button>
                        </div>
                  </div>
            )
      })

      return (
            <div>
                  {cards}
            </div>
      )
}
