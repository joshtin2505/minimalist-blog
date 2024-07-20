import NavLayout from "@/layouts/NavLayout"
import React from "react"

function NotFound() {
  return (
    <NavLayout>
      <div className="notFoundContainer flex items-center justify-center flex-col">
        <div className="flex items-center">
          <h1 className="inline-block mr-5 pr-6 text-2xl font-medium border-r align-top leading-10">
            404
          </h1>
          <div className="inline-block">
            <h2 className="text-sm font-normal left-10 m-0">
              This page could not be found.
            </h2>
          </div>
        </div>
      </div>
      <style>
        {`
          .notFoundContainer {
            height: calc(100vh - 56px);
            }`}
      </style>
    </NavLayout>
  )
}

export default NotFound
