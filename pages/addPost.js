import React from 'react'

export default function addPost() {
      return (

    <section className="max-w-4xl p-6 mx-auto bg-white rounded-md shadow-md dark:bg-gray-800">
        <h2 className="text-lg font-semibold text-gray-700 capitalize dark:text-white">Account settings</h2>

        <form>
            <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                <div>
                    <label className="text-gray-700 dark:text-gray-200" for="username">Title</label>
                    <input id="title" type="text" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"/>
                </div>

                <div>
                    <label className="text-gray-700 dark:text-gray-200" for="emailAddress">Image</label>
                    <input id="image" type="email" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"/>
                </div>

                <div>
                    <label className="text-gray-700 dark:text-gray-200" for="password">Url</label>
                    <input id="url" type="password" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"/>
                </div>

                <div>
                    <label className="text-gray-700 dark:text-gray-200" for="passwordConfirmation">Info</label>
                    <input id="info" type="password" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"/>
                </div>
            </div>

            <div className="flex justify-end mt-6">
                <button className="px-6 py-2 leading-5 text-white transition-colors duration-200 transform bg-gray-700 rounded hover:bg-gray-600 focus:outline-none focus:bg-gray-600">Save</button>
            </div>
        </form>
    </section>
      )
}
