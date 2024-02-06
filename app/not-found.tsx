"use client"

import Router from "next/navigation"

function handleClick() {
    Router.redirect("/")
}

export default function NotFoundPage() {
    return(
        <div>
            <title>Not Found | Doge Clicker</title>
            <div className="flex flex-col w-full h-[88vh] bg-blue-600 items-center justify-center">
                <h1 className="text-2xl">Error 404 - Could Not Find The Page You're Looking For :/</h1>
                <button onClick={handleClick}>Home</button>
            </div>
        </div>
    )
}